import { useRouter } from 'next/router';
import {useTranslation} from 'next-i18next'

type AboutProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};



const About = (props: AboutProps) => {
  const router = useRouter();
  const {t} = useTranslation()
  const info = (
    <div className='flex w-full justify-between md:justify-start items-center space-x-0 md:space-x-10 divide-x-0 divide-red-500 md:divide-x mt-8 bg-pink mb-2 rounded-xl p-0 md:p-4 z-50'>
      <div className='text-center'>
        <h3 className='text-red-500 text-xl md:text-2xl font-bold'>500 +</h3>
        <span className='text-sm lg:text-lg'>{ t('customers')}</span>
      </div>
      <div className='text-center px-0 md:pl-10 md:px-1'>
          <h3 className='text-red-500 text-xl md:text-2xl font-bold'>100 +</h3>
          <span className='text-sm lg:text-lg'>{t('delivery')}</span>
      </div>
      <div className='text-center px-0 md:pl-10 md:px-1'>
          <h3 className='text-red-500 text-xl md:text-2xl font-bold'>4</h3>
          <span className='text-sm lg:text-lg'>{t('ratings')}</span>
      </div>
    </div>
  )

  return (
    <div className='flex flex-col md:flex-row-reverse flex-wrap items-center'>
      <div className="w-full lg:w-3/5 text-start lg:px-6">
        <p>{t('about')}</p>
        <h3 className="text-4xl text-gray-900 font-bold font-lobster mt-3">{props.title}</h3>
        <p className="mt-6 leading-9">{props.description}</p>
        <div className='hidden lg:block'>{info}</div>
      </div>
      <div className="w-full lg:w-2/5">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} className='mx-auto'/>
      </div>
      <div className='flex w-full lg:hidden'>{info}</div>
    </div>
  );
};

export { About };
