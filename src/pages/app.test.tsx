import { App } from "#pages/app.tsx";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("app.tsx", () => {
  test("should render the component", () => {
    render(<App />);

    const app = screen.getByRole("main");

    expect(app).toBeInTheDocument();
    expect(app).toHaveTextContent("React TypeScript SPA");
  });
});
