"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast, useToast } from "./ui/use-toast";
import TypeShuffle from "@/lib/typeshuffle";

const Newsletter = () => {
  const { toast } = useToast();
  return (
    <div className="max-sm:px-4 flex flex-col justify-start  w-full ">
      <SectionTitle title="Newsletter" />
      <div className="font-mono border  py-8 rounded-lg rounded-r-none space-y-6 dark:border-kt-gray-900 border-kt-gray-100">
        <h3 className="text-center p-6 dark:text-kt-gray-200 text-kt-gray-900 uppercase">
          Get notified when i write something new or launch a new project right
          into your inbox.
        </h3>

        <form className="w-3/4 mx-auto flex" action="" method="post">
          <Input
            className="placeholder:text-left placeholder:text-kt-gray-500 placeholder:text-[14px] placeholder:rounded-r-none placeholder:border-r-0 "
            type="email"
            placeholder="Enter your email"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toast({
                title: "Service Not Connected",
                description:
                  "This has not been connected to any service yet. Please check back later",
                variant: "destructive",
              });
            }}
            className="bg-kt px-4 ml-2 rounded-md min-w-fit text-kt-gray-900"
            type="submit"
          >
            <TypeShuffle effect="fx1" triggerOnHover triggerOnce>
              Subscribe
            </TypeShuffle>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
