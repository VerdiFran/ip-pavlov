import React, {useEffect, useState} from 'react'
import styles from './CatalogHeader.module.scss'
import filtersImage from '../../../assets/images/filters.png'

/**
 * Header of catalog page
 */
const CatalogHeader = ({manufacturers, searchTerm, setSearchTerm, setProducerIds, handleSearch}) => {
    const [filtersIsOpened, setFiltersIsOpened] = useState(false)

    const [manufacturersActive, setManufacturersActive] = useState(
        Object.fromEntries(manufacturers.map(manufacturer => [manufacturer.id, false]))
    )

    useEffect(() => {
        setProducerIds(Object
            .entries(manufacturersActive)
            .filter(manufacturer => manufacturer[1] === true)
            .map(manufacturer => manufacturer[0])
        )
    }, [manufacturersActive])

    const toggleCheckbox = (manufacturerId) => {
        setManufacturersActive({
            ...manufacturersActive,
            [`${manufacturerId}`]: !manufacturersActive[manufacturerId]
        })
    }

    return (
        <div className={styles.catalogHeader}>
            <div className={styles.searchContainer}>
                <input
                    className={styles.searchField}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
                <button
                    className={styles.searchButton}
                    onClick={() => {
                        handleSearch(searchTerm)
                    }}
                >Поиск</button>
            </div>
            <div className={styles.filtersContainer}>
                <div
                    className={styles.filtersButton}
                    onClick={() => setFiltersIsOpened(!filtersIsOpened)}
                >
                    <img src={filtersImage} alt="" width="20px" height="20px"/>
                    <span>Фильтры</span>
                </div>
                {
                    filtersIsOpened && <div className={styles.filterContainer}>
                        <span className={styles.filterTitle}>Производитель: </span>
                        <div className={styles.filterValues}>
                            {
                                manufacturers.map(manufacturer => {
                                    let classes = [styles.customCheckbox]

                                    if (manufacturersActive[manufacturer.id]) {
                                        classes.push(styles.active)
                                    } else {
                                        classes = [styles.customCheckbox]
                                    }

                                    return <div className={styles.filterValueContainer}>
                                        <span
                                            className={classes.join(' ')}
                                            onClick={() => toggleCheckbox(manufacturer.id)}
                                        />
                                        <input
                                            id={manufacturer.id}
                                            name="manufacturer"
                                            type="checkbox"
                                            value={manufacturer.id}
                                            className={styles.filterCheckbox}
                                        />
                                        <label
                                            htmlFor={manufacturer.id}
                                            className={styles.filterValueLabel}
                                        >{manufacturer.name}</label>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CatalogHeader
