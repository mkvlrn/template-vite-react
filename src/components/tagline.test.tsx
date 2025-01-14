import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Tagline } from "~/components/tagline";

describe("tagline.tsx", () => {
  beforeEach(() => {
    cleanup();
  });

  test("should render the component", () => {
    render(<Tagline />);

    const tagline = screen.getByRole("heading");

    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveTextContent(
      "An opinionated template for SPA React projects built with Vite.",
    );
  });
});
