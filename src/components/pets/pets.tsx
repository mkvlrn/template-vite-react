import { Activity } from "react";
import { type Pet, usePets } from "#/hooks/use-pets";

interface PetsProps {
  type: Pet;
}

export function Pets({ type }: PetsProps) {
  const pets = usePets(type);
  const loadingErrorMsg = "Error loading pet :(";
  return (
    <div className="flex m-auto items-center justify-center p-4 h-full overflow-hidden">
      <Activity mode={pets.error ? "visible" : "hidden"}>
        <div>{loadingErrorMsg}</div>
      </Activity>
      <Activity mode={pets.loading ? "visible" : "hidden"}>
        <div className="text-6xl animate-spin">🐾</div>
      </Activity>
      <Activity mode={pets.ready ? "visible" : "hidden"}>
        <img
          alt={`${type}!`}
          className="object-contain max-w-full max-h-full animate-fade-in"
          key={pets.data}
          src={pets.data}
        />
      </Activity>
    </div>
  );
}
