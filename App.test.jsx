import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom';
import App from './src/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('this is my behavior test', () => {
  it('looking for char', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.debug();
    //had to add loading
    screen.getByText(/loading/i);
    //step 1, see main list
    const showMain = await screen.findByText('List of Characters');
    expect(showMain).toBeInTheDocument();
    // screen.debug();
    //step 2 ,click on name
    const clickName = await screen.findByText('Rick Sanchez (Alive)');
    expect(clickName).toBeInTheDocument();
    // screen.debug();
    //step 3 , see char details
    userEvent.click(clickName);
    // screen.debug();
    //step 4, locate char gender
    const showGender = await screen.findByText('Gender:Male');
    expect(showGender).toBeInTheDocument();
    screen.debug();
  });
});
