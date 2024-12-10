import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../support/sidebar";
import { IconArrowLeft, IconBrandTabler, IconBrain, IconUserBolt } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export function SidebarDemo() {
  const links = [
    { label: "Dashboard", href: "#", icon: <IconBrandTabler className="icon" /> },
    { label: "Profile", href: "#", icon: <IconUserBolt className="icon" /> },
    { label: "Ask AI", href: "#", icon: <IconBrain className="icon" /> },
    { label: "Logout", href: "#", icon: <IconArrowLeft className="icon" /> },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody open={open} setOpen={setOpen} className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
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
      Acet Labs
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
