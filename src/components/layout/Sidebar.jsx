import { COLORS } from '../../constants/colors';

const NAV_ITEMS = [
  { id: "dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Dashboard" },
  { id: "patients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "Pacientes" },
  { id: "chat", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: "Conversas" },
];

export function Sidebar({ active, onNav, botOnline }) {
  return (
    <div style={{
      width: 220,
      background: COLORS.bgSidebar,
      borderRight: `1px solid ${COLORS.border}`,
      display: "flex",
      flexDirection: "column",
      padding: "20px 12px",
      gap: 4,
      flexShrink: 0
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px 20px" }}>
        <div style={{
          width: 32,
          height: 32,
          background: COLORS.blueDim,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${COLORS.blue}44`
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.blue} strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <span style={{ color: COLORS.text, fontWeight: 600, fontSize: 14 }}>ClinicBot</span>
      </div>
      
      {NAV_ITEMS.map(n => (
        <button
          key={n.id}
          onClick={() => onNav(n.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 10px",
            borderRadius: 8,
            border: "none",
            background: active === n.id ? COLORS.blueDim : "transparent",
            color: active === n.id ? COLORS.blueText : COLORS.textMuted,
            cursor: "pointer",
            fontSize: 13,
            fontWeight: active === n.id ? 600 : 400,
            textAlign: "left",
            width: "100%",
            transition: "all .15s"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={n.icon} />
          </svg>
          {n.label}
        </button>
      ))}
      
      <div style={{ marginTop: "auto", padding: "12px 10px", background: "#111", borderRadius: 10, border: `1px solid ${COLORS.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: botOnline ? COLORS.green : COLORS.red,
            boxShadow: botOnline ? `0 0 6px ${COLORS.green}88` : "none"
          }} />
          <span style={{ fontSize: 12, color: COLORS.textMuted }}>
            Bot {botOnline ? "online" : "offline"}
          </span>
        </div>
      </div>
    </div>
  );
}