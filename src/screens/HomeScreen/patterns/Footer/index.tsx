import Box from "@src/components/Box";
import Text from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        height: "120px",
        width: "100%",
        paddingHorizontal: "24px",
        paddingVertical: "24px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Text variant="body2">Feito por Felipe Marinho</Text>
    </Box>
  );
}
