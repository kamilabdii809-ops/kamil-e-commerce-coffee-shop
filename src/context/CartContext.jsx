import { createContext,useContext,useState ,useEffect} from "react";

const CartContext =createContext();

export function Cartprovider({children}){
    const [Cartitems,setCartitems]=useState(()=>{
        const savedCart=localStorage.getItem("cart");
        return savedCart? JSON.parse(savedCart):[];
    }
    );

useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(Cartitems))
}, [Cartitems])


function addTocart(product){
    setCartitems((privItems)=>{

const existingItem=privItems.find(
(item)=>item.id===product.id

)
if(existingItem){
    return privItems.map((item)=>
    item.id===product.id
    ? {...item, quantity: item.quantity + 1}:item
)
} else {
    return[
        ...privItems,
        {...product,quantity:1

        }
    ]
}
    })
    

}
function increaseQuantity(productid){
        setCartitems((privItems)=>
            privItems.map((item)=>
            item.id === productid
    ? {...item, quantity : item.quantity + 1 } :item )
    )

    }
function decreaseQuantity(productid){
    setCartitems((privItems)=>
    privItems.map((item)=>
    item.id===productid
    ?{...item, quantity:item.quantity - 1}:item
    )
    .filter((item)=>
    item.quantity> 0
    )
)
}
function removeFromcart(productid){
    setCartitems((privItems)=>
privItems.filter((item)=>item.id!==productid )
    )

}

function clearCart(){

    setCartitems([])
}

const cartTotal =Cartitems.reduce(
    (sum,item)=>
        sum + item.price*item.quantity,0

)


const cartCount= Cartitems.reduce(
    (sum,item) =>sum + item.quantity, 0
);


    return(
      <CartContext.Provider
       value={{
        Cartitems,
         addTocart,
         cartCount,
         increaseQuantity,
         decreaseQuantity,
         removeFromcart,
         clearCart,
         cartTotal
         }} >
        {children}
      </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}