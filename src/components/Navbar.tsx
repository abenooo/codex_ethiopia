import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaChevronRight } from "react-icons/fa";
import imageSrc from "../assets/image.png";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./DarkTheme";

interface SubMenuItem {
  href: string;
  title: string;
}

const developWebsiteSubMenu: SubMenuItem[] = [
  { href: "/ecommerce", title: "Ecommerce" },
  { href: "/business-website", title: "Business website" },
  { href: "/blog", title: "Blog" },
  { href: "/entertainment", title: "Entertainment" },
  { href: "/personal-website", title: "Personal website" },
  { href: "/portfolio", title: "Portfolio" },
  { href: "/education", title: "Education" },
  { href: "/nonprofit-website", title: "Nonprofit website" },
  { href: "/membership-website", title: "Membership website" },
];

const automationSubMenu: SubMenuItem[] = [
  { href: "/appium", title: "Appium" },
  { href: "/katalon-studio", title: "Katalon Studio" },
  { href: "/selenium", title: "Selenium" },
  { href: "/cucumber", title: "Cucumber" },
  { href: "/tricentis-tosca", title: "Tricentis Tosca" },
  { href: "/lambdatest", title: "LambdaTest" },
  { href: "/robot-framework", title: "Robot Framework" },
  { href: "/testrigor", title: "TestRigor, Inc." },
  { href: "/ranorex", title: "Ranorex" },
];

const technologySubMenu: SubMenuItem[] = [
  { href: "/backend", title: "Backend" },
  { href: "/blockchain", title: "Blockchain" },
  { href: "/cloud-computing", title: "Cloud Computing" },
  { href: "/cyber-security", title: "Cyber Security" },
  { href: "/iot", title: "Internet of Things" },
  { href: "/machine-learning", title: "Machine Learning" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem[] | null>(null);
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("vite-ui-theme");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleBackClick = () => {
    setActiveSubMenu(null);
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    navigate(href);
  };

  const renderSubMenu = (items: SubMenuItem[]) => (
    <div className="flex-1 overflow-auto py-6">
      <button
        className="mb-4 ml-4 mt-4 text-primary bg-gray-100 dark:bg-gray-900 hover:text-dark font-semibold"
        onClick={handleBackClick}
      >
        ← Back
      </button>
      <ul className="space-y-2 p-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleLinkClick(item.href)}
              className={`flex justify-between items-center text-left w-full p-4 rounded-lg font-medium ${
                location.pathname === item.href
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {item.title}
              <FaChevronRight
                className={`ml-2 h-5 w-5 ${
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6 container">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <span className="lg:hidden">Codex Ethiopia</span>
        <img src={imageSrc} alt="Image Description" width={32} height={32} />
        <span className="hidden lg:flex">Codex Ethiopia</span>
      </Link>
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white dark:bg-gray-950">
          <div className="flex h-full max-h-screen flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800">
              <span>Codex Ethiopia</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </div>
            {activeSubMenu ? (
              renderSubMenu(activeSubMenu)
            ) : (
              <nav className="flex-1 overflow-auto py-6">
                <div className="grid gap-4 px-6">
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname.startsWith("/ecommerce") ||
                      location.pathname.startsWith("/business-website") ||
                      location.pathname.startsWith("/blog") ||
                      location.pathname.startsWith("/entertainment") ||
                      location.pathname.startsWith("/personal-website") ||
                      location.pathname.startsWith("/portfolio") ||
                      location.pathname.startsWith("/education") ||
                      location.pathname.startsWith("/nonprofit-website") ||
                      location.pathname.startsWith("/membership-website")
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(developWebsiteSubMenu);
                    }}
                  >
                    <HomeIcon className="h-5 w-5" />
                    Develop Website
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname.startsWith("/appium") ||
                      location.pathname.startsWith("/katalon-studio") ||
                      location.pathname.startsWith("/selenium") ||
                      location.pathname.startsWith("/cucumber") ||
                      location.pathname.startsWith("/tricentis-tosca") ||
                      location.pathname.startsWith("/lambdatest") ||
                      location.pathname.startsWith("/robot-framework") ||
                      location.pathname.startsWith("/testrigor") ||
                      location.pathname.startsWith("/ranorex")
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(automationSubMenu);
                    }}
                  >
                    <UserIcon className="h-5 w-5" />
                    Automation
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname.startsWith("/backend") ||
                      location.pathname.startsWith("/blockchain") ||
                      location.pathname.startsWith("/cloud-computing") ||
                      location.pathname.startsWith("/cyber-security") ||
                      location.pathname.startsWith("/iot") ||
                      location.pathname.startsWith("/machine-learning")
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(technologySubMenu);
                    }}
                  >
                    <PackageIcon className="h-5 w-5" />
                    Service
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname === "/technology"
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => handleLinkClick("/technology")}
                  >
                    <MailIcon className="h-5 w-5" />
                    Technology
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname === "/pricing"
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => handleLinkClick("/pricing")}
                  >
                    <PriceIcon className="h-5 w-5" />
                    Pricing
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname === "/about"
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => handleLinkClick("/about")}
                  >
                    <AboutIcon className="h-5 w-5" />
                    About Us
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname === "/login"
                        ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    }`}
                    onClick={() => handleLinkClick("/login")}
                  >
                    <SignInIcon className="h-5 w-5" />
                    Signin
                  </button>

                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full "
                    onClick={toggleTheme}
                  >
                    {theme === "light" ? (
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    ) : (
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden lg:flex container">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Develop Website</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {developWebsiteSubMenu.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Automation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {automationSubMenu.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Service</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {technologySubMenu.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/technology">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/technology"
                    ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                    : ""
                )}
              >
                Technology
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/pricing">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/pricing"
                    ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                    : ""
                )}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/about"
                    ? "text-primary bg-gray-100 dark:bg-gray-900 font-bold"
                    : ""
                )}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="ml-10 text-center w-full">
              <Link to="/login">
                <NavigationMenuLink>Login</NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="outline"
              size="icon"
              className="ml-16 text-center w-full"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              ) : (
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }, ref) => {
  const location = useLocation();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href || "#"} // Provide a default value for href
          className={cn(
            "flex items-center justify-between rounded-md p-3 leading-none no-underline outline-none transition-colors",
            location.pathname === href
              ? "bg-primary text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white",
            className
          )}
          {...props}
        >
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <span
            className={`ml-2 ${
              location.pathname === href ? "text-white" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" ry="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
// price icon
function PriceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}
// about icon
function AboutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}
// sign in icon
function SignInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" /> {/* Outer square */}
      <path d="M12 7l5 5-5 5" /> {/* Arrow */}
      <path d="M17 12H7" /> {/* Line that extends the arrow across the box */}
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
