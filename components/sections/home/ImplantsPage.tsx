import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

export default function ImplantsPage() {
  return (
    <div className={`flex justify-center p-4 w-full ${montserrat.className}`}>
      <h2 className="text-xl text-center text-foreground max-w-2xl">
        Top Dental Implants Centers in NYC, NJ, Long Island & Bronxville
      </h2>
    </div>
  )
}
