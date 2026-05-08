import { COLORS } from '../../constants/colors';

export function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.msgs));
  
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80, width: "100%" }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{
            width: "100%",
            background: COLORS.blue,
            borderRadius: "3px 3px 0 0",
            opacity: i === 4 ? 1 : 0.55,
            height: (d.msgs / max) * 72
          }} />
          <span style={{ fontSize: 10, color: COLORS.textMuted }}>{d.day}</span>
        </div>
      ))}
    </div>
  );
}