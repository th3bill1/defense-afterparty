import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("/", "routes/layout.tsx", [
		index("routes/landing.tsx"),
		route("faq", "routes/faq.tsx"),
		route("contact", "routes/contact.tsx"),
		route("calendar", "routes/calendar.tsx"),
	]),
	route("*", "routes/catchall.tsx"),
] satisfies RouteConfig;
