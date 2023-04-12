import { FC, useContext } from 'react'
import styles from './FormNavigation.module.scss'
import Button from '../Buttons/Button'
import { FormContext } from '../../context/Form.context'
import { useIsValidEmail } from '../../hooks/hooks'
import { isValidString } from '../../helpers/helpers'

const FormNavigation: FC = () => {

    const {activeStep, isFormSent, handleOnForward, handleOnBackward, setIsFormSent, selectedPlan, personalInfo} = useContext(FormContext)

    const isFirstStep = activeStep === 1
    const isLastStep = activeStep === 4

    const isValidEmail = useIsValidEmail(personalInfo.email)

    const hasValidPersonalInfo = isValidEmail && isValidString(personalInfo.name) && isValidString(personalInfo.phone)

    const isDisabled = (()=>{
        if(activeStep === 1 && !hasValidPersonalInfo) return true
        
        if(activeStep === 2 && selectedPlan.id === 0) return true

        return false
    })()

    function handleConfirmClick() {
        setIsFormSent(true)
    }

    if(isFormSent) return null

    return (
        <div className={styles.formNavigation}>
            {isFirstStep
                ? <div />
                : <Button
                    variant='text'
                    onClick={handleOnBackward}
                >
                    Go back
                </Button>}

            <Button
                onClick={isLastStep ? handleConfirmClick : handleOnForward}
                variant={isLastStep ? 'main' : 'filled'}
                disabled={isDisabled}
            >
                {isLastStep ? 'Confirm' : 'Next step'}
            </Button>
        </div>
    )
}

export default FormNavigation