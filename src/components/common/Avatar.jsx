import { COLORS } from '../../constants/colors';

export function Avatar({ initials, size = 36, color = COLORS.blue }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: COLORS.blueDim,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.35,
      fontWeight: 600,
      color: COLORS.blueText,
      flexShrink: 0
    }}>
      {initials}
    </div>
  );
}