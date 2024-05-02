"use server";

import prisma from "@/lib/db";
import { PetEssentials } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { Pet } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addPet(pet: PetEssentials) {
  await sleep(1000);
  try {
    await prisma.pet.create({
      data: pet,
    });
  } catch (error) {
    return {
      message: "An error occurred while adding the pet.",
    };
  }

  revalidatePath("/app", "layout");
}

export async function editPet(petId: Pet["id"], newPetData: PetEssentials) {
  await sleep(1000);
  try {
    await prisma.pet.update({
      where: {
        id: petId,
      },
      data: newPetData,
    });
  } catch (error) {
    return {
      message: "An error occurred while editing the pet.",
    };
  }
  revalidatePath("/app", "layout");
}

export async function deletePet(id: Pet["id"]) {
  await sleep(1000);

  try {
    await prisma.pet.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return {
      message: "An error occurred while checking out the pet.",
    };
  }
  revalidatePath("/app", "layout");
}
