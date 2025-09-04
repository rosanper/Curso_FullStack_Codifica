import { Link } from "react-router-dom"
import { useUser } from "../context/UserContext"
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from "react";


function Headear(){

    const { user, logout } = useUser();
    const {theme,toggleTheme} = useContext(ThemeContext)
    

    return(
        <>
            <header>
                <div>
                    <Link to={'/'}><h2>RecomendaFilmes</h2></Link>
                </div>
                <div className="flex-row">
                    {user ? (
                        <div className="flex-row">
                            <p>Olá, {user}!</p>
                            <button onClick={logout}>Sair</button>
                        </div>    
                    ):(
                        <Link to={'/Login'}><button>Login</button></Link>
                    )}
                    <div>
                        <button onClick={toggleTheme}>Tema {theme}</button>
                    </div>
                </div>
                
            </header>
        
        </>
    )


}

export default Headear