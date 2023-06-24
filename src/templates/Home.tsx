import {useEffect, useState} from 'react'
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Link } from 'react-scroll';
import {FiMail} from 'react-icons/fi'
import {useTranslation} from 'next-i18next'
import {BsInstagram, BsTelephone} from 'react-icons/bs'
import Image from 'next/image';
import sections from '../../public/JsonData/sections';
import bouquet from '../../public/assets/icons/bouqet.svg'
import mainImg from '../../public/assets/images/navBerry.png'
import player from '../../public/assets/icons/Player.svg'
import { FixedBtn } from '../button/FixedBtn';



const Home = () => {
  const {t} = useTranslation()
  const [btnText, setBtnText] = useState('home')
  const [nextSection, setNextSection] = useState<any>('about')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      sections.map((section, index) => {
        const elem : any = document.querySelector(`#${section}`);
        const position : any = elem?.getBoundingClientRect();
        if(position) {
          if (position.top <  window.innerHeight + 300) {
            setBtnText(section)
            if (index) {
              if (index < sections.length - 1) {
                setNextSection(sections[index+1])
              }
            } 
          }
        }
      })
    })
  }, []);


  return (
    <Background color="bg-white">
      <Section yPadding="py-6">
          <div className='relative pt-14 mx-auto flex flex-col-reverse justify-between  lg:flex-row pb-24 md:pb-8 w-full'  id='home'>
            <div className='mt-14'>
                <h1 className='font-lobster text-center text-4xl lg:text-start md:text-5xl '><span className='text-red-500'>{t('sagdyn')}</span> <span className='text-green-500'>{t('lezzet')}</span></h1>
                <div className='lg:w-80 md:w-auto w-80 '> 
                    <p className="text-grey-900 text-lg text-center mt-6 mx-auto lg:text-start">
                        {t('home_def')}
                    </p>
                </div>
                <div className='flex items-center lg:justify-start justify-center my-14 gap-5  w-full'>
                    <Link to='video-section'>
                        <button className='flex items-center' >
                          <Image src={player} alt="image" width={60} height={60}/> 
                          <span className='text-red-500 md:text-xl text-sm w-full font-bold'>{ t('wideo')}</span>
                        </button>
                    </Link>
                </div>
                <h5 className='pb-4 text-xl'>{t('contacts')}:</h5>
                <div className='flex flex-row lg:flex-col justify-center md:justify-start flex-wrap gap-4 mt-5'>
                  <div className='flex gap-4 flex-wrap'>
                    <div className='relative flex items-center gap-2 p-3 rounded-full lg:rounded-lg bg-pink-300 hover:transition hover:duration-300'>
                        <FiMail size={24} color='#FD2831'/>
                      <span className='hidden lg:block'><a href='mailto: hilligaplama.assist@gmail.com'>tudana.tm@gmail.com</a></span> 
                    </div>
                    <div className='relative flex items-center gap-2 p-3 rounded-full lg:rounded-lg bg-pink-300 hover:transition hover:duration-300'>
                        <BsInstagram size={24} color='#FD2831'/>
                        <span className='hidden lg:block'><a href="https://www.instagram.com/@tudanatm" target="_blank">@tudanatm</a></span>
                    </div>
                  </div>
                  <div className='flex gap-4 flex-wrap'>
                    <div className='relative flex items-center gap-2 p-3 rounded-full lg:rounded-lg bg-pink-300 hover:transition hover:duration-300'>
                        <BsTelephone size={24} color='#FD2831'/>
                        <span className='hidden lg:block' itemProp='telephone'> <a href="tel:+99363935225">+99363935225</a></span>
                    </div>
                    <div className='relative flex items-center gap-2 p-3 rounded-full lg:rounded-lg bg-pink-300 hover:transition hover:duration-300'>
                        <Image src={bouquet} alt="image" width={26} height={26}/>
                        <span className='hidden lg:block' itemProp='telephone'> <a href="tel:+99361767336">+99361041376 / 77</a> </span>
                    </div>
                  </div>
                    
                </div>
            </div>
            <div className='image-content pb-0 mx-auto'>
              <Image src={mainImg} alt="image" priority={true}/>
            </div>
            <div className='fixed bottom-4 right-10 z-50'>
              <Link to={nextSection}>
                <FixedBtn text={btnText}/>
              </Link>
            </div>
          </div>
        </Section>
    </Background>
  );
};

export {Home}