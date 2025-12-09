import Image from "next/image";
import Link from "next/link";
import {
  RiBox2Fill,
  RiRefreshLine,
  RiTimeLine,
  RiAddBoxLine,
  RiFolder2Fill,
  RiShareBoxLine,
  RiChat3Line,
} from "react-icons/ri";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav
        role="navigation"
        aria-label="Navegação principal"
        className="w-full bg-white/95 backdrop-blur-sm shadow-md px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-50"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/diz5ekmpf/image/upload/v1759796367/Sem_nome_1536_x_411_px_deg1rp.svg"
            alt="ProdMix Logo"
            width={260}
            height={70}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>

        {/* Botões */}
        <div className="flex gap-2 sm:gap-4 ml-2">
          <Link
            href="/auth/register"
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-custom text-white rounded hover:bg-green-custom-hover text-sm sm:text-base transition whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Cadastrar loja
          </Link>

          <Link
            href="/auth/login"
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-green-custom text-green-custom rounded hover:bg-green-custom/10 text-sm sm:text-base transition whitespace-nowrap"
          >
            Entrar
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 mt-4">
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforme a forma como sua loja compartilha produtos
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            O <span className="font-semibold text-green-custom">ProdMix</span>{" "}
            foi criado para ajudar lojas como a sua a organizar, gerenciar e
            compartilhar produtos de forma simples e profissional. Economize
            tempo, ofereça um catálogo sempre atualizado e facilite a vida dos
            seus clientes de um jeito moderno.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-2">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-green-custom text-white rounded-lg font-medium hover:bg-green-custom-hover transition shadow-md hover:shadow-lg"
            >
              Começar agora
            </Link>

            <Link
              href="/auth/login"
              className="px-6 py-3 border border-green-custom text-green-custom rounded-lg font-medium hover:bg-green-custom/10 transition"
            >
              Entrar
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <Image
            src="https://res.cloudinary.com/diz5ekmpf/image/upload/v1759797037/Illustrative_image_ypw65a.png"
            alt="Imagem ilustrativa da ProdMix"
            width={500}
            height={400}
            className="w-64 sm:w-80 md:w-full max-w-md rounded-xl shadow-lg object-cover bg-gray-200"
          />
        </div>
      </section>

      {/* Benefícios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Por que usar o ProdMix?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <RiBox2Fill className="text-green-custom text-4xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Organização fácil</h3>
            <p className="text-gray-700">
              Gerencie todos os produtos da sua loja em um só lugar, sem
              complicação.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <RiRefreshLine className="text-green-custom text-4xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Catálogo atualizado</h3>
            <p className="text-gray-700">
              Mantenha seus clientes sempre informados com produtos atualizados
              em tempo real.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <RiTimeLine className="text-green-custom text-4xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Economia de tempo</h3>
            <p className="text-gray-700">
              Automatize processos manuais e concentre-se no que realmente
              importa: vender.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-green-custom/10 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-custom text-center mb-12">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <RiAddBoxLine className="text-green-custom text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Cadastre seus produtos</h3>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <RiFolder2Fill className="text-green-custom text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Organize em categorias</h3>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <RiShareBoxLine className="text-green-custom text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Compartilhe com clientes</h3>
          </div>

          <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <RiChat3Line className="text-green-custom text-3xl mb-2 mx-auto" />
            <h3 className="font-semibold mb-1">Receba feedback e pedidos</h3>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Comece agora com o ProdMix
        </h2>

        <Link
          href="/auth/register"
          className="px-8 py-4 bg-green-custom text-white rounded-lg font-semibold hover:bg-green-custom-hover shadow-md hover:shadow-lg transition"
        >
          Cadastrar loja
        </Link>
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
              Desenvolvido por{" "}
              <span className="font-semibold">Core Systems</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
