import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { Section, Section1, Section2, Section4, Section5 } from "../components/Main/Main2";

export default function Home() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <Main/>
    <main className="relative h-[470vh] lg:[400vh]">
      <Section/>
        <Section1 />
        <Section2/>
        <Section4 />
        <Section5 />
      </main>
      
    <Footer/>
    </>
  );
}
