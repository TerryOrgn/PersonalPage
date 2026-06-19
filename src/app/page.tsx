import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
    </main>
  );
}
