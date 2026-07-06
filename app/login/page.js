export default function LoginPage() {
  return (
    <main className="simplePage">
      <div className="loginCard">
        <img src="/assets/logo-kaloso.png" alt="Cursos Kaloso" />
        <h1>Ingresar a Kaloso</h1>
        <p>Próximamente conectamos Supabase para login real.</p>
        <form>
          <label>Email<input type="email" placeholder="tu@email.com" /></label>
          <label>Contraseña<input type="password" placeholder="••••••••" /></label>
          <button type="button">Ingresar</button>
        </form>
      </div>
    </main>
  );
}
