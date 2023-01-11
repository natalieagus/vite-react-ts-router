import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home test", () => {
  test("should show title all the time", () => {
    render(<Home />);

    expect(screen.getByText(/Number Converter/i)).toBeDefined();
  });
});
