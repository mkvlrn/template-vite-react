import { useQuery } from "@tanstack/react-query";

async function getDog() {
  const preUrl = `https://dog.ceo/api/breeds/image/random?t=${Date.now()}`;
  const preResponse = await fetch(preUrl);
  const { message: dogUrl } = (await preResponse.json()) as { message: string };

  return dogUrl.replace("\\", "");
}

export function useDogs() {
  const query = useQuery({ queryKey: ["dog"], queryFn: getDog, refetchInterval: 5000 });

  return { query };
}
