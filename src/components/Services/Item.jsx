import * as S from './ItemsStyles';

const Item = ({ id, title, box_title, video, image, color, invert, children }) => {

  return (
    <S.ServicesContainer id={id} $bg_dark={invert}>
      <S.VideoImage $invert={invert}>
        <S.Video src={video} />
        <S.BoxServices>
          <S.IconWrapper>
            <S.Icon src={image} />
            <S.Title><S.Span $red>.</S.Span>{box_title}</S.Title>
          </S.IconWrapper>
          <S.BoxServicesTitle $color={color}>{title}</S.BoxServicesTitle>
        </S.BoxServices>
      </S.VideoImage>
      {children}
    </S.ServicesContainer>
  );
};

export default Item;
