import React from 'react'
import Image from 'next/image'
import { Section } from '../layout/Section'
import { useTranslation } from 'next-i18next'
import halkmarket from '../../public/assets/icons/halkmarket.png'
import sherbet from '../../public/assets/icons/sherbet.png'
import ynamdar from '../../public/assets/icons/ynamdar.png'
import kamil from '../../public/assets/icons/kamil.png'
import mado from '../../public/assets/icons/mado.png'

const Partners = () => {
    const {t} = useTranslation()
    return (
        <Section>
            <div className='partners pb-24'>
                <h4 className='text-4xl text-center'>{t('our_parnters')}</h4>
                <div className='flex justify-center gap-6 flex-wrap md:flex-nowrap pt-10'>
                    <Image src={ynamdar} alt='Ynamdar' />
                    <Image src={halkmarket} alt='Halkmarket' />
                    <Image src={mado} alt='mado' />
                    <Image src={sherbet} alt='Sherbet' />
                    <Image src={kamil} alt='Kamil' />
                </div>
            </div>
        </Section>
    )
}

export  {Partners}