import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ interaction }) => {
  const text = interaction.filter((i) => i.interactionType === "text").length;
  const call = interaction.filter((i) => i.interactionType === "call").length;
  const video = interaction.filter((i) => i.interactionType === "video").length;

  const data = [
    { name: "Text", value: text },
    { name: "Call", value: call },
    { name: "Video", value: video },
  ];

  const COLORS = ["#3b82f6", "#244d3f", "#22c55e"];

  return (
    <div className="w-full h-75">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
