import { cn } from "@/lib/utils";
import { Default } from "@/lib/types";

export default function H1({ children, className }: Default) {
  return (
    <h1 className={cn("font-medium text-2xl leading-6 my-8", className)}>
      {children}
    </h1>
  );
}
