import React, {useState} from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'next-i18next';


type CardProps = {
  imgUrl: StaticImageData,
  name: string,
  preparation: string
}
const Card = (props: CardProps) => {
    const [showPrepare, setShowPrepare] = useState(false);
    const { t } = useTranslation()
        return (
          <div className="mx-2 rounded-2xl overflow-hidden bg-white-500">
              <div className="relative">
                <div className={`${showPrepare ? 'opacity-25' : ''} w-full h-full object-cover`}>
                  <Image src={props.imgUrl} alt="Recipe image" />
                </div>
                <div className={`${showPrepare ? 'absolute left-0 top-5 text-start p-4' : 'hidden'}`}>
                    <h4 className='font-bold'>{t('ingredients')}:</h4>
                    <p>
                        {props.preparation}
                    </p>
                </div>
              </div>
              <div className='px-6 py-4 bg-white-500 text-start'>
                    <h4 className="font-semibold uppercase h-16 break-words text-start text-sm md:text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out">
                      {props.name}
                    </h4>
              </div>
              <div className="px-6 py-4 bg-white-500 rounded-b-xl">
                  <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <button className="w-full ml-1 border border-green-600 px-6 py-2 rounded hover:bg-green-600 hover:text-white-500 hover:transition hover:duration-500 hover:ease-in-out hover:scale-120" onClick={() => setShowPrepare(!showPrepare)}>{t('preparation')}</button></span>
              </div>
          </div>
        )
}

export {Card}