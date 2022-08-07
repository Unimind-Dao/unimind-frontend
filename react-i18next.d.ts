import "react-i18next";

import about from "./public/locales/en/about.json";
import common from "./public/locales/en/common.json";
import hero from "./public/locales/en/hero.json";
import joinUnimind from "./public/locales/en/join-unimind.json";
import meetUs from "./public/locales/en/meet-us.json";
import mission from "./public/locales/en/mission.json";
import navigation from "./public/locales/en/navigation.json";
import whatDrivesUs from "./public/locales/en/what-drives-us.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      navigation: typeof navigation;
      hero: typeof hero;
      about: typeof about;
      ["join-unimind"]: typeof joinUnimind;
      ["meet-us"]: typeof meetUs;
      mission: typeof mission;
      ["what-drives-us"]: typeof whatDrivesUs;
    };
  }
}
