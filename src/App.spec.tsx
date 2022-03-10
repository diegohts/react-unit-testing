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

    it('should be able to add new item to the list', () => {
        const { getByText, debug } = render(<App />);

        const addButton = getByText('Adicionar');

        debug();

        userEvent.click(addButton);

        debug();
        expect(getByText('Novo')).toBeInTheDocument();
    });
});