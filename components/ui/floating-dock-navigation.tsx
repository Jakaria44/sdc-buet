"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Info, Calendar, Users, Mail, FileText } from "lucide-react"

export function FloatingDockNavigation() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <Info className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Activities",
      icon: <Calendar className="h-full w-full" />,
      href: "#activities",
    },
    {
      title: "Join",
      icon: <Users className="h-full w-full" />,
      href: "#join",
    },
    {
      title: "Form",
      icon: <FileText className="h-full w-full" />,
      href: "/form",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full" />,
      href: "#contact",
    },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-slate-800/50 border-cyan-500/30"
        mobileClassName="bg-slate-800/50 border-cyan-500/30"
      />
    </div>
  )
}
