import { makeRouteHandler } from "@keystatic/next/route-handler";
import { isAdminConfigured } from "@/lib/admin";
import config from "../../../../../keystatic.config";

const notConfigured = () =>
  Response.json(
    { error: "The admin panel is not set up yet. Follow ADMIN.md to connect GitHub." },
    { status: 503 },
  );

const handlers = isAdminConfigured()
  ? makeRouteHandler({ config })
  : { GET: notConfigured, POST: notConfigured };

export const { GET, POST } = handlers;
