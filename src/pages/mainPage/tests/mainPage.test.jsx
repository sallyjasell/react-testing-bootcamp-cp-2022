import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateMainPage } from "../mainPage";

const setup = () => render(<CreateMainPage />);

describe("Main page", () => {
  it(`Header with the title "Picture of the day"`, () => {
    setup();

    expect(
      screen.getByRole("heading", { name: /picture of the day/i })
    ).toBeInTheDocument();
  });
  it("Must render a Date picker", () => {
    setup();
    const datePicker = screen.getByLabelText(/select date/i);
    expect(datePicker).toBeInTheDocument();
  });
  it("Main page must contain an image title, image date display, image and image text", async () => {
    setup();

    const imageTitle = screen.getByLabelText(/image title/i);
    const imageDate = screen.getByLabelText(/image date/i);
    const imageSelected = await screen.findByRole(/img/i);
    const imageText = screen.getByLabelText(/image selected text/i);

    expect(imageTitle).toBeInTheDocument();
    expect(imageDate).toBeInTheDocument();
    expect(imageSelected).toBeInTheDocument();
    expect(imageText).toBeInTheDocument();
  });

  it(`Footer must containing the message "Project created during Wizeline Academy React Testing Bootcamp”`, () => {
    setup();

    expect(
      screen.getByRole("heading", { name: /wizeline academy react testing/i })
    ).toBeInTheDocument();
  });
});
