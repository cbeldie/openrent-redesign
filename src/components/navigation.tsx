import * as React from "react";

import { ListItem } from "~/components/list-item";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const packages: { title: string; href: string; description: string }[] = [
  {
    title: "Property Advertising",
    href: "/",
    description: "",
  },
  {
    title: "Full Tenancy Creation",
    href: "/",
    description: "",
  },
  {
    title: "See All Pricing",
    href: "/",
    description: "",
  },
];

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Tenant Referencing",
    href: "/",
    description: "",
  },
  {
    title: "Gas Safety",
    href: "/",
    description: "",
  },
  {
    title: "EPC",
    href: "/",
    description: "",
  },
  {
    title: "Electrical Safety",
    href: "/",
    description: "",
  },
  {
    title: "Rent Collection",
    href: "/",
    description: "",
  },
  {
    title: "Management Plus",
    href: "/",
    description: "",
  },
  {
    title: "Inventory",
    href: "/",
    description: "",
  },
  {
    title: "Photos & Floor Plans",
    href: "/",
    description: "",
  },
  {
    title: "Rent Insurance",
    href: "/",
    description: "",
  },
  {
    title: "Building Insurance",
    href: "/",
    description: "",
  },
  {
    title: "Accompanied Viewings",
    href: "/",
    description: "",
  },
  {
    title: "Legal Support",
    href: "/",
    description: "",
  },
  {
    title: "Buy to Let Mortgage Support",
    href: "/",
    description: "",
  },
  {
    title: "No-Fault Eviction Notices",
    href: "/",
    description: "",
  },
];

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 bg-white p-3">
              <ListItem href="/" title="Landlords" />
              <ListItem href="/" title="Tenants" />
              <ListItem href="/" title="OpenRent" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing & Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 divide-y bg-white p-4">
              <div>
                <p className="text-sm font-bold">Packages</p>
                {packages.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </div>
              <div className="pt-2">
                <p className="text-sm font-bold">Services</p>
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </div>
              <p className="pt-2 text-sm text-zinc-400">
                Tenants don&apos;t pay admin fees
              </p>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Manage</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 bg-white p-3">
              <ListItem href="/" title="Dashboard" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button className="bg-green-600 hover:bg-green-700">
            Add listing
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/cristibeldie.png" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span>Cristian</span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap-3 bg-white p-3">
              <ListItem href="/" title="Edit profile" />
              <ListItem href="/" title="Switch account" />
              <ListItem href="/" title="Log out" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { Navigation };
