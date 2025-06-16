"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar/sidebar";
import { SIDEBAR_ITEMS } from "./constant";
import { Button } from "@/components/ui/button/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logout from "../../LogOut";
import { Plus } from "lucide-react";

export const AppSideBar: React.FC = () => {
  const url = usePathname();
  return (
    <Sidebar className="w-64">
      <SidebarHeader>
        <h1 className="text-black text-4xl font-semibold text-center">
          <span className="text-emerald-400">Intervu</span> AI
        </h1>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <Button>
            <Link className="w-full" href="/dashboard/create-interview">
              <span className="flex items-center gap-3">
                <Plus />
                Create New Interview
              </span>
            </Link>
          </Button>
        </SidebarMenu>
        <SidebarMenu className="flex flex-col gap-3 mt-10">
          {SIDEBAR_ITEMS?.map((item) => (
            <SidebarMenuItem key={item?.title}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "p-5 hover:bg-emerald-100/50 hover:text-emerald-600",
                  item?.url === url && "bg-emerald-100/70"
                )}
              >
                <Link href={item?.url}>
                  <item.icon
                    className={cn(
                      "hover:text-emerald-600",
                      item?.url === url && "text-emerald-700"
                    )}
                  />
                  <span
                    className={cn(
                      "font-semibold",
                      item?.url === url && "font-bold text-emerald-700"
                    )}
                  >
                    {item?.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarFooter className="mt-36">
          <Logout />
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};
