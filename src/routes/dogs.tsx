import { createFileRoute } from "@tanstack/react-router";
import { useDogs } from "../hooks/use-dogs.ts";

export const Route = createFileRoute("/dogs")({
  component: Dogs,
});

function Dogs() {
  const { query } = useDogs();

  if (query.isLoading) {
    return <div className="m-auto">Loading dog...</div>;
  }

  if (query.error) {
    return <div className="m-auto">Error loading dog :(</div>;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img alt="Doggy!" className="max-w-[80%] max-h-[80%]" src={query.data} />
    </div>
  );
}
