import React, {useState} from 'react'
import Image from 'next/image'
import 'react-alice-carousel/lib/alice-carousel.css';
// import  { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
// import AliceCarousel from 'react-alice-carousel';
import { Section } from '../layout/Section';
import { useTranslation } from 'next-i18next';
import { bigImgs } from '../../public/JsonData/bouquetImgs';
import { smallImgs } from '../../public/JsonData/bouquetImgs';
import {RxCross2} from 'react-icons/rx'
import { SimpleSlider } from '../slider/Slider';


const Bouquets = () => {
    // const responsive = {
    //   0: { items: 1 },
    //   568: { items: 2},
    //   1024: { items: 3 },
    // };
    const { t } = useTranslation()
    const [model, setModel] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const getImg = (imgIndex: number) => {
      setModel(true)
      bigImgs.map((bigImg: any, index: number) => {
        if (imgIndex === index) setImgSrc(bigImg.url)
      })
    }
    const handleDragStart = (e : any) => e.preventDefault();
    const items = smallImgs.map((smallImg: any, index: number) => (
      <div className='w-full cursor-pointer' key={index}>
        <Image
          key={smallImg.id}
          className='rounded-2xl mx-auto'
          onDragStart={handleDragStart}
          role="presentation"
          src={smallImg.url}
          alt='Bouquets carousel item'
          onClick={() => getImg(index)}
        />
      </div>
    ))
    
    return (
        <div className='relative bg-carousel-bg mx-auto py-14' id='bouquets'>
          {
            model ? 
            <div className='fixed w-full h-full top-0 left-0 bg-gray-300 z-50 bg-slate-900 flex justify-center'>
              <div className='absolute right-0 text-white-500 p-10 cursor-pointer' onClick={() => setModel(false)}><RxCross2 size={32}/></div>
              <div className='relative rounded-2xl mx-auto w-96 inset-y-16'>
                <Image src={imgSrc}  alt='Modal image' style={{borderRadius: '15px'}}/>
              </div>
            </div> : ''
          }
            <h1 className='font-bold font-lobster px-10 text-3xl md:text-5xl text-center'>{t('bouquets')}</h1>
            <p className='text-center pt-5 px-10 pb-14 w-full md:w-1/2 mx-auto'>{ t('bouquets_txt')}</p>
              <Section yPadding='py-0'>
                <SimpleSlider data={items} />
                {/* <AliceCarousel
                    mouseTracking
                    infinite
                    items={items}
                    autoWidth={false}
                    autoPlay={false}
                    responsive={responsive}
                    autoPlayInterval={3000}
                    disableDotsControls
                    renderPrevButton={() => {
                        return <div className="flex border border-red-600 top-[40%] -left-[5%] justify-center text-center py-2 w-12 h-12 bg-white-500 rounded-full absolute cursor-pointer"><MdNavigateBefore size={36} color='red'  className='pb-1' /></div>
                    }}
                    renderNextButton={() => {
                        return <p className="flex border border-red-600 top-[40%] -right-[5%] justify-center text-center py-2 w-12 h-12 bg-white-500 rounded-full absolute cursor-pointer"><MdNavigateNext size={36} color='red' className='pb-1'/></p>
                    }}
                /> */}
              </Section>
        </div>
    )
}


export {Bouquets}