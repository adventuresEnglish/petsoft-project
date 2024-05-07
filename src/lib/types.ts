import { Pet } from "@prisma/client";

export type PetEssentials = Omit<
  Pet,
  "id" | "userId" | "createdAt" | "updatedAt"
>;

export type AuthFormProps = {
  type: "logIn" | "signUp";
};

export type Default = {
  children: React.ReactNode;
  className?: string;
};
