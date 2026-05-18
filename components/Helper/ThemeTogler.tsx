"use client";

import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/components/Hoc/Provider";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  const currentTheme =
    theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className={`w-16 h-9 flex items-center rounded-full p-1 transition-all duration-300 ${
        isDark
          ? "bg-zinc-700 justify-end"
          : "bg-zinc-300 justify-start"
      }`}
    >
      <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center transition-all duration-300">
        {isDark ? (
          <Sun className="w-4 h-4 text-white" />
        ) : (
          <Moon className="w-4 h-4 text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggler;