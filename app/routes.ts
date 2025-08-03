import {
  type RouteConfig,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout/index.ts", [
    route("home", "./pages/home/home.tsx"),
    route("job/:jobId", "./pages/job/index.ts"),
    route("search", "./pages/search/search.tsx"),
  ]),
  ...prefix("auth", [
    route("login", "./pages/auth/login/login.tsx"),
    route("register", "./layouts/RegisterLayout/index.ts", [
      route("term", "./pages/auth/register/term/index.ts"),
      route("role", "./pages/auth/register/role/index.ts"),
      route("verify", "./pages/auth/register/verify/index.ts"),
      route("info", "./pages/auth/register/info/info.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
