import { Title } from "#components/title.tsx";
import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

describe("title.tsx", () => {
  beforeEach(() => {
    cleanup();
  });

  test("should render the component", () => {
    render(<Title />);

    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("React TypeScript SPA");
  });
});
