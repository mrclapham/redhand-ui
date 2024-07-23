import { ButtonTw } from "./ButtonTw";
import { ButtonTwProps } from "./ButtonTw";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
    it("should render the button", () => {
        const props = {
            onclick: () => {
                console.log("Button clicked");
            },
            label: "Button",
            variant: "primary",
            size: "medium",
        } as ButtonTwProps;
        render(<ButtonTw {...props} />)
        expect(screen.getByText("Button")).toBeInTheDocument();
    });
});