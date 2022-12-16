import React from 'react';
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'

const ButtonGroup = ({ blockClass }: any) => {
    const text = generateBlockClass(styles.text, blockClass)

    return (
        <>
            <div className={text}>
                Se han añadido los productos al carrito!
            </div>
            {/* <div>
                <a href="/">CHECK OUT</a>
            </div>
            <div>
                <button>CONTINUA COMPRANDO</button>
                <a href="/">VER CARRITO</a>
            </div> */}
        </>
    )
}

export default ButtonGroup