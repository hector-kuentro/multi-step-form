import { FC, useContext } from 'react'
import mainStyles from './FormSections.module.scss'
import styles from './AddOns.module.scss'
import clsx from 'clsx'
import CheckBox from '../Inputs/CheckBox'
import { ALL_ADD_ONS } from '../../constants/constants'
import { AddOn } from '../../types/types'
import { FormContext } from '../../context/Form.context'

const AddOns: FC = () => {

    return (
        <div className={mainStyles.container}>
            <h2>
                Pick add-ons
            </h2>

            <p>
                Add-ons help enhance your gaming experience.
            </p>

            <section className={styles.list}>
                {ALL_ADD_ONS.map((addOn, index) => (
                    <AddOnCard
                        key={addOn.id}
                        addOn={addOn}
                    />
                ))}
            </section>
        </div>
    )
}

interface PlanCardProps {
    addOn: AddOn
}

const AddOnCard: FC<PlanCardProps> = ({ addOn }) => {

    // Context
    const { selectedPeriod, periodSufix, selectedAddOns, handleAddOnClick } = useContext(FormContext)

    const isSelected = selectedAddOns.findIndex(item => item.id === addOn.id) !== -1

    function handleClick() {
        handleAddOnClick(addOn, isSelected)
    }

    return (
        <div
            className={clsx(styles.addOnCard, isSelected && styles.selected)}
            onClick={handleClick}
        >
            <div>
                <CheckBox
                    checked={isSelected}
                />

                <div>
                    <span>{addOn.title}</span>
                    <p>{addOn.description}</p>
                </div>
            </div>

            <span>+${addOn.price[selectedPeriod]}/{periodSufix}</span>
        </div>
    )
}

export default AddOns