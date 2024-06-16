import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem[] | null>(
    null
  );

  const handleBackClick = () => {
    setActiveSubMenu(null);
  };

  const renderSubMenu = (items: SubMenuItem[]) => (
    <div className="flex-1 overflow-auto py-6">
      <button
        className="mb-4 ml-4 mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        onClick={handleBackClick}
      >
        ← Back
      </button>
      <ul className="space-y-2 p-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>
              <div
                className={`flex justify-between items-center text-left w-full p-4 rounded-lg font-medium ${
                  location.pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {item.title}
                <FaChevronRight
                  className={`ml-2 h-5 w-5 ${
                    location.pathname === item.href
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6 container">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <img src={imageSrc} alt="Image Description" width={32} height={32} />
        <span className="hidden lg:flex ">Codex Ethiopia</span>
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
                        ? "text-blue-600 font-bold"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(developWebsiteSubMenu);
                    }}
                  >
                    <HomeIcon className="h-5 w-5" />
                    Develop Website
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500" />
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
                        ? "text-blue-600 font-bold"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(automationSubMenu);
                    }}
                  >
                    <UserIcon className="h-5 w-5" />
                    Automation
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500" />
                  </button>
                  <button
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname.startsWith("/backend") ||
                      location.pathname.startsWith("/blockchain") ||
                      location.pathname.startsWith("/cloud-computing") ||
                      location.pathname.startsWith("/cyber-security") ||
                      location.pathname.startsWith("/iot") ||
                      location.pathname.startsWith("/machine-learning")
                        ? "text-blue-600 font-bold"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    }`}
                    onClick={() => {
                      setActiveSubMenu(technologySubMenu);
                    }}
                  >
                    <PackageIcon className="h-5 w-5" />
                    Service
                    <FaChevronRight className="ml-auto h-5 w-5 text-gray-500" />
                  </button>
                  <Link
                    to="/technology"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all whitespace-nowrap ${
                      location.pathname === "/technology"
                        ? "text-blue-600 font-bold"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    }`}
                  >
                    <MailIcon className="h-5 w-5" />
                    Technology
                  </Link>
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
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
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
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
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
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
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
                  location.pathname === "/technology" ? "text-blue-600 font-bold" : ""
                )}
              >
                Technology
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/about" ? "text-blue-600 font-bold" : ""
                )}
              >
                About Us
              </NavigationMenuLink>
            </Link>
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
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white",
            className
          )}
          {...props}
        >
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <span
            className={`ml-2 ${
              location.pathname === href ? "text-white" : "text-gray-500"
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
