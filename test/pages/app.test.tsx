import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "~/pages/app.jsx";

test("should render app page", () => {
  render(<App />);

  const app = screen.getByRole("main");

  expect(app).toBeInTheDocument();
});
