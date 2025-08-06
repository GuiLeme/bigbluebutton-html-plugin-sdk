import { useEffect, useState } from 'react';
import { pluginLogger } from '../../../../utils';
import { IntlMessages, UseLocaleMessagesProps } from './types';
import { fetchLocaleAndStore, mergeLocaleMessages, useGetNormalizedLocale } from './utils';

function useLocaleMessagesAuxiliary(
  { pluginApi, fetchConfigs }: UseLocaleMessagesProps,
): IntlMessages {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [fallbackMessages, setFallbackMessages] = useState<Record<string, string>>();
  const localeDataWrapper = useGetNormalizedLocale({ pluginApi, fetchConfigs });

  const { data: currentLocale } = localeDataWrapper;

  useEffect(() => {
    if (pluginApi?.localesBaseUrl && !localeDataWrapper.loading) {
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
            return await fetchLocaleAndStore(url, fetchConfigs);
          } catch (err) {
            pluginLogger.error(
              `[${pluginApi.pluginName}] - Something went wrong while trying to fetch [${url}] or parse its result: `,
              err,
            );
            return Promise.resolve({});
          }
        }
        // The first of the list is the fallback
        return Promise.resolve(fallbackMessages);
      })).then((values) => {
        const [fallbackLocaleMessages, desiredLocaleMessages] = values;
        setMessages(mergeLocaleMessages(desiredLocaleMessages, fallbackLocaleMessages));
        if (!fallbackMessages) setFallbackMessages(fallbackLocaleMessages);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [localeDataWrapper]);
  return {
    messages,
    loading,
    currentLocale: currentLocale.locale,
  };
}

export default useLocaleMessagesAuxiliary;
