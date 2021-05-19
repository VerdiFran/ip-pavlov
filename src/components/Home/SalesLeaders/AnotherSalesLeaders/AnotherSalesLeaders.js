import styles from './AnotherSalesLeaders.module.scss'
import Arrow from './Arrow/Arrow'
import DropDawnMenu from './DropdownMenu/DropDawnMenu'
import {useState} from 'react'

/**
 * Component with button for open drop down menu with another sales leaders.
 * @param leaders Another leaders.
 */
const AnotherSalesLeaders = ({leaders}) => {
    const [dropDawnVisibility, setDropDawnVisibility] = useState(false)

    return (
        <div
            onMouseLeave={() => setDropDawnVisibility(false)}
        >
            <div
                className={styles.salesLeadersCard}
                onClick={() => { setDropDawnVisibility(!dropDawnVisibility)}}
            >
                <div className={styles.anotherLeadersButton}>
                    <div className={styles.anotherLeadersText}>другие лидеры продаж</div>
                    <Arrow/>
                </div>
            </div>
            <DropDawnMenu
                visibility={dropDawnVisibility}
                leaders={leaders}
            />
        </div>
    )
}

export default AnotherSalesLeaders