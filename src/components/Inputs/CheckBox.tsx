import { FC, InputHTMLAttributes } from 'react'
import styles from './Inputs.module.scss'
import clsx from 'clsx'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {

}

const CheckBox: FC<CheckBoxProps> = ({ ...props }) => {
    return (
        <input
            type='checkbox'
            className={clsx(styles.checkbox, props.className)}
            {...props}
        />
    )
}

export default CheckBox