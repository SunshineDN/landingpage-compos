import IconData from '../../assets/icon_data.svg';
import IconLink from '../../assets/icon_link.svg';
import IconService from '../../assets/icon_service.svg';
import IconWebhome from '../../assets/icon_webhome.svg';

import Item from './Item';
import * as S from './ServicesStyles';

const Services = () => {

  const webhome_list = [
    'Quantidade Ilimitada de E-mails',
    'Segurança no Armazenamento',
    'Fácil Gerenciamento',
    'Sem Contrato de Fidelidade',
    'Servidores de Alto Desempenho',
    'Suporte Especializado',
    '50GB de Armazenamento',
  ];

  const data_list = [
    'Data Center Próprio',
    'Conectividade com Redundância',
    'Central de Monitoramento 24h',
    'Controle de Temperatura',
    'Energia Elétrica Ininterrupta',
    'Sem Contrato de Fidelidade',
    'Sem Contrato de Fidelidade',
  ];

  const link_list = [
    'Até 4 IPs Grátis',
    'Conexão via Rádio',
    'Suporte Especializado',
    'Backbone com Redundância de Operadoras',
    'Mesma Taxa de Transferência Download = Upload',
  ];

  const service_list = [
    'Intervenções na Estrutura de TI',
    'Gerenciamento de Velocidade',
    'Priorização de Tráfego',
    'Suporte Especializado',
    'Controle de Acesso',
    'Service e Firewall',
  ];

  return (
    <>
      <Item id='webhome' title='Hospedagem' box_title='Webhome' video='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=rSi8nPF6tDUdfefN&amp;controls=0' image={IconWebhome} color='#b18b8a'>
        <div style={{ width: '100%' }}>
          <S.Title>OFERTA LIMITADA! 60 DIAS DE HOSPEDAGEM grátis</S.Title>
          <S.P>Experimente a qualidade da nossa hospedagem premium sem custos por 60 dias. Garanta agora mesmo!</S.P>
        </div>
        <S.P>A <S.Span>.COMPOS</S.Span> é reconhecida por oferecer soluções robustas e confiáveis. Com uma infraestrutura de servidores de alto desempenho e uma equipe de suporte dedicada, proporcionamos uma experiência de hospedagem segura e eficiente, ideal para empresas de todos os portes.</S.P>
        <S.CheckList>
          {webhome_list.map((item, idx) => (
            <S.CheckItem key={idx}>
              <S.Span>{item}</S.Span>
              <S.CheckIcon />
            </S.CheckItem>
          ))}
        </S.CheckList>
        <S.Button>
          Aproveite Agora
        </S.Button>
      </Item>
      <Item id='data' title='Solução em Nuvem' invert={true} box_title='Data' video='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=rSi8nPF6tDUdfefN&amp;controls=0' image={IconData} color='#aaaf97'>
        <S.P>Simplifique sua Infraestrutura com Soluções em Nuvem .Data! Acesse suas informações de qualquer lugar com segurança total e sem preocupações com hardware local. Experimente a flexibilidade e eficiência da computação em nuvem! A <S.Span>.COMPOS</S.Span> oferece a solução .Data, projetada para empresas que buscam a modernização e segurança de suas infraestruturas de TI. Nosso data center próprio, combinado com uma rede de conectividade redundante, garante alta disponibilidade e desempenho para seus dados e sistemas.</S.P>
        <S.CheckList>
          {data_list.map((item, idx) => (
            <S.CheckItem key={idx}>
              <S.Span>{item}</S.Span>
              <S.CheckIcon />
            </S.CheckItem>
          ))}
        </S.CheckList>
        <S.Button>
          Migrar para a Nuvem Agora
        </S.Button>
      </Item>
      <Item id='link' title='Internet Corporativa' box_title='Link' video='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=rSi8nPF6tDUdfefN&amp;controls=0' image={IconLink} color='#90a4b1'>
        <S.P>Garanta Conectividade Corporativa de Alta Performance com .Link! Experimente uma conexão dedicada via rádio com 100% da velocidade contratada. Tenha a estabilidade e a segurança que sua empresa precisa. A .Compos oferece a solução ideal para empresas que necessitam de alta performance e confiabilidade na conectividade. Nossa tecnologia avançada e infraestrutura robusta garantem uma conexão estável e rápida, com suporte técnico especializado para atender todas as suas necessidades</S.P>
        <S.CheckList>
          {link_list.map((item, idx) => (
            <S.CheckItem key={idx}>
              <S.Span>{item}</S.Span>
              <S.CheckIcon />
            </S.CheckItem>
          ))}
        </S.CheckList>
        <S.Button>
          Contrate Agora
        </S.Button>
      </Item>
      <Item id='service' title='Redes Locais e Wireless' invert={true} box_title='Service' video='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=rSi8nPF6tDUdfefN&amp;controls=0' image={IconService} color='#b18b8a'>
        <S.P>Transforme Sua Infraestrutura de Rede com <S.Span>.SERVICE</S.Span>! Obtenha soluções completas em cabeamento estruturado e rede Wi-Fi, garantindo desempenho, segurança e gerenciamento eficiente. Contrate agora e eleve sua conectividade!</S.P>
        <S.P>A <S.Span>.COMPOS</S.Span> é especialista em fornecer soluções de rede personalizadas e eficientes. Com .Service, oferecemos projetos completos, implantação e gerenciamento de redes WAN, LAN, Wi-Fi e cabeadas, garantindo a máxima performance e segurança para a sua empresa.</S.P>
        <S.CheckList>
          {service_list.map((item, idx) => (
            <S.CheckItem key={idx}>
              <S.Span>{item}</S.Span>
              <S.CheckIcon />
            </S.CheckItem>
          ))}
        </S.CheckList>
        <S.Button>
          Solicite uma Proposta
        </S.Button>
      </Item>
    </>
  );
};

export default Services;
