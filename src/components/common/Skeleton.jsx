import { COLORS } from '../../constants/colors';

export function Skeleton({ w = "100%", h = 16, r = 6, style = {} }) {
  return (
    <div style={{
      width: w,
      height: h,
      background: COLORS.border,
      borderRadius: r,
      animation: "pulse 1.5s ease-in-out infinite",
      ...style
    }} />
  );
}