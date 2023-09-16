'use client'

import Card from "@/components/Cards";
import Masonry from "@/components/Masonry";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  if (typeof window !== 'undefined') {
    const menuItems = document.querySelectorAll('#link_item');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // Verifique qual seção está visível
      // Você pode usar o método getBoundingClientRect() para isso

      // Adicione/remova a classe para destacar o item do menu correspondente
      
      menuItems.forEach((menuItem) => {
        if (menuItem !== null && menuItem) {
          const sectionId = menuItem.getAttribute('href')!.substring(1);
          const section: HTMLElement | null = document.querySelector(`#${sectionId}`);

          const sectionTop = section!.offsetTop;
          const sectionHeight = section!.offsetHeight;

          if (scrollPosition + 100 >= sectionTop && scrollPosition + 100 < sectionTop + sectionHeight) {
            menuItem.classList.add('active'); // Adicione uma classe 'active' para destacar o item
          } else {
            menuItem.classList.remove('active'); // Remova a classe 'active' se não estiver visível
          }
        }
      });
    });
  }

  return (
    <div className="bg-gray-50">
      <header id="inicio" className="relative sm:min-h-screen flex justify-center sm:overflow-hidden">
        <Navbar />
        <img src="./images/bg.png" alt="" className="absolute top-0 hidden sm:block sm:max-w-full" />
        <img src="./images/bg2.png" alt="" className="absolute top-0 sm:hidden block w-full opacity-60" />
        <div className="w-full sm:max-w-7xl pt-16 sm:pt-28 z-40 flex flex-col items-center">
          
          <div className="w-full flex flex-col justify-center items-center flex-wrap gap-2 text-center">
            <p className={`relative highlited-text fade-in flex items-center before:absolute before:-left-4 before:w-2 before:h-2 before:bg-gray-600/50 before:rounded-full`}>Desenvolvedor Web</p>
            <h1 className="text-2xl sm:text-5xl text-zinc-900 sm:grad-text font-extrabold tracking-in-expand">RAFAEL BORGES BEZERRA</h1>
            <p className={`highlited-text fade-in`}>Acompanhe minha jornada no mundo da programação 👇</p>
          </div>

          <div className="fade-in-2 hidden sm:flex justify-center items-center flex-col sm:flex-row gap-6 mt-24 sm:w-[900px]">
            <a href="#sobre" className="text-gray-600 border border-blue-300 w-full sm:w-32 text-center py-2 rounded-md hover:bg-blue-600 hover:text-white">Sobre</a>
            <a href="#projetos" className="text-gray-600 border border-blue-300 w-full sm:w-32 text-center py-2 rounded-md hover:bg-blue-600 hover:text-white -translate-y-5">Projetos</a>
            <a href="https://wa.me/5573999599911?text=Ol%C3%A1+Rafael%2C+vim+pelo+site" className="text-gray-600 border border-blue-300 w-full sm:w-32 text-center py-2 rounded-md hover:bg-blue-600 hover:text-white">Contato</a>
          </div>

          <div className="fade-in-2 max-w-5xl mt-24 hidden sm:flex justify-center gap-4 flex-wrap">
            <Card
              imagePath="1"
              type=""
              description="Sistema de gestão financeira"
            />
            <Card
              imagePath="2"
              type=""
              className="sm:-translate-y-6"
              description="Página de vendas"
            />
            <Card
              imagePath="3"
              type=""
              description="Sistema de controle de alunos"
            />
            <Card
              imagePath="4"
              type=""
              description="Sistema de controle de vendas"
            />
            <Card
              imagePath="5"
              type=""
              className="sm:-translate-y-6"
              description="Sistema para gestão de projetos"
            />
            <Card
              imagePath="6"
              type=""
              description="Sistema para gestão de projetos"
            />
          </div>
        </div>
      </header>
      <main className="fade-in-2 flex flex-col-reverse sm:flex-col ">
        <Section id="sobre" className="pb-24 pt-12 sm:pt-32">
          <div className="flex flex-col items-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold">Sobre mim</h2>
          </div>
          <div className="relative w-full max-w-2xl flex flex-col gap-4 bg-white shadow-xl px-4 sm:px-8 py-6 border border-zinc-200 rounded-xl">
            <div className="flex items-center gap-8 border-b py-2">
              <img src="./images/eu.png" alt="Foto do Rafael Borges Bezerra" className="w-20 h-20 bg-gray-100 rounded-md" />
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-blue-700">Rafael Borges Bezerra</h2>
                <h5 className="text-zinc-600 font-medium">Desenvolvedor web</h5>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-zinc-600">
              <p>Sou fascinado por programação desde novo por causa possibilidade de poder desenvolver praticamente o que eu quiser.</p>
              <p>Por isso, iniciei meus estudos ainda jovem e, hoje em dia, estou há mais de 3 anos na área - possuo mais de 20 cursos feitos na Udemy e na Alura.</p>
              <p>Hoje em dia, posso dizer que domino as principais tecnologias e frameworks web, como Node.js, React, Next, Typescript, Tailwind... Além disso estou iniciado os estudos em dev mobile com o React Native.</p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 items-center">
              <Link href="https://github.com/leafartech" className="hover:bg-zinc-100 rounded">
                <img src="./images/midia/1.png" alt="" className="h-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/rafael-bezerra-2b7263266/" className="hover:bg-zinc-100 rounded">
                <img src="./images/midia/2.png" alt="" className="h-8" />
              </Link>
              <Link href="https://www.instagram.com/o.rafael.bezerra/" className="hover:bg-zinc-100 rounded">
                <img src="./images/midia/3.png" alt="" className="h-8" />
              </Link>
            </div>
          </div>
        </Section>
        <section id="projetos" className="sm:bg-gray-100 py-12 px-2 sm:px-0">
          <div className="flex flex-col items-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projetos realizados</h2>
            <p>Sistemas Web e Páginas de venda</p>
          </div>
          <Masonry />
          <div className="flex justify-center text-zinc-600 mt-6 sm:mt-12">
            <p className="flex items-center gap-1">
              <ArrowSmallLeftIcon className="h-4 w-4" />
              <span>Arraste para o lado as imagens</span>
              <ArrowSmallRightIcon className="h-4 w-4" />
            </p>
          </div>
        </section>
        <Section id="contato" className="sm:py-12">
          <div className="flex flex-col items-center mb-4 sm:mb-12">
            <h2 className="text-3xl font-semibold hidden sm:block">Entre em contato</h2>
            <Link href="https://wa.me/5573999599911?text=Ol%C3%A1+Rafael%2C+vim+pelo+site" className="sm:shadow rounded-md sm:p-6 mt-4 text-blue-700">Whatsapp</Link>
          </div>
        </Section>
      </main>
    </div>
  )
}