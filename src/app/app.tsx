import { Logo } from "~/components/logo/logo.js";
import { Tagline } from "~/components/tagline/tagline.js";
import { Title } from "~/components/title/title.js";

export function App() {
  return (
    <main className="flex h-screen bg-background font-roboto-condensed text-foreground">
      <div className="m-auto">
        <Title />
        <Tagline />
        <Logo />
      </div>
    </main>
  );
}
