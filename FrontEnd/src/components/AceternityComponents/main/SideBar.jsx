import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../support/sidebar";
import { IconArrowLeft, IconBrandTabler, IconBrain, IconUserBolt } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { useContext } from 'react';
import ThemeContext from "../../../contexts/theme/ThemeContext";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="icon" /> },
    { label: "Profile", href: "/profile", icon: <IconUserBolt className="icon" /> },
    { label: "Ask AI", href: "#", icon: <IconBrain className="icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="icon" /> },
  ];
  const [open, setOpen] = useState(false);
  const contextTheme = useContext(ThemeContext);

  return (
    <div className="flex h-screen w-full">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody open={open} setOpen={setOpen} className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
            <div className="flex items-center mt-5">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={contextTheme?.theme === 'dark'}
                  onChange={contextTheme?.changeTheme}
                />
                <div
                  className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-500
                             peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none 
                             before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full 
                             before:bg-white before:transition-all before:translate-x-1 peer-checked:before:translate-x-6"
                ></div>
                <span className={`ml-3 text-sm font-medium ${contextTheme.theme === 'light' ? 'text-black': 'text-white'} dark:text-gray-300`}>
                  {contextTheme?.theme === 'light' ? "Light Mode" : "Dark Mode"}
                </span>
              </label>
            </div>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => (
  <a href="#" className="logo">
    <div className="logo-icon" />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      DIE-ATE Planner
    </motion.span>
  </a>
);

export const LogoIcon = () => (
  <a href="#" className="logo-icon-container">
    <div className="logo-icon" />
  </a>
);

const Dashboard = () => (
  <div className="flex flex-1 bg-white dark:bg-neutral-900 p-4">
    <div className="w-full h-full flex flex-col gap-4">
      <div className="flex gap-4">
        {[...new Array(4)].map((_, i) => (
          <div key={i} className="h-20 flex-1 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
      <div className="flex flex-1 gap-4">
        {[...new Array(2)].map((_, i) => (
          <div key={i} className="flex-1 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);
