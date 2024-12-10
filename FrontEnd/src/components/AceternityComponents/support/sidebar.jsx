import { cn } from "../../../lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp ?? openState;
  const setOpen = setOpenProp ?? setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate
}) => {
  return (
    (<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>)
  );
};

export const SidebarBody = (props) => {
  return (<>
    <DesktopSidebar {...props} />
    <MobileSidebar {...(props)} />
  </>);
};

export const DesktopSidebar = ({
    className,
    children,
    ...props
  }) => {
    const { open, setOpen, animate } = useSidebar();
    return (
      <motion.div
        className={cn(
          "h-full w-[50%] fixed inset-0 z-30 px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800",
          className
        )}
        animate={{
          width: animate ? (open ? "30vw" : "60px") : "30vw",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    );
  };
  
  export const MobileSidebar = ({
    className,
    children,
    ...props
  }) => {
    const { open, setOpen } = useSidebar();
    return (
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col md:hidden bg-neutral-100 dark:bg-neutral-800"
        )}
        {...props}
      >
        <div className="h-10 px-4 flex items-center justify-between">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

export const SidebarLink = ({
  link,
  className,
  ...props
}) => {
  const { open, animate } = useSidebar();
  return (
    (<a
      href={link.href}
      className={cn("flex items-center justify-start gap-2  group/sidebar py-2", className)}
      {...props}>
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0">
        {link.label}
      </motion.span>
    </a>)
  );
};
