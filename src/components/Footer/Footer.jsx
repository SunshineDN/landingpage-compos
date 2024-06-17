import * as S from './index';

const Footer = () => {
  const footer_items = [
    {
      field: 'Email',
      value: 'comercial@compos.net.br',
      href: 'mailto:comercial@compos.net.br'
    },
    {
      field: 'Telefone',
      value: '(71) 2106-5100',
      href: 'tel:+557121065100'
    },
    {
      field: 'Instagram',
      value: '@composnet',
      href: 'https://instagram.com/composnet'
    },
    {
      field: 'LinkedIn',
      value: '.COMPOS',
      href: 'https://www.linkedin.com/company/-compos/'
    },
  ];

  return (
    <S.FooterContainer>
      <S.ContactContainer>
        <S.Title>Informações de contato</S.Title>
        <S.Contact>
          <S.LocationMailWrapper>
            <S.BgIcon>
              <S.LocationIcon />
            </S.BgIcon>
            <S.Address>
              <S.RedSpan>Endereço:</S.RedSpan> R. Frederico Simões, 85
              sala 1101 - Caminho das Árvores, Salvador - BA, 41820-774
            </S.Address>
          </S.LocationMailWrapper>
          <S.LocationMailWrapper>
            <S.BgIcon>
              <S.EmailIcon />
            </S.BgIcon>
            {footer_items.map((item, idx) => (
              <S.EmailInfo key={idx}>
                <S.EmailText>
                  {item.field}:
                </S.EmailText>
                <S.EmailLink href={item.href}>{item.value}</S.EmailLink>
              </S.EmailInfo>
            ))}
          </S.LocationMailWrapper>
        </S.Contact>
      </S.ContactContainer>
      <S.BottomWrapper>
        <S.BottomText>© 1991 — 2023, Copyright <S.BottomLink href='https://compos.net.br' target='_blank'><S.Bold>Compos</S.Bold></S.BottomLink></S.BottomText>
        <S.BottomLink href='https://compos.net.br/privacidade' target='_blank'>Política de privacidade</S.BottomLink>
      </S.BottomWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
