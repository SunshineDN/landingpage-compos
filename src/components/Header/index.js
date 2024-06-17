import styled from 'styled-components';
import BG from '../../assets/BG-LANDING 2.png';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    background-position: left;
  }
`;


export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.875rem 0;
  height: 100%;
  max-width: 43.75rem; // 700px
  margin: 0 6.25rem;

  @media (max-width: 768px) {
    margin: 3.125rem 2.625rem;
  }

  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .7rem;
    background-color: ${({theme}) => theme.red};
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  font-size: 2rem; // 32px
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.688rem; // 27px
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

export const Span = styled.span`
  ${(props) => (props.$bold ? 'font-weight: 700;' : '')}
  ${(props) => (props.$extra_bold ? 'font-weight: 800;' : '')}
  ${(props) => (props.$red_bold ? 'color: ' + props.theme.red + '; font-weight: 700;' : '')}
  ${(props) => (props.$red ? 'color: ' + props.theme.red + ';' : '')}
`;
