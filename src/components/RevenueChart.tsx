import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
} from "recharts";
import type { ChartDataPoint } from "../types";

interface RevenueChartProps {
  data: ChartDataPoint[];
  type: "line" | "bar";
}

const RevenueChart = ({ data, type }: RevenueChartProps) => {
  const yFormatter = (value: number): string =>
    `$${(value / 1000).toFixed(0)}k`;

  const sharedProps = {
    data,
    margin: { top: 5, right: 20, left: 10, bottom: 5 },
  };

  const axes = (
    <>
      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
      <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
      <YAxis tickFormatter={yFormatter} tick={{ fontSize: 12, fill: "#64748b" }} />
      <Tooltip
        formatter={(value) =>
          typeof value === "number" ? `$${value.toLocaleString()}` : value
        }
      />
      <Legend />
    </>
  );

  return (
    <ResponsiveContainer width="100%" height={280}>
      {type === "line" ? (
        <LineChart {...sharedProps}>
          {axes}
          <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: "#6366f1", r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      ) : (
        <BarChart {...sharedProps}>
          {axes}
          <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default RevenueChart;
