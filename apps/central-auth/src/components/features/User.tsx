"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";

export default function User() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Button>Checking...</Button>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <p className="mb-5">Welcome {user.name}!</p>
        <Button asChild>
          <Link href="/dashboard">
            Go to Dashboard <DoubleArrowRightIcon className="ml-2" />
          </Link>
        </Button>
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
