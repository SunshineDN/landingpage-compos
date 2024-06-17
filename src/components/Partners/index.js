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
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const PartnersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const PartnerLogo = styled.img`
  width: 9.375rem;
  height: 9.375rem;
`;
