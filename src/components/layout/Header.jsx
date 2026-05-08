import { COLORS } from '../../constants/colors';
import { Avatar } from '../common/Avatar';

export function Header({ title, sub, onLogout }) {
  return (
    <div style={{
      height: 56,
      background: COLORS.bgSidebar,
      borderBottom: `1px solid ${COLORS.border}`,
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      justifyContent: "space-between",
      flexShrink: 0
    }}>
      <div>
        <span style={{ color: COLORS.text, fontWeight: 600, fontSize: 15 }}>
          {title}
        </span>
        {sub && (
          <span style={{ color: COLORS.textMuted, fontSize: 12, marginLeft: 10 }}>
            {sub}
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: COLORS.green,
          boxShadow: `0 0 6px ${COLORS.green}88`
        }} />
        <span style={{ fontSize: 12, color: COLORS.textMuted }}>
          {new Date().toLocaleDateString('pt-BR')}
        </span>
        <Avatar initials="AD" size={30} />
        <button onClick={onLogout} style={{
          background: "transparent",
          border: `1px solid ${COLORS.border}`,
          borderRadius: 6,
          color: COLORS.textMuted,
          padding: "4px 12px",
          fontSize: 12,
          cursor: "pointer"
        }}>
          Sair
        </button>
      </div>
    </div>
  );
}