import * as S from './index';
import Image from '../../assets/feedbacks/profile.jpg';

const Feedback = () => {
  const StarRepeat = (count) => (
    [...Array(count)].map((_, i) => <S.StarIcon key={i} />)
  );

  const profiles = [
    {
      name: 'Alessandra Fontoura',
      rate: 5,
      title: 'Ótima qualidade!',
      desc: 'Empresa extremamente competente! Muitos anos de experiência e sempre com uma solução adequada para os desafios de TI na minha empresa. Indico para amigos e todos me agradecem depois!',
      img: Image
    },
    {
      name: 'Williams Sttos',
      rate: 5,
      title: 'Atendimento Rápido!',
      desc: 'Passamos anos lidando com perrengues de internet na empresa e buscando inovações, mas a Compos chegou chegando e resolveu tudo! Agradeço demais pela ajuda!',
      img: Image
    },
    {
      name: 'Gabriel Borges',
      rate: 5,
      title: 'Excelente Trabalho',
      desc: 'Serviço de internet residencial muito bom e atendimento técnico por telefone tbm muito legal. Inclusive aos finais de semana.',
      img: Image
    }
  ];

  return (
    <S.Container>
      <S.Title>Feedback</S.Title>
      <S.Desc>Veja abaixo alguns comentários de alguns dos nossos clientes e descubra o que estão dizendo sobre nossa empresa.</S.Desc>
      <S.CardsContainer>
        {profiles.map((profile, index) => (
          <S.Card key={index}>
            <S.RateWrapper>
              <S.StartWrapper>
                {StarRepeat(profile.rate)}
              </S.StartWrapper>
              <S.RateTitle>{profile.title}</S.RateTitle>
              <S.RateDesc>{profile.desc}</S.RateDesc>
            </S.RateWrapper>
            <S.ProfileWrapper>
              <S.ProfileImg src={profile.img} alt={profile.name} />
              <S.ProfileName>{profile.name}</S.ProfileName>
            </S.ProfileWrapper>
          </S.Card>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};

export default Feedback;
