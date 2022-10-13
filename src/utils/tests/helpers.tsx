import { render, RenderResult } from '@testing-library/react';
import ThemeProvider from '@src/theme/ThemeProvider';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);
