export interface NewInvestment {
    initialInvestment: number
    annualInvestment: number
    expectedReturn: number
    duration: number
}

export interface EstimatedInvestment {
        year: number
        interest: number
        valueEndOfYear: number
        annualInvestment: number
        totalInterest: number
        totalAmountInvested: number
}