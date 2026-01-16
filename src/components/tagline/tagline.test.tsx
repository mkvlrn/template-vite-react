import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Tagline } from "#components/tagline/tagline";

test("should render the component", () => {
  // act
  render(<Tagline />);
  const tagline = screen.getByRole("heading");
  // assert
  expect(tagline).toBeInTheDocument();
  expect(tagline).toHaveTextContent(
    "An opinionated template for SPA React projects built with Vite.",
  );
});
