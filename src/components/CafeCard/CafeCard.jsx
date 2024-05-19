import { CDN_URL } from "../../utils/constant";

const CafeCard = ({ cafeData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = cafeData?.info;
    return (
        <div data-testid='cafe-card' className=' rounded-lg min-h-[500px] cafe-card'>
            <img
                className='rounded-md cafe-logo'
                alt='cafe-logo'
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}

export const TopRatedCafeCard = (CafeCard) => {
    return ({ cafeData }) => {
        return (
            <div>
                <label className=" absolute bg-black text-white m-3 p-1 font-medium">⭐️ Top Rated</label>
                <CafeCard cafeData={cafeData}  />
            </div>

        )
    }
}

export default CafeCard