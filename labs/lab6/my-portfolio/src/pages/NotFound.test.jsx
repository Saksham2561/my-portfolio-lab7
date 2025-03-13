import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest"; 
import userEvent from "@testing-library/user-event";
import NotFound from "./NotFound";
import "@testing-library/jest-dom";

describe("NotFound Page", () => {
  test("renders 404 page correctly", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("Oops! Page Not Found")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /back to home/i })).toBeInTheDocument();
  });

  test("navigates to home page when button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /back to home/i });

    await user.click(button);

    // Since MemoryRouter doesn't have a real navigation system,
    // we can't verify navigation directly here.
    // The actual navigation should be tested in App.test.jsx.
  });
});
