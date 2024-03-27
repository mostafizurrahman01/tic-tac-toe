/* eslint-disable react/prop-types */

export default function Square({value, onSquareClick}){
    return(
        <button className="square centered-button" onClick={onSquareClick}>{value}</button>
    )
}