import { FC, ReactNode, useContext, useState } from 'react'
import styles from './Form.module.scss'
import StepsPanel from '../StepsPanel/StepsPanel'
import FormNavigation from '../FormNavigation.tsx/FormNavigation'
import PersonalInfo from '../FormSections/PersonalInfo'
import Plans from '../FormSections/Plans'
import AddOns from '../FormSections/AddOns'
import Summary from '../FormSections/Summary'
import { FormContext } from '../../context/Form.context'

const FORM_STAGE: Record<number, ReactNode> = {
    1: <PersonalInfo />,
    2: <Plans />,
    3: <AddOns />,
    4: <Summary />,
}

const Form: FC = () => {

    const { activeStep } = useContext(FormContext)

    return (
        <div className={styles.container}>
            <StepsPanel />

            <div className={styles.form}>
                {FORM_STAGE[activeStep]}

                <FormNavigation/>
            </div>
        </div>
    )
}

export default Form