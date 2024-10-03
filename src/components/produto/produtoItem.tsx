import { Produto } from '@/core'
import Image from 'next/image'
import Link from 'next/link'

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props

    //Cria o link para a pagina do produto de acordo com o id
    return (
        <Link
            href={`/produto/${produto.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            <div className='h-48 w-full relative'>
                <Image 
                src={produto.imagem}
                alt='Imagem do produto'
                className='object-contain'
                fill
                />
            </div>
            <div className=' flex-1 flex flex-col p-5 gap-3 border-t border-white/10'>
                <span className='text-lg font-semibold'>{props.produto.nome}</span>
                <span className='text-sm border-b border-dashed self-start'>{produto.especificacoes.destaque}</span>
                <div className='flex-1'></div>
                <div className='flex flex-col'>
                    <span className='text-sm text-gray-400 line-through'>De {props.produto.precoBase}</span>
                    <span className='text-xl font-semibold text-emerald-400'>Por {props.produto.precoPromocional}</span>
                </div>
            </div>
        </Link>
    )
}
