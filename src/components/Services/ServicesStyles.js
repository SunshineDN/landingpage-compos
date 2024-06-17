import styled from 'styled-components';
import { BadgeCheck } from 'lucide-react';
import { Check } from 'lucide-react';

export const Title = styled.h3`
  color: ${({ theme }) => theme.red};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.125rem;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.dark_grey};
  font-weight: 400;
  font-size: 1.125rem;
`;

export const Span = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.dark_grey};
`;

export const CheckList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .425rem 0;
`;

export const CheckItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0 .625rem;
  font-size: 1.125rem;
`;

export const CheckIcon = styled(BadgeCheck)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${({ theme }) => theme.red};
`;

export const CheckIcon2 = styled(Check)`
  width: 1.3rem;
  height: 1.3rem;
  color: ${({ theme }) => theme.red};
`;

export const Button = styled.a.attrs({
  target: '_blank'
})`
  padding: .7rem 3.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.red};
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
`;