import { ChangeEvent, FC, useContext, useState } from 'react'
import mainStyles from './FormSections.module.scss'
import styles from './PersonalInfo.module.scss'
import Input from '../Inputs/Input'
import { useDebounce, useIsValidEmail } from '../../hooks/hooks'
import { FormContext } from '../../context/Form.context'
import { PersonalInfo as PersonalInfoType } from '../../types/types'
import { isValidString } from '../../helpers/helpers'

const PersonalInfo: FC = () => {

    // Context
    const { personalInfo, changePersonalInfo } = useContext(FormContext)

    // States
    const [payload, setPayload] = useState<PersonalInfoType>(personalInfo)
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
    })

    const isInvalidValidEmail = !useIsValidEmail(payload.email) && isValidString(payload.email)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPayload(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    function handleOnBlur(e: ChangeEvent<HTMLInputElement>) {
        setErrors(prev => ({ ...prev, [e.target.name]: !isValidString(e.target.value) }))
    }

    // Effects
    useDebounce({
        value: payload,
        callback: () => changePersonalInfo(payload)
    })

    return (
        <div className={mainStyles.container}>
            <h2>
                Personal info
            </h2>

            <p>
                Please provide your name, email address and phone number.
            </p>

            <section className={styles.sectionContainer}>
                <Input
                    label='Name'
                    name='name'
                    placeholder='e.g. Stephen King'
                    errorMessage={'This field is required'}
                    isInvalid={errors.name && !isValidString(payload.name)}
                    value={payload.name}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                />

                <Input
                    label='Email Address'
                    name='email'
                    placeholder='e.g. stephenking@lorem.com'
                    type='email'
                    errorMessage={isInvalidValidEmail ? 'Invalid email address' : 'This field is required'}
                    isInvalid={isInvalidValidEmail || (errors.email && !isValidString(payload.email))}
                    value={payload.email}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                />

                <Input
                    label='Phone Number'
                    name='phone'
                    placeholder='e.g. +1 234 567 890'
                    errorMessage='This field is required'
                    isInvalid={errors.phone && !isValidString(payload.phone)}
                    value={payload.phone}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                />
            </section>
        </div>
    )
}

export default PersonalInfo