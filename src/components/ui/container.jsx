import PropTypes from "prop-types";

export default function Container({ children, className = '' }) {
    return (
        <div className={`max-w-[1320px] mx-auto ${className}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Container.defaultProps = {
    className: '',
};
