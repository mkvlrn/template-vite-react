import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Tagline } from "~/components/tagline";

describe("all components", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render tagline.tsx", () => {
    render(<Tagline />);

    const tagline = screen.getByRole("heading");

    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveTextContent(
      "An opinionated template for SPA React projects built with Vite.",
    );
  });
});
