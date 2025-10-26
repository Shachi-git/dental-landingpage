'use client'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { Montserrat } from 'next/font/google'
import { useMobileOrTablet } from '@/lib/useDevice'
import { useMobile } from '@/lib/useMobile'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const blogPosts = [
  {
    title: 'Dental Implants and Smoking: Risks, Effects, and Best Practices',
    date: 'July 7, 2024',
    image:
      '/blog/dental-implants-and-smoking-risks-effects-and-best-practices.webp',
    href: 'https://www.dentalimplantsusa.com/dental-implants-and-smoking-risks-effects-and-best-practices/',
  },
  {
    title:
      'Permanent Dentures vs. Dental Implants: Making the Right Choice for Your Smile',
    date: 'July 7, 2024',
    image:
      '/blog/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile.webp',
    href: 'https://www.dentalimplantsusa.com/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile/',
  },
  {
    title: 'Can You Get Dental Implants with Gum Disease?',
    date: 'July 7, 2024',
    image: '/blog/can-you-get-dental-implants-with-gum-disease.webp',
    href: 'https://www.dentalimplantsusa.com/can-you-get-dental-implants-with-gum-disease/',
  },
  {
    title:
      'Can Dental Implants Get Infected? Understanding Risks and Prevention',
    date: 'July 8, 2024',
    image:
      '/blog/can-dental-implants-get-infected-understanding-risks-and-prevention.webp',
    href: 'https://www.dentalimplantsusa.com/can-dental-implants-get-infected-understanding-risks-and-prevention/',
  },
]

export default function BlogSection() {
  const isMobileOrTablet = useMobileOrTablet()
  const isMobile = useMobile()
  return (
    <section
      className={cn(
        'flex flex-col items-center default-bg-gray',
        isMobile
          ? 'px-5 py-20'
          : isMobileOrTablet
          ? 'px-5 py-10'
          : 'py-20 px-35'
      )}
    >
      <h1
        className={cn(
          `text-center font-bold text-foreground max-w-2xl uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'text-4xl' : 'text-5xl'
        )}
      >
        Our Blog
      </h1>
      <h2 className="text-xl text-center sub-head max-w-2xl pb-4">
        Discover our blog posts and stay in touch with us!
      </h2>

      <hr className="my-1 w-full border-t" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 w-full">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${post.image}`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
              <h3
                className={cn(
                  `text-lg font-semibold text-foreground mb-2 ${montserrat.className}`
                )}
              >
                {post.title}
              </h3>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="https://www.dentalimplantsusa.com/blog/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 btn font-semibold px-6 py-2 transition-colors"
      >
        Show all posts
      </Link>
    </section>
  )
}
