import styled from 'styled-components';
import { Map, Mail } from 'lucide-react';

export const Container = styled.footer`
  width: 100%;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.red};
  margin: 0 auto;
  width: 72%;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1.25rem;
  background-color: #FFF;
  width: 100%;
  justify-content: center;

  @media (max-width: 650px) {
   flex-wrap: wrap;
  }
`;

export const LocationMailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.625rem;
  align-items: center;
  padding: 1.125rem;
  width: 31.25rem;
`;

export const Address = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.dark_grey};
  font-weight: 500;
`;

export const RedSpan = styled.span`
  color: ${({ theme }) => theme.red};
`;

export const BgIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.red};
  border-radius: 50%;
  padding: .6rem;
`;

export const LocationIcon = styled(Map)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.white};
`;

// export const Email = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.625rem;
//   align-items: center;
//   background-color: antiquewhite;
// `;

export const EmailIcon = styled(Mail)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.white};
`;

export const EmailInfo = styled.div`
  display: flex;
  gap: 0.625rem;
  font-weight: 500;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const EmailText = styled.p`
  font-size: 1.125rem;
  color: ${({theme}) => theme.dark_grey};
`;

export const EmailLink = styled.a`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.dark_grey};
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 1.625rem;
  align-items: center;
  background-color: ${({ theme }) => theme.light_grey};
  padding: 1.25rem 0;
  width: 100%;
`;

export const BottomText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
`;

export const BottomLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  transition: color 0.3s;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const Bold = styled.span`
  font-weight: 700;
`;
