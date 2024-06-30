import { useAuth } from "../redux/features/auth/authSlice";
import { Icons } from "./Icons";
import { UserAccountNav } from "./UserAccountNav";
import { ModeToggle } from "./ui/mode-toggle";

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 inset-x-0 h-fit  bg-zinc-100 dark:bg-background border-b border-b-border z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <div className="flex gap-2 items-center">
          <Icons.logo className="h-6 w-6 sm:h-8 sm:w-8" />
          <p className="hidden text-zinc-700 dark:text-foreground text-sm font-medium md:block">
            Corrodo
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <UserAccountNav user={user} />
        </div>
      </div>
    </div>
  );
};
