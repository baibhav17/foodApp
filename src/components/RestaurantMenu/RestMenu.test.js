import { render } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "./RestaurantMeu"
import MOCK_DATA from '../../utils/mocks/restMenuMock.json'


// global.fetch({
//     return Promise.resolve({
//         json: ()=> {
//             return
//         }
//     })
// })

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render the menu list', async ()=>{
    await act(()=>render(<RestaurantMenu />))
})