"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGit } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => { }}
        className="w-1/2"
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => { }}
        className="w-1/2"
      >
        <FaGit className="h-5 w-5" />
      </Button>
    </div>
  );
};
