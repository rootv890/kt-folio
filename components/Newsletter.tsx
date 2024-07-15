"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast, useToast } from "./ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  return (
    <div className="max-sm:px-4 flex flex-col justify-start  w-full ">
      <SectionTitle title="Newsletter" />
      <div className="font-mono border  py-8 rounded-lg space-y-6 dark:border-kt-gray-900 border-kt-gray-100">
        <h3 className="text-center p-6 dark:text-kt-gray-200 text-kt-gray-900 uppercase">
          Get notified when i write something new or launch a new project right
          into your inbox.
        </h3>

        <form className="w-3/4 mx-auto flex" action="" method="post">
          <Input
            className="placeholder:text-center placeholder:text-kt-gray-500 placeholder:text-[18px]"
            type="email"
            placeholder="Enter your email"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              toast({
                title: "Service Not Connected",
                description:
                  "This has not been connected to any service yet. Please check back later",
                variant: "destructive",
              });
            }}
            className="bg-kt"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
