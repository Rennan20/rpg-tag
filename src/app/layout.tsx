import "../styles/index.css";

export const metadata = {
  title: "RPG Tag",
  description: "Um aplicativo para RPG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div style={{ minHeight: "100vh", overflow: "hidden" }}>{children}</div>
      </body>
    </html>
  );
}
