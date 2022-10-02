import { CSSProperties } from "react";
import { Breakpoints } from "@skynexui/responsive_stylesheet";

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet
  extends Omit<CSSProperties, "backgroundColor" | "fontFamily"> {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any;
}
