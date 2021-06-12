import React, {useEffect, useRef, useState} from 'react'
import styles from './CatalogHeader.module.scss'
import filtersImage from '../../../assets/images/filters.png'

/**
 * Header of catalog page
 */
const CatalogHeader = ({producers, searchTerm, setSearchTerm, setProducerIds}) => {
    const [filtersIsOpened, setFiltersIsOpened] = useState(false)

    const [activeProducers, setActiveProducers] = useState(
        Object.fromEntries(producers.map(manufacturer => [manufacturer.id, false]))
    )

    const activeProducersRef = useRef()

    useEffect(() => {
        if (
            JSON.stringify(activeProducersRef.current) !== JSON.stringify(activeProducers) &&
            activeProducersRef.current &&
            Object.entries(activeProducers)?.length
        ) {
            setProducerIds(Object.entries(activeProducers)
                .filter(producer => producer[1] === true)
                .map(producer => producer[0])
            )
        }
    }, [activeProducers])

    useEffect(() => {
        activeProducersRef.current = activeProducers
    }, [activeProducers])

    const toggleCheckbox = (manufacturerId) => {
        setActiveProducers({
            ...activeProducers,
            [manufacturerId]: !activeProducers[manufacturerId]
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
                >Поиск
                </button>
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
                                producers.map(manufacturer => {
                                    let classes = [styles.customCheckbox]

                                    if (activeProducers[manufacturer.id]) {
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
