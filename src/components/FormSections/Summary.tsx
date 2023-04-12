import { FC, useContext } from 'react'
import mainStyles from './FormSections.module.scss'
import styles from './Summary.module.scss'
import Button from '../Buttons/Button'
import FormSent from './FormSent'
import { FormContext } from '../../context/Form.context'

const PERIOD = {
    monthly: 'per month',
    yearly: 'per year'
}

const Summary: FC = () => {

    const { isFormSent, selectedPlan, selectedPeriod, periodSufix, selectedAddOns, total, goToPlans } = useContext(FormContext)

    const hasAddOns = selectedAddOns.length > 0

    if (isFormSent) return (
        <FormSent />
    )

    return (
        <div className={mainStyles.container}>
            <h2>
                Finishing up
            </h2>

            <p>
                Double-check everything looks OK before confirming.
            </p>

            <section className={styles.summary}>
                <div className={styles.planSummary}>
                    <div>
                        <span>{selectedPlan.title} ({selectedPeriod})</span>
                        <Button
                            variant='link'
                            onClick={goToPlans}
                        >
                            Change
                        </Button>
                    </div>

                    <span>${selectedPlan.price[selectedPeriod]}/{periodSufix}</span>
                </div>

                {hasAddOns && <hr />}

                <div className={styles.addOnsSummary}>
                    {selectedAddOns.map(addOn => (
                        <div key={addOn.id}>
                            <span>{addOn.title}</span>
                            <span>+${addOn.price[selectedPeriod]}/{periodSufix}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.total}>
                <span>Total ({PERIOD[selectedPeriod]})</span>
                <span>+${total}/{periodSufix}</span>
            </section>
        </div>
    )
}

export default Summary