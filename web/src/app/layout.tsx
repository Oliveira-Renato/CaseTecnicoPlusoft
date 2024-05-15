import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VroomVibes",
  description: "VroomVibes é o seu destino digital para compartilhar a paixão por automóveis. Aqui, entusiastas podem cadastrar seus veiculos favoritos, deixar comentários pessoais e navegar por uma comunidade vibrante de opiniões e experiências automotivas. Seja você um aficionado por velocidade ou um admirador de clássicos, VroomVibes é o lugar para conectar-se com outros amantes de veículos e descobrir novas perspectivas sobre o mundo sobre rodas. Junte-se a nós e dê vida à sua jornada motorizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
