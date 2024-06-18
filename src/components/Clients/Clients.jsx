import * as S from './index';
import Atakarejo from '../../assets/clients/atakarejo.png';
import Sabin from '../../assets/clients/sabin.png';
import Sicoob from '../../assets/clients/sicoob.png';
import Yacht from '../../assets/clients/yacht.svg';
import { Fragment } from 'react';


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
      name: 'Yacht',
      image: Yacht,
      description: 'O Yacht Clube da Bahia é um dos mais tradicionais clubes do Brasil. Esporte, vela, pesca, remo, equipes de natação e de maratona aquática.'
    }
  ];

  return (
    <S.Container>
      <S.Title>Clientes</S.Title>
      <S.Desc> A .COMPOS se orgulha por ter conquistado grandes clientes e parceiros ao longo de sua trajetória. Nosso compromisso é com o cliente e com os resultados alcançados.</S.Desc>
      <S.ClientsWrapper>
        {clients_list.map((client, index) => (
          <Fragment key={index}>
            <S.Client>
              <S.ClientLogo src={client.image} alt={client.name} />
                <S.ClientDesc>{client.description}</S.ClientDesc>
            </S.Client>
            <S.Line $last={index === clients_list.length - 1} />
          </Fragment>
        ))}
      </S.ClientsWrapper>
    </S.Container>
  );
};

export default Clients;
