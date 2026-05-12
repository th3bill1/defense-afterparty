import { Link } from "react-router";

export function meta() {
	return [{ title: "404" }, { name: "description", content: "Page not found." }];
}

export default function CatchallPage() {
	return (
		<main className="page">
			<div className="container panel">
				<h1>404</h1>
				<p>Nie znaleziono strony / Page not found.</p>
				<p>
					<Link className="nav-link" to="/">
						Wroc na strone glowna / Back to home
					</Link>
				</p>
			</div>
		</main>
	);
}
