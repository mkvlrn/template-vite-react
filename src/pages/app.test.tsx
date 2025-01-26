import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "~/pages/app.jsx";

describe("app.tsx", () => {
  test("should render the component", () => {
    render(<App />);

    const app = screen.getByRole("main");

    expect(app).toBeInTheDocument();
    expect(app).toHaveTextContent("React TypeScript SPA");
  });
});
