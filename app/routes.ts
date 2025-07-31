import {
  type RouteConfig,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/MainLayout/MainLayout.tsx", [
    route("home", "./pages/home/home.tsx"),
    route("search", "./pages/search/search.tsx"),
  ]),
  ...prefix("auth", [
    route("login", "./pages/auth/login/login.tsx"),
    route("register", "./components/RegisterLayout/RegisterLayout.tsx", [
      route("term", "./pages/auth/register/term/term.tsx"),
      route("role", "./pages/auth/register/role/role.tsx"),
      route("verify", "./pages/auth/register/verify/verify.tsx"),
      route("info", "./pages/auth/register/info/info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
