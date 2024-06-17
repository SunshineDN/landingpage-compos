import * as S from './index';
import Atakarejo from '../../assets/clients/atakarejo.png';
import Sabin from '../../assets/clients/sabin.png';
import Sicoob from '../../assets/clients/sicoob.png';
import Yatch from '../../assets/clients/yatch.png';


const Clients = () => {
  const clients_list = [
    {
      name: 'Atakarejo',
      image: Atakarejo,
      description: 'O Grupo Atakarejo é uma empresa brasileira do ramo de supermercados com sede em Salvador, Bahia.',
    },
    {
      name: 'Sabin',
      image: Sabin,
      description: 'O Grupo Sabin é uma empresa brasileira do setor de medicina diagnóstica. Fundado em 1984, o grupo atua em diversas áreas, como laboratórios de análises clínicas, medicina personalizada e genômica.'
    },
    {
      name: 'Sicoob',
      image: Sicoob,
      description: 'O Sicoob, maior sistema financeiro cooperativo do Brasil, oferece serviços completos, incluindo conta corrente, crédito, investimento, cartões, previdência, consórcio, seguros, cobrança bancária e meios eletrônicos de pagamento.'
    },
    {
      name: 'Yatch',
      image: Yatch,
      description: 'O Yacht Clube da Bahia é um dos mais tradicionais clubes do Brasil. Esporte, vela, pesca, remo, equipes de natação e de maratona aquática.'
    }
  ];

  return (
    <S.Container>
      <S.Title>Clientes</S.Title>
      <S.Desc> A .COMPOS se orgulha por ter conquistado grandes clientes e parceiros ao longo de sua trajetória. Nosso compromisso é com o cliente e com os resultados alcançados.</S.Desc>
      <S.ClientsWrapper>
        {clients_list.map((client, index) => (
          <>
            <S.Client key={index}>
              <S.ClientLogo src={client.image} alt={client.name} />
              <S.ClientInfo>
                <S.ClientName>{client.name}</S.ClientName>
                <S.ClientDesc>{client.description}</S.ClientDesc>
              </S.ClientInfo>
            </S.Client>
            <S.Line $last={index === clients_list.length - 1} />
          </>
        ))}
      </S.ClientsWrapper>
    </S.Container>
  );
};

export default Clients;
