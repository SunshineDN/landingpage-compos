import * as S from './index';

const Header = () => {
  return (
    <S.HeaderContainer>
      {/* <S.HeaderBackground /> */}
      <S.HeaderContent>
        <S.HeaderTitle>
          Descubra as Soluções Inovadoras da <S.Span $extra_bold><S.Span $red>.</S.Span>COMPOS</S.Span> para Transformar Seu Negócio
        </S.HeaderTitle>
        <S.HeaderSubtitle>
          Entendemos as necessidades de sua empresa e oferecemos <S.Span $red_bold>soluções tecnológicas</S.Span> de ponta para otimizar sua conectividade, armazenamento e gerenciamento de dados.
          <br/>
          <br/>
          Explore nossas <S.Span $red_bold>ofertas exclusivas</S.Span> e veja como podemos ajudar sua empresa a alcançar novos <S.Span $bold>níveis de eficiência e segurança.</S.Span> Conheça cada uma de nossas soluções abaixo e descubra como podemos <S.Span $bold>transformar seu negócio.</S.Span>
        </S.HeaderSubtitle>
        <S.HeaderButton>Não perca mais tempo!</S.HeaderButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
