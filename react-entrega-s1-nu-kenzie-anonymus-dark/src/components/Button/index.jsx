import './style.css'

// smallSize = botao pequenoRosa, smallSizeGray = botao pequenoCinza, nada botao grande Rosa

export default function Button({ type, children, smallSize, smallSizeGray }){

    return(
        <button className={ smallSize && !smallSizeGray ? "smallButton" : smallSizeGray ? "smallSizeGray" : "bigButton" } type={type}>{ children }</button>
    )
}