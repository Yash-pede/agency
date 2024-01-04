"use client";
import { useTheme } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme } = useTheme();
  setTheme("light")
  return (
    <main className="absolute inset-0 w-full h-screen grid place-items-center">
      {children}
    </main>
  );
}
