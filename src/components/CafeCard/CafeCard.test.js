import { render, screen } from "@testing-library/react"
import CafeCard, { TopRatedCafeCard } from "./CafeCard"
import CAFE_CARD_MOCK_DATA from '../../utils/mocks/resCardMock.json'

test('displaying Cafe Card with mock prop data', ()=> {
    render(<CafeCard cafeData={CAFE_CARD_MOCK_DATA}/>)
    expect(screen.getByText(/Subway/)).toBeInTheDocument();
})

test('displaying top rated cafe with ⭐️ sign- basically trying to test HOC', ()=>{
    const WrapperComponent = TopRatedCafeCard(CafeCard)
    render(<WrapperComponent cafeData={CAFE_CARD_MOCK_DATA} />);
    expect(screen.getByText(/⭐️ Top Rated/)).toBeInTheDocument();
})