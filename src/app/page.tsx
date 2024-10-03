import ProdutoItem from "@/components/produto/produtoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <div className="flex gap-5">
      <ProdutoItem produto={produtos[0]}/>
      <ProdutoItem produto={produtos[8]}/>
      <ProdutoItem produto={produtos[15]}/>
      <ProdutoItem produto={produtos[22]}/>
    </div>
  );
}
