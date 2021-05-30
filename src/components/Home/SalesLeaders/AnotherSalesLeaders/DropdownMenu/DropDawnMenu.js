import styles from './DropDawnMenu.module.scss'

/**
 * Another sales leaders drop down menu.
 * @param visibility Menu visibility.
 * @param leaders Leaders to show in menu.
 * @param onSelect On leader select.
 */
const DropDawnMenu = ({visibility, leaders, onSelect}) => {

    return (
        <div
            style={{display: visibility ? 'block' : 'none'}}
            className={styles.dropDawnMenu}
        >
            <ul className={styles.dropDawnList}>
                {
                    leaders?.map(leader => {
                        return (
                            <li onClick={() => onSelect(leader.id)} className={styles.dropDawnItem}>
                                <span className={styles.dropDownText}>{leader.product.description}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DropDawnMenu