import { FaPlay } from 'react-icons/fa'

import { Container } from './Container'
import { Heading } from './Heading'

import Person from '../assets/people/person-1.jpg'

export const SocialProof = () => {
  return (
    <section className='flex justify-center px-4 2xl:px-0'>
      <Container className='rounded-2xl bg-gray-850 flex flex-col lg:flex-row o gap-4 lg:gap-24 overflow-hidden lg:justify-between max-w-[1300px]'>
        <div className='pt-3 lg:py-6 px-6 lg:px-11 text-white max-w-[530px] lg:flex lg:justify-center lg:flex-col'>
          <Heading type='h2' className='text-white mb-5'>
            It was love at first story
          </Heading>

          <p className='mb-2.5 text-lg'>
            “Great plugin and amazing support. I trialed several plugins that
            try to accomplish the same thing. None of them did it as beautifully
            and as simple as EmbedStories”
          </p>

          <p>
            <span className='font-roboto-900'>Bertha Jo, </span>
            CEO at jacole
          </p>
        </div>

        <div className='relative w-full max-w-[640px] mx-auto flex items-center justify-center xl:mx-0 xl:justify-end xl:items-end'>
          <img src={Person} />

          <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <FaPlay color='#fff' size='60' />
          </button>
        </div>
      </Container>
    </section>
  )
}
