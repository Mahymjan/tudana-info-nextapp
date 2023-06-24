import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { useTranslation } from 'next-i18next';
// import { Link } from 'react-scroll'
import player from '../../public/assets/icons/Player.svg'
import GreenhouseGallery from '../gallery/GreenhouseGallery';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';


const VideoSection = () => {
    const { t } = useTranslation()
    return (
      <Background color='bg-pink-200'>
        <Section xPadding='px-0'>
          <div className='relative video-section' id='video'>
              <div className='flex gap-4 justify-center'>
                  <h1 className='text-center font-bold md:text-4xl text-2xl'>{ t('video_head')}</h1>
              </div>
              <div className='w-full md:w-1/2 h-80 flex justify-center player-wrapper relative rounded-xl items-center m-auto mt-12' >
                  <ReactPlayer
                      url='/assets/videos/Tudana.mp4'
                      width="100%"
                      playing
                      playIcon={<button><Image src={player} alt=""/></button>}
                      light='/assets/images/4.png'
                      // light={videoBg}
                      style={{borderRadius: '15px'}}
                      controls={true}
                  />
              </div>
              <div className='image-section py-10'>
                  <h1 className='font-lobster text-center md:text-5xl text-4xl tracking-wide mb-8'>{ t('our_greenhouse')}</h1>
                  <p className='mb-10 text-center text-lg w-full md:w-1/2 mx-auto'>{ t('def')}</p>
                  <GreenhouseGallery />
              </div>
          </div>
        </Section>

      </Background>
      
    )
}

export {VideoSection}
