import {useTranslation} from  'next-i18next'
import Image from 'next/image'
import rightImg from '../../public/assets/images/colRight.png'
import collective from '../../public/assets/images/collective.png'

const OurTeam = () => {
  const {t} = useTranslation()
  return (
    <div className='relative flex justify-start gap-4 flex-col-reverse lg:flex-row items-center py-16 md:pr-0' id='team'>
        <div className=''>
          <Image src={collective} alt="" className=' md:pr-4 pr-6'/>
        </div>
        <div className='mt-8 p-10 pt-0 md:pl-0 text-center md:text-start md:pr-36'>
          <h1 className='text-4xl font-bold text-center md:text-left mx-auto'>{ t('collective_header_txt')}</h1>
          <p className='pt-8 w-full md:w-2/3'>{t('collective_slogan')}</p>
        </div>
        <div className='absolute right-0 bottom-0 mt-11 md:block hidden'>
            <Image src={rightImg} alt=""/>
        </div>
    </div>
  )
}

export {OurTeam}