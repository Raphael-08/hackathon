"use client";

import Link from "next/link";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site-config";
import { ModeToggle } from "@/components/toggle-theme";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { SideBar } from "@/components/side-bar";
import { Pages } from "@/config/docs-config";

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <header className="sticky left-0 top-0 z-10 w-full ">
      {pathname === "/" && <></>}
      <div className="flex h-12 items-center justify-between border-b border-border px-4 py-2 bg-white/0 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-10">
            <MobileMenu />
            <Link href="/" className="flex items-center gap-5">
              <Image src={"/image.png"} width={40} height={40} alt="PF" className="rounded-full border-2 border-foreground/70"></Image>
              <Balancer
                as={"span"}
                className="truncate text-ellipsis font-bold text-foreground/70"
              >
                {siteConfig.name}
              </Balancer>
            </Link>
            <div className="flex items-center gap-6">
              {Pages.map((page) => {
                const isActive = pathname === page.path;
                return (
                  page.path && (
                    <Link
                      key={page.title}
                      href={page.path}
                      className={cn(
                        "hidden text-foreground/70 transition-colors md:inline-block",
                        isActive && "text-foreground"
                      )}
                    >
                      {page.title}
                    </Link>
                  )
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="xs:hidden flex">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu className="size-4" />
          <span className="sr-only">menu</span>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SideBar setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
