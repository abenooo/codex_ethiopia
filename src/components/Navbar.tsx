import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface SubMenuItem {
  href: string;
  title: string;
  description: string;
}

export function NavigationMenuDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuItem[] | null>(
    null
  );

  const handleBackClick = () => {
    setActiveSubMenu(null);
  };

  const renderSubMenu = (items: SubMenuItem[]) => (
    <div className="md:hidden fixed inset-0 bg-white h-screen w-1/2 overflow-auto z-20 mt-10">
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
              <div className="flex justify-between items-center text-left w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                {item.title}
                <span className="ml-auto">{item.description}</span>
                <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">CodeX Ethiopia</div>
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <NavigationMenu className="hidden md:flex space-x-4">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Develop Website</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px]">
                <ul className="grid gap-3 p-4 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem
                      href="/products/ai-assistant"
                      title="AI Assistant"
                    >
                      Cutting-edge AI assistant for businesses.
                    </ListItem>
                    <ListItem
                      href="/products/data-analytics"
                      title="Data Analytics"
                    >
                      Advanced analytics and visualization tools.
                    </ListItem>
                    <ListItem
                      href="/products/cloud-services"
                      title="Cloud Services"
                    >
                      Secure and scalable cloud solutions.
                    </ListItem>
                  </li>
                  <ListItem href="/products/ai-assistant" title="AI Assistant">
                    Cutting-edge AI assistant for businesses.
                  </ListItem>
                  <ListItem
                    href="/products/data-analytics"
                    title="Data Analytics"
                  >
                    Advanced analytics and visualization tools.
                  </ListItem>
                  <ListItem
                    href="/products/cloud-services"
                    title="Cloud Services"
                  >
                    Secure and scalable cloud solutions.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px]">
                <ul className="grid gap-3 p-4 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/solutions/enterprise" title="Enterprise">
                      Tailored solutions for large organizations.
                    </ListItem>
                    <ListItem href="/solutions/startups" title="Startups">
                      Tools and services for startups and SMBs.
                    </ListItem>
                    <ListItem href="/solutions/developers" title="Developers">
                      Resources and tools for tech professionals.
                    </ListItem>
                  </li>
                  <ListItem href="/solutions/enterprise" title="Enterprise">
                    Tailored solutions for large organizations.
                  </ListItem>
                  <ListItem href="/solutions/startups" title="Startups">
                    Tools and services for startups and SMBs.
                  </ListItem>
                  <ListItem href="/solutions/developers" title="Developers">
                    Resources and tools for tech professionals.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px]">
                <ul className="grid gap-3 p-4 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/company/about" title="About">
                      Learn about our company and mission.
                    </ListItem>
                    <ListItem href="/company/team" title="Team">
                      Meet our talented team of experts.
                    </ListItem>
                    <ListItem href="/company/careers" title="Careers">
                      Join our team and grow with us.
                    </ListItem>
                  </li>
                  <ListItem href="/company/about" title="About">
                    Learn about our company and mission.
                  </ListItem>
                  <ListItem href="/company/team" title="Team">
                    Meet our talented team of experts.
                  </ListItem>
                  <ListItem href="/company/careers" title="Careers">
                    Join our team and grow with us.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px]">
                <ul className="grid gap-3 p-4 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <ListItem href="/resources/blog" title="Blog">
                      Read our latest articles and insights.
                    </ListItem>
                    <ListItem href="/resources/whitepapers" title="Whitepapers">
                      Download our whitepapers and case studies.
                    </ListItem>
                    <ListItem href="/resources/webinars" title="Webinars">
                      Register for upcoming webinars and events.
                    </ListItem>
                  </li>
                  <ListItem href="/resources/blog" title="Blog">
                    Read our latest articles and insights.
                  </ListItem>
                  <ListItem href="/resources/whitepapers" title="Whitepapers">
                    Download our whitepapers and case studies.
                  </ListItem>
                  <ListItem href="/resources/webinars" title="Webinars">
                    Register for upcoming webinars and events.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[800px]">
                <ul className="grid gap-3 p-4 md:w-[800px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="#" title="Easily Managed by Client">
                    Every page content is easily updated or managed.
                  </ListItem>
                  <ListItem href="#" title="Well Organized Contents">
                    We develop digital contents for clients.
                  </ListItem>
                  <ListItem href="#" title="Responsive">
                    Interactive for end users.
                  </ListItem>
                  <ListItem href="#" title="Compatible to All Devices">
                    Phone, Tablet, Laptops.
                  </ListItem>
                  <ListItem href="#" title="Fast Loading">
                    We deliver tested speed.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/price">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/login">
                <NavigationMenuLink className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Signin
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {menuOpen && (
        <NavigationMenu className="md:hidden fixed inset-0 bg-white h-1/2 w-full overflow-auto z-20 mt-10">
          <NavigationMenuList className="flex flex-col space-y-4 p-4">
            {activeSubMenu ? (
              renderSubMenu(activeSubMenu)
            ) : (
              <>
                <NavigationMenuItem>
                  <button
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                    onClick={() => {
                      setActiveSubMenu([
                        {
                          href: "/products/ai-assistant",
                          title: "AI Assistant",
                          description: "Cutting-edge AI assistant for businesses.",
                        },
                        {
                          href: "/products/data-analytics",
                          title: "Data Analytics",
                          description: "Advanced analytics and visualization tools.",
                        },
                        {
                          href: "/products/cloud-services",
                          title: "Cloud Services",
                          description: "Secure and scalable cloud solutions.",
                        },
                      ]);
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-base font-bold">Develop Website</h3>
                    </div>
                    <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                    onClick={() => {
                      setActiveSubMenu([
                        {
                          href: "/solutions/enterprise",
                          title: "Enterprise",
                          description: "Tailored solutions for large organizations.",
                        },
                        {
                          href: "/solutions/startups",
                          title: "Startups",
                          description: "Tools and services for startups and SMBs.",
                        },
                        {
                          href: "/solutions/developers",
                          title: "Developers",
                          description: "Resources and tools for tech professionals.",
                        },
                      ]);
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-base font-bold">Solutions</h3>
                    </div>
                    <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                    onClick={() => {
                      setActiveSubMenu([
                        {
                          href: "/company/about",
                          title: "About",
                          description: "Learn about our company and mission.",
                        },
                        {
                          href: "/company/team",
                          title: "Team",
                          description: "Meet our talented team of experts.",
                        },
                        {
                          href: "/company/careers",
                          title: "Careers",
                          description: "Join our team and grow with us.",
                        },
                      ]);
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-base font-bold">Company</h3>
                    </div>
                    <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                    onClick={() => {
                      setActiveSubMenu([
                        {
                          href: "/resources/blog",
                          title: "Blog",
                          description: "Read our latest articles and insights.",
                        },
                        {
                          href: "/resources/whitepapers",
                          title: "Whitepapers",
                          description: "Download our whitepapers and case studies.",
                        },
                        {
                          href: "/resources/webinars",
                          title: "Webinars",
                          description: "Register for upcoming webinars and events.",
                        },
                      ]);
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-base font-bold">Resources</h3>
                    </div>
                    <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button
                    className="flex items-center w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                    onClick={() => {
                      setActiveSubMenu([
                        {
                          href: "#",
                          title: "Easily Managed by Client",
                          description: "Every page content is easily updated or managed.",
                        },
                        {
                          href: "#",
                          title: "Well Organized Contents",
                          description: "We develop digital contents for clients.",
                        },
                        {
                          href: "#",
                          title: "Responsive",
                          description: "Interactive for end users.",
                        },
                        {
                          href: "#",
                          title: "Compatible to All Devices",
                          description: "Phone, Tablet, Laptops.",
                        },
                        {
                          href: "#",
                          title: "Fast Loading",
                          description: "We deliver tested speed.",
                        },
                      ]);
                    }}
                  >
                    <div className="flex-grow">
                      <h3 className="text-base font-bold">Features</h3>
                    </div>
                    <FaChevronRight className="ml-2 h-5 w-5 text-gray-500" />
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className="block text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/price">
                    <NavigationMenuLink className="block text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className="block text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className="block text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/login">
                    <NavigationMenuLink className="block text-left p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Signin
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
