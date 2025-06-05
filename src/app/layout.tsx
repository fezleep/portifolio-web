import './globals.css'; // Importa os estilos CSS globais definidos para a aplicação
import type { Metadata } from 'next'; // Importa o tipo 'Metadata' do Next.js para tipagem segura dos metadados
import React from 'react'; // Importa React, necessário para usar JSX em arquivos .tsx

// Define os metadados da sua aplicação.
// O Next.js usa isso para gerar as tags <meta> no <head> do HTML,
// melhorando SEO e a experiência do usuário.
export const metadata: Metadata = {
  title: 'Felipe Virginio', // Título que aparecerá na aba do navegador
  description: 'Um projeto Next.js simples e apresentável com um toque corintiano.', // Descrição para SEO
  // Configuração para o favicon.
  // Assumimos que 'favicon.ico' estará na pasta 'public/'.
  icons: {
    icon: '/favicon.ico', // Caminho para o seu favicon.
  },
};

// Este é o componente RootLayout, que é o layout principal da sua aplicação.
// Ele recebe 'children' como propriedade, que representa o conteúdo das páginas (page.tsx)
// que serão renderizadas dentro deste layout.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // A tag <html> é o elemento raiz do documento HTML.
    // 'lang="pt-BR"' define o idioma principal do documento como Português (Brasil) para acessibilidade.
    <html lang="pt-BR">
      {/* A tag <body> contém todo o conteúdo visível da página. */}
      <body>
        {/* 'container' é uma classe CSS que ajuda a estruturar o layout geral da página. */}
        <div className="container">
          {/* O cabeçalho da sua aplicação, presente em todas as páginas. */}
          <header>
            <h1>Olá! Sou o Felipe</h1>
            <p>Obrigado por vir até aqui.</p>
          </header>

          {/* A área de conteúdo principal, onde as páginas específicas serão inseridas. */}
          {/* 'content-area' é uma classe CSS para estilos adicionais. */}
          {/* '{children}' é o placeholder para o conteúdo da página atual. */}
          <main className="content-area">
            {children}
          </main>

          {/* O rodapé da sua aplicação, presente em todas as páginas. */}
          <footer>
            <p>&copy; {new Date().getFullYear()} Meu portifólio ainda a fazer. Todos os direitos reservados.</p>
            <p>Feito com Next.js</p>
          </footer>
        </div>
      </body>
    </html>
  );
}