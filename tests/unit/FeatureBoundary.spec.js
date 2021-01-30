import { shallowMount } from "@vue/test-utils";
import FeatureBoundary from "../../src/feature/feature-boundary/FeatureBoundary";

const createWrapper = shallowMountConfig =>
  shallowMount(FeatureBoundary, {
    ...shallowMountConfig
  });

describe("FeatureBoundary component", () => {
  it("renders the slot if no feature flag is provided", () => {
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: true
        }
      },
      propsData: {
        tier: 1
      },
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.html()).toContain(slotContent);
  });

  it("renders the slot if the feature flag is enabled", () => {
    const featureFlag = "foo";
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: true
        }
      },
      propsData: {
        tier: 1,
        flag: featureFlag
      },
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.html()).toContain(slotContent);
  });

  it("does not render the slot if the feature flag is not enabled", () => {
    const featureFlag = "foo";
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: false
        }
      },
      propsData: {
        tier: 1,
        flag: featureFlag
      },
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.html()).not.toContain(slotContent);
  });

  // TODO: look for a real error boundary once one is added
  it("renders slot within an error boundary", () => {
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: false
        }
      },
      propsData: {
        tier: 1
      },
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.find("[data-error-boundary]").text()).toContain(slotContent);
  });

  // TODO: look for a real client only wrapper once one is added
  it("renders slot within a client-only wrapper if serverRendered is false", () => {
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: false
        }
      },
      propsData: {
        tier: 1,
        serverRendered: false
      },
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.find("[data-client-only]").text()).toContain(slotContent);
  });

  it("does not render slot in a client-only wrapper if serverRendered is true", () => {
    const slotContent = "bar";

    const wrapper = createWrapper({
      provide: {
        flags: {
          foo: false
        }
      },
      propsData: {
        tier: 1,
        serverRendered: true
      },
      slots: {
        default: slotContent
      }
    });
    expect(wrapper.html()).not.toContain("data-client-only");
    expect(wrapper.html()).toContain(slotContent);
  });
});
