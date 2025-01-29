import { Logo } from "~/components/logo";
import { Tagline } from "~/components/tagline";
import { Title } from "~/components/title";

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
