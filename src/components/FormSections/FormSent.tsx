import { FC } from 'react'
import styles from './FormSent.module.scss'
import icon from '../../assets/images/icon-thank-you.svg'

const FormSent: FC = () => {
    return (
        <div className={styles.container}>
            <img
                src={icon}
                alt=''
            />

            <span>Thank you!</span>

            <p>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default FormSent