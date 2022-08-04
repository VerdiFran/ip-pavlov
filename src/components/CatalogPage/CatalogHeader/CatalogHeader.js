import React, {useEffect, useRef, useState} from 'react'
import styles from './CatalogHeader.module.scss'
import filtersImage from '../../../assets/images/filters.png'
import {useLocation} from 'react-router-dom'

const CatalogHeader = ({producers, searchTerm, setSearchTerm, setProducerIds}) => {
    const [filtersIsOpened, setFiltersIsOpened] = useState(false)

    const { search } = useLocation()

    const [activeProducers, setActiveProducers] = useState()

    useEffect(() => {
        console.log({search})

        const query = new URLSearchParams(search)
        const producerId = query.get('producerId')

        setActiveProducers(Object.fromEntries(producers.map(manufacturer => {
            return [manufacturer.id, manufacturer.id == producerId]
        })))
    }, [search, producers])

    useEffect(() => {
        console.log(activeProducers);
    }, [activeProducers])

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
