import {useState} from 'react'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'


const changeLanguage = (i18n: any, language: any) => {
  window.localStorage.setItem('language', language)
  i18n.changeLanguage(language)
}

const LanguageDropdown = () => {
  const languages = [
    {code: 'tm', translateKey: 'TM'},
    {code: 'ru', translateKey: 'RU'},
    {code: 'en', translateKey: 'EN'},
  ]
  const [openDropdown, setOpenDrowpdown] = useState(false)
  const { i18n } = useTranslation();
  const currentLan = i18n.language;

  return (
      <div className="relative inline-block text-left">
          <button type="button" onClick={() => {setOpenDrowpdown(!openDropdown)}} className="inline-flex w-20 justify-center items-center text-lg text-uppercase gap-x-2 rounded-md bg-white px-3 py-2 font-semibold text-gray-900  hover:bg-gray-50">
            <Image
              src={`/assets/icons/${currentLan}.svg`}
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <span className='uppercase'>{currentLan}</span> 
          </button>
        <div className={`${openDropdown ? 'block' : 'hidden '} absolute  right-0 z-50  bg-white mt-2 w-auto px-4 origin-top-right rounded-md shadow-xl focus:outline-none`} style={{backgroundColor: '#fff'}}>
              <div className="py-2 space-y-2 flex flex-col" role="none">
                {
                  languages.map((language, index) => (
                    <div className='flex items-center gap-2' key={index}>
                      <Image
                        src={`/assets/icons/${language.code}.svg`}
                        width={20}
                        height={20}
                        alt="Picture of the flag"
                      />
                      <span key={language.code} role='button' className='text-sm font-semibold text-gray-900' onClick={() => (
                            setOpenDrowpdown(false),
                            changeLanguage(i18n, language.code)
                        )} >{language.translateKey}</span>
                    </div>
                  ))
                }
              </div>
          </div>
      </div>
  )
}

export {LanguageDropdown}