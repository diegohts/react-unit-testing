import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />);

        expect(getByText('Diego')).toBeInTheDocument();
        expect(getByText('Fernando')).toBeInTheDocument();
        expect(getByText('Henrique')).toBeInTheDocument();
    });

    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText, findByText } = render(<App />);

        const inputElement = getByPlaceholderText('Novo item');
        const addButton = getByText('Adicionar');

        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);

        expect(await findByText('Novo')).toBeInTheDocument();
    });
});