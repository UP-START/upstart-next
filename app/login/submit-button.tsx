"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
  );
}

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
