import React from 'react'
import {useTranslation} from 'next-i18next'
import details from '../../public/details/details'
import { Section } from '../layout/Section'
import Image from 'next/image';



const DetailsSection = () => {
  const {t, i18n} = useTranslation()
  const txtIndex : any = i18n.language
    return (
        <Section>
          <h1 className='text-center tracking-wide md:text-5xl text-3xl' id='features'>{ t('feature')}</h1>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-8 gap-y-4 lg:grid-cols-4 place-items-center mt-10'>
              {
                details.details.map((detail : any, index: number) => {
                    return (
                        <div className='flex flex-row items-center sm:grid sm:grid-rows-2 gap-2 ' key={index}>
                            <Image
                                src={detail.url}
                                alt="Picture of the detail"
                                className='m-auto'
                                loading='lazy'
                              />
                            <span className='w-60 text-start md:text-center px-2 text-sm py-2'>{detail.txt[txtIndex]}</span>
                        </div>
                    )
                })
              }
          </div>
        </Section>
    )
}

export {DetailsSection}

// lg:grid-col-3 md:grid-cols-4 sm:grid-cols-2