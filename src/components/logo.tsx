import logo from "~/assets/react.svg";
import "~/components/logo.css";

export function Logo() {
  return (
    <img
      src={logo}
      width="100%"
      height="100%"
      alt="React"
      className="logo-spin pointer-events-none mx-auto max-h-96 max-w-[24rem]"
    />
  );
}
