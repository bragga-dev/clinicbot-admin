import { STATUS_MAP } from '../../constants/status';

export function Badge({ status }) {
  const s = STATUS_MAP[status] || STATUS_MAP.finalizado;
  
  return (
    <span style={{
      background: s.bg,
      color: s.color,
      borderRadius: 6,
      padding: "2px 10px",
      fontSize: 11,
      fontWeight: 500,
      whiteSpace: "nowrap"
    }}>
      {s.label}
    </span>
  );
}