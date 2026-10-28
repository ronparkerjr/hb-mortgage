import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X, ChevronDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandMark } from "@/components/BrandMark";
import {
  primaryNav,
  utilityLinks,
  company,
  APPLY_URL,
  type NavGroup,
} from "@/lib/nav";
import { cn } from "@/lib/utils";

/**
 * Scroll to top on click — but only for same-page navigation (e.g. clicking
 * "Home" while already on the home page), where the route does not change and
 * ScrollToTop won't fire. Cross-page navigation is handled by ScrollToTop on
 * route change, so we avoid a smooth/instant scroll conflict here.
 */
const scrollTopOnClick = (to: string) => {
  if (to.includes("#")) return;
  const targetPath = to.split("#")[0] || "/";
  if (targetPath === window.location.pathname) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <NavigationMenuItem className="relative">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          className="relative z-10 flex h-16 items-center gap-1 whitespace-nowrap rounded-md px-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:text-primary xl:px-2.5 xl:text-sm lg:h-[4.5rem]"
        >
          {group.label}
          <ChevronDown
            className={cn(
              "h-3 w-3 shrink-0 transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
        {/* Panel drops straight down from the trigger; the pt-2 bridge keeps
            hover alive so the menu never closes while moving into it. */}
        <div
          className={cn(
            "absolute left-0 top-full z-50 pt-2 transition-opacity duration-150",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <ul className="w-72 overflow-hidden rounded-lg border border-border bg-popover p-2 shadow-xl">
            {group.children.map((child) => {
              const Icon = child.icon;
              const content = (
                <>
                  {Icon && (
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  )}
                  <span className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="text-xs leading-snug text-muted-foreground">
                        {child.description}
                      </span>
                    )}
                  </span>
                </>
              );
              return (
                <li key={child.to}>
                  {child.href ? (
                    <a
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="group/item flex items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      to={child.to}
                      onClick={() => {
                        setOpen(false);
                        scrollTopOnClick(child.to);
                      }}
                      className="group/item flex items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10"
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavigationMenuItem>
  );
}

function MobileAccordion() {
  return (
    <nav className="flex flex-col gap-1" aria-label="Mobile">
      {primaryNav.map((item) =>
        item.group ? (
          <Accordion
            key={item.label}
            type="single"
            collapsible
            className="border-0"
          >
            <AccordionItem value={item.label} className="border-0">
              <AccordionTrigger className="rounded-md px-3 py-3 text-base font-semibold text-foreground hover:no-underline hover:bg-accent/10 [&[data-state=open]]:text-primary">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pb-1">
                <ul className="flex flex-col gap-0.5 pl-2">
                  {item.group.children.map((child) => (
                    <li key={child.to}>
                      {child.href ? (
                        <SheetClose asChild>
                          <a
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                          >
                            {child.label}
                          </a>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            to={child.to}
                            onClick={() => scrollTopOnClick(child.to)}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <SheetClose asChild key={item.label}>
            <Link
              to={item.to!}
              onClick={() => scrollTopOnClick(item.to!)}
              className="rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent/10"
            >
              {item.label}
            </Link>
          </SheetClose>
        ),
      )}
    </nav>
  );
}

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground md:block">
        <div className="container-hb flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Licensed in {company.serviceArea} · NMLS #{company.nmls}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {utilityLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white/80"
              >
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground transition-colors hover:text-white/80"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-hb flex h-16 items-center justify-between gap-2 xl:gap-4 lg:h-[4.5rem]">
          <BrandMark />

          {/* Desktop nav */}
          <NavigationMenu
            className="hidden max-w-none lg:flex"
            aria-label="Primary"
          >
            <NavigationMenuList className="gap-0">
              {primaryNav.map((item) =>
                item.group ? (
                  <DesktopDropdown key={item.label} group={item.group} />
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.to!}
                        onClick={() => scrollTopOnClick(item.to!)}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "h-auto whitespace-nowrap rounded-md px-1.5 py-2 text-xs font-semibold text-foreground/90 hover:bg-transparent hover:text-primary xl:px-2.5 xl:text-sm",
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="quote" size="sm">
              <Link to="/personalized-quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="cta" size="sm">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>

          {/* Mobile: phone + menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label={`Call ${company.phone}`}
            >
              <a href={company.phoneHref}>
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] max-w-sm overflow-y-auto p-0"
              >
                <SheetHeader className="flex-row items-center justify-between border-b border-border px-5 py-4 text-left">
                  <SheetTitle asChild>
                    <BrandMark iconOnly={false} />
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <div className="flex flex-col gap-4 px-3 py-4">
                  <MobileAccordion />
                  <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                    <Button asChild variant="quote" className="w-full">
                      <SheetClose asChild>
                        <Link to="/personalized-quote">
                          Get a Personalized Quote
                        </Link>
                      </SheetClose>
                    </Button>
                    <Button asChild variant="cta" className="w-full">
                      <SheetClose asChild>
                        <a
                          href={APPLY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      </SheetClose>
                    </Button>
                  </div>
                  <a
                    href={company.phoneHref}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    {company.phone}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
