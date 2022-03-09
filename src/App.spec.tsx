import { render } from '@testing-library/react';
import App from './App';

test('HelloWorld', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World')).toBeTruthy();
})