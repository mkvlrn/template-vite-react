import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "#components/logo/logo";
import { Tagline } from "#components/tagline/tagline";
import { Title } from "#components/title/title";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="m-auto">
      <Title />
      <Tagline />
      <Logo />
    </div>
  );
}
