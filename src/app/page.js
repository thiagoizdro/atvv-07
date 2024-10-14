import Pagina from "@/components/Pagina";

export default function HomePage() {
  return (
    <Pagina titulo="Conversor">
      <p>
Bem-vindo ao nosso Conversor de Moedas! Esta aplicação foi desenvolvida para facilitar a conversão de valores em reais (R$) para outras moedas populares, como dólar, euro e bitcoin. Com uma interface simples e intuitiva, você pode rapidamente inserir um valor em reais e escolher a moeda desejada para realizar a conversão.

Utilizando a biblioteca Formik para gerenciar formulários e a React-Bootstrap para estilização, nossa aplicação oferece uma experiência fluida e responsiva. Ao clicar no botão "Converter", você verá imediatamente o valor convertido, além de poder limpar os campos de entrada com um único clique.

Ideal para viajantes, investidores ou qualquer pessoa que precise acompanhar a flutuação das moedas, nosso conversor é uma ferramenta prática e eficiente. Experimente agora e facilite suas transações internacionais!</p>

    </Pagina>
  );
}
