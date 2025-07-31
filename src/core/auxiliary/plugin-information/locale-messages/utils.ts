import { useEffect, useState } from 'react';
import { DataWaitingWrapper, UseLocaleMessagesProps } from './types';
import { IntlLocaleUiDataNames } from '../../../../ui-data';
import { LocaleObject } from '../../../../ui-data/domain/intl/locale/types';

async function fetchLocaleAndStore(
  localeUrl: string,
  fetchConfigs?: RequestInit,
): Promise<Record<string, string>> {
  const result = await fetch(localeUrl, fetchConfigs);
  const localeMessages = await result.json();
  return localeMessages;
}

function mergeLocaleMessages(
  desiredMessages: Record<string, string>,
  fallbackMessages: Record<string, string>,
): Record<string, string> {
  return { ...fallbackMessages, ...desiredMessages };
}

function useGetLocalesIndex(
  localeUrl: string | undefined,
  fetchConfigs?: RequestInit,
): DataWaitingWrapper<string[]> {
  const [indexOfLocales, setIndexOfLocales] = useState<DataWaitingWrapper<string[]>>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (localeUrl || localeUrl !== '') {
      const indexUrl = `${localeUrl}/index.json`;
      fetch(indexUrl, fetchConfigs)
        .then((res) => res.json())
        .then((list: string[]) => {
          const filtered = list.filter((filename) => filename !== 'index.json');
          setIndexOfLocales({
            data: filtered,
            loading: false,
          });
        })
        .catch((error) => {
          setIndexOfLocales({
            data: [],
            loading: false,
            error,
          });
        });
    }
  }, [localeUrl]);

  return indexOfLocales;
}

function useGetNormalizedLocale(
  { pluginApi, fetchConfigs }: UseLocaleMessagesProps,
): DataWaitingWrapper<LocaleObject> {
  const localeFromUiData = pluginApi.useUiData!(IntlLocaleUiDataNames.CURRENT_LOCALE, {
    locale: 'en',
    fallbackLocale: 'en',
  });

  const [
    currentLocale,
    setCurrentLocale,
  ] = useState<DataWaitingWrapper<LocaleObject>>({
    data: localeFromUiData,
    loading: true,
  });

  const localesIndex = useGetLocalesIndex(
    pluginApi.localesBaseUrl,
    fetchConfigs,
  );

  useEffect(() => {
    if (!localesIndex.loading && !localesIndex.error) {
      const desiredLocale = localeFromUiData.locale.split(/[-_]/g);

      const usableLocales = localesIndex.data
        .map((file) => file.replace('.json', ''))
        .reduce((locales: string[], locale: string) => (locale.match(desiredLocale[0])
          ? [...locales, locale]
          : locales), []);

      const isDesiredLocalePresent = usableLocales.findIndex(
        (locale) => locale === localeFromUiData.locale,
      ) !== -1;

      if (isDesiredLocalePresent && localeFromUiData.locale !== currentLocale.data.locale) {
        setCurrentLocale({
          data: localeFromUiData,
          loading: false,
        });
      } else if (!isDesiredLocalePresent) {
        const regionDefault = usableLocales.find((locale) => locale === desiredLocale[0]);
        const localeFallback = regionDefault || usableLocales[0];
        setCurrentLocale({
          data: {
            ...localeFromUiData,
            locale: localeFallback,
          },
          loading: false,
        });
      }
    } else if (
      !localesIndex.loading
      && localeFromUiData.locale !== currentLocale.data.locale
    ) {
      setCurrentLocale({
        data: localeFromUiData,
        loading: false,
      });
    }
  }, [localeFromUiData, localesIndex]);
  return currentLocale;
}

export {
  fetchLocaleAndStore,
  mergeLocaleMessages,
  useGetLocalesIndex,
  useGetNormalizedLocale,
};
