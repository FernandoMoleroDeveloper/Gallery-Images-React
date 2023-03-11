import React from "react"
import "./Search.css"
import { ThemeContext } from "../../App"
import { themes } from "../../App"

const Search = (props) => {

    const searchRef = React.useRef()

    const onSubmit = (event, text) => {
        event.preventDefault()
        props.searchImage(text)
    }

   const {themeState, setThemeState} = React.useContext(ThemeContext);

    return (
        <div className="header">
            <form onSubmit={(event) => onSubmit(event, searchRef.current.value)}>
            <input className="header__input" placeholder="introduce un texto de búsqueda" ref={searchRef} type="text"></input>
            
            </form>
            <button className="header__btn-theme" onClick={() => setThemeState(themeState === themes.white ? themes.color : themes.white)} >Cambiar tema</button>
        </div>
    )
}

export default Search;