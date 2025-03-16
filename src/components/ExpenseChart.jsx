// Charts
import { VictoryPie, VictoryLabel } from "victory";
import { useEffect, useState } from "react";

//Context
import { useGLobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGLobalState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  // Evitar división por cero
  const totalExpensesPercentage =
    totalIncome === 0 ? 0 : Math.round((totalExpense / totalIncome) * 100);

  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  // Ajustar el tamaño del gráfico según el tamaño de la pantalla
  const chartWidth = windowWidth < 768 ? 280 : 350;

  // Datos para el gráfico
  const chartData = [
    { x: "Gastos", y: totalExpensesPercentage || 1 }, // Usar al menos 1 para evitar gráficos vacíos
    { x: "Ingresos", y: totalIncomesPercentage || 1 },
  ];

  return (
    <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl overflow-hidden shadow-md">
      <div className="bg-zinc-900/50 border-b border-zinc-700 p-[24px]">
        <h3 className="text-xl font-bold text-gray-200">
          Distribución de Gastos
        </h3>
      </div>

      <div className="p-5">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="relative">
            <VictoryPie
              width={chartWidth}
              height={chartWidth}
              padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
              colorScale={["#e74c3c", "#2ecc71"]}
              data={chartData}
              animate={{
                duration: 200,
              }}
              labels={() => null} // Quitar etiquetas del gráfico
              innerRadius={70} // Hacer un gráfico tipo dona
              style={{
                data: {
                  filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.3))",
                },
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-xs text-gray-400">Balance</p>
              <p className="text-xl font-bold text-white">
                {totalExpensesPercentage}%
              </p>
              <p className="text-xs text-gray-400">Gastos</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6 grid grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <div>
                <p className="text-sm text-gray-300">Ingresos</p>
                <p className="text-lg font-medium text-green-400">
                  {totalIncomesPercentage}%
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              <div>
                <p className="text-sm text-gray-300">Gastos</p>
                <p className="text-lg font-medium text-red-400">
                  {totalExpensesPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseChart;
