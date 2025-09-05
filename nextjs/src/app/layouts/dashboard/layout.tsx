import type { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Layout Page",
  description: "Examples of layouts",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <h1>Layouts Dashboard</h1>
            <Link href="/layouts/dashboard/settings">Settings</Link>
        <Link href="/layouts/dashboard/address">Address</Link>
        {children}
      </body>
    </html>
  );
}
