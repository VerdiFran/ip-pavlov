import styles from './CompactMenu.module.scss'
import {NavLink} from 'react-router-dom'
import {TO_ABOUT_COMPANY, TO_CATALOG, TO_CONTACTS, TO_HOME, TO_PARTNERS} from '../../../routes'
import React, {useState} from 'react'
import useVisible from '../../../hooks/useVisible'

const CompactMenu = () => {
    const [checked, setChecked] = useState(false)
    const {ref, isVisible, setIsVisible} = useVisible(false, 'click')

    return <>
        <nav className={styles.compactMenu}>
            <input id="menu_toggle" type="checkbox" className={styles.menuToggle} checked={checked}/>
            <label
                htmlFor="menu_toggle"
                className={styles.menuButton}
                onClick={() => setChecked(checked => !checked)}
            >
                <span/>
            </label>
            <ul className={styles.menuBox}>
                <li className={styles.compactMenuItem}>
                    <button
                        onClick={() => setChecked(false)}
                    >
                        <NavLink
                            to={TO_HOME}
                            activeClassName={styles.active}
                            data-text="Главная"
                            exact
                        >Главная</NavLink>
                    </button>
                </li>
                <li className={styles.compactMenuItem}>
                    <button
                        onClick={() => setChecked(false)}
                    >
                        <NavLink
                            to={TO_ABOUT_COMPANY}
                            activeClassName={styles.active}
                            data-text="О компании"
                        >О&nbsp;компании</NavLink>
                    </button>
                </li>
                <li className={styles.compactMenuItem}>
                    <button
                        onClick={() => setChecked(false)}
                    >
                        <NavLink
                            to={TO_CATALOG}
                            activeClassName={styles.active}
                            data-text="Каталог"
                        >Каталог</NavLink>
                    </button>
                </li>
                <li className={styles.compactMenuItem}>
                    <button
                        onClick={() => setChecked(false)}
                    >
                        <NavLink
                            to={TO_CONTACTS}
                            activeClassName={styles.active}
                            data-text="Контакты"
                        >Контакты</NavLink>
                    </button>
                </li>
                <li className={styles.compactMenuItem}>
                    <button
                        onClick={() => setChecked(false)}
                    >
                        <NavLink
                            to={TO_PARTNERS}
                            activeClassName={styles.active}
                            data-text="Партнеры"
                        >Партнеры</NavLink>
                    </button>
                </li>
                <li className={[styles.compactMenuItem, styles.specialItem].join(' ')}>
                    <button
                        onClick={() => {
                            window.open('http://176.119.158.143:9090/api/v1/files/price-list')
                            setChecked(false)
                        }}
                    >Скачать прайс-лист
                    </button>
                </li>
                {/*<li className={[styles.compactMenuItem, styles.specialItem].join(' ')}>
                    <button
                        onClick={() => {
                            setIsVisible(true)
                            setChecked(false)
                        }}
                    >Связаться с нами
                    </button>
                </li>*/}
            </ul>
        </nav>
        {/*{
            isVisible &&
            <div className={styles.modalContainer}>
                <div ref={ref} className={styles.modalWindow}>
                    <ContactUsFormContainer close={() => setIsVisible(false)}/>
                </div>
            </div>
        }*/}
    </>
}

export default CompactMenu