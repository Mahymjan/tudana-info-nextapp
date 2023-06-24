import React from 'react'
import { useTranslation } from 'next-i18next';
import recipes from '../../public/JsonData/recipes'
import { Card } from '../card/Card';
import { Section } from '../layout/Section';
import { SimpleSlider } from '../slider/Slider';


const RecipesCarousel = () => {
    const { t, i18n } = useTranslation()
    const lang : any = i18n.language
    const items = recipes.map((item : any, index) => (
        <div key={index} className='max-w-xs mx-auto'>
            <Card imgUrl={item.image_name} name={item.recepts[lang]} preparation={item.preparation[lang]} key={item.id}/>
        </div>
    ))
    return (
        <div className='relative bg-carousel-bg py-14 px-10' id='recipes'>
            <h1 className='font-lobster font-body text-5xl text-center'>{t('recipes')}</h1>
            <p className='text-center pt-5 pb-24 w-full md:w-1/2 mx-auto'>{t('recipes_txt')}</p>
            <Section yPadding='py-0'>
              <SimpleSlider data={items} />
            </Section>
        </div>
    )
}


export {RecipesCarousel}
