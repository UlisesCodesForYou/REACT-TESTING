import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe('Greeting component', () => {
    test('Greetings test', () => {
        render(<Greetings/>)

        const expectedGreeting = screen.getByText('This is a test page.')
        expect(expectedGreeting).toBeInTheDocument()
    });

    test('Unchanged Text', () => {
        render(<Greetings/>)

        const unchangedText = screen.getByText('Click the button to change the text!', {exact: false})
        expect(unchangedText).toBeInTheDocument()
    })

    test('Button test', () => {
        render(<Greetings/>)


        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const buttonOutput = screen.getByText('Change Text Here!')
        expect(buttonOutput).toBeInTheDocument()
    })

    test('Checking if a string is still visible', () => {
        render(<Greetings/>)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const buttonOutput = screen.queryByText('Click the button to change the text!', {exact: false})
        expect(buttonOutput).toBeNull()

    })

})

