import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Logo } from "~/components/logo";

describe("all components", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render logo.tsx", () => {
    render(<Logo />);

    const logo = screen.getByRole("img");

    expect(logo).toBeInTheDocument();
  });
});
