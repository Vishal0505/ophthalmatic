import PropTypes from "prop-types";

export default function Container({ children, className = '' }) {
    return (
        <div className={`max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1320px] mx-auto px-4 ${className}`}>
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
