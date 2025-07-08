import { useEffect, useState } from 'react';
import { IntlLocaleUiDataNames } from '../../../../ui-data';
import { pluginLogger } from '../../../../utils';
import { IntlMessages, UseLocaleMessagesProps } from './types';
import { fetchLocaleAndStore, mergeLocaleMessages } from './utils';

function useLocaleMessagesAuxiliary(
  { pluginApi, fetchConfigs }: UseLocaleMessagesProps,
): IntlMessages {
  const currentLocale = pluginApi.useUiData!(IntlLocaleUiDataNames.CURRENT_LOCALE, {
    locale: 'en',
    fallbackLocale: 'en',
  });

  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [fallbackMessages, setFallbackMessages] = useState<Record<string, string>>();

  useEffect(() => {
    if (pluginApi?.localesBaseUrl && currentLocale.locale) {
      const { localesBaseUrl } = pluginApi;
      const { locale, fallbackLocale } = currentLocale;
      const localeUrl = `${localesBaseUrl}/${locale}.json`;
      const fallbackLocaleUrl = `${localesBaseUrl}/${fallbackLocale}.json`;
      pluginLogger.info(`Fetching locale [${locale}] and fallback [${fallbackLocale}] for plugin [${pluginApi.pluginName}]`);
      const urlToFetchList = [
        fallbackLocaleUrl,
      ];
      if (locale !== fallbackLocale) urlToFetchList.push(localeUrl);
      Promise.all(urlToFetchList.map(async (url) => {
        if (url !== fallbackLocaleUrl || !fallbackMessages) {
          try {
            const a = await fetchLocaleAndStore(url, fetchConfigs);
            return a;
          } catch (err) {
            pluginLogger.error(
              `[${pluginApi.pluginName}] - Something went wrong while trying to fetch [${url}] or parse its result: `,
              err,
            );
            return Promise.resolve({});
          }
        }
        return Promise.resolve(fallbackMessages);
      })).then((values) => {
        const [desiredLocale, fallbackLocaleMessages] = values;
        setMessages(mergeLocaleMessages(desiredLocale, fallbackLocaleMessages));
        if (!fallbackMessages) setFallbackMessages(fallbackLocaleMessages);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [currentLocale]);
  return {
    messages,
    loading,
    currentLocale: currentLocale.locale,
  };
}

export default useLocaleMessagesAuxiliary;
