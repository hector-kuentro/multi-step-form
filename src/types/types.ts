export interface PersonalInfo {
    name: string
    email: string
    phone: string
}

export interface Plan {
    id: number
    title: string
    price: Record<string, number>
    icon: string
}

export interface AddOn {
    id: number
    title: string
    description: string
    price: Record<string, number>
}

export enum Periods {
    MONTHLY = 'monthly',
    YEARLY = 'yearly'
}

export type AddOnsList = Array<AddOn>