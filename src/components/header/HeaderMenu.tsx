// src/components/HeaderMenu.tsx
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom" // atau next/link jika pakai Next.js

export function HeaderMenu() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
      <div className="text-xl font-bold">Skelvio</div>
      
      <nav className="hidden md:flex gap-4">
        <Link to="/" className="text-sm hover:underline">Crypto</Link>
        <Link to="/exchanges" className="text-sm hover:underline">Exchanges</Link>
      </nav>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link to="/">Crypto</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/exchanges">Exchanges</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
