import { defineConfig } from "umi";
import {routes} from "./router";

export default defineConfig({
    routes: routes,
    npmClient: 'pnpm',
});