'use client'

import React, { forwardRef } from 'react'
import cn from 'classnames'

type Option = {
  value: string
  label: string
}

type FormProps = {
  question: string
  required?: boolean
  type?:
    | 'text'
    | 'email'
    | 'url'
    | 'select'
    | 'textarea'
    | 'checkbox'
    | 'number'
    | 'radio'
  placeholder?: string
  id?: string
  options?: Option[]
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export const Form = forwardRef<HTMLDivElement, FormProps>(
  (
    {
      question,
      required = false,
      type = 'text',
      placeholder,
      id,
      options = [],
      value,
      onChange,
      error,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="w-full flex justify-center">
        <div className="w-full">
          <label
            className={cn(
              'font-medium text-foreground mb-2',
              type === 'checkbox' ? 'hidden' : 'block'
            )}
            htmlFor={id}
          >
            {question} {required && <span className="text-red-500">*</span>}
          </label>
          {type === 'radio' ? (
            <div className="flex mt-2 border rounded overflow-hidden w-fit">
              {options.map((opt, index) => {
                const isActive = value === opt.value
                const isFirst = index === 0
                const isLast = index === options.length - 1

                return (
                  <label
                    key={opt.value}
                    htmlFor={`${id}-${opt.value}`}
                    className={cn(
                      'cursor-pointer px-4 py-2 text-sm font-medium text-center transition-colors duration-200 border-r last:border-r-0',
                      isActive
                        ? 'default-bg-blue text-white'
                        : 'text-foreground hover:text-[#0085cc]',
                      isFirst && 'rounded-l',
                      isLast && 'rounded-r'
                    )}
                  >
                    <input
                      type="radio"
                      id={`${id}-${opt.value}`}
                      name={id}
                      value={opt.value}
                      checked={isActive}
                      onChange={(e) => onChange?.(e.target.value)}
                      className="hidden"
                    />
                    {opt.label}
                  </label>
                )
              })}
            </div>
          ) : type === 'checkbox' ? (
            <label className="inline-flex space-x-2 mt-2 text-foreground text-sm">
              <input
                type="checkbox"
                id={id}
                checked={value === 'true'}
                onChange={(e) =>
                  onChange?.(e.target.checked ? 'true' : 'false')
                }
                className="form-checkbox h-5 w-5 default-blue"
              />
              <span>
                {question}{' '}
                {required && (
                  <span className="text-red-500" aria-label="required">
                    *
                  </span>
                )}
              </span>
            </label>
          ) : type === 'select' ? (
            <select
              id={id}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            >
              <option value="">- Select -</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : type === 'number' ? (
            <input
              id={id}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full lg:w-1/2 border-b p-2 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                const numeric = e.target.value.replace(/\D/g, '')
                onChange?.(numeric)
              }}
            />
          ) : type === 'textarea' ? (
            <textarea
              id={id}
              className="w-full border border-gray-300 bg-white rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none align-top"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              rows={4}
            />
          ) : type === 'text' ? (
            <input
              id={id}
              type="text"
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          ) : (
            <input
              id={id}
              type={type}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          )}
          <div className="h-0">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>
      </div>
    )
  }
)

Form.displayName = 'Form'
