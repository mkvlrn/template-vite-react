import { createRoot } from "react-dom/client";
import { describe, expect, test, vi } from "vitest";

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

describe("main", () => {
  test("should render the root element", async () => {
    document.body.innerHTML = `<div id="root"></div>`;
    await import("~/main.jsx");

    expect(createRoot).toHaveBeenCalled();
    expect(document.querySelector("#root")).toBeInTheDocument();
  });
});
