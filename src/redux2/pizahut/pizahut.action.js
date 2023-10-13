import { BUY_PIZZA } from "./pizahut.actionTypes";

export const buyPiza=()=>{

    console.log("action performed");
    return{

        type:BUY_PIZZA,
        payload:'Purchase a piza'
    }
}