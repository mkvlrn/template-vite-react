import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "react";
import { useDogs } from "../hooks/use-dogs.ts";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

function Dogs() {
  const { query } = useDogs();

  return (
    <div className="flex m-auto items-center justify-center p-4">
      <Activity mode={query.isError ? "visible" : "hidden"}>
        <div>Error loading dog :(</div>
      </Activity>

      <Activity mode={query.isFetching ? "visible" : "hidden"}>
        <div>Loading dog!</div>
      </Activity>

      <Activity mode={query.isFetching === false && query.isError === false ? "visible" : "hidden"}>
        <img alt="Doggy!" className="max-w-full max-h-full object-contain" src={query.data} />
      </Activity>
    </div>
  );
}
