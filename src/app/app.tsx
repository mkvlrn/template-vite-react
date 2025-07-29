import { Logo } from "#/components/logo/logo";
import { Tagline } from "#/components/tagline/tagline";
import { Title } from "#/components/title/title";

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
