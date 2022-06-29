import { useLocalStorage } from "./useLocalStorage"
import { useMedia } from "./useMedia"

export declare type ColorScheme = "dark" | "light" | "auto"

export function useDark(
  key = "colorScheme",
  defaultColorScheme: ColorScheme = "auto"
) {
  const prefersDarkMode = useMedia("(prefers-color-scheme: dark)")
  const [colorScheme, setColorScheme] = useLocalStorage(key, defaultColorScheme)

  const isDark = () =>
    colorScheme() === "auto" ? prefersDarkMode() : colorScheme() === "dark"

  createEffect(() => {
    if (isDark()) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  })

  const toggleDark = () => {
    setColorScheme(isDark() ? "light" : "dark")
  }

  return {
    isDark,
    toggleDark
  }
}
