'use client'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { Montserrat } from 'next/font/google'
import { useMobileOrTablet } from '@/lib/useDevice'

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
    href: '/blog/dental-implants-smoking',
  },
  {
    title:
      'Permanent Dentures vs. Dental Implants: Making the Right Choice for Your Smile',
    date: 'July 7, 2024',
    image:
      '/blog/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile.webp',
    href: '/blog/dentures-vs-implants',
  },
  {
    title: 'Can You Get Dental Implants with Gum Disease?',
    date: 'July 7, 2024',
    image: '/blog/can-you-get-dental-implants-with-gum-disease.webp',
    href: '/blog/implants-gum-disease',
  },
  {
    title:
      'Can Dental Implants Get Infected? Understanding Risks and Prevention',
    date: 'July 8, 2024',
    image:
      '/blog/can-dental-implants-get-infected-understanding-risks-and-prevention.webp',
    href: '/blog/implants-infection',
  },
]

export default function BlogSection() {
  const isMobileOrTablet = useMobileOrTablet()

  return (
    <section className="w-full flex flex-col default-bg-gray items-center pt-5 pb-12 px-4 sm:px-6 lg:px-8">
      <h1
        className={cn(
          `text-center font-bold text-foreground max-w-2xl p-6 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'p-4 pt-5 text-4xl' : 'text-5xl'
        )}
      >
        Our Blog
      </h1>
      <h2 className="text-xl text-center text-foreground max-w-2xl pb-4">
        Discover our blog posts and stay in touch with us!
      </h2>
      <hr className="my-1 border-t border-foreground w-3/4 mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.href}
            className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                //src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${post.image}`}
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
        href="/blog"
        className="mt-10 btn font-semibold px-6 py-2 transition-colors"
      >
        Show all posts
      </Link>
    </section>
  )
}
