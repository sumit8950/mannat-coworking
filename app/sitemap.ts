import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/seo";

const routes = [
  "",
  "/about",
  "/gallery",
  "/pricing",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}