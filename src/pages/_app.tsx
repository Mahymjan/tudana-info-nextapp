import { AppProps } from 'next/app';
import {appWithI18Next, useSyncLanguage} from 'ni18n';
import {ni18nConfig} from '../../ni18n.config'
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const locale: any = typeof window !== 'undefined' && window.localStorage.getItem('language')
  useSyncLanguage(locale)
  return <Component {...pageProps} />
}

export default appWithI18Next(MyApp, ni18nConfig)
