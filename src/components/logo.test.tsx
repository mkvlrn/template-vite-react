import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Logo } from "~/components/logo";

describe("logo.tsx", () => {
  beforeEach(() => {
    cleanup();
  });

  test("should render the component", () => {
    render(<Logo />);

    const logo = screen.getByRole("img");

    expect(logo).toBeInTheDocument();
  });
});
