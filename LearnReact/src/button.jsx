import { useState } from "react";
function Btn() {
    function Add() {
        const element = document.getElementById("cunt");
        const currentValue = parseInt(element.innerText, 10);
        element.innerText = currentValue + 1;
    }
    function minus() {
        const element = document.getElementById("cunt");
        const currentValue = parseInt(element.innerText, 10);
        element.innerText = currentValue - 1;
    }

    return (
        <>
            <h1 id="cunt">0</h1>
            <button type="button" onClick={Add}>Add</button>
            <button type="button" onClick={minus}>Minus</button>
        </>
    )
}
export default Btn;
