import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <main className="flex flex-col h-screen bg-background font-roboto-condensed text-foreground overflow-hidden">
      <div className="p-2 flex gap-4">
        <Link className="[&.active]:font-bold" to="/">
          Home
        </Link>
        <Link className="[&.active]:font-bold" to="/dogs">
          Dogs!
        </Link>
      </div>
      <hr />
      <div className="flex flex-1 min-h-0">
        <Outlet />
      </div>
    </main>
  );
}
