import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front? Trabalhando na áreaO que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrousel
        category={dadosIniciais.categorias[1]}
      />

      <Carrousel
        category={dadosIniciais.categorias[2]}
      />

      <Carrousel
        category={dadosIniciais.categorias[3]}
      />

      <Carrousel
        category={dadosIniciais.categorias[4]}
      />

      <Carrousel
        category={dadosIniciais.categorias[5]}
      />

    </div>
  );
}

export default Home;
