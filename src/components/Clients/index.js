import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 3.125rem auto;
  gap: 1.25rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
  width: 60%;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1.25rem auto;
  }
`;

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 1.875rem;
  background-color: #FFF;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Line = styled.hr`
  ${(props) => props.$last && 'display: none;'}
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.light_grey};
`;

export const Client = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ClientLogo = styled.img`
  width: 9.375rem;
  height: auto;

  @media (max-width: 600px) {
    margin-bottom: 1.25rem;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%
  }
`;

// export const ClientName = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 700;
//   margin-bottom: 1.25rem;
// `;

export const ClientDesc = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: left;
  width: 70%;

  @media (max-width: 600px) {
    text-align: justify;
    width: 100%;
  }
`;
