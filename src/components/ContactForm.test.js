import React from "react";
import ContactForm from "./ContactForm";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";



test("test render ContactForm", () => {
    render(<ContactForm/>);
});

test("testing our form's input", async() => {
    // arrange
    render(<ContactForm/>);

    // act query for each input with rtl matchers
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", {name: /submit/i});

    // // fill form
    userEvent.type(firstName, "Chucky");
    userEvent.type(lastName, "Q");
    userEvent.type(email, "testpost@gmail.com");
    userEvent.type(message, "Leave a message");
    // act(() => {
    //     userEvent.click(button);

    // })
    await act(async () => {
        // userEvent.type(firstName, 'chucky');
        userEvent.click(button);
    });

    // assert that inputs are displayed
    const fName = screen.getByText(/chucky/i);
    const lName = screen.getByText(/q/i);
    const testMail = screen.getByText(/testpost@gmail.com/i);
    const testMessage = screen.getByText(/leave a message/i);

    expect(fName).toBeInTheDocument();
    expect(lName).toBeInTheDocument();
    expect(testMail).toBeInTheDocument();
    expect(testMessage).toBeInTheDocument();

    expect(fName).toBeTruthy();
    expect(lName).toBeTruthy();
    expect(testMail).toBeTruthy();
    expect(testMessage).toBeTruthy();
});

