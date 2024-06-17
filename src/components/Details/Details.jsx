import { Fragment } from 'react';
import * as S from './index';

const Details = () => {
  const detail_list = [
    {
      summary: 'Como funciona a oferta de 60 dias grátis?',
      details: 'Você pode testar todos os recursos do nosso serviço de hospedagem gratuitamente por 60 dias. Após esse período, se decidir continuar, poderá escolher um dos nossos planos pagos.'
    },
    {
      summary: 'Onde está localizado o Data Center da .COMPOS?',
      details: 'Nosso Data Center próprio está localizado em Salvador (BA), oferecendo segurança e infraestrutura moderna para armazenamento de dados.'
    },
    {
      summary: 'O que significa velocidade síncrona?',
      details: 'Velocidade síncrona significa que a taxa de transferência de dados é a mesma para download e upload, garantindo eficiência máxima para todas as operações de rede.'
    },
    {
      summary: 'Como é realizado o controle de acesso?',
      details: 'Utilizamos sistemas de controle de acesso avançados para garantir que apenas usuários autorizados possam acessar a rede, aumentando a segurança.'
    }
  ];

  return (
    <S.Container>
      {detail_list.map((item, idx) => (
        <Fragment key={idx}>
          <S.Line />
          <S.Details>
            <S.Summary>
              {item.summary}
              <S.Arrow />
            </S.Summary>
            {item.details}
          </S.Details>
        </Fragment>
      ))}
    </S.Container>
  );
};

export default Details;
