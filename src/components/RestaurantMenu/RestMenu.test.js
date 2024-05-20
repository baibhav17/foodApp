import { fireEvent, render, screen, cleanup } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "./RestaurantMeu"
import MOCK_DATA from '../../utils/mocks/restMenuMock.json'
import appStore from "../../utils/State_Management/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import Cart from "../Cart/CartPage"

// const resetStore = () => {
//     // This can be customized based on how your store is set up
//     appStore.dispatch({ type: 'RESET' });
// };

beforeEach(() => {
    // resetStore();
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA)
            }
        })
    })
})

// afterEach(() => {
//     // Clean up any side-effects
//     cleanup();
// });


it('should render the menu list', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>))
        // Testing for KFC mock data
        const foodHeader = screen.getByText('Hot & Crispy Chicken, Wings (6)');
        fireEvent.click(foodHeader)
        expect(screen.getAllByTestId('list-item').length).toBe(6);
        const addBtns = screen.getAllByRole('button',{name:'+'})
        expect(screen.getByText('Cart- 0 items')).toBeInTheDocument(); //before adding items
        //cart page must be  empty right now
        expect(screen.getByText('currently cart is empty. Add items to cart.')).toBeInTheDocument();
        fireEvent.click(addBtns[0]);
        expect(screen.getByText('Cart- 1 items')).toBeInTheDocument(); //after adding items

        // checking if cart page has items or not.
        expect(screen.getAllByTestId('list-item').length).toBe(7);

        //checking clear cart functionality


})

xit('should render list at cart page', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>))
        // Testing for KFC mock data
        const foodHeader = screen.getByText('Hot & Crispy Chicken, Wings (6)');
        fireEvent.click(foodHeader)
        expect(screen.getAllByTestId('list-item').length).toBe(6);
        const addBtns = screen.getAllByRole('button',{name:'+'})
        expect(screen.getByText('Cart- 0 items')).toBeInTheDocument(); //before adding items
        //cart page must be  empty right now
        expect(screen.getByText('currently cart is empty. Add items to cart.')).toBeInTheDocument();
        fireEvent.click(addBtns[0]);
        expect(screen.getByText('Cart- 1 items')).toBeInTheDocument(); //after adding items

        // checking if cart page has items or not.
        expect(screen.getAllByTestId('list-item').length).toBe(7);

        //checking clear cart functionality


})
