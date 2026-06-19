import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
      <Hero {...SITE_DATA.hero} />
      <Quote text={SITE_DATA.quote} />
      <About paragraphs={SITE_DATA.about} />
      <Skills categories={SITE_DATA.skills} />
      <Projects items={SITE_DATA.projects} />
      <Experience items={SITE_DATA.experience} />
      <Education item={SITE_DATA.education} />
      <Contact
        email={SITE_DATA.contact.email}
        linkedin={SITE_DATA.contact.linkedin}
        wechat={SITE_DATA.contact.wechat}
      />
      <Footer
        socialLinks={SITE_DATA.footer.socialLinks}
        copyright={SITE_DATA.footer.copyright}
      />
    </main>
  );
}
