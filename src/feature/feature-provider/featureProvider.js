export default {
  props: {
    flags: {
      type: Object,
      required: true
    }
  },
  provide() {
    return {
      flags: this.flags
    };
  },
  render() {
    return this.$slots.default;
  }
};
