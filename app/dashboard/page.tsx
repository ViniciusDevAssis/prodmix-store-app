import Link from "next/link";
import Image from "next/image";
import {
  RiBox2Fill,
  RiCheckboxCircleFill,
  RiAddCircleLine,
  RiTimeLine,
  RiSettings3Line,
  RiFileListLine,
  RiEyeLine,
} from "react-icons/ri";

export default function DashboardPage() {
  // futuramente isso virá do backend
  const storeLogo =
    "https://res.cloudinary.com/diz5ekmpf/image/upload/v1759796367/Sem_nome_1536_x_411_px_deg1rp.svg";

  return (
    <main className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white/95 backdrop-blur-sm shadow-md px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Logo da loja */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src={storeLogo}
            alt="Logo da Loja"
            width={180}
            height={48}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Logout */}
        <Link
          href="/"
          className="px-3 py-2 bg-[#007373] text-white rounded hover:bg-[#005f5f] shadow-md text-sm sm:text-base"
        >
          Logout
        </Link>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 flex flex-col">
        {/* KPIs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col items-center justify-center">
            <div className="text-[#007373] text-3xl mb-2">
              <RiBox2Fill />
            </div>
            <h3 className="font-semibold text-lg">Total de produtos</h3>
            <p className="text-gray-700 text-xl mt-1">150</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col items-center justify-center">
            <div className="text-[#007373] text-3xl mb-2">
              <RiCheckboxCircleFill />
            </div>
            <h3 className="font-semibold text-lg">Produtos ativos</h3>
            <p className="text-gray-700 text-xl mt-1">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col items-center justify-center">
            <div className="text-[#007373] text-3xl mb-2">
              <RiAddCircleLine />
            </div>
            <h3 className="font-semibold text-lg">Novos produtos</h3>
            <p className="text-gray-700 text-xl mt-1">15</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center flex flex-col items-center justify-center">
            <div className="text-[#007373] text-3xl mb-2">
              <RiTimeLine />
            </div>
            <h3 className="font-semibold text-lg">Última atualização</h3>
            <p className="text-gray-700 text-sm mt-1">
              07/10/2025 10:15
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <div className="text-[#007373] text-4xl mb-4 flex justify-center items-center">
              <RiSettings3Line />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Atualizar dados da loja
            </h3>
            <Link
              href="/stores"
              className="mt-2 inline-block px-4 py-2 bg-[#007373] text-white rounded hover:bg-[#005f5f] transition"
            >
              Ir
            </Link>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <div className="text-[#007373] text-4xl mb-4 flex justify-center items-center">
              <RiFileListLine />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Gerenciar produtos
            </h3>
            <Link
              href="/products/manage"
              className="mt-2 inline-block px-4 py-2 bg-[#007373] text-white rounded hover:bg-[#005f5f] transition"
            >
              Ir
            </Link>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <div className="text-[#007373] text-4xl mb-4 flex justify-center items-center">
              <RiEyeLine />
            </div>
            <h3 className="font-semibold text-xl mb-2">
              Pré-visualizar catálogo
            </h3>
            <Link
              href="/catalog/preview"
              className="mt-2 inline-block px-4 py-2 bg-[#007373] text-white rounded hover:bg-[#005f5f] transition"
            >
              Ir
            </Link>
          </div>
        </section>
      </main>

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
              Desenvolvido por <span className="font-semibold">Core Systems</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
