import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, test, expect } from "vitest"; 
import NotFound from "./pages/NotFound";
import "@testing-library/jest-dom";

describe("App Routing", () => {
  test("redirects to 404 page for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/some-random-page"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Oops! Page Not Found")).toBeInTheDocument();
  });
});
