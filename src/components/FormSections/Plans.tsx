import { FC, useContext } from 'react'
import mainStyles from './FormSections.module.scss'
import styles from './Plans.module.scss'
import clsx from 'clsx'
import Switch from '../Inputs/Switch'
import { FormContext } from '../../context/Form.context'
import { ALL_PLANS } from '../../constants/constants'
import { Plan } from '../../types/types'

const Plans: FC = () => {
    
    // Context
    const { isMonthly, changePeriod, setSelectedPlan } = useContext(FormContext)

    function handlePlanClick(plan: Plan) {
        setSelectedPlan(plan)
    }

    return (
        <div className={mainStyles.container}>
            <h2>
                Select your plan
            </h2>

            <p>
                You have the option of monthly or yearly billing.
            </p>

            <section className={styles.plansContainer}>
                {ALL_PLANS.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        onClick={handlePlanClick}
                    />
                ))}
            </section>

            <section className={styles.periodSelection}>
                <span className={clsx(isMonthly && styles.periodActive)}>
                    Monthly
                </span>
                <Switch
                    checked={!isMonthly}
                    onChange={changePeriod}
                />
                <span className={clsx(!isMonthly && styles.periodActive)}>
                    Yearly
                </span>
            </section>
        </div>
    )
}

interface PlanCardProps {
    plan: Plan
    onClick: (plan: Plan) => void
}

const PlanCard: FC<PlanCardProps> = ({ plan, onClick }) => {
    
    // Context
    const {selectedPlan, selectedPeriod, periodSufix, isMonthly} = useContext(FormContext)

    const isSelected = selectedPlan.id === plan.id

    function handleClick() {
        onClick(plan)
    }

    return (
        <div
            className={clsx(styles.planCard, isSelected && styles.selected)}
            onClick={handleClick}
        >
            <img
                src={plan.icon}
                alt=''
            />

            <div>
                <span>{plan.title}</span>
                <span>${plan.price[selectedPeriod]}/{periodSufix}</span>
                {!isMonthly && <p>2 months free</p>}
            </div>
        </div>
    )
}

export default Plans