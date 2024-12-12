import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { Section } from "@/components/Main/Section";
import { Section1 } from "@/components/Main/Section1";
import { Section2 } from "@/components/Main/Section2";
import { Section4 } from "@/components/Main/Section4";
import { Section5 } from "@/components/Main/Section5";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <main className="relative h-[470vh] lg:[400vh]">
        <Section />
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </>
  );
}
