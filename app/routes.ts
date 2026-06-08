import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("/", "routes/layout.tsx", [
		index("routes/landing.tsx"),
		route("faq", "routes/faq.tsx"),
		route("rsvp", "routes/rsvp.tsx"),
		route("contact", "routes/contact.tsx"),
		route("menu", "routes/menu.tsx"),
	]),
	route("*", "routes/catchall.tsx"),
] satisfies RouteConfig;
