import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { Pets } from "#components/pets/pets";

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

test("should show loading state initially", () => {
  // arrange
  fetchSpy.mockImplementation(() => new Promise(() => ({})));
  // act
  render(<Pets type="dog" />, { wrapper: createWrapper() });
  // assert
  expect(screen.getByText("🐾")).toBeVisible();
  const imgs = screen
    .queryAllByAltText("dog!")
    .filter((img) => getComputedStyle(img).display !== "none");
  expect(imgs).toHaveLength(0);
});

test("should show dog image when loaded", async () => {
  // arrange
  fetchSpy.mockResolvedValue(Response.json({ message: "DOG" }));
  // act
  render(<Pets type="dog" />, { wrapper: createWrapper() });
  // assert
  await waitFor(() => {
    const imgs = screen
      .queryAllByAltText("dog!")
      .filter((img) => getComputedStyle(img).display !== "none");
    expect(imgs).toHaveLength(1);
    expect(imgs[0]).toHaveAttribute("src", "DOG");
  });
});

test("should show cat image when loaded", async () => {
  // arrange
  fetchSpy.mockResolvedValue(Response.json([{ url: "CAT" }]));
  // act
  render(<Pets type="cat" />, { wrapper: createWrapper() });
  // assert
  await waitFor(() => {
    const imgs = screen
      .queryAllByAltText("cat!")
      .filter((img) => getComputedStyle(img).display !== "none");
    expect(imgs).toHaveLength(1);
    expect(imgs[0]).toHaveAttribute("src", "CAT");
  });
});

test("should show error message on fetch failure", async () => {
  // arrange
  fetchSpy.mockRejectedValue(new Error("Network error"));
  // act
  render(<Pets type="dog" />, { wrapper: createWrapper() });
  // assert
  await waitFor(() => {
    const errors = screen
      .queryAllByText("Error loading pet :(")
      .filter((el) => getComputedStyle(el).display !== "none");
    expect(errors).toHaveLength(1);
  });
});
