import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/assets/meta-icons/tudana.png`}
          key="apple"
        />
        <link
          rel="icon"
          sizes="128x128"
          href={`${router.basePath}//assets/meta-icons/tudan128x128.ico`}
          key="icon128"
        />
        <link
          rel="icon"
          sizes="64x64"
          href={`${router.basePath}/assets/meta-icons/tudana64x64.ico`}
          key="icon64"
        />
        <link
          rel="icon"
          href={`${router.basePath}/assets/meta-icons/tudana.ico`}
          key="tudana"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
