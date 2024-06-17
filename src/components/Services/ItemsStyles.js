import styled from 'styled-components';

export const ServicesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.125rem 0;
  padding: 6.25rem;
  background-color: ${(props) => props.$bg_dark ? props.theme.light_grey : ''};

  @media (max-width: 768px) {
    padding: 3.125rem 2.625rem;
  }
`;

export const VideoImage = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3.125rem 0;
  flex-direction: ${(props) => props.$invert ? 'row-reverse' : 'row'};
  justify-content: space-between;

  @media (max-width: 982px) {
    justify-content: center;
  }
`;

export const Video = styled.iframe.attrs({
  width: '560',
  height: '315',
  title: 'YouTube video player',
  frameBorder: '0',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: false,
})`
  border-radius: 1.25rem;
`;

export const BoxServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const IconWrapper = styled.div`
  width: 13rem;
  height: 12rem;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15%;
  box-shadow: inset 0px 0px .938rem .625rem rgba(0,0,0,.3);
`;

export const Icon = styled.img`
  width: 5.9rem;
  height: 5.9rem;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.red};
`;

export const BoxServicesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.$color || props.theme.black};
`;
