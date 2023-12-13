import PropTypes from 'prop-types';
import { TypographyStyled } from './Notification.styled';

export function Notification({ msg }) {
  return <TypographyStyled>{msg}</TypographyStyled>;
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
