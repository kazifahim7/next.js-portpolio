import FAQSection from "@/Components/Faq";
import Header from "@/Components/Header";
import SampleProject from "@/Components/SampleProject";
import Skill from "@/Components/Skill";
import Testimonials from "@/Components/Testimonials";
import Title from "@/Components/Title";
import WebDevFeatureSection from "@/Components/WebDeveloperFeture";


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
