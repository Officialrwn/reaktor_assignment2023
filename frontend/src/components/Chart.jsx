const data = [
  { battery: 0.7, design: 1, useful: 0.9, speed: 0.67, weight: 0.8 },
  { battery: 0.6, design: 0.9, useful: 0.8, speed: 0.7, weight: 0.6 }
];
const chartSize = 450;
const numberOfScales = 10;
const scale = value => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="#143306"
    stroke="#AFFF8D"
    strokeWidth="0.4"
  />
);

const middleOfChart = (chartSize / 2).toFixed(4);

const RadarChart = props => {
  const groups = [];
  const scales = [];
  for (let i = numberOfScales; i > 0; i--) {
    scales.push(scale(i));
  }
  groups.push(<g key={`scales`}>{scales}</g>);
return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={chartSize}
      height={chartSize}
      viewBox={`0 0 ${chartSize} ${chartSize}`}
    >
			<g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
    </svg>
  );
};
export default RadarChart;