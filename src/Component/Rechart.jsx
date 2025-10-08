import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",

    pv: 800,
  },
  {
    name: "Page B",

    pv: 967,
  },
  {
    name: "Page C",

    pv: 1098,
  },
  {
    name: "Page D",

    pv: 1200,
  },
  {
    name: "Page E",

    pv: 1108,
  },
];

const Rechart = () => {
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
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
