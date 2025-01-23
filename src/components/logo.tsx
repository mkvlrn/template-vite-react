import logo from "~/assets/react.svg";

export function Logo() {
  return (
    <img
      src={logo}
      width="100%"
      height="100%"
      alt="React"
      className="pointer-events-none mx-auto max-h-96 max-w-[24rem] animate-logo-spin"
    />
  );
}
