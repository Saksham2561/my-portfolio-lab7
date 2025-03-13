import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest"; 
import userEvent from "@testing-library/user-event";
import NotFound from "./NotFound";
import "@testing-library/jest-dom";

describe("NotFound Page", () => {
  test("should render 404 page correctly", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const notFoundMessage = screen.getByText("Oops! Page Not Found");
    const backButton = screen.getByRole("button", { name: /back to home/i });

    expect(notFoundMessage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  test("should navigate to home page when back button is clicked", async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const backButton = screen.getByRole("button", { name: /back to home/i });
    await user.click(backButton);
  });
});
