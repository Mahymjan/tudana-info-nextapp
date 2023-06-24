const supportedLngs = ['tm', 'ru', 'en']

const ni18nConfig = {
  fallbackLng: supportedLngs,
  supportedLngs,
  ns: ['translation'],
  react: {
    useSuspense: false,
  },
}

export {ni18nConfig}