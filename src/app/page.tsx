import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Cases from "@/components/Cases";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
      <Hero {...SITE_DATA.hero} />
      <Quote text={SITE_DATA.quote} />
      <About text={SITE_DATA.about} />
      <Expertise items={SITE_DATA.expertise} />
      <Cases items={SITE_DATA.cases} />
      <Experience items={SITE_DATA.experience} />
    </main>
  );
}
