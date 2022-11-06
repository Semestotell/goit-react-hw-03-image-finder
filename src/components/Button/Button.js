import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ children, onClick }) => (
    <LoadButton type="button" onClick={onClick}>
        {children}
    </LoadButton>
    );

    Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;