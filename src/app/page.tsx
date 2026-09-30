import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3/section3";
import Section4 from "../../components/Section4";

export default function Home() {
  return (
    <main className="bg-[#071B2A]">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Contact />
      <Footer />

      {/* next section */}
    </main>
  );
}
