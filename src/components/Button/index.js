import styled from 'styled-components';
import WhatsApp from '../../assets/icons/whatsapp.svg?react';

export const Button = styled.a.attrs({
  target: '_blank'
})`
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
  display: flex;
  align-items: center;
  padding: .625rem 2.7rem;
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: scale(1.05);
    box-shadow: inset 0px -6px 5px -3px rgba(255,255,255, .40)
    }
`;

export const WhatsAppIcon = styled(WhatsApp)`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 1rem;
  fill: ${({ theme }) => theme.white};
`;
