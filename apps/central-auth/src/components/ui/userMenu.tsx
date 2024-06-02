import { User } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { User as UserIcon } from "lucide-react";

type UserMenuProps = {
  user?: User;
};

export const UserMenu: React.FC<UserMenuProps> = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="overflow-hidden rounded-full"
      >
        <UserIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuLabel>Profile</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <a href="/api/auth/logout">Logout</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
