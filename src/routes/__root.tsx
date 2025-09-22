import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <main className="bg-background font-roboto-condensed text-foreground">
      <div className="p-2 flex gap-2">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>{" "}
        <Link className="[&.active]:font-bold" to="/dogs">
          Dogs!
        </Link>
      </div>
      <hr />
      <div className="flex h-screen ">
        <Outlet />
      </div>
    </main>
  );
}
