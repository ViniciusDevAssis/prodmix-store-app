import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-md px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/diz5ekmpf/image/upload/v1759796367/Sem_nome_1536_x_411_px_deg1rp.svg"
            alt="ProdMix Logo"
            width={180}
            height={48}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <Link
          href="/auth/register"
          className="px-4 py-2 border border-[#007373] text-[#007373] rounded hover:bg-[#007373]/10 transition text-sm sm:text-base"
        >
          Cadastrar loja
        </Link>
      </nav>

      {/* Formulário */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#007373] mb-6">
            Entrar no ProdMix
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="email@exemplo.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007373]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#007373]"
              />
            </div>

            <div className="text-right">
              <Link href="#" className="text-sm text-[#007373] hover:underline">
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#007373] text-white rounded-lg py-2.5 font-semibold hover:bg-[#005f5f] transition shadow-md hover:shadow-lg"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="mt-4 w-full border border-gray-300 bg-white text-gray-700 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm">
            <Image
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Entrar com Google
          </button>

          <p className="text-sm text-center mt-4">
            Ainda não tem uma conta?{" "}
            <Link
              href="/auth/register"
              className="text-[#007373] font-medium hover:underline"
            >
              Cadastrar loja
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#007373] text-white py-6 mt-16 border-t-4 border-[#005f5f]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">ProdMix</h3>
            <p className="text-sm text-gray-100 mt-1">
              © 2025 ProdMix. Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-100">
              Desenvolvido por <span className="font-semibold">Core Systems</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
