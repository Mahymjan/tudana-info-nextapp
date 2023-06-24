// import bgImg from '../../public/assets/images/footer1.jpg'
// import Image from 'next/image'
import {useTranslation} from 'next-i18next'

const OurMission = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-[url('/assets/images/footer1.jpg')] bg-center backdrop-blur-md bg-white/30  mission  relative w-full">
       <div className='flex flex-col justify-center backdrop-blur-sm bg-white/30 py-14'>
          <h4 className='font-lobster text-center md:text-4xl text-3xl pb-2 text-white-500'>{t('our_mission')}</h4>
          <p className='text-center md:w-3/4 w-full mx-auto text-xl md:text-2xl text-white-500'>{ t('footer_txt') }</p>
       </div>
    </div>
  )
}

export {OurMission}