import Featured_Courses from "@/components/Featured_Courses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Music_School_Testimonial from "@/components/Music_School_Testimonial";
import Upcoming_Webinars from "@/components/Upcoming_Webinars";
import Why_Choose_Us from "@/components/Why_Choose_Us";



export default function Home() {
  return (
 <main className="min-h-screen bg-black ">
<HeroSection/>
<Featured_Courses/>
<Why_Choose_Us/>
<Music_School_Testimonial/>
<Upcoming_Webinars/>
<Instructors/>
<Footer/>
 </main>
  );
}
