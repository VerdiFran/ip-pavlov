import styles from './DropDawnMenu.module.scss'

/**
 * Another sales leaders drop down menu.
 * @param visibility Menu visibility.
 * @param leaders Leaders to show in menu.
 */
const DropDawnMenu = ({visibility, leaders}) => {

    return (
        <div
            style={{display: visibility ? 'block' : 'none'}}
            className={styles.dropDawnMenu}
        >
            <ul className={styles.dropDawnList}>
                {
                    leaders.map(leader => {
                        return (
                            <li className={styles.dropDawnItem}>
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