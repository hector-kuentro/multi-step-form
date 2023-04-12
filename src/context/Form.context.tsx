import { FC, ReactNode, createContext, useState } from 'react'
import { AddOn, AddOnsList, Periods, PersonalInfo, Plan } from '../types/types'

const EMPTY_PLAN: Plan = {
    title: '',
    price: {},
    icon: '',
    id: 0
}

const EMPTY_PERSONAL_INFO: PersonalInfo = {
    name: '',
    email: '',
    phone: '',
}

interface ContextModel {
    activeStep: number
    personalInfo: PersonalInfo
    isFormSent: boolean
    selectedPeriod: Periods
    isMonthly: boolean,
    periodSufix: string,
    selectedPlan: Plan,
    selectedAddOns: AddOnsList,
    total: number,
    setIsFormSent: (param: boolean) => void
    handleOnForward: () => void
    handleOnBackward: () => void
    changePeriod: () => void
    setSelectedPlan: (plan: Plan) => void
    handleAddOnClick: (addOn: AddOn, isSelected: boolean) => void
    goToPlans: () => void
    changePersonalInfo: (payload: PersonalInfo) => void
}

const initialState: ContextModel = {
    activeStep: 1,
    personalInfo: EMPTY_PERSONAL_INFO,
    isFormSent: false,
    selectedPeriod: Periods.MONTHLY,
    isMonthly: true,
    periodSufix: 'mo',
    selectedPlan: EMPTY_PLAN,
    selectedAddOns: [],
    total: 0,
    setIsFormSent: () => { },
    handleOnForward: () => { },
    handleOnBackward: () => { },
    changePeriod: () => { },
    setSelectedPlan: () => { },
    handleAddOnClick: () => { },
    goToPlans: () => { },
    changePersonalInfo: () => { },
}

interface Props {
    children: ReactNode
}

export const FormContext = createContext<ContextModel>(initialState)

const FormContextProvider: FC<Props> = ({ children }) => {

    const [activeStep, setActiveStep] = useState(initialState.activeStep)
    const [personalInfo, setPersonalInfo] = useState(initialState.personalInfo)
    const [isFormSent, setIsFormSent] = useState(initialState.isFormSent)
    const [selectedPeriod, setSelectedPeriod] = useState<Periods>(initialState.selectedPeriod)
    const [selectedPlan, setSelectedPlan] = useState<Plan>(initialState.selectedPlan)
    const [selectedAddOns, setSelectedAddOns] = useState<AddOnsList>(initialState.selectedAddOns)

    function handleOnForward() {
        setActiveStep(prev => prev + 1)
    }

    function handleOnBackward() {
        setActiveStep(prev => prev - 1)
    }

    function changePeriod() {
        setSelectedPeriod(prev => prev === Periods.MONTHLY ? Periods.YEARLY : Periods.MONTHLY)
    }

    function handleAddOnClick(addOn: AddOn, isSelected: boolean) {
        if (isSelected) {
            setSelectedAddOns(prev => prev.filter((item) => item.id !== addOn.id))
        } else {
            setSelectedAddOns(prev => [...prev, addOn])
        }
    }

    function goToPlans(){
        setActiveStep(2)
    }

    function changePersonalInfo(payload: PersonalInfo){
        setPersonalInfo(payload)
    }

    const isMonthly = selectedPeriod === Periods.MONTHLY

    const periodSufix = isMonthly ? 'mo' : 'yr'

    const total = (() => {
        let result = 0
        result += selectedPlan.price[selectedPeriod]
        selectedAddOns.forEach(addOn => {
            result += addOn.price[selectedPeriod]
        })
        return result
    })()

    return (
        <FormContext.Provider value={{
            activeStep, isFormSent, setIsFormSent, handleOnForward, handleOnBackward,
            selectedPeriod, changePeriod, isMonthly, periodSufix, selectedPlan, setSelectedPlan,
            selectedAddOns, handleAddOnClick, total, goToPlans, personalInfo, changePersonalInfo
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider