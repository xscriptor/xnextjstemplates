import { FiUser, FiMail, FiMapPin } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-purple-600 dark:from-gold-400 dark:to-purple-400">
            Sobre Lumina
          </h1>
          
          <div className="prose dark:prose-invert">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Lumina nació de una idea simple pero poderosa: la ciencia y la literatura no son opuestos, sino dos lenguajes diferentes para describir la misma realidad asombrosa.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              En este espacio, buscamos entrelazar la precisión de las ecuaciones con la belleza de las metáforas. Creemos que entender un agujero negro requiere tanta imaginación como leer a Borges, y que la poesía puede ser tan exacta como la física cuántica.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiUser className="text-purple-500" /> 
              <span>Editor Principal: Alex V. Script</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiMail className="text-gold-500" />
              <span>contacto@xblog.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiMapPin className="text-purple-500" />
              <span>Madrid, España</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-500 to-purple-500 rounded-2xl blur-2xl opacity-20 dark:opacity-40 transform rotate-6 scale-95" />
          <div className="relative bg-white dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl">
            <h3 className="text-xl font-serif font-bold mb-4 text-center">Nuestra Misión</h3>
            <ul className="space-y-4">
              {[
                "Divulgar ciencia con rigor y belleza",
                "Explorar la literatura como herramienta de conocimiento",
                "Fomentar el pensamiento crítico y creativo",
                "Crear una comunidad de mentes curiosas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-purple-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
