import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./context/useTheme"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent mismatch between hydration and client render
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative border shadow-xs">
          <Sun
            className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-100 rotate-0 opacity-100 dark:scale-0 dark:-rotate-90 dark:opacity-0"
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-0 rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
