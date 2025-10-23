import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "react";
import { useDogs } from "#/hooks/use-dogs.ts";

export const Route = createFileRoute("/dogs")({ component: Dogs });

function Dogs() {
  const dogs = useDogs();

  return (
    <div className="flex m-auto items-center justify-center p-4">
      <Activity mode={dogs.error ? "visible" : "hidden"}>
        <div>Error loading dog :(</div>
      </Activity>

      <Activity mode={dogs.loading ? "visible" : "hidden"}>
        <div>Loading dog!</div>
      </Activity>

      <Activity mode={dogs.ready ? "visible" : "hidden"}>
        <img alt="Doggy!" className="object-contain" src={dogs.data} />
      </Activity>
    </div>
  );
}
