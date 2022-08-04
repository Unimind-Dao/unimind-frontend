import "react-i18next";

import common from "./public/locales/en/common.json";
import navigation from "./public/locales/en/navigation.json";
import hero from "./public/locales/en/hero.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      common: typeof common;
      navigation: typeof navigation;
      hero: typeof hero;
    };
  }
}
