import { Label } from "../AceternityComponents/support/label";
import { Input } from "../AceternityComponents/support/input";
import { cn } from "../../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { useContext } from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";


export function SignInFormDemo() {
  const context = useContext(ThemeContext);
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
      <div
        className={cn(
          "max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 z-50",
          context?.theme === 'light'
            ? "bg-neutral-200 text-neutral-800"
            : "bg-black text-neutral-200"
        )}
      >
        <h2 className="font-bold text-xl">
          Welcome to DIE-ATE Planner
        </h2>
        <p className="text-sm max-w-sm mt-2">
          Login to get your Diet Details.
        </p>

        <form className="my-8">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

            <LabelInputContainer>
              <Label htmlFor="lastname" className={cn(
                "h-4 transition",
                context?.theme === 'light' ? "text-neutral-800" : "text-white"
              )}>User name</Label>
              <Input id="Username" placeholder="Gay" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className={cn(
              "h-4 transition",
              context?.theme === 'light' ? "text-neutral-800" : "text-white"
            )}>Email Address</Label>
            <Input id="email" placeholder="hritikasuur@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password" className={cn(
              "h-4 transition",
              context?.theme === 'light' ? "text-neutral-800" : "text-white"
            )}>Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>


          <button
            className={cn(
              `bg-gradient-to-br relative group/btn block w-full ${context?.theme === 'light' ? 'text-black' : 'text-white'} rounded-md h-10 font-medium`,
              context?.theme === 'light'
                ? "from-gray-200 to-white shadow-input"
                : "from-black to-neutral-600"
            )}
            type="submit"
          >
            Sign In &rarr;
            <BottomGradient />
          </button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          <div className="flex flex-col space-y-4">
            <button
              className={cn(
                "relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium transition",
                context?.theme === 'light'
                  ? "bg-gray-50 text-neutral-800 shadow-sm"
                  : "bg-zinc-800 text-white shadow-md"

              )}
              type="submit"
            >
              <IconBrandGithub
                className={cn(
                  "h-4 w-4 transition",
                  context?.theme === 'light' ? "text-neutral-800" : "text-white"
                )}
              />
              <span>{context?.theme === 'light' ? "Yahoo " : "Yahoo "}</span>
              <BottomGradient />
            </button>
            <button
              className={cn(
                "relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium transition",
                context?.theme === 'light'
                  ? "bg-gray-50 text-neutral-800 shadow-sm"
                  : "bg-zinc-800 text-white shadow-md"
              )}
              type="submit"
            >
              <IconBrandGoogle
                className={cn(
                  "h-4 w-4 transition",
                  context?.theme === 'light' ? "text-neutral-800" : "text-white"
                )}
              />
              <span>{context?.theme === 'light' ? "Google" : "Google "}</span>
              <BottomGradient />
            </button>

          </div>
        </form>
      </div>
  );
}

const BottomGradient = () => {
  const context = useContext(ThemeContext)
  return (
    <>
      <span className={`group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent ${context?.theme === 'light' ? 'via-violet-500' : 'via-cyan-500'} to-transparent`} />
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
