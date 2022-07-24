import './style.css'

// smallSize = botao pequenoRosa, smallSizeGray = botao pequenoCinza, nada botao grande Rosa

export default function Button({ type, children, smallSize, smallSizeGray, onClick }){

    return(
        <button className={ smallSize ? "smallButton" : "bigButton" } onClick={onClick} type={type}>{ children }</button>
    )
}