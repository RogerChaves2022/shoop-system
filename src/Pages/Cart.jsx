import React from "react";
import { getItem, setItem } from "../Services/LocalStorageFuncs";
import { useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea } from "../css/style";
import { Header } from "../components/Header";



export const Cart = () => {
    const [data, setData] = useState( getItem('cartShop') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('cartShop', arrFilter)
    }

    const subTotal = data.reduce((acc,cur) => acc + cur.price, 0)
    const quantidadeItems = data.length;

    return(
        <div>
            <Header />
            <h3>{ subTotal !== 0 ? (`SubTotal: R$ ${subTotal}`) : (<p></p>)}</h3>
            <h3>{ quantidadeItems !== 0 ? (`Quantidade: ${quantidadeItems}`) : (<p></p>) }</h3>
            <ProductsArea>
                { data.length > 0 ?
                    (data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title.substring(0,50)}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{`R$: ${e.price}`}</h4>
                            <button onClick={ () => removeItem(e)}>
                                <BsFillCartDashFill />
                            </button>
                        </div>
                    ))) : (<p>Seu carrinho está vazio.</p>)
                }
            </ProductsArea>
            { data.length > 0 ? (<button>Comprar</button>) : (<p></p>) }
            </div>
    )
}