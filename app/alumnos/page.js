import { products } from "../../lib/products";

export default function StudentsPage() {
  return (
    <main className="simplePage">
      <section className="dashboard">
        <aside>
          <img src="/assets/logo-kaloso.png" alt="Kaloso" />
          <strong>Mi biblioteca</strong>
          <span>Mis cursos</span>
          <span>Descargas</span>
          <span>Certificados</span>
        </aside>

        <div>
          <h1>Hola, alumno 👋</h1>
          <p>Cuando conectemos usuarios reales, acá van a aparecer los cursos comprados.</p>
          <div className="libraryGrid">
            {products.map((product) => (
              <article key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <span>{product.id === "pack-completo" ? "Disponible" : "Bloqueado"}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
