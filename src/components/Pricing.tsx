import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

import { Container } from './Container'
import { Heading } from './Heading'

export const Pricing = () => {
  const [plansDetails] = useState([
    {
      title: 'free',
      monthlyPrice: 0,
      isPlanHighlight: false,
      benefits: [
        {
          name: '1 Instagram Business Account',
          isActive: true,
          isBenefitHighlight: true
        },
        {
          name: 'Auto Update',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Unlimited Galleries',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Multiple Layouts & Options',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Convert to AMP Format',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'API Access',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Team Sub-Accounts',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Advance Analytics',
          isActive: false,
          isBenefitHighlight: false
        }
      ]
    },
    {
      title: 'pro',
      monthlyPrice: 29,
      isPlanHighlight: true,
      benefits: [
        {
          name: '1 Instagram Business Account',
          isActive: true,
          isBenefitHighlight: true
        },
        {
          name: 'Auto Update',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Unlimited Galleries',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Multiple Layouts & Options',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Convert to AMP Format',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'API Access',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Team Sub-Accounts',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Advance Analytics',
          isActive: false,
          isBenefitHighlight: false
        }
      ]
    },
    {
      title: 'pro plus',
      monthlyPrice: 49,
      isPlanHighlight: false,
      benefits: [
        {
          name: '3 Instagram Business Account',
          isActive: true,
          isBenefitHighlight: true
        },
        {
          name: 'Auto Update',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Unlimited Galleries',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Multiple Layouts & Options',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Convert to AMP Format',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'API Access',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Team Sub-Accounts',
          isActive: false,
          isBenefitHighlight: false
        },
        {
          name: 'Advance Analytics',
          isActive: false,
          isBenefitHighlight: false
        }
      ]
    },
    {
      title: 'premium',
      monthlyPrice: 99,
      isPlanHighlight: false,
      benefits: [
        {
          name: '10 Instagram Business Account',
          isActive: true,
          isBenefitHighlight: true
        },
        {
          name: 'Auto Update',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Unlimited Galleries',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Multiple Layouts & Options',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Convert to AMP Format',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'API Access',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Team Sub-Accounts',
          isActive: true,
          isBenefitHighlight: false
        },
        {
          name: 'Advance Analytics',
          isActive: true,
          isBenefitHighlight: false
        }
      ]
    }
  ])

  return (
    <section className='bg-gray-150 py-20 md:py-[150px] px-10'>
      <Container className='flex flex-col items-center'>
        <div className='flex flex-col gap-5 mb-10 md:mb-20'>
          <Heading type='h2' className='text-center'>
            Try all EmbedStories features 7 days free.
          </Heading>

          <p className='text-2xl text-center'>
            Reach more with your Instagram stories.
          </p>
        </div>

        <div className='mb-10  md:mb-20 bg-white w-fit p-1 rounded border border-gray-350 flex gap-7'>
          <button className='bg-black text-white p-4 rounded'>
            Annualy, save 20%
          </button>
          <button className='text-gray-450 min-w-[80px] text-left'>
            Monthly
          </button>
        </div>

        <div className='lg:flex gap-10 lg:gap-2.5 grid md:grid-cols-2'>
          {plansDetails.map((currentPlan, index) => (
            <div
              key={index}
              className={`relative rounded-xl bg-white ${
                currentPlan.isPlanHighlight && 'mt-10 md:mt-0'
              }`}
            >
              {currentPlan.isPlanHighlight && (
                <p className='text-center absolute bottom-full w-full text-white text-sm leading-4 bg-primary p-3 rounded-t-xl'>
                  Most businesses start with {currentPlan.title.toUpperCase()}
                </p>
              )}

              <div
                className={`p-7 flex flex-col gap-6 md:gap-10  ${
                  currentPlan.isPlanHighlight &&
                  'border-4 rounded-xl border-primary border-t-0 rounded-t-none'
                }`}
              >
                <div className='flex gap-5 flex-col'>
                  <p className='font-roboto-700 uppercase text-xl md:text-2xl'>
                    {currentPlan.title}
                  </p>
                  <p className='text-lg'>
                    <span className='text-4xl md:text-5xl'>
                      ${currentPlan.monthlyPrice}
                    </span>
                    /month
                  </p>
                </div>

                {currentPlan?.benefits.length > 0 && (
                  <ul className='flex flex-col gap-1'>
                    {currentPlan.benefits.map(
                      (currentBenefit, benefitIndex) => (
                        <li
                          key={`benefit-${benefitIndex}`}
                          className={`
                      flex items-center gap-2.5
                      text-sm
                      md:text-base
                      ${
                        currentBenefit.isBenefitHighlight &&
                        'underline font-roboto-700'
                      }
                      ${
                        !currentBenefit.isActive && 'line-through text-gray-450'
                      }`}
                        >
                          <FaCheck />
                          {currentBenefit.name}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
