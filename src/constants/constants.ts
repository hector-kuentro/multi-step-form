import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { AddOn, Plan } from '../types/types'

export const ALL_PLANS: Array<Plan> = [
    {
        id: 1,
        title: 'Arcade',
        price: {
            monthly: 9,
            yearly: 90,
        },
        icon: arcadeIcon
    },
    {
        id: 2,
        title: 'Advanced',
        price: {
            monthly: 12,
            yearly: 120,
        },
        icon: advancedIcon
    },
    {
        id: 3,
        title: 'Pro',
        price: {
            monthly: 15,
            yearly: 150,
        },
        icon: proIcon
    },
]

export const ALL_ADD_ONS: Array<AddOn> = [
    {
        id: 1,
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: {
            monthly: 1,
            yearly: 10,
        }
    },
    {
        id: 2,
        title: 'Largert storage',
        description: 'Extra 1TB of cloud storage',
        price: {
            monthly: 2,
            yearly: 20,
        }
    },
    {
        id: 3,
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: {
            monthly: 2,
            yearly: 20,
        }
    },
]