"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface PrimaryIconProps {
  outlineIcon: React.ReactNode;
  hoverIcon: React.ReactNode;
  clickFunction: "open" | "copy";
}

const PrimaryIcon = ({
  outlineIcon,
  hoverIcon,
  clickFunction,
}: PrimaryIconProps) => {
  const [hover, setHover] = useState(false);
  const { toast } = useToast();

  //   Open Mail
  const openMail = () => {
    window.open("mailto:makeitrealpc@gmail.com");
  };
  //   Copy Mail
  const copyMail = () => {
    if (process.env.NEXT_PUBLIC_EMAIL) {
      navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL);

      toast({
        title: "Email Copied",
        description: `${process.env.NEXT_PUBLIC_EMAIL} copied to  your clipboard`,
        variant: "success",
      });
    } else {
      toast({
        title: "Email Not Found!",
        description: `Something went wrong, please try again later`,
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={clickFunction === "open" ? openMail : copyMail}
      className="group  p-3 aspect-square h-fit w-fit rounded-2xl "
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      variant={"outline"}
    >
      {hover ? hoverIcon : outlineIcon}
    </Button>
  );
};

export default PrimaryIcon;
