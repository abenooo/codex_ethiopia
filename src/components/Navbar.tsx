import * as React from "react";
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
  return (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>TechnovaTech</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Signin
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
