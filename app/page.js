import { products } from "../lib/products";

const PHONE = "5491178985081";
const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export default function HomePage() {
  const pack = products[0];

  return (
    <main>
      <a className="whatsapp" href={wa("Hola Kaloso, quiero consultar por el Pack Completo")} target="_blank">☏</a>

      <section className="hero">
        <div className="orb orbA" />
        <div className="orb orbB" />

        <nav className="nav">
          <a className="brand" href="/">
            <img src="/assets/logo-kaloso.png" alt="Cursos Kaloso" />
            <span>Cursos Kaloso</span>
          </a>
          <div className="navLinks">
            <a href="#pack">Pack</a>
            <a href="#cursos">Cursos</a>
            <a href="/login">Ingresar</a>
          </div>
          <a className="navBtn" href={wa("Hola Kaloso, quiero comprar el Pack Completo")} target="_blank">Comprar</a>
        </nav>

        <div className="heroGrid">
          <div>
            <div className="rating">★★★★★ Pack digital · Entrega por WhatsApp</div>
            <p className="eyebrow">Reventa · iPhone usado · Ganancias</p>
            <h1>Aprendé a comprar celulares usados sin miedo y vender con margen.</h1>
            <p className="lead">
              Guías prácticas para detectar estafas, revisar iPhone usados, calcular ganancias y comprar con más confianza.
            </p>
            <div className="actions">
              <a className="btn primary" href="/api/checkout?product=pack-completo">Comprar Pack $19.999</a>
              <a className="btn secondary" href="/alumnos">Ver área de alumnos</a>
            </div>
          </div>

          <div className="productImage">
            <img src={pack.image} alt={pack.title} />
          </div>
        </div>
      </section>

      <section className="proof">
        <span>PDF Digital</span>
        <span>+100 páginas</span>
        <span>Checklist bonus</span>
        <span>Ideal principiantes</span>
      </section>

      <section className="section" id="pack">
        <div className="packCard">
          <div>
            <div className="hot">🔥 MÁS RECOMENDADO</div>
            <p className="eyebrow">Pack completo</p>
            <h2>{pack.title}</h2>
            <p>{pack.description}</p>
            <div className="price">$19.999</div>
            <a className="btn primary" href="/api/checkout?product=pack-completo">Comprar con Mercado Pago</a>
          </div>
          <img src={pack.image} alt={pack.title} />
        </div>
      </section>

      <section className="section courses" id="cursos">
        <p className="eyebrow">Catálogo</p>
        <h2>Cursos disponibles</h2>
        <div className="courseGrid">
          {products.map((product) => (
            <article className="courseCard" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <strong>${product.price.toLocaleString("es-AR")}</strong>
              <a className="btn primary" href={`/api/checkout?product=${product.id}`}>Comprar</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section final">
        <h2>Próximo paso: login, biblioteca y entrega automática.</h2>
        <p>Esta base ya está preparada para conectar Supabase y Mercado Pago.</p>
      </section>
    </main>
  );
}
