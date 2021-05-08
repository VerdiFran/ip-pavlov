import React from 'react'
import styles from './AboutCompany.module.scss'

/**
 * Component with information about company
 * @returns {JSX.Element}
 * @constructor
 */
const AboutCompany = () => {
    return (
        <div>
            <article className={['simpleText', styles.textBlock].join(' ')}>
                <h1 className="heading">О компании</h1>
                <p>
                    Здравствуйте, дорогие покупатели. ИП Павлов уже несколько десятков лет радует вас поставками
                    различной продукции.
                </p>
                <p>
                    За время, которое мы находимся на рынке мы успели доказать качество предоставляемых нами услуг,
                    совершили более десяти тысяч успешных сделок и поэтому знаем свое дело.
                </p>
                <p>
                    Мы предоставляем более 600 пунктов различных товаров, которые вы можете найти в прайс-листе, и это
                    количество постоянно растет, а вместе с ним растет и количество наших партнеров.
                </p>
                <p>
                    Мы с радостью обсудим с вами все возникшие вопросы по телефону 8 (800) 255-25-65
                </p>
            </article>
        </div>
    )
}

export default AboutCompany
