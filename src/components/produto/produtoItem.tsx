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
            {props.produto.nome}
        </Link>
    )
}
