import "./logo.css";
import logo from "./logo.svg";

export function Logo() {
  return (
    <img
      alt="React"
      className="logo-spin pointer-events-none mx-auto max-h-96 max-w-[24rem]"
      height="100%"
      src={logo}
      width="100%"
    />
  );
}
