import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom';
import App from '../App';

describe('shows char card', () => {
  it('char details', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    );
    screen.debug();

    const test = await screen.findByText('Rick Sanchez');
    expect(test).toBeInTheDocument();

    screen.debug();
  });
});
