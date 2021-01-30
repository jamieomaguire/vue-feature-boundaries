<template>
  <!-- TODO: Wrap the slot in an error boundary to prevent slot errors from bubbling up -->
  <!-- TODO: if serverRendered is false (by default) then wrap slot in a client only wrapper to prevent SSR. This way SSR is opt in and new features don't bloat SSR times by default.-->
  <!-- TODO: Remove fake error boundary div -->
  <div data-error-boundary v-if="renderSlot">
    <template v-if="!serverRendered">
      <div data-client-only>
        <slot />
      </div>
    </template>
    <template v-if="serverRendered">
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  inject: ["flags"],
  props: {
    flag: {
      type: String,
      required: false
    },
    serverRendered: {
      type: Boolean,
      default: false
    },
    tier: {
      type: Number,
      required: true
    }
  },
  computed: {
    // a feature should render it's slot if no flag is provided. Otherwise let the flag determine whether or not to render
    renderSlot() {
      return this.flag ? this.flags[this.flag] : true;
    }
  },
  created() {
    console.log(this.serverRendered);
  }
};
</script>
