import { StartTrialButton } from './StartTrialButton'

export const EmailTrialCTA = () => {
  return (
    <div className='border-primary border-solid border-4 rounded-md flex w-full justify-between max-w-[406px] bg-white flex-col sm:flex-row'>
      <input
        type='email'
        placeholder='Enter your email...'
        className='outline-none py-3  md:py-4 px-3 bg-white text-gray-450 w-full max-w-[250px]'
      />
      <StartTrialButton />
    </div>
  )
}
