// Charts
import { VictoryPie, VictoryLabel } from "victory";

//Context
import { useGLobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGLobalState();

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpense / totalIncome) * 100
  );

  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Gastos", y: totalExpensesPercentage },
        { x: "ingresos", y: totalIncomesPercentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={0}
          style={{
            fill: "white",
          }}
        />
      }
    />
  );
}

export default ExpenseChart;
