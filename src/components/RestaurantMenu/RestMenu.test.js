import { render } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "./RestaurantMeu"
import MOCK_DATA from '../../utils/mocks/restMenuMock.json'
import appStore from "../../utils/State_Management/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"


beforeEach(() => {
    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA)
            }
        })
    })
})

it('should render the menu list', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>))
})