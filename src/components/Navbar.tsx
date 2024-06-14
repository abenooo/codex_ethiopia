import  React, { useState } from "react";
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

export function NavigationMenuDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">CodeX Ethiopia</div>
        <button
          className="block md:hidden text-black"
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
                  </li>
                  <ListItem href="/products/ai-assistant" title="AI Assistant">
                    Cutting-edge AI assistant for businesses.
                  </ListItem>
                  <ListItem href="/products/data-analytics" title="Data Analytics">
                    Advanced analytics and visualization tools.
                  </ListItem>
                  <ListItem href="/products/cloud-services" title="Cloud Services">
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
        <NavigationMenu className="md:hidden">
          <NavigationMenuList className="flex flex-col space-y-2 p-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Develop Website</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-3 p-4">
                  <li className="row-span-3">
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
                  </li>
                  <ListItem href="/products/ai-assistant" title="AI Assistant">
                    Cutting-edge AI assistant for businesses.
                  </ListItem>
                  <ListItem href="/products/data-analytics" title="Data Analytics">
                    Advanced analytics and visualization tools.
                  </ListItem>
                  <ListItem href="/products/cloud-services" title="Cloud Services">
                    Secure and scalable cloud solutions.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-3 p-4">
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
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-3 p-4">
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
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-3 p-4">
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
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-3 p-4">
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
      )}
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
