"use client";

import { docsConfig } from "@/config/docs-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

interface SideBarProps {
  setOpen?: (open: boolean) => void;
}

export const SideBar = ({ setOpen }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 py-2">
      {docsConfig.map((section, _) => (
        <div key={section.title} className="flex flex-col items-start gap-1">
          <h2 className="px-2 text-base">{section.title}</h2>
          <div className="flex w-full flex-col items-start">
            {section.pages &&
              section.pages.map((page, _) => (
                <Link
                  href={page?.path || "/"}
                  key={page.title}
                  onClick={() => setOpen?.(false)}
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "h-8 w-full justify-start px-2 transition-all",
                    {
                      "bg-accent text-accent-foreground":
                        pathname === page.path,
                      "text-muted-foreground": pathname !== page.path,
                    }
                  )}
                >
                  {page.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
