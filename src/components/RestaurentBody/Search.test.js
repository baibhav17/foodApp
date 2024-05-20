import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import CafeBody from "./CafeBody"
import { act } from "react";
import MOCK_DATA from '../../utils/mocks/foodAppMockData.json'
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(MOCK_DATA)
        },
      })
    })
  })

it('should render body component with search button', async () => {
    await act(async () => render(<BrowserRouter><CafeBody /> </BrowserRouter>))
    // await waitFor(() => expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument());
    const searchBtn = screen.getByRole('button', { name: 'Search' })
    const searchInput = screen.getByTestId('search-input');
    expect(screen.getAllByTestId('cafe-card').length).toBeGreaterThanOrEqual(10);
    fireEvent.change(searchInput,{target:{value:'burger'}})
    fireEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();
    await waitFor(() => {
        const cafeCards = screen.getAllByTestId('cafe-card');
        expect(cafeCards.length).toBeLessThan(3);
    });


})

it('should render top rated restaurants', async () => {
    await act(async () => render(
        <BrowserRouter>
            <CafeBody />
        </BrowserRouter>
    ));
    
    expect(screen.getAllByTestId('cafe-card').length).toBeGreaterThanOrEqual(20);

    const topRatedBtn = screen.getByRole('button', { name: 'See Top Rated Restaurants' });
    expect(topRatedBtn).toBeInTheDocument();

    console.log('Before click:', screen.getAllByTestId('cafe-card').length);

    fireEvent.click(topRatedBtn);
    console.log('Button clicked');

    await waitFor(() => {
        const filteredCard = screen.getAllByTestId('cafe-card');
        console.log('After click:', filteredCard.length);
        expect(filteredCard.length).toBe(16);
    });
});
