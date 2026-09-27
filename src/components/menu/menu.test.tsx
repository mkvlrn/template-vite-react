import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { expect, test, vi } from "vitest";
import { Menu } from "#/components/menu/menu";

vi.mock("@tanstack/react-router", () => ({
  ["Link"]: ({ children, to, ...props }: ComponentProps<"a"> & { to: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

test("should render navigation links", () => {
  render(<Menu />);

  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "Dogs!" })).toHaveAttribute("href", "/dogs");
  expect(screen.getByRole("link", { name: "Cats!" })).toHaveAttribute("href", "/cats");
});

test("should apply the active link class", () => {
  render(<Menu />);

  for (const link of screen.getAllByRole("link")) {
    expect(link).toHaveClass("[&.active]:font-bold");
  }
});
