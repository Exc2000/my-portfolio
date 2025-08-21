import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, FileText, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", link: "/", icon: Home },
  { label: "Projects", link: "/projects", icon: Briefcase },
  { label: "Resume", link: "/resume", icon: FileText },
  { label: "About", link: "/about", icon: User },
];

const TopNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-6 py-3">
        {/* Brand / Logo */}
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="text-primary">&lt;/&gt;</span> Ali
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.label}
                to={item.link}
                className={cn(
                  "flex items-center gap-1.5 text-sm transition-colors",
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}

          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            variant="ghost" size="icon" className="border shadow-xs"
            
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.link;

              return (
                <Link
                  key={item.label}
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors",
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" /> {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;