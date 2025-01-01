import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Title } from "~/components/title";

describe("all components", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render title.tsx", () => {
    render(<Title />);

    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("React TypeScript SPA");
  });
});
