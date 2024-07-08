import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descrição</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        A Facens Store é uma plataforma online que facilita a compra e venda de produtos ou serviços diretamente 
        ligados ao ecossistema da Facens. Servindo como um mercado virtual para alunos, 
        professores e colaboradores, a Facens Store permite que todos exibam seus produtos, 
        interajam com a comunidade acadêmica e realizem transações de forma prática e eficiente, 
        sem a necessidade de um ponto de venda físico. A popularidade da Facens Store deve-se à sua conveniência, 
        acessibilidade e ao alcance dentro da comunidade Facens, oferecendo uma experiência integrada e personalizada.
        </p>
        <p>
        A Facens Store exibe produtos ou serviços com descrições detalhadas, imagens, preços e quaisquer variações disponíveis 
        (por exemplo, tamanhos, cores). Cada produto possui sua própria página dedicada com as informações relevantes, 
        facilitando a busca e a escolha pelo usuário.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
