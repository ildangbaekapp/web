import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("auth", [
    route("login", "./pages/auth/login.tsx"),
    route("register", "./components/Layout/RegisterLayout.tsx", [
      route("term", "./pages/auth/register/term/term.tsx"),
      route("role", "./pages/auth/register/role/role.tsx"),
      route("verify", "./pages/auth/register/verify/verify.tsx"),
      route("info", "./pages/auth/register/info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
