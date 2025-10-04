import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "../components/logo/logo.tsx";
import { Tagline } from "../components/tagline/tagline.tsx";
import { Title } from "../components/title/title.tsx";

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
