"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./Icons";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";

interface UserAccountNavProps {
  user: string;
}

export const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  const dispatch = useDispatch();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <span className="text-zinc-700 dark:text-foreground text-sm font-medium ">
            {user.split("@")?.[0]}
          </span>
          <Icons.user className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user && <p className="font-medium">{user}</p>}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            dispatch(logout());
          }}
          className="cursor-pointer"
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
