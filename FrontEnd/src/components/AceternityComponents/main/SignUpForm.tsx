import { handleGoogleLoginWithRedirect } from "../../../../firebase";

"use client";
import React, { useState } from "react";
import { Label } from "../support/label";
import { Input } from "../support/input";
import { cn } from "../../../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";


export function SignupFormDemo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={cn(
        "max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input",
        isDarkMode
          ? "bg-neutral-200 text-neutral-800"
          : "bg-black text-neutral-200"
      )}
    >
      <button
        className="mb-4 p-2 rounded-md bg-blue-500 text-white"
        onClick={toggleTheme}
      >
        Switch to {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>

      <h2 className="font-bold text-xl">
        Welcome to DIE-ATE Planner
      </h2>
      <p className="text-sm max-w-sm mt-2">
        Login to get your Diet Details.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className={cn(
                "h-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}>First name</Label>
            <Input id="firstname" placeholder="Hritik" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className={cn(
                "h-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}>Last name</Label>
            <Input id="lastname" placeholder="Gay" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className={cn(
                "h-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}>Email Address</Label>
          <Input id="email" placeholder="hritikasuur@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className={cn(
                "h-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}>Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirm-password" className={cn(
                "h-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}>Confirm Password</Label>
          <Input id="confirm-password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className={cn(
            "bg-gradient-to-br relative group/btn block w-full text-white rounded-md h-10 font-medium",
            isDarkMode
              ? "from-neutral-900 to-neutral-600 shadow-input"
              : "from-black to-neutral-600"
          )}
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        <div className="flex flex-col space-y-4">
          <button
            className={cn(
              "relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium transition",
              isDarkMode
                ? "bg-gray-50 text-neutral-800 shadow-sm"
                : "bg-zinc-800 text-white shadow-md"

            )}
            type="submit"
          >
            <IconBrandGithub
              className={cn(
                "h-4 w-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}
            />
            <span>{isDarkMode ? "Yahoo " : "Yahoo "}</span>
            <BottomGradient />
          </button>
          <button
            className={cn(
              "relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium transition",
              isDarkMode
               ? "bg-gray-50 text-neutral-800 shadow-sm"
                : "bg-zinc-800 text-white shadow-md"
            )}
            type="submit"
            onClick={handleGoogleLoginWithRedirect}
          >
            <IconBrandGoogle
              className={cn(
                "h-4 w-4 transition",
                isDarkMode ? "text-neutral-800" : "text-white"
              )}
            />
            <span>{isDarkMode ? "Google" : "Google "}</span>
            <BottomGradient />
          </button>

        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
