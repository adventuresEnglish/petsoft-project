"use client";

import { useSearchContext } from "@/lib/hooks";
import { useState } from "react";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  return (
    <form className="w-full h-full">
      <input
        className="w-fll h-full bg-white/20 rounded-md outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50 px-5"
        placeholder="Search Pets"
        type="search"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}></input>
    </form>
  );
}
