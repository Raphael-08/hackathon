import { SiteHeader } from "@/components/layouts/site-header";

export default function ChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <>
          <SiteHeader />
          {children}
          </>
  );
}
