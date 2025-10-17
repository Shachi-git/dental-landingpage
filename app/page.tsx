import AffiliationsScroller from '@/components/sections/home/AffiliationPage'
import AppointmentSection from '@/components/sections/home/AppointmentSection'
import ImplantsPage from '@/components/sections/home/ImplantsPage'
import Infos from '@/components/sections/home/Infos'
import BlogSection from '@/components/sections/home/OurBlog'
import Questions from '@/components/sections/home/Questions'
import Reasons from '@/components/sections/home/Reason'
import TestimonialsSlider from '@/components/sections/home/Testimonial'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <AppointmentSection />
      <ImplantsPage />
      <Infos />
      <Reasons />
      <Questions />
      <TestimonialsSlider />
      <BlogSection />
      <AffiliationsScroller />
    </main>
  )
}
