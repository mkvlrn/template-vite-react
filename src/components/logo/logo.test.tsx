import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Logo } from "#components/logo/logo";

test("should render the component", () => {
  // act
  render(<Logo />);
  const logo = screen.getByRole("img");
  // assert
  expect(logo).toBeInTheDocument();
});
