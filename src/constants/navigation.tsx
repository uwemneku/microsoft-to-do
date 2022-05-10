import React from "react";
import {
  SunIcon,
  StarIcon,
  ChartSquareBarIcon,
  UserIcon,
  FlagIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { NavLinkProps } from "../components/NavItem";

export const navDetails: NavLinkProps[] = [
  { label: "My Day", icon: SunIcon, color: "#c88a9d", to: "/myData" },
  { label: "Important", icon: StarIcon, color: "#b55372", to: "/important" },
  {
    label: "Planned",
    icon: ChartSquareBarIcon,
    color: "#546671",
    to: "/planned",
  },
  {
    label: "Assigned to me",
    icon: UserIcon,
    color: "#347d5e",
    to: "/assigned",
  },
  { label: "Flagged email", icon: FlagIcon, color: "#c24f4a", to: "/flagged" },
  { label: "Tasks", icon: HomeIcon, color: "#63737d", to: "/tasks" },
];
