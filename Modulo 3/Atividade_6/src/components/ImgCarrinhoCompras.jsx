import { useContext, useState } from "react"
import { ContadorContext } from '../contexts/ContadorContext'
import { FaShoppingCart } from "react-icons/fa"
import styles from "../styles/ImgCarrinhoCompras.module.css"

function ImgCarrinhoCompras(){

    const { contador } = useContext(ContadorContext)

    return(
        <>
            <div className={styles.container}>
                <FaShoppingCart className={styles.icone} />
                <span className={styles.valor}>{contador}</span>          
            </div>
        </>
    )
}

export default ImgCarrinhoCompras