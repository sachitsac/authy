"use client";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Image src={user.picture} alt={user.name} width={30} height={30} />
        <h2>Sachit</h2>
      </div>
    )
  );
}
