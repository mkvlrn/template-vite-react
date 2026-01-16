import { createFileRoute } from "@tanstack/react-router";
import { Pets } from "#components/pets/pets";

export const Route = createFileRoute("/dogs")({ component: Dogs });

function Dogs() {
  return <Pets type="dog" />;
}
