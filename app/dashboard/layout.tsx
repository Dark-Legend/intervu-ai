import React from "react";
import { AppSideBar } from "./component/sidebar/Sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar/sidebar";
import Provider from "../provider";
import { Header } from "./component/header/Header";
import { Toaster } from "react-hot-toast";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Provider>
      <SidebarProvider>
        <AppSideBar />
        <main className="w-full">
          <SidebarTrigger />
          <Header />
          {children}
          <Toaster />
        </main>
      </SidebarProvider>
    </Provider>
  );
};
export default DashboardLayout;
