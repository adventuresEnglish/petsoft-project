"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { flushSync } from "react-dom";
import PetForm from "./pet-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function PetButton({
  actionType,
  onClick,
  children,
  disabled,
}: PetButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  if (actionType === "checkout") {
    return (
      <Button
        variant="secondary"
        disabled={disabled}
        onClick={onClick}>
        {children}
      </Button>
    );
  }

  return (
    <Dialog
      open={isFormOpen}
      onOpenChange={setIsFormOpen}>
      <DialogTrigger asChild>
        {actionType === "add" ? (
          <Button size="icon">
            <PlusIcon className="h-6 w-6" />
          </Button>
        ) : (
          <Button variant="secondary">{children}</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {actionType === "add" ? "Add a new Pet" : "Edit Pet"}
          </DialogTitle>
        </DialogHeader>
        <PetForm
          actionType={actionType}
          onFormSubmission={() => flushSync(() => setIsFormOpen(false))} // react batches multiple state updates into one render cycle. FlushSync skips the line
        />
      </DialogContent>
    </Dialog>
  );
}
