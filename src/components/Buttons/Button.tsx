import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Buttons.module.scss'
import clsx from 'clsx'

type Variants = 'text' | 'filled' | 'main' | 'link'

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants
}

const Button: FC<ButtonsProps> = ({ variant, ...props }) => {

    if (variant === 'text') return (
        <button
            className={clsx(styles.text, props.className)}
            {...props}
        >
            {props.children}
        </button>
    )
    
    if (variant === 'main') return (
        <button
            className={clsx(styles.main, props.className)}
            {...props}
        >
            {props.children}
        </button>
    )
    
    if (variant === 'link') return (
        <button
            className={clsx(styles.link, props.className)}
            {...props}
        >
            {props.children}
        </button>
    )

    return (
        <button
            className={clsx(styles.filled, props.className)}
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button