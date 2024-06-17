import Button from '../Button/Button';
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
        <Button href='https://wa.me/557121065100?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20fiquei%20interessado%20nas%20solu%C3%A7%C3%B5es%20oferecidas.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F'>Não perca mais tempo!</Button>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
