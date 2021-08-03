import { render, screen } from "@testing-library/react";
import Case from "./Case";

test("renders text", () => {
  render(<Case />);
  const linkElement = screen.getByText(/Case study/i);
  expect(linkElement).toBeInTheDocument();
});
