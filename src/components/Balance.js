import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h4> Seu balanço </h4>
            <h1 > R$0.00</h1>

        </>
    )
}