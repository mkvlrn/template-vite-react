import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { type Pet, usePets } from "#hooks/use-pets";

let fetchSpy: ReturnType<typeof vi.spyOn>;
beforeEach(() => {
  fetchSpy = vi.spyOn(global, "fetch");
});
afterEach(() => {
  vi.restoreAllMocks();
});

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

test("should return loading state initially", () => {
  // arrange
  fetchSpy.mockImplementation(() => new Promise(() => ({})));
  // act
  const { result } = renderHook(() => usePets("dog"), { wrapper: createWrapper() });
  // assert
  expect(result.current.loading).toBe(true);
  expect(result.current.ready).toBe(false);
});

test("should return dog image successfully", async () => {
  // arrange
  fetchSpy.mockResolvedValue(Response.json({ message: "DOG" }));
  // act
  const { result } = renderHook(() => usePets("dog"), { wrapper: createWrapper() });
  // assert
  await waitFor(() => expect(result.current.ready).toBe(true));
  expect(result.current.data).toBe("DOG");
  expect(result.current.error).toBe(false);
});

test("should return cat image successfully", async () => {
  // arrange
  fetchSpy.mockResolvedValue(Response.json([{ url: "CAT" }]));
  // act
  const { result } = renderHook(() => usePets("cat"), { wrapper: createWrapper() });
  // assert
  await waitFor(() => expect(result.current.ready).toBe(true));
  expect(result.current.data).toBe("CAT");
  expect(result.current.error).toBe(false);
});

test("should throw error for invalid pet type", async () => {
  // arrange
  fetchSpy.mockResolvedValue(Response.json({}));
  // act
  const { result } = renderHook(() => usePets("hamster" as Pet), { wrapper: createWrapper() });
  // assert
  await waitFor(() => expect(result.current.error).toBe(true));
});

test("should return error state if network error occurs", async () => {
  // arrange
  fetchSpy.mockImplementation(() => new Error("Network error"));
  // act
  const { result } = renderHook(() => usePets("dog"), { wrapper: createWrapper() });
  // assert
  await waitFor(() => expect(result.current.error).toBe(true));
  expect(result.current.ready).toBe(false);
});
