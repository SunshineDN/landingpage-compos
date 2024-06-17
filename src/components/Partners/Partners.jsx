import * as S from './index';
import RuckusLogo from '../../assets/partners/Ruckus.svg';
import CommLogo from '../../assets/partners/commscope.svg';

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: RuckusLogo,
      alt: 'Ruckus',
    },
    {
      id: 2,
      logo: CommLogo,
      alt: 'CommScope',
    }
  ];

  return (
    <S.Container>
      <S.Title>Parceiros</S.Title>
      <S.Desc>Nossos parceiros que contribuem para nossas soluções em cabeamento estruturado e redes wireless.</S.Desc>
      <S.PartnersWrapper>
        {partners.map((partner) => (
          <S.PartnerLogo key={partner.id} src={partner.logo} alt={partner.alt} />
        ))}
      </S.PartnersWrapper>
    </S.Container>
  );
};

export default Partners;
