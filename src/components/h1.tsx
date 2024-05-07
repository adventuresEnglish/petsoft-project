import { Default } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function H1({ children, className }: Default) {
  return (
    <h1 className={cn("font-medium text-2xl leading-6", className)}>
      {children}
    </h1>
  );
}
