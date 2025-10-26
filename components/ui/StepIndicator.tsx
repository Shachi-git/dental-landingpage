'use client'

import React from 'react'
import cn from 'classnames'

interface StepIndicatorProps {
  currentStep: number
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
}) => {
  const steps = [1, 2, 3]

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              'w-5 h-5 flex items-center justify-center border text-xs',
              {
                'bg-[#0085cc] text-white border-[#0085cc]': step <= currentStep,
                'bg-white text-foreground border-gray-400': step > currentStep,
              }
            )}
          >
            {step}
          </div>

          {index < steps.length - 1 && (
            <div
              className={cn('h-1 w-25 md:w-30 lg:w-40', {
                'bg-[#0085cc]': step < currentStep,
                'bg-gray-400': step >= currentStep,
              })}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
