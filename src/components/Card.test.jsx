import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders text", () => {
  render(<Card />);
  const linkElement = screen.getByText(/To Sushi!/i);
  expect(linkElement).toBeInTheDocument();
});
