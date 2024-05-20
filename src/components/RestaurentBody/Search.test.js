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
    fireEvent.change(searchInput,{target:{value:'burger'}})
    fireEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();
    await waitFor(() => {
        const cafeCards = screen.getAllByTestId('cafe-card');
        expect(cafeCards.length).toBeGreaterThanOrEqual(1);
    });


})
