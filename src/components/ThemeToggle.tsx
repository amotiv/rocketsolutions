"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
        <div className="flex space-x-1">
           <div className="h-8 w-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg inline-flex">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === "light"
            ? "bg-white dark:bg-slate-900 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-transparent"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Sun className="h-4 w-4" />
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === "dark"
            ? "bg-navy-dark text-primary shadow-sm"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Moon className="h-4 w-4" />
        Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          theme === "system"
            ? "bg-white dark:bg-slate-900 dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-transparent"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Monitor className="h-4 w-4" />
        System
      </button>
    </div>
  );
}
