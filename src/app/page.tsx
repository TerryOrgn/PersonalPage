import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
      <Hero {...SITE_DATA.hero} />
      <Quote text={SITE_DATA.quote} />
    </main>
  );
}
