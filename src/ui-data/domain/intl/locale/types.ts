import { IntlLocaleUiDataNames } from './enums';

export interface LocaleObject {
  locale: string;
  fallbackLocale: string;
}

export type IntlLocaleUiDataPayloads = {
  [IntlLocaleUiDataNames.CURRENT_LOCALE]: LocaleObject
};
