import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

export const Container = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 3.125rem auto;
  padding: 2.5rem 0;
`;

export const Line = styled.hr`
  height: 1px;
  border-radius: 25%;
  width: 100%;
  background-color: ${({ theme }) => theme.dark_grey};
`;

export const Arrow = styled(ChevronDown)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.dark_grey};
  transition: all 0.2s ease
`;

export const Details = styled.details`
  /* margin: 1.3rem 0; */
  width: 100%;
  padding: 1.5rem 0;
  transition: all 0.1s ease;
  font-size: .9rem;
  color: ${({ theme }) => theme.dark_grey};
  font-weight: 500;

  &[open] {
    max-height: 100vh;
  }

  &[open] summary {
    margin-bottom: 0.8em;
  }

  &[open] ${Arrow} {
    transform: rotate(-180deg);
  }
`;

export const Summary = styled.summary`
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  gap: 0 1.25rem;
  cursor: pointer;
  outline: none;
  user-select: none;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border: none;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.red};
  transition: all 0.1s ease;
`;
