import { Bell, Settings, User, Clock, ConciergeBell, MessageSquare, ChartPie, Utensils } from "lucide-react"
import Button from "../ui/button"
import type React from "react"
import { Link } from "react-router-dom"
type navLinksProps = {
  name: string
  icon: React.ReactElement
  path: string
}

const navLinks: navLinksProps[] = [
  {
    name: "Restoranlar",
    icon: <Utensils size={20} />,
    path: "/restaurants"
  },
  {
    name: "Menu",
    icon: <ConciergeBell size={20} />,
    path: "/menu"
  },
  {
    name: "Tarix",
    icon: <Clock size={20} />,
    path: "/history"
  },
  {
    name: "Xabarlar",
    icon: <MessageSquare size={20} />,
    path: "/messages"
  },
  {
    name: "Statistikalar",
    icon: <ChartPie size={20} />,
    path: "/statistics"
  }
]

export default function NavigationHeader() {
  return (
    <header className="relative w-full h-18 bg-gradient-to-r from-black/50 via-black/90 to-pink-500/90 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-purple-900/30 to-pink-500/10" />

      <div className="relative z-10 flex items-center justify-between h-full px-6">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight cursor-pointer">Nyammm</span>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((navLink) => (
            <Button
              key={navLink.path}
              variant="neon"
              size="sm"
            >
              <span className="mr-2">{navLink.icon}</span>
              {navLink.name}
            </Button>
          ))}
        </nav>

        {/* Right side - User actions */}
        <div className="flex items-center space-x-2">
          <Button variant="neon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="neon" >
            <Settings className="w-5 h-5" />
          </Button>
          <Link to="/login">
            <Button variant="neon" >
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
