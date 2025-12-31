import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Title } from "#/components/title/title";

describe("title.tsx", () => {
  test("should render the component", () => {
    // act
    render(<Title />);
    const title = screen.getByRole("heading");
    // assert
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("React TypeScript SPA");
  });
});
