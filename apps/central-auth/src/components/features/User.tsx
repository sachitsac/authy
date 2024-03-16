"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Profile from "./Profile";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Button>Checking...</Button>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome Sachit! <a href="/api/auth/logout">Logout</a>
        <Profile />
      </div>
    );
  }

  return (
    <Button asChild>
      <Link href="/api/auth/login">
        Lets get started <ArrowRightIcon className="ml-2" />
      </Link>
    </Button>
  );
}
