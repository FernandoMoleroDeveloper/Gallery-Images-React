import React from "react"
import "./Search.css"

const Search = (props) => {

    const searchRef = React.useRef()

    const onSubmit = (event, text) => {
        event.preventDefault()
        props.searchImage(text)
    }


    return (
        <div className="header">
            <form onSubmit={(event) => onSubmit(event, searchRef.current.value)}>
            <input className="header__input" placeholder="introduce un texto de búsqueda" ref={searchRef} type="text"></input>
            <button type="submit">Buscar</button>
            </form>
            <button className="header__btn-theme">Cambiar tema</button>
        </div>
    )
}

export default Search;