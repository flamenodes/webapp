"use client";
import * as React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
export function NavMenu({ items }) {
    return (<NavigationMenu>
      <NavigationMenuList>
        {items.map((item, index) => (<NavItem key={index} {...item}/>))}
      </NavigationMenuList>
    </NavigationMenu>);
}
function NavItem({ title, href, children, description, className }) {
    // If it's a simple link without children
    if (href && !children) {
        return (<NavigationMenuItem className={className}>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link to={href}>{title}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>);
    }
    // If it has children (dropdown menu)
    if (children) {
        return (<NavigationMenuItem className={className}>
        <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className={children.length <= 3 ? "w-96" : "grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]"}>
            {children.map((child, index) => (<ListItem key={index} title={child.title} href={child.href}>
                {child.description}
              </ListItem>))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>);
    }
    return null;
}
function ListItem({ title, children, href, ...props }) {
    return (<li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>);
}
//# sourceMappingURL=NavMenu.js.map