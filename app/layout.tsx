import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Builder Center | Birendra Sasmal",
  description: "Join the AWS Builder community and connect with builders, resources, and learning opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
