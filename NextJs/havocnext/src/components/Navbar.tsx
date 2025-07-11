"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib/utils";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 space-x-8", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Servics">
        <div className="flex flex-col space-y-4">
        <HoveredLink href="/courses">All Courses</HoveredLink>
        <HoveredLink href="/individual">Basic Music Theory</HoveredLink>
            <HoveredLink href="/team">Advanced Composition</HoveredLink>
            <HoveredLink href="/enterprise">Song Writing</HoveredLink>
            <HoveredLink href="/enterprise">Music Production</HoveredLink>

        </div>
        </MenuItem>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar