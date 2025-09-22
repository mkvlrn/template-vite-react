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
    return (
      <div className="m-auto max-h-full max-w-full overflow-hidden flex items-center justify-center">
        Error loading dog :(
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <img alt="Doggy!" className="max-w-full max-h-full object-contain" src={query.data} />
    </div>
  );
}
