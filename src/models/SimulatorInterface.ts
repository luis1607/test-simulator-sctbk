export interface SimulatorApiI {
    campaign_name: string,
    min_quota: number,
    max_quota: number,
    max_amount: number,
    min_amount: number,
    tea: number,
    payment_date: string,
    currency: string,
    monthly_amount:number
}

export interface SimulatorI {
    campaignName: string,
    minqQuota: number,
    maxQuota: number,
    maxAmount: number,
    minAmount: number,
    tea: number,
    paymentDate: string,
    currency: string,
    monthlyAmount:number,
    monthlyAmountFormat:string
    teaFormat:string,
    paymentDateFormat?:string,
    minMaxAmountFormat?:string
}

export interface SimulatorContextI {
    simulator?: SimulatorI,
    getSimulator?: (a?:number,b?:number) => {},
}