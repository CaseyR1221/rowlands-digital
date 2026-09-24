import type { CSSProperties } from "react";

// Email clients don't support CSS custom properties, so the brand tokens are
// restated here as literals rather than referenced from globals.css.
export const emailColors = {
  background: "#F8F8F5",
  surface: "#FFFFFF",
  foreground: "#172022",
  mutedForeground: "#586466",
  primary: "#274C5B",
  accent: "#4F7C73",
  border: "#DDE3E1",
} as const;

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const body: CSSProperties = {
  backgroundColor: emailColors.background,
  color: emailColors.foreground,
  fontFamily,
  margin: 0,
  padding: "32px 0",
};

export const container: CSSProperties = {
  backgroundColor: emailColors.surface,
  border: `1px solid ${emailColors.border}`,
  margin: "0 auto",
  maxWidth: "560px",
  padding: "32px",
  width: "100%",
};

export const eyebrow: CSSProperties = {
  color: emailColors.accent,
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  margin: "0 0 8px",
  textTransform: "uppercase",
};

export const heading: CSSProperties = {
  color: emailColors.foreground,
  fontSize: "22px",
  fontWeight: 600,
  lineHeight: 1.3,
  margin: "0 0 4px",
};

export const paragraph: CSSProperties = {
  color: emailColors.foreground,
  fontSize: "16px",
  lineHeight: 1.6,
  margin: "0 0 16px",
};

export const label: CSSProperties = {
  color: emailColors.mutedForeground,
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  margin: "0 0 2px",
};

export const link: CSSProperties = {
  color: emailColors.primary,
  textDecoration: "underline",
};

export const hr: CSSProperties = {
  border: "none",
  borderTop: `1px solid ${emailColors.border}`,
  margin: "24px 0",
};

export const footer: CSSProperties = {
  color: emailColors.mutedForeground,
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
};
