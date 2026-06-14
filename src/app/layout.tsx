import './globals.css';
import { Terminal, Link2 } from 'lucide-react';

export const metadata = {
  title: 'Hari Sireddi | Scale & Performance Engineer',
  description: 'Personal blog and portfolio of Hari Sireddi, specialized in NestJS, Kafka, and AWS EKS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="glow-effect min-h-screen flex flex-col justify-between bg-background text-zinc-100">
        <header className="border-b border-zinc-800 bg-background/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono font-bold text-lg tracking-tight">
              <Terminal className="text-brand w-5 h-5" />
              <span>hari_sireddi<span className="text-brand">.log()</span></span>
            </div>
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <a href="/#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
              <a href="/#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
              <a href="/#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
              <a href="/#blog" className="hover:text-zinc-100 transition-colors">Insights</a>
              <a href="/logging" className="hover:text-zinc-100 transition-colors">System Design</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-zinc-900 bg-black/40 py-8 text-center text-xs text-zinc-500">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© 2026 Hari Venkata Sateesh Raja Sireddi. Built for high availability.</div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 flex items-center gap-1">LinkedIn <Link2 className="w-3 h-3" /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-300 flex items-center gap-1">GitHub <Link2 className="w-3 h-3" /></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
