<template>
  <div>
    <!-- TODO: Wrap the slot in an error boundary to prevent slot errors from bubbling up -->
    <!-- TODO: if serverRendered is false (by default) then wrap slot in a client only wrapper to prevent SSR. This way SSR is opt in and new features don't bloat SSR times by default.-->
    <slot v-if="renderSlot" />
  </div>
</template>

<script>
export default {
  inject: ["flags"],
  props: {
    flag: {
      type: String,
      required: false,
      default: null
    },
    serverRendered: {
      type: Boolean,
      required: false,
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
  }
};
</script>
