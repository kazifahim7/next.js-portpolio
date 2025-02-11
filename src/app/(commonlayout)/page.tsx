import FAQSection from "@/Components/Faq";
import Header from "@/Components/Header";
import SampleProject from "@/Components/SampleProject";
import Skill from "@/Components/Skill";
import Testimonials from "@/Components/Testimonials";
import Title from "@/Components/Title";
import WebDevFeatureSection from "@/Components/WebDeveloperFeture";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DevFahim | Home",
  description: "This is me, Kazi Fahim. I am a MERN stack developer.",
};

export default function Home() {
  return (

      <div className="bg-white dark:bg-gray-900">
        <Header></Header>
        <Title></Title>
        <Skill></Skill>
        <SampleProject></SampleProject>
        <WebDevFeatureSection></WebDevFeatureSection>
        <Testimonials></Testimonials>
        <FAQSection></FAQSection>
    </div>
   
 
  );
}
