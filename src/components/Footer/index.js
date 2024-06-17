import styled from 'styled-components';
import { Map, Mail } from 'lucide-react';

export const FooterContainer = styled.footer`
  width: 100%;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 73%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.red};
  /* margin: 0 auto;
  width: 72%; */

  @media (max-width: 920px) {
   margin: 0 auto;
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 5.25rem;
  margin-top: 1.25rem;
  /* background-color: #FFF; */
  width: 100%;
  justify-content: space-between;
  
  @media (max-width: 920px) {
   flex-wrap: wrap;
   gap: 0;
   justify-content: center;
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
  background-color: #fff;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Address = styled.a.attrs({
  target: '_blank'
})`
  color: ${({ theme }) => theme.dark_grey};
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const RedSpan = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
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
  flex-wrap: wrap;
`;

export const EmailText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.dark_grey};
`;

export const EmailLink = styled.a.attrs({
  target: '_blank'
})`
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
  flex-wrap: wrap;
`;

export const BottomText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.black};
`;

export const BottomLink = styled.a.attrs({
  target: '_blank'
})`
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
