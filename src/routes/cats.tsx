import { createFileRoute } from "@tanstack/react-router";
import { Pets } from "#/components/pets/pets";

export const Route = createFileRoute("/cats")({ component: Cats });

function Cats() {
  return <Pets type="cat" />;
}
