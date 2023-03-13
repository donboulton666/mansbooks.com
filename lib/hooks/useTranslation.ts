import { useRouter } from "next/router";
import i18n from "../i18n";

export const useTranslation = () => {
  const { locales = [], defaultLocale, ...nextRouter } = useRouter();
  const locale = locales.includes(nextRouter.locale || "")
    ? nextRouter.locale
    : defaultLocale;

  return {
    translate: (term) => {
      const translation = i18n[locale][term];

      return Boolean(translation) ? translation : term;
    },
  };
};
