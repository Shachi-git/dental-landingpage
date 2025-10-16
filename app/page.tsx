import AppointmentSection from "@/components/sections/home/AppointmentSection";
import ImplantsPage from "@/components/sections/home/ImplantsPage";
import Infos from "@/components/sections/home/Infos";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <AppointmentSection />
      <ImplantsPage />
      <Infos />
    </main>
  );
}
