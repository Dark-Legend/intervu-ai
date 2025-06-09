import {
  CalendarCheck,
  LayoutDashboard,
  ListEnd,
  Receipt,
  Settings2,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  {
    title: "Scheduled Interview",
    url: "/dashboard/scheduled-interviews",
    icon: CalendarCheck,
  },
  { title: "All Interviews", url: "/dashboard/all-interviews", icon: ListEnd },
  { title: "Billing", url: "#", icon: Receipt },
  { title: "Settings", url: "#", icon: Settings2 },
];
