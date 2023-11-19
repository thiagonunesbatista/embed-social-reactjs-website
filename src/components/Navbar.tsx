import { FaBarsStaggered } from 'react-icons/fa6'
import { useState } from 'react'

import { Container } from './Container'
import { StartTrialButton } from './StartTrialButton'

import Logo from '../assets/branding/logo.png'

export const Navbar = () => {
  const [navbarLinks] = useState([
    {
      title: 'Platform',
      url: '#'
    },
    {
      title: 'Widgets',
      url: '#'
    },
    {
      title: 'Templates',
      url: '#'
    },
    {
      title: 'Pricing',
      url: '#'
    }
  ])

  return (
    <nav className='sticky top-0 bg-white shadow-md z-[1000]'>
      <Container className='flex justify-between items-center p-2.5 gap-7 2xl:px-0'>
        <div className='flex gap-2.5 items-center'>
          <img src={Logo} alt='logo do Embedsocial' width={40} />
          <p className='font-roboto-900 text-lg'>embedsocial</p>
        </div>

        <ul className='hidden md:flex md:gap-4 lg:gap-8'>
          {navbarLinks.map((currentLink, index) => (
            <li key={index} className='hover:scale-110 transition-transform'>
              <a href={currentLink.url}>{currentLink.title}</a>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex gap-5 items-center'>
          <a href='#' className='hover:scale-110 transition-transform'>
            Login
          </a>

          <StartTrialButton hasArrow={false} />
        </div>

        <button className='md:hidden'>
          <FaBarsStaggered size={24} />
        </button>
      </Container>
    </nav>
  )
}
