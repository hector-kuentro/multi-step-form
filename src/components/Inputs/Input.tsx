import { FC, InputHTMLAttributes } from 'react'
import styles from './Inputs.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    errorMessage?: string
    isInvalid?: boolean
}

const Input: FC<InputProps> = ({ label, errorMessage, isInvalid, ...props }) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label>{label}</label>}
            {isInvalid && errorMessage && <span>{errorMessage}</span>}
            <input
                {...props}
                aria-invalid={isInvalid}
            />
        </div >
    )
}

export default Input