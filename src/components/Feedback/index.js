import styled from 'styled-components';
import { Star } from 'lucide-react';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #151515;
`;

export const Desc = styled.p`
  margin-top: 1.25rem;
  font-size: 1rem;
  color: #666;
  width: 50%;
  text-align: center;

  @media (max-width: 956px) {
    width: 80%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  margin-top: 2.5rem;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 15rem;
  height: 17rem;
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.938rem 0;
`;

export const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StarIcon = styled(Star)`
  width: .8rem;
  height: .8rem;
  color: ${({ theme }) => theme.red};
  fill: ${({ theme }) => theme.red};
`;

export const RateTitle = styled.h2`
  font-size: 1rem;
  color: #2B2B2B;
`;

export const RateDesc = styled.p`
  font-size: .8rem;
  color: ${({ theme }) => theme.dark_grey};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileName = styled.p`
  font-size: .8rem;
  font-weight: 700;
  color: #2B2B2B;
  margin-left: .5rem;
`;
