import base from "@mkvlrn/config/eslint-vite";

export default [
  ...base,

  {
    ignores: ["node_modules", "dist"],
  },
];
