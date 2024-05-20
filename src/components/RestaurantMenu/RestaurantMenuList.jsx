import { useDispatch, useSelector } from "react-redux"
import AddToCartCounter from "../../utils/AddToCartCounter"
import { addItems, clearCart, removeItem } from "../../utils/State_Management/cartSlice"
import { CDN_URL } from "../../utils/constant"
import { useParams } from "react-router-dom"
import { clearResInfo, getResInfo } from "../../utils/State_Management/resInfoSlice"
import useAddToCardCounter from "../../utils/useAddToCardCounter"
import { clearItemCount, decrementCount, increaseCount } from "../../utils/State_Management/itemCountSlice"

const RestaurantMenuList = ({listItems, isCartPage}) => {

    const dispatch = useDispatch();
    const {resId} = useParams();

let resInfo = useSelector((store)=>store.resInfo.resInfoItem)
const itemCount = useSelector((store)=>store.itemCount)
resInfo = [...new Set(resInfo)]
let itemId;
const [count, increment, decrement] = useAddToCardCounter();
    
    const handleAddItem = (item) => {
        // increment();
        itemId = item.card.info.id
        if(Object.keys(itemCount).length == 0 || resInfo[0] == resId) {
            dispatch(increaseCount({itemId}));
        }
        // if(resInfo.length === 0) {
            if(resInfo.length === 0 || resInfo[0] == resId) {
                dispatch(addItems(item))
                dispatch(getResInfo(resId))
            } 
            else if ( resInfo.length !== 0 && resInfo[0] !== resId) {
                const userOption = window.confirm('this will remove the current items from the cart');
                 // case 1: if useroption is true
                //      - then clear --> the store cart items and also clear --> the current restInfo(resId).
                //      - and following clearing now add the new item into the cart and add this new rest info using getRestInfo(resId)
                if (userOption) {
                    dispatch(clearCart())
                    dispatch(clearResInfo())
                    dispatch(clearItemCount())
                    dispatch(addItems(item))
                    dispatch(getResInfo(resId))
                    dispatch(increaseCount({itemId}));

                } else {
                    return;
                // case 2: if useroption is false
                //      - do not clear any cart item or resInfo slice.
                //      - also do not add any value in cart or resinfo slice
                    // I guess no need to handle else in this case for now as the state is still same.
                }
               
               
            }
            
        // }
    }
    const handleRemoveItem = (item) => {
        itemId = item.card.info.id;
        const indexToRemove = listItems.findIndex(i => i.card.info.id === item.card.info.id);
        if (itemCount[itemId] > 0) {
            if(resInfo.length !== 0 || resInfo[0] == resId) {
                // since we just need to remove so instead of passing the whole item let's just pass the index
                dispatch(removeItem(indexToRemove))
                dispatch(getResInfo(resId))
                dispatch(decrementCount({itemId}));
            } 
        }
        

    }
    return(
        <div>
          {listItems && listItems.map((item,index)=>(
          <div key={item.card.info.id+index} className=" m-4 p-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className=" m-1 p-2 w-10/12">
                <div>
                <span>{item?.card?.info?.name}</span>
                <span>- ₹: {item?.card?.info?.price || item?.card?.info?.defaultPrice / 100}</span>
                </div>
                
            <p className="text-xs m-1 p-2">{item?.card?.info?.description}</p>
            </div>
            <div className=" w-2/12">
                {!isCartPage && 
                (
                <>
                <button 
                className=" absolute bg-neutral-700 text-white rounded-md ml-14 p-1"
                onClick={()=>handleAddItem(item)}
                >
                    +
                </button>
                <span className=" absolute bg-neutral-700 text-white rounded-md ml-8 p-1">{itemCount[item.card.info.id] || 0}</span>
                <button 
                className=" absolute bg-neutral-700 text-white rounded-md ml-2 p-1"
                onClick={()=>handleRemoveItem(item)}
                >
                    -
                </button>
                </>
                )
                }
                <img className=" w-auto h-auto" src={CDN_URL + item?.card?.info?.imageId} alt="food-img"/>
            </div>
          </div>
          )
          )}
        </div>
    )
}

export default RestaurantMenuList
