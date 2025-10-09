import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Rechart = ({ ratings }) => {
  const data = [...ratings].reverse();
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart layout="vertical" data={data} barCategoryGap={10}>
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="count" barSize={20} fill="#FF8811" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
