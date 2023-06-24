import React from 'react'
import Image from 'next/image'
import { Section } from '../layout/Section';
import { useTranslation } from 'next-i18next';
import benefits from '../../public/JsonData/strawberry_benefits'
import berryEn from '../../public/assets/images/berry_en.png'
import berryRu from '../../public/assets/images/berry_ru.png'
import berryTm from '../../public/assets/images/berry_tm.png'
import berry from '../../public/assets/images/centerImg.png'

const StrawberryBenefits = () => {
    const { t, i18n } = useTranslation()
    const lang : any = i18n.language
    return (
      <Section>
              <div className='relative' id='benefits'>
                <h1 className='font-bold font-body text-3xl md:text-4xl text-center pb-10'>{t('benefits')}</h1>
                <div className='mx-auto max-w-screen-sm'>
                  <Image src={i18n.language === 'tm' ? berryTm : i18n.language === 'en' ? berryEn : berryRu} alt="image" priority />
                </div>
                 <div className='strawberry-comments flex justify-center flex-col sm:flex-row items-center gap-8 py-14 mx-auto'>
                    <div className='left-section'>
                        {
                          benefits[0]?.map((benefit : any, index: number) => (
                            <div className='my-6 flex justify-center gap-4 items-center w-64 h-16 text-center text-sm p-2 rounded-lg bg-green-600  hover:text-green-600 hover:bg-gray text-white-500' key={index}>
                              {benefit[lang]}
                            </div>
                          ))
                        }
                    </div>
                    <div className='image'>
                        <Image src={berry} alt="Center image"/>
                    </div>
                    <div className='right-section'>
                      {
                        benefits[1]?.map((benefit: any, index: number) => (
                                <div key={index} className='my-6 flex justify-center gap-4 items-center w-64 h-16 text-center text-sm p-2 rounded-lg bg-green-600  hover:text-green-600 hover:bg-gray text-white-500'>
                                    {benefit[lang]}
                                </div>
                            )
                        )
                      }
                    </div>
                </div>
        </div>
      </Section>
    )
}

export {StrawberryBenefits}