import * as S from './index';

const Button = ({ children, href }) => {
  return (
    <S.Button href={href}>{children}<S.WhatsAppIcon /></S.Button>
  );
};

export default Button;
