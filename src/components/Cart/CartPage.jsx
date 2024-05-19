import { useSelector } from "react-redux"
import RestaurantMenuList from "../RestaurantMenu/RestaurantMenuList"

const CartPage = () => {
    const cartData = useSelector((store)=>store.cartData.items)
    return(
        <div className=" text-center m-4 p-4">
          <h1 className=" text-2xl font-bold">Cart</h1>
          {cartData.length === 0 && <h1>currently cart is empty. Add items to cart.</h1>}
          <RestaurantMenuList listItems={cartData} isCartPage={true}/>
        </div>
    )
}

export default CartPage