import React from "react";
import { render, screen } from "@testing-library/react";
import DVRPlayer from "./DVRPlayer";

test("renders learn react link", () => {
  const baseUrl = "https://a-machinskiy.erlyvideo.ru";
  const streamName = "test";

  render(<DVRPlayer baseUrl={baseUrl} streamName={streamName} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
