import "./globals.css";

export const metadata = {
  title: "Cursos Kaloso",
  description: "Cursos prácticos para comprar mejor, evitar estafas y vender con inteligencia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
