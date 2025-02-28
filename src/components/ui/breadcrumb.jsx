import { Flex, Text } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/utils';

export default function Breadcrumb({
    title,
    secondaryTitle,
    path,
    label
}) {
    return (
        <Flex
            gap='2'
            direction="column"
            py="9"
            style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}
        >
            <Flex gap="3" align="center" justify="center" width="100%">
                <Text className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-center">
                    {title}
                </Text>
                {secondaryTitle && (
                    <Text className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                        {secondaryTitle}
                    </Text>
                )}
            </Flex>

            {/* Breadcrumb Links */}
            <Flex justify="center" gap="2" className="text-xs sm:text-sm md:text-base font-medium">
                <NavLink to="/" className='text-textGray'>
                    Home
                </NavLink>
                <Text className='text-textGray'>/</Text>
                <NavLink
                    to={`/${path}`}
                    className={({ isActive }) => (isActive ? 'text-primary' : 'text-textGray')}
                    onClick={scrollToTop}
                >
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
