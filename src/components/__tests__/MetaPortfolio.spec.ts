import { describe, it, expect } from "vitest";

import { mount, config } from "@vue/test-utils";
import MetaPortfolio from "../MetaPortfolio.vue";

describe("MetaPortfolio", () => {
  it("renders properly", () => {
    // mocks $t vue-i18n translation method
    config.global.mocks = {
      $t: (tKey: string) => tKey,
    };

    const wrapper = mount(MetaPortfolio, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Vite");
  });
});
