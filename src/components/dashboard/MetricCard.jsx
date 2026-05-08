import { COLORS } from '../../constants/colors';
import { Sparkline } from '../common/Sparkline';

export function MetricCard({ label, value, sub, trend, spark }) {
  return (
    <div style={{
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 12,
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
      <span style={{ fontSize: 12, color: COLORS.textMuted, fontWeight: 500 }}>
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: 26, fontWeight: 600, color: COLORS.text }}>
            {value}
          </span>
          {sub && (
            <span style={{ fontSize: 11, color: COLORS.textMuted, marginLeft: 6 }}>
              {sub}
            </span>
          )}
          {trend && (
            <div style={{ marginTop: 2, fontSize: 11, color: trend > 0 ? COLORS.green : COLORS.red }}>
              {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% vs ontem
            </div>
          )}
        </div>
        {spark && (
          <div style={{ width: 80 }}>
            <Sparkline data={[]} />
          </div>
        )}
      </div>
    </div>
  );
}