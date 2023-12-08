"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenCheck, Combine, Home, LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const GlobalNavBarRoutes = () => {
  return (
    <div className="flex gap-x-8 ml-auto">
      <Link href="/">
        <Button size={"sm"} variant={"ghost"}>
          <Home className="h-4 w-4 mr-3" />
          Home
        </Button>
      </Link>
      <Link href="/search">
        <Button size={"sm"} variant={"ghost"}>
          <BookOpenCheck className="h-4 w-4 mr-3" />
          Courses
        </Button>
      </Link>
      <Link href="/blog">
        <Button size={"sm"} variant={"ghost"}>
          <BookOpenCheck className="h-4 w-4 mr-3" />
          Blog
        </Button>
      </Link>
      <Link href="/">
        <Image src="/images/logo/logo.png" alt="logo" width={50} />
      </Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
