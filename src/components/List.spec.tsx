import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';
import List from './List';

describe('List Component', () => {
    it('should render list items', () => {
        const { getByText, rerender, queryByText, unmount  } = render(<List initialItems={['Diego', 'Fernando', 'Henrique']}/>);

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Fernando')).toBeInTheDocument();
        expect(getByText('Henrique')).toBeInTheDocument();

        unmount();
        rerender(<List initialItems={['Julia']}/>);

        expect(getByText('Julia')).toBeInTheDocument();
        expect(queryByText('Henrique')).not.toBeInTheDocument();
    });

    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText } = render(<List initialItems={[]}/>);

        const inputElement = getByPlaceholderText('Novo item');
        const addButton = getByText('Adicionar');

        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);

        await waitFor(() => {
            expect(getByText('Novo')).toBeInTheDocument();
        });
    });

    it('should be able to add remove item from the list', async () => {
        const { getByText, getAllByText } = render(<List initialItems={['Diego']}/>);

        const removeButtons = getAllByText('Remover');

        userEvent.click(removeButtons[0]);

        await waitForElementToBeRemoved(() => {
            return getByText('Diego');
        });
    });
});