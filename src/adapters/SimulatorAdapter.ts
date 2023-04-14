import { SimulatorApiI, SimulatorI } from "../models/SimulatorInterface";
import { getMonthlyAmountFormat, getPaymentDateFormat, getTeaFormat, minMaxAmountFormat } from "../utils/SimulatorUtil";

export const getSimulatorAdapter = (simulator: SimulatorApiI): SimulatorI=>{

    return{
        campaignName : simulator.campaign_name,
        currency: simulator.currency,
        maxAmount: simulator.max_amount,
        minAmount:simulator.min_amount,
        maxQuota: simulator.max_quota,
        minqQuota: simulator.min_quota,
        paymentDate: simulator.payment_date,
        tea: simulator.tea,
        monthlyAmount: simulator.monthly_amount,
        monthlyAmountFormat: getMonthlyAmountFormat(simulator.monthly_amount),
        teaFormat: getTeaFormat(simulator.tea),
        paymentDateFormat: getPaymentDateFormat(simulator.payment_date),
        minMaxAmountFormat: minMaxAmountFormat(simulator.min_amount,simulator.max_amount)
    }
}