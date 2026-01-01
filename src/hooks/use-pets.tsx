import { useQuery } from "@tanstack/react-query";

type Pet = "dog" | "cat";

const PET_TO_URL: Record<Pet, string> = {
  dog: "https://dog.ceo/api/breeds/image/random",
  cat: "https://api.thecatapi.com/v1/images/search",
};

function extractUrlFromResponse(pet: Pet, response: unknown): string {
  switch (pet) {
    case "dog":
      return (response as { message: string }).message;
    case "cat":
      return (response as [{ url: string }])[0].url;
    default:
      throw new Error("Invalid pet type");
  }
}

async function getPet(pet: Pet): Promise<string> {
  const preUrl = `${PET_TO_URL[pet]}?t=${Date.now()}`;
  const response = await fetch(preUrl);
  const json = await response.json();
  return extractUrlFromResponse(pet, json);
}

function usePets(pet: Pet) {
  const query = useQuery({ queryKey: [pet], queryFn: () => getPet(pet), refetchInterval: 5000 });
  return {
    loading: query.isFetching,
    error: query.isError,
    ready: query.isFetching === false && query.isError === false,
    data: query.data,
  };
}

export { type Pet, usePets };
