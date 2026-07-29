import { useEffect, useState } from "react";
import icons from "../data/icons.json";

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}

// Some brand colors are too dark to see on a dark background.
// These get overridden to a light tone in dark mode.
const darkOnDark = new Set<string>(["github", "nextdotjs", "notion", "expo"]);

function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme ?? "dark";
  });
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme ?? "dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return theme;
}

/**
 * Brand icon backed by simple-icons (single-path SVGs).
 * Uses the brand's official hex when no color is passed.
 * Icons in `darkOnDark` are rendered light when the page is in dark mode.
 */
export default function Icon({ name, size = 20, color, className, title }: IconProps) {
  const theme = useTheme();
  const icon = icons[name];
  if (!icon) return null;

  let fill = color ?? `#${icon.hex}`;
  if (!color && darkOnDark.has(name) && theme === "dark") {
    fill = "#e5e3ee";
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      className={className}
      aria-label={title ?? name}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
