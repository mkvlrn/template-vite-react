import { useQuery } from "@tanstack/react-query";

async function getDog() {
  const preUrl = `https://dog.ceo/api/breeds/image/random?t=${Date.now()}`;
  const response = await fetch(preUrl);
  const { message: dogUrl } = (await response.json()) as { message: string };

  return dogUrl.replace("\\", "");
}

export function useDogs() {
  const query = useQuery({ queryKey: ["dog"], queryFn: getDog, refetchInterval: 5000 });

  return {
    loading: query.isFetching,
    error: query.isError,
    ready: query.isFetching === false && query.isError === false,
    data: query.data,
  };
}
