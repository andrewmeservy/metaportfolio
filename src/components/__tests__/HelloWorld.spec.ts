import { describe, it, expect } from "vitest";

import { mount, config } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";


describe("HelloWorld", () => {
  it("renders properly", () => {
    // mocks $t vue-i18n translation method
    config.global.mocks = {
      $t: (tKey: any) => tKey
    };

    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
