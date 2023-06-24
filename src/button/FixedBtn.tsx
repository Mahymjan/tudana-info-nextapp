import React, {useState} from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import berry from '../../public/assets/icons/nextPage.svg'
import { FormCommunicate } from '../templates/Form'

const FixedBtn = (({text} : any) => {
    const {t} = useTranslation()
    const [show, setShow] = useState(false)
    const showForm = (text: string) => {
      if (text === 'contacts') {
        setShow(true)
      }
    }
    return (
      <>
          <div onClick={() => showForm(text)} className='next-page flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <h5 className='text-red-500 font-bold text-center cursor-pointer'>{t(text)}</h5> 
              <Image src={berry} alt="" />
          </div>
          <div className='absolute bottom-0 right-0 md:right-40  p-4'>
            {
              text === 'contacts' && show ? 
              <FormCommunicate show={show} setShow={setShow}/> : ''
            }
          </div>
      </>
    )
})

export {FixedBtn}