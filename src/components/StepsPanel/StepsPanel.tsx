import { FC, useContext } from 'react'
import styles from './StepsPanel.module.scss'
import clsx from 'clsx'
import { FormContext } from '../../context/Form.context'

interface Step {
    title: string
}

const ALL_STEPS: Array<Step> = [
    { title: 'YOUR INFO' },
    { title: 'SELECT PLAN' },
    { title: 'ADD-ONS' },
    { title: 'SUMMARY' },
]

const StepsPanel: FC = () => {

    const { activeStep } = useContext(FormContext)

    return (
        <div className={styles.container}>
            {ALL_STEPS.map((step, index) => (
                <Step
                    step={index + 1}
                    activeStep={activeStep}
                    title={step.title}
                />
            ))}
        </div>
    )
}

interface StepProps {
    step: number
    activeStep: number
    title: string
}

const Step: FC<StepProps> = ({ step, activeStep, title }) => {

    const isActive = step === activeStep

    return (
        <div className={clsx(styles.step, isActive && styles.activeStep)}>
            <span>
                {step}
            </span>

            <div>
                <span>STEP {step}</span>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default StepsPanel