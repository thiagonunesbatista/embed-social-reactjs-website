import { Container } from './Container'
import { EmailTrialCTA } from './EmailTrialCTA'
import { Heading } from './Heading'

export const EmailCapture = () => {
  return (
    <section className='bg-gray-150 py-16 md:py-24 px-4 lg:px-0'>
      <Container className='flex flex-col items-center'>
        <div className='flex flex-col  gap-3 md:gap-5 mb-8  md:mb-12 w-full max-w-[644px]'>
          <Heading type='h2' className='text-center font-roboto-900'>
            Ready to dive in?
            <br />
            Create your widget today.
          </Heading>

          <p className='text-center text-black text-lg leading-6'>
            Display Instagram Stories Widget on your website, that auto-syncs,
            and updates each time you add a photo in your active story.
          </p>
        </div>

        <div className='flex flex-col gap-5 w-full max-w-[406px]'>
          <EmailTrialCTA />

          <ul className='flex flex-col items-center sm:flex-row gap-4 list-disc list-inside '>
            <li>Free 7-day trial</li>
            <li>Easy setup</li>
            <li>Cancel any time</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
