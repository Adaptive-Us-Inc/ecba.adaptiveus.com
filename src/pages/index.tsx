import Banner from "@/components/Home/Banner";
import ExamEligible from "@/components/Home/ExamEligible";
import OverView from "@/components/Home/OverView";
import Syllabus from "@/components/Home/Syllabus";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import CoursePricePlan from "@/components/Home/CoursePricePlan";
import NavBar from "@/components/Navbar/NavBar";
import StickyNavBar from "@/components/Navbar/StickyNavBar";
import Sticky from "@/components/others/Sticky";
import Reviews from "@/components/Home/Reviews";
import Trainers from "@/components/Home/Trainers";
import Faq from "@/components/Home/Faq";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
      <title>New CBAP Certification Form Submission For Enquiry</title>
                <meta name="title" content={'CBAP Certification Training'} />
                <meta name='robots' content={'noindex,nofollow'} />
      </Head>
      <NavBar />
      <Banner />
      <StickyNavBar />
      <OverView />
      <WhyChooseUs />
      <Syllabus />
      <CoursePricePlan />
      <ExamEligible />
      <Reviews />
      <Trainers />
      <Faq />
      <Sticky />
    </>
  );
}
