import React from "react";
import ContactForm from "./ContactForm";
import {render} from "@testing-library/react";

test("test render ContactForm", () => {
    render(<ContactForm/>);
})