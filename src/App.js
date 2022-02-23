import BlogsSection from "./components/BlogsSection/BlogsSection";
import ExpertSection from "./components/ExpertSection/ExpertSection";
import ExtraSection from "./components/ExtraSection/ExtraSection";
import FAQSection from "./components/FAQSection/FAQSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PharmacySection from "./components/PharmacySection/PharmacySection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import StepsSection from "./components/StepsSection/StepsSection";

const extraSectionProps = {
  aboutUs: {
    title: "About US",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    paragraphHeading: "",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "./assets/images/Group 3.png",
    buttonTitle: "Read More",
    buttonAction: () => {
      alert("About Us Section");
    },
    reverse: true,
  },
  video: {
    title: "Video Consultation from the Best doctors",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    paragraphHeading: "",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "./assets/images/video call image.png",
    buttonTitle: "Read More",
    buttonAction: () => {
      alert("Video Consultation Section");
    },
    reverse: false,
  },
  doctor: {
    title: "Are You a Qualified & Expert Doctor?",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    paragraphHeading: "Be a Part of TM",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "./assets/images/Group 27.png",
    buttonTitle: "Read More",
    buttonAction: () => {
      alert("Qualified Doctor Section Section");
    },
    reverse: false,
  },
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ExtraSection
        title={extraSectionProps.aboutUs.title}
        subtitle={extraSectionProps.aboutUs.subtitle}
        paragraph={extraSectionProps.aboutUs.paragraph}
        image={extraSectionProps.aboutUs.image}
        buttonTitle={extraSectionProps.aboutUs.buttonTitle}
        buttonAction={extraSectionProps.aboutUs.buttonAction}
        reverse={extraSectionProps.aboutUs.reverse}
      />
      <ExtraSection
        title={extraSectionProps.video.title}
        subtitle={extraSectionProps.video.subtitle}
        paragraph={extraSectionProps.video.paragraph}
        image={extraSectionProps.video.image}
        buttonTitle={extraSectionProps.video.buttonTitle}
        buttonAction={extraSectionProps.video.buttonAction}
        reverse={extraSectionProps.video.reverse}
      />
      <FeatureSection />
      <StepsSection />
      <PharmacySection />
      <ServiceSection />
      <ExpertSection />
      <ExtraSection
        title={extraSectionProps.doctor.title}
        subtitle={extraSectionProps.doctor.subtitle}
        paragraphHeading={extraSectionProps.doctor.paragraphHeading}
        paragraph={extraSectionProps.doctor.paragraph}
        image={extraSectionProps.doctor.image}
        buttonTitle={extraSectionProps.doctor.buttonTitle}
        buttonAction={extraSectionProps.doctor.buttonAction}
        reverse={extraSectionProps.doctor.reverse}
      />
      <FAQSection />
      <ReviewSection />
      <BlogsSection />
      <Footer />
    </div>
  );
}

export default App;
