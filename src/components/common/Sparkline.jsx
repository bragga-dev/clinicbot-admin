import { COLORS } from '../../constants/colors';

export function Sparkline({ data }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min || 1)) * 100;
    return `${x},${y}`;
  }).join(" ");
  
  return (
    <svg viewBox="0 0 100 100" style={{ width: "100%", height: 40, display: "block" }} preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={COLORS.blue}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}