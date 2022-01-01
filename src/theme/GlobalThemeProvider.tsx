import { PropsWithChildren } from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import font, { fontSize, fontWeight, lineHeight } from '@theme/font';
import color from '@theme/color';

export default function GlobalThemeProvider({ children }: PropsWithChildren<unknown>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const theme: Theme = { font, fontSize, lineHeight, fontWeight, color };