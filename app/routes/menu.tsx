export function meta() {
  return [
    { title: "Menu" },
    { name: "description", content: "Menu zostanie udostępnione wkrótce." },
  ];
}

export default function LandingPage() {
    return (
        <section className="section-title">
            <div className="temporary-content">
                <h1>Menu</h1>
                <p>Menu zostanie udostępnione wkrótce.</p>
            </div>
        </section>
    );
}