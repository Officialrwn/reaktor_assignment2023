const chartSize = 500;
const numberOfScales = 10;
const scale = value => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / numberOfScales) * chartSize) / 2}
    fill="#313E50"
    stroke="#AFFF8D"
    strokeWidth="0.4"
  />
);

const middleOfChart = (chartSize / 2).toFixed(4);

const RadarChart = (props) => {
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