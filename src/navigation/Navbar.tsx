import { useState } from 'react';
import Image from 'next/image';
// import logo from '../../public/assets/icons/logo.svg'
import { RiMenu3Fill } from 'react-icons/ri'
import {Link} from 'react-scroll'
import { Section } from '../layout/Section';
import {useTranslation} from 'next-i18next'
import { LanguageDropdown } from '../dropdown/LanguageDropdown';

const navLinks = [
  {
    id: 1,
    name: 'home'
  },
  {
    id: 2,
    name: 'about'
  },
  {
    id: 3,
    name: 'products'
  },
  {
    id: 4,
    name: 'contacts'
  }

]

const Navbar = () => {
  const {t} = useTranslation()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home')
  return (
    <nav className="navbar fixed z-50 right-0  top-0 left-0 d-inline text-center py-4 bg-white-500">
      <Section yPadding='py-0'>
        <div className="flex flex-wrap justify-start lg:justify-between items-center">
        <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to='home'>
            <img src='assets/icons/logo.svg' alt='Navbar brand image' width={100}/>
          </Link>
          {/* <a href='http://tudana.com.tm:1001'>
            <img src='assets/icons/logo.svg' alt='Navbar brand image' width={100}/>
          </a> */}
          <button
            className=" cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <RiMenu3Fill size={24} color='red'/>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:mx-auto gap-4">
            {
              navLinks.map((navLink, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    onClick={() => {setNavbarOpen(!navbarOpen), setActiveLink(navLink.name)}}
                    to={navLink.name}
                    className={`${activeLink === navLink.name ? 'text-red-500' : ''} px-3 py-2 cursor-pointer flex text-lg items-center gap-1  leading-snug hover:transition hover:duration-300 hover:ease-linear`}>
                    {
                      activeLink === navLink.name ? 
                    <Image
                      src="/assets/images/berry.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    /> : null
                    }
                    <span className='pt-1' key={index}>{t(navLink.name)}</span> 
                  </Link>
                </li>
              ))
            }
        <div className='block lg:hidden'>
          <LanguageDropdown />
        </div>
        </ul> 
        </div>
        <div className='hidden lg:block'>
          <LanguageDropdown />
        </div>
      </div>
      </Section>
  </nav>
  )
}
  // const {logo, children} = props
    
    
  // <div className="fixed p-4 bg-white top-0 gap-56 flex flex-wrap justify-between items-center">
  //   <div>
  //     <Link href="/">
  //       <a>{props.logo}</a>
  //     </Link>
  //   </div>
  //   <nav>
  //     <div className="navbar font-medium text-xl text-gray-800">
  //       {props.children}
  //     </div>
  //   </nav>
  //   <div>{'en'}</div>

    {/* <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style> */}
  // </div>


export { Navbar };
