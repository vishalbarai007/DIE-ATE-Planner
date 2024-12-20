import { createContext } from "react";

// Define the shape of the context
interface ThemeContextType {
  theme: string;
  changeTheme: () => void;
}

// Initialize the context with a default value or `null`
const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;