// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";

test("codesweetly test heading", () => {
  render(<Home />);
  expect(screen.getByText(/Escrita/i));
});
