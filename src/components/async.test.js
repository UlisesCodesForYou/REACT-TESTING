import {render, screen} from "@testing-library/react";
import Async from "./async";

describe('Async component', function () {
    test('renders post requests', async () => {
        window.fetch = jest.fn() // This overwrites the real fetch data.
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}] // This is a mock server function.
        })
        render(<Async/>)

        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)

    })
});