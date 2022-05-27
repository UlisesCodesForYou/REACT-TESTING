import {render, screen} from '@testing-library/react';
import Greetings from "./Greetings";


test('Renders Greeting', () => {
    // Arrange
    render(<Greetings/>);

    //Act.  I don't need to act on anything here.

    //Assert
    const testGreeting = screen.getByText('This is a test page.')
    expect(testGreeting).toBeInTheDocument()
})