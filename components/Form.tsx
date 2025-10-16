'use client'

import React, { useState, forwardRef } from 'react'
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
            <div className="space-y-2">
              {options.map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`${id}-${opt.value}`}
                    name={id}
                    aria-label={opt.value}
                    value={opt.value}
                    checked={value === opt.value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <label
                    htmlFor={`${id}-${opt.value}`}
                    className="text-foreground"
                  >
                    {opt.label}
                  </label>
                </div>
              ))}
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
                className="form-checkbox h-5 w-5 text-blue-600"
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
              <option value="">- Seclect -</option>
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
              className="w-full border border-gray-300 resize-x overflow-x-auto overflow-y-hidden  bg-white rounded-sm p-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          ) : type === 'text' ? (
            <input
              id={id}
              type="text"
              className="w-full border border-foreground p-3 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          ) : (
            <input
              id={id}
              type={type}
              className="w-full border border-foreground p-3 focus:outline-none focus:border-blue-500"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          )}

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>
    )
  }
)

Form.displayName = 'Form'
