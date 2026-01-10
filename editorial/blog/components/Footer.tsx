import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 py-12 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-purple-600 dark:from-gold-400 dark:to-purple-400">
              Xblog
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Explorando las fronteras entre la ciencia exacta y la belleza literaria. Un espacio minimalista para mentes curiosas.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100">Explorar</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/categorias/ciencia" className="hover:text-purple-500 transition-colors">Ciencia</Link></li>
              <li><Link href="/categorias/literatura" className="hover:text-gold-500 transition-colors">Literatura</Link></li>
              <li><Link href="/acerca-de" className="hover:text-purple-500 transition-colors">Acerca de</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100">Conectar</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><FaGithub size={20} /></a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"><FaLinkedin size={20} /></a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © {new Date().getFullYear()} Xblog. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
