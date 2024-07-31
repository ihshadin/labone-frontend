import HeroSection from "@/components/HomePage/HeroSection";
import Schedules from "@/components/HomePage/Schedules";
import AppointmentForm from "@/utils/AppointmentForm";
import LiveTimer from "@/utils/LiveTimer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-[1250px] px-2 py-10 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 my-10 rounded-xl">
            <div className=" text-center">
              <h2 className="text-primary text-2xl font-semibold">
                Appointment Form
              </h2>
              <p className="text-sm font-medium font-tiroBangla mt-2">
                ফর্ম পূরনে সমস্যা হলে আপনি সরাসরি কল দিয়েও আপনার এপোয়েন্টমেন্ট
                বুক করতে পারবেন
              </p>
            </div>
            <div className="mt-4 md:mt-5">
              <AppointmentForm />
            </div>
          </div>
          <div className="bg-white/30 bg-blend-color-burn border p-3 md:p-5 my-10 rounded-xl">
            <div className="flex items-center justify-between mb-8 ">
              <h2 className="text-primary text-2xl font-semibold">
                Today&apos;s schedule
              </h2>
              <LiveTimer />
            </div>
            <div className="mt-4 md:mt-5">
              <Schedules />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
