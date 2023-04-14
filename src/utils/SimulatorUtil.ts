import { MONTHS } from "../constants/Dates"
import { TIPE_CURRENCY } from "../constants/TipeCurrency"

export const getMonthlyAmountFormat = (amountMonthly:number):string=>{
    return `${TIPE_CURRENCY.PEN} ${amountMonthly.toFixed(2)}`
}

export const getTeaFormat = (tea:number):string=>{
    return `${tea.toFixed(2)} %`
}

export const getPaymentDateFormat = (date:string):string =>{
    const dateActually = new Date(date)
    return `${dateActually.getDate()} ${MONTHS[dateActually.getMonth()].slice(0,3)}.`
}

export const minMaxAmountFormat = (minAmount:number,maxAmount:number) :string =>{
    return `Mínimo S/1,500 - Máximo S/ 19,600`
}