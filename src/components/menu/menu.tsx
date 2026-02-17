import { Link } from "@tanstack/react-router";

export function Menu() {
  const menu: { to: string; text: string }[] = [
    { to: "/", text: "Home" },
    { to: "/dogs", text: "Dogs!" },
    { to: "/cats", text: "Cats!" },
  ];

  return (
    <div className="p-2 flex gap-4 border-b">
      {menu.map((item) => (
        <Link className="[&.active]:font-bold" key={item.text} to={item.to}>
          {item.text}
        </Link>
      ))}
    </div>
  );
}
