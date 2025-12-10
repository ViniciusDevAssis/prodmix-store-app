import Image from "next/image";
import Link from "next/link";

export default function UpdateStorePage() {
  return (
    <div className="bg-primary font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-md px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/dashboard" className="flex items-center flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/diz5ekmpf/image/upload/v1759796367/Sem_nome_1536_x_411_px_deg1rp.svg"
            alt="Logo da Loja"
            width={160}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <Link
          href="../dashboard"
          className="px-3 py-2 bg-green-custom text-white rounded hover:bg-primary-hover shadow-md text-sm sm:text-base transition"
        >
          Voltar
        </Link>
      </nav>

      {/* Conteúdo principal */}
      <section className="flex flex-col items-center justify-start min-h-[80vh] px-4 py-6 sm:py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
            Atualizar Dados da Loja
          </h1>

          <form className="space-y-4">
            {/* Nome da loja */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nome da loja
              </label>
              <input
                type="text"
                placeholder="Digite o nome da loja"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Logo */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Link da imagem do logo
              </label>
              <input
                type="url"
                placeholder="Cole aqui o link da imagem"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email de contato
              </label>
              <input
                type="email"
                placeholder="email@exemplo.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Botão salvar */}
            <div className="text-center">
              <button
                type="button"
                className="w-full px-6 py-3 bg-green-custom text-white rounded-lg font-medium hover:bg-primary-hover shadow-md hover:shadow-lg transition"
              >
                Salvar alterações
              </button>
            </div>

            {/* Botão desativar conta (visual apenas) */}
            <div className="text-center">
              <button
                type="button"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 shadow-md hover:shadow-lg transition mt-4"
              >
                Desativar conta
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#007373] text-white py-6 mt-auto border-t-4 border-[#005f5f]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">ProdMix</h3>
            <p className="text-sm text-gray-100 mt-1">
              © 2025 ProdMix. Todos os direitos reservados.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-100">
              Desenvolvido por{" "}
              <span className="font-semibold">Core Systems</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
