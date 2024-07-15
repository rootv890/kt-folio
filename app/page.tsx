import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import SocialPresence from "@/components/SocialPresence";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primary ">
      <Header />
      <Main />
      <SocialPresence />
      <Projects />
      <Newsletter />
      <Footer />
    </main>
  );
}
