export const Widget = `
    type Widget {
        type: String
        chartData: ChartData

        """
        正数为增长，负数为下降
        """
        increase: Float

        currentAmount: Float
    }

    type ChartData {
        date: [ String ]
        amount: [ Float ]
    }
`;
