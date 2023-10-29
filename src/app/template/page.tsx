'use client'

import Dropdown from "@/components/Dropdown";
import Structure from "@/components/Structure";
import { ClipboardDocumentIcon, RectangleGroupIcon, ShareIcon, CodeBracketIcon, Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Home() {
  const [header, setHeader] = useState<boolean>(false)

  return (
    <div className="bg-zinc-50 min-h-screen">
      <header className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="pt-12">
            <h1 className="text-3xl font-semibold">Templates</h1>
            <p className="text-zinc-600">Projeto para guardar referências de componentes para utilizar em websites</p>
          </div>
          <div className="w-full h-[1px] bg-zinc-300 my-12"></div>
          <div>
            <h1 className="text-xl font-semibold">Legenda</h1>
            <div className="w-full grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-2">
              <p className="text-blue-400 flex items-center gap-2">
                <ClipboardDocumentIcon className="h-4 w-4" />
                <span>Copiar código do componente</span>
              </p>
              <p className="text-blue-400 flex items-center gap-2">
                <Square3Stack3DIcon className="h-4 w-4" />
                <span>Hierarquia HTML do componente</span>
              </p>
              <p className="text-blue-400 flex items-center gap-2">
                <ShareIcon className="h-4 w-4" />
                <span>Componente com propriedades (ts)</span>
              </p>
              <p className="text-blue-400 flex items-center gap-2">
                <CodeBracketIcon className="h-4 w-4" />
                <span>Componente server-side</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Structure area="Headers">
          <Dropdown
            title="HeaderFlex"
            code={`interface HeaderFlexProps {}

            export default function HeaderFlex() {
                return (
                    <header className="relative min-h-screen w-full flex justify-center">
                        <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                            <div className="max-w-md flex flex-col gap-2 sm:gap-4">
                                <h1 className="text-3xl font-bold">Headline principal da página para apresentar oferta</h1>
                                <p className="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="" className="py-2 bg-zinc-600 max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a>
                            </div>
                            <div className="flex justify-end mt-2 sm:mt-0">
                                <img src="./images/bg.png" alt="" className="w-full" />
                            </div>
                        </div>
                    </header>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/headers/HeroFlex.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/headers/HeroFlex-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="HeaderFlex-2"
            code={`interface HeaderFlexProps {}

            export default function HeaderFlex2() {
                return (
                    <header className="relative w-full flex justify-center">
                        <div className="w-full max-w-7xl flex flex-col-reverse sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                            <div className="max-w-md flex flex-col gap-2 sm:gap-4">
                                <h1 className="text-3xl font-bold">Headline principal da página para apresentar oferta</h1>
                                <p className="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="" className="py-2 bg-zinc-600 max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a>
                            </div>
                            <div className="flex justify-end mb-2 sm:mb-0">
                                <img src="./images/bg.png" alt="" className="w-full" />
                            </div>
                        </div>
                    </header>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/headers/HeroFlex.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/headers/HeroFlex-sm2.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="HeaderFlex-2"
            code={`interface HeaderFlexProps { }

            export default function HeaderFlex3() {
                return (
                    <header className="relative w-full h-screen flex justify-center">
                        <div className="w-full max-w-7xl flex items-end sm:grid sm:grid-cols-2 gap-2 sm:items-center px-4 sm:px-0">
                            <div className="absolute bottom-0 h-full sm:relative flex justify-end mb-2 sm:mb-0">
                                <img src="./images/bg.png" alt="" className="w-full" />
                            </div>
                            <div className="max-w-md flex flex-col gap-2 sm:gap-4 z-10">
                                <h1 className="text-3xl font-bold">Headline principal da página para apresentar oferta</h1>
                                <p className="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="" className="py-2 bg-zinc-600 max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a>
                            </div>
                        </div>
                    </header>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/headers/HeroFlex.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/headers/HeroFlex-sm3.png" alt="" className="h-72" />
            </div>
          </Dropdown>
        </Structure>
        <Structure area="Seções">
          <Dropdown
            title="Seção 01 - Normal"
            code={`
              import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode
    id?: string
    className?: string
    classNameS?: string
}

export default function Section({ children, className, id, classNameS }: SectionProps) {
    return (
        <section className={'w-full flex items-center justify-center $1{classNameS}'} id={id}>
            <div className={'w-full max-w-7xl flex items-center justify-center flex-col $1{className}'}>
                {children}
            </div>
        </section>
    )
}
              `}
          >

          </Dropdown>
        </Structure>
        <Structure area="Componentes">
          <Dropdown
            title="HeroFlex"
            code={`
            import { ReactNode } from "react"

            interface HeroFlexProps {
                children?: ReactNode
                title?: string
                topTitle?: string
                subtitle?: string
                reverse?: boolean
                imagePath?: string
                href?: string
                cta?: string
            }
            
            export default function HeroFlex({ children, imagePath, reverse, title, subtitle, topTitle, href, cta }: HeroFlexProps) {
                return (
                    <div className={'flex flex-col px-4 sm:px-0 items-center gap-4 sm:gap-12 $1{reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}'}>
                        <div className="w-full sm:w-1/2 flex flex-col gap-2">
                            <h4 className="text-zinc-600">{topTitle}</h4>
                            <h2 className="font-bold text-3xl">{title}</h2>
                            <h4 className="text-zinc-600 text-lg">{subtitle}</h4>
                            {children}
                            {href && (
                                // <div className="w-full">
                                    <a href={href} className="py-2 rounded-md bg-zinc-600 sm:w-96 text-white font-medium text-sm text-center">{cta}</a>
                                // </div>
                            )}
                        </div>
                        <div className="w-full sm:w-1/2 flex justify-end">
                            <img src={'./images/$1{imagePath}.png'} alt={title} />
                        </div>
                    </div>
                )
            }
            `}
          >
            <div className="col-span-2">
              <img src="./images/components/heroflex.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/heroflex-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Card-1"
            code={`import { ElementType } from "react"

            interface NormalCardProps {
                Icon: ElementType
                title: string
                subtitle: string
            }
            
            export default function NormalCard({ Icon, subtitle, title }: NormalCardProps) {
                return (
                    <div className="w-full max-w-[300px] flex flex-col py-10 px-4 bg-white rounded-xl shadow-xl">
                        <Icon className="h-8 w-8" />
                        <h3 className="text-2xl mt-3 mb-1 font-bold">{title}</h3>
                        <p className="text-zinc-600 text-sm">{subtitle}</p>
                    </div>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/components/card1.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/card1-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Card-2"
            code={`import { ElementType } from "react"

            interface NormalCardProps {
                Icon: ElementType
                title: string
                subtitle: string
            }
            
            export default function CenteredCard({ Icon, subtitle, title }: NormalCardProps) {
                return (
                    <div className="w-full sm:max-w-[270px] flex flex-col items-start sm:items-center sm:text-center py-10 px-4">
                        <Icon className="h-8 w-8" />
                        <h3 className="text-2xl mt-3 mb-1 font-bold">{title}</h3>
                        <p className="text-zinc-600 sm:text-sm">{subtitle}</p>
                    </div>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/components/card2.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/card2-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Dropdown"
            code={`'use client'

            import { ReactNode, useState } from "react"
            import { ChevronDownIcon } from '@heroicons/react/24/outline'
            
            interface DropdownProps {
                children: ReactNode
                title: string
            }
            
            export default function Dropdown({ children, title }: DropdownProps) {
                const [ isActived, setIsActived ] = useState<boolean>(false)
            
                return (
                    <div className="w-full max-w-lg">
                        <h4 className="cursor-pointer font-semibold flex items-center justify-between py-2 border-b border-zinc-200" onClick={() => setIsActived(!isActived)}>
                            <span>{title}</span>
                            <ChevronDownIcon className={'transition h-4 w-4 $1{isActived ? 'rotate-0' : '-rotate-90'}'} />
                        </h4>
                        <div className={'p-2 text-sm text-zinc-600 $1{isActived ? 'block' : 'hidden'}'}>
                            {children}
                        </div>
                    </div>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/components/dropdown.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/dropdown-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Card de pagamento"
            code={`export default function PaymentCard() {
              return (
                  <div className="relative parallax-1 mt-6 sm:mt-12 w-full max-w-lg rounded-3xl px-4 sm:px-12 py-12 sm:py-16 overflow-hidden">
                      <img src="./images/bg.png" alt="" className="block sm:hidden absolute bottom-0 left-0 h" />
                      <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
          
                      <div className="relative flex flex-col z-10 text-left">
                          <div className="flex flex-col gap-2">
                              <h3 className="letter-grad text-3xl sm:text-4xl font-bold">OFERTA EXCLUSIVA</h3>
                              <p className="text-white/70">de R$<span className="text-white text-4xl line-through sm:ps-4">3.997,00</span></p>
                              <p className="text-4xl font-bold text-white tracking-wider">SURPRESA</p>
                          </div>
                          <p className="py-4 text-sm my-4 border-y border-zinc-300 text-zinc-300">Clique no botão abaixo para entrar no <strong>grupo VIP</strong> onde será anunciado o valor promocional.</p>
                          <a href="" className="mb-4 rounded-lg grad py-3 font-bold text-center text-white">QUERO APROVEITAR</a>
                          <img
                              src="/images/security.png"
                              alt="imagens de pagamento"
                              width={539}
                              height={46}
                          />
                      </div>
                  </div>
              )
          }`}
          >
            <div className="col-span-2">
              <img src="./images/components/payment.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/payment-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Citação"
            code={`export default function Citacao() {
              return (
                  <div className="flex flex-col sm:grid sm:grid-cols-2 items-center">
                      <div className="relative ps-4">
                          <div className="absolute left-0 top-0 h-full w-[6px] grad-2 rounded-[1px]"></div>
                          <p className="font-bold letter-grad">3 em 1</p>
                          <h2 className="text-6xl sm:text-8xl font-bold">OFERTA ÚNICA DO JUNINHO</h2>
                      </div>
                      <div className="relative flex flex-col gap-3 mt-8 sm:mt-0">
                          <h2 className="font-bold text-2xl">RZD</h2>
                          <div className="relative py-0 px-0 flex flex-col gap-3">
                              <img src="./images/icons/left.png" alt="" className="opacity-50 absolute -top-0 left-0 sm:-left-4 sm:top-0 w-4" />
                              <p className="text-zinc-600 text-lg">
                                  <span className="ps-4">Toco</span> cavaquinho há 18 anos e há 10 como profissional. Quando comecei tive muita dificuldade em evoluir no cavaquinho porque o acesso ao conteúdo era muito complicado.
                              </p>
                              <p className="text-zinc-600 text-lg">
                                  <span className="ps-4">E</span> para você não passar por isso, decidi juntar todo meu conhecimento em um combo completo e por um preço muito acessível para quem sempre teve o sonho de tocar cavaquinho.
                              </p>
                              <img src="./images/icons/right.png" alt="" className="opacity-50 absolute bottom-0 right-0 sm:-right-4 w-4" />
                          </div>
                          <h2 className="absolute -bottom-12 right-0 flex items-center before:bg-zinc-400 text-zinc-600 before:w-[48px] before:h-[2px] before:rounded-full before:left-0 before:me-4">Juninho Rezende</h2>
                      </div>
                  </div>
              )
          }`}
          >
            <div className="col-span-2">
              <img src="./images/components/citacao.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/citacao-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Linha do tempo"
            code={`interface TimelineProps {
              texts: { title: string, text: string }[]
          }
          
          export default function Timeline({ texts }: TimelineProps) {
              //const text = [{title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.'}, {title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.'}, {title: 'EXECUÇÃO DO PLANO REPACTUAÇÃO', text: 'Com base nas informações e documentos que você nos conceder, desenvolveremos o plano de pagamento de acordo com as suas possibilidades, sem apertos no final do mês e sem deixar de pagar o principal.'}]

              return (
                  <ul className="w-full max-w-2xl relative flex flex-col gap-6 pb-8 ps-10 sm:ps-12">
                      <div className="absolute left-0 h-full w-1 bg-zinc-600 flex justify-center items-end">
                      </div>
                      <svg className="w-6 h-6 z-10 text-zinc-600 absolute -bottom-2 -left-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none">
                          <path d="M7.56699 13.25C7.75944 13.5833 8.24056 13.5833 8.43301 13.25L15.3612 1.25C15.5537 0.916665 15.3131 0.5 14.9282 0.5H1.0718C0.686895 0.5 0.446334 0.916667 0.638784 1.25L7.56699 13.25Z" fill="#52525B" />
                      </svg>
                      {
                          texts.map((text, index) => (
                              <li className="relative" key={index}>
                                  <div className="absolute -left-6">
                                      <div className="absolute bottom-0 -left-4 sm:-left-6 w-[32px] sm:w-[36px] h-4 border-b-[3px] border-zinc-600 border-dashed"></div>
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="37" height="60" viewBox="0 0 37 60" fill="none">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4214 0C5.3332 0 -3.3578 13.5523 2.10224 25.4472L17.5126 59.0191C17.8695 59.7966 18.9743 59.7966 19.3311 59.0191L34.7409 25.4473C40.2008 13.5523 31.5097 0 18.4214 0ZM18 28C22.9706 28 27 23.9706 27 19C27 14.0294 22.9706 10 18 10C13.0294 10 9 14.0294 9 19C9 23.9706 13.0294 28 18 28Z" fill="#52525B" />
                                      </svg>
                                  </div>
                                  <h3 className="font-semibold mb-2 text-lg">{index + 1} - {text.title}</h3>
                                  <p className="text-sm text-zinc-600">{text.text}</p>
                              </li>
                          ))
                      }
                  </ul>
              )
          }`}
          >
            <div className="col-span-2">
              <img src="./images/components/timeline.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/timeline-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
          <Dropdown
            title="Image Text"
            code={`import { ElementType } from "react"

            interface HorizontalCardProps {
                title: string
                subtitle: string
                Icon: ElementType
            }
            
            export default function HorizontalCard({ Icon, subtitle, title }: HorizontalCardProps) {
                return (
                    <div className="w-full max-w-sm flex sm:flex-col gap-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                            <Icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-zinc-600 text-sm">{subtitle}</p>
                        </div>
                    </div>
                )
            }`}
          >
            <div className="col-span-2">
              <img src="./images/components/imageText.png" alt="" className="w-full" />
            </div>
            <div className="col-span-1 flex justify-end">
              <img src="./images/components/imageText-sm.png" alt="" className="h-72" />
            </div>
          </Dropdown>
        </Structure>
      </main >
    </div >
  )
}