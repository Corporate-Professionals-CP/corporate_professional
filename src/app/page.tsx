import CPheader from "@/components/CPheader";
import CPpartners from "@/components/CPpartners";
import ProfessionalTabs from "./__chucks__/ProfessionalTabs";
import NetWorking from "./__chucks__/Networking";
import WhyJoin from "./__chucks__/WhyJoin";
import Professional from "./__chucks__/Professional";
import Footer from "./__chucks__/Footer";
import Empowering from "./__chucks__/Empowering";
import SuccesfulCareer from "./__chucks__/SuccesfulCareer";
import Building from "./__chucks__/Building";
import FAQ from "./__chucks__/FAQ";
import Connect from "./__chucks__/Connect";
import TermsCondition from "./__chucks__/TermsCondition";

export default function Home() {
  return (
    <>
      <CPheader />
      <main>
        <Empowering />
        <CPpartners />
        <WhyJoin />
        <Connect />
        <NetWorking />
        <SuccesfulCareer />
        <TermsCondition />
        <ProfessionalTabs />
        <Professional />
        <Building />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
