import { Button } from './Button'

import { FaArrowRightLong } from 'react-icons/fa6'

interface StartTrialButtonType {
  hasArrow?: boolean
  hasHover?: boolean
}

export const StartTrialButton: React.FC<StartTrialButtonType> = ({
  hasArrow = true,
  hasHover = true
}) => {
  return (
    <Button
      hasHover={hasHover}
      className='flex justify-center items-center gap-2.5 text-sm'
    >
      Start Free Trial
      {hasArrow && <FaArrowRightLong color='#fff' size={12} />}
    </Button>
  )
}
