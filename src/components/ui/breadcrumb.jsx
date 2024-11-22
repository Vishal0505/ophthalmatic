
import { Flex, Text } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Breadcrumb({
    title,
    secondaryTitle,
    path,
    label
}) {
    return (
        <Flex direction="column" py="9" style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
            {/* Title */}
            <Flex gap="3" align="center" justify="center" width="100%">
                <Text className={`${'text-5xl font-semibold text-primary'}`}>{title}</Text>
                {secondaryTitle && (
                    <Text className={`${'text-5xl font-semibold'}`}>{secondaryTitle}</Text>
                )}
            </Flex>

            {/* Breadcrumb Links */}
            <Flex justify="center" gap="2" className="text-sm font-medium">
                <NavLink to="/" className='text-textGray'>
                    Home
                </NavLink>
                <Text className='text-textGray'>/</Text>
                <NavLink to={`/${path}`} className={({ isActive }) => (isActive ? 'text-primary' : 'text-textGray')} >
                    {label}
                </NavLink>
            </Flex>
        </Flex>
    );
};


Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};