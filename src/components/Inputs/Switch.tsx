import { FC, useEffect, useState } from 'react'
import styles from './Inputs.module.scss'
import clsx from 'clsx'

interface SwitchProps {
    checked?: boolean
    onChange?: () => void
}

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {

    const [isActive, setIsActive] = useState(checked)

    useEffect(() => {
        setIsActive(checked)
    }, [checked])

    function handleClick() {
        if (onChange) onChange()
        setIsActive(prev => !prev)
    }

    return (
        <div
            className={clsx(styles.switch, isActive && styles.switchActive)}
            onClick={handleClick}
        >
            <div />
        </div>
    )
}

export default Switch