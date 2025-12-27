import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Logo } from "#components/logo/logo";

describe("logo.tsx", () => {
  test("should render the component", () => {
    // act
    render(<Logo />);
    const logo = screen.getByRole("img");
    // assert
    expect(logo).toBeInTheDocument();
  });
});
