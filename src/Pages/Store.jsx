import React from "react";
import { useState } from "react";
import { BsFillCartCheckFill , BsFillCartPlusFill} from 'react-icons/bs';
import { getItem, setItem } from "../Services/LocalStorageFuncs";
import { ProductsArea } from "../css/style";
import { Header } from "../components/Header";

export const Store = () => {
    
    const [data, setData] = useState([]);
    const [cart, setCart] = useState( getItem('cartShop') || []);
    const [search, setSearch] = useState([]);

  
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=' + search;
            const response = await fetch(url);
            const objJson = await response.json();
            setData(objJson.results)
        }

    const handleOnClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if(element){
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('cartShop', arrFilter)
        } else {
            setCart([ ...cart, obj])
            setItem('cartShop', [...cart, obj])
        }
    }



const submit = () => {
    fetchApi();
}

    return(
        <div>
            <Header/>
            <div className="search-bar">
                <input id='inputSearch' 
                name="inputSearch"
                onChange={e => setSearch(e.target.value)}
                value={search}
                type="search" 
                pattern=".\S.*"
                required>
                </input>
                <button className="search-btn" type='submit' onClick={submit}></button>
            </div>
            <ProductsArea>
            
                { data.length > 0 ? 
                    (data.map((e) =>(
                        <div key={e.id}>
                            <h4>{e.title.substring(0,50)}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{`R$: ${e.price}`}</h4>
                            <button onClick={()=> handleOnClick(e)}>
                                {
                                    cart.some((itemCart) => itemCart.id === e.id) ? 
                                    (<BsFillCartCheckFill />) : (<BsFillCartPlusFill />)
                                }
                            </button>
                        </div>
                    ))) : (<p>Aguardando pesquisa</p>)
                    }
            </ProductsArea>
            
        </div>
    )
}