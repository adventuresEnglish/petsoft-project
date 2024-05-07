"use client";

import { AuthFormProps } from "@/lib/types";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function AuthFormBtn({ type }: AuthFormProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {type === "logIn" ? "Log In" : "Sign Up"}
    </Button>
  );
}
