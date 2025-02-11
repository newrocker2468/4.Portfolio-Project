import { Toaster as Sonner } from "sonner";

import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body>
        <main>{children}</main>
        <Sonner />
      </body>
    </html>
  );
}
