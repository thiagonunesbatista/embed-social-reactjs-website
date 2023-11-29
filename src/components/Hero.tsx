import { Container } from './Container'
import { EmailTrialCTA } from './EmailTrialCTA'
import { Heading } from './Heading'

export const Hero = () => {
  return (
    <main className='bg-[#EEF1F7] pt-16 md:py-24 px-4 lg:px-0'>
      <Container className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center xl:flex-row'>
          <div className='max-w-3xl flex flex-col items-center xl:items-start'>
          <Heading type='h1' className='text-center font-roboto-900 max-w-6xl xl:text-left'>Display Instagram Stories on any website, <span className='text-4xl md:text-6xl font-roboto-900 bg-yellow-300'>in seconds.</span></Heading>
            <p className='text-lg font-roboto-400 max-w-xl my-4 mt-5 mb-12 text-center xl:text-left'>Display Instagram Stories Widget on your website, that auto-syncs, and updates each time you add a photo in your active story. </p>
            <div className='flex flex-col gap-5 w-full max-w-[406px]'>
              <EmailTrialCTA />
              <ul className='flex flex-col items-center sm:flex-row gap-4 list-disc list-inside '>
                <li>Free 7-day trial</li>
                <li>Easy setup</li>
                <li>Cancel any time</li>
              </ul>
            </div>
          </div>
          <img className='xl:max-w-lg my-8 w-fit-content' src="/src/assets/hero/collab_frame.png" alt="Stories in your Display" />
        </div>

        <div className='md:flex md:flex-col md:items-center'>
          <p className='font-roboto-500 text-lg text-gray-600 text-center'>Join 50.000+ websites that use EmbedSocial to sell more</p>
          <div className='flex flex-wrap justify-center gap-8 mt-4 xl:gap-11'>
            <img className='max-w-[120px] max-h-[36px]' src="/src/assets/hero/trust_brandings/cnn.png" alt="CNN" />
            <img className='max-w-[120px] max-h-[36px]' src="/src/assets/hero/trust_brandings/netgeo.png" alt="National Geographic" />
            <img className='max-w-[120px] h-fit' src="/src/assets/hero/trust_brandings/florencebymills-logo.png" alt="Florence" />
            <img className='max-w-[120px] h-fit' src="/src/assets/hero/trust_brandings/ancestry-logo.png" alt="Ancestry" />
            <img className='max-w-[120px] h-fit' src="/src/assets/hero/trust_brandings/industrious.png" alt="Industrious" />
            <img className='max-w-[120px] max-h-[36px]' src="/src/assets/hero/trust_brandings/nike.png" alt="Nike" />
          </div>
        </div>
      </Container>
    </main>
  )
}
