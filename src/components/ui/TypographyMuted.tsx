import React from "react";
import { cn } from "../../lib/utils";

interface TypographyMutedProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function TypographyMuted({
  children,
  className,
  ...props
}: TypographyMutedProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}
