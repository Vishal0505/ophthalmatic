import { Box, Heading, Section, Text } from "@radix-ui/themes";

export default function CompanyOverview() {
    return (
        <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
            <section className="py-20 text-center bg-white relative overflow-hidden">
                <Box className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-70"></Box>

                <Box className="relative z-10 max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-white text-justify">
                    <Heading as="h2" className="text-center text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                        Company Overview
                    </Heading>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                        Ophthalmatic is a premier medical equipment manufacturing company known for its quality, reliability, and technological innovations. Our cutting-edge technology meets global standards and addresses the real needs of ophthalmologists.
                    </Text>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                        We pride ourselves on prompt delivery, dedicated after-sales support, and expert technical advice. This empowers healthcare professionals to deliver optimal patient care, reinforcing our leadership in the industry.
                    </Text>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                        At Ophthalmatic, we are committed to continuous innovation, setting the global standard in eye care technology, and prioritizing the health and well-being of communities worldwide.
                    </Text>

                    <Box className="flex justify-center mt-8 text-center">
                        <a href="#learn-more" aria-label="Explore our vision" className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1">
                            Explore Our Vision
                        </a>
                    </Box>
                </Box>

                {/* Decorative elements */}
                <Box className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-300 to-transparent"></Box>
                <Box className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-300 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></Box>
            </section>

            <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
                <Box className="max-w-7xl mx-auto px-8">
                    <Heading as="h2" className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 mb-12">
                        Our Divisions & Services
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Repeat Box components for each service with consistent styles */}
                        {/* Example for Ophthalmatic */}
                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-2xl font-bold text-blue-700 mb-4">Ophthalmatic</Heading>
                                <Text className="text-gray-600 leading-relaxed">
                                    We produce world-class ophthalmic devices, setting global standards in eye care technology and ensuring the best care for ophthalmologists.
                                </Text>
                            </Box>
                            <a href="#more-info" aria-label="Learn more about Ophthalmatic" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>
                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-2xl font-bold text-blue-700 mb-4">
                                    Healthcare Facilities
                                </Heading>
                                <Text className="text-gray-600 leading-relaxed">
                                    Our state-of-the-art healthcare facilities offer comprehensive medical services for all age groups, ensuring top-quality healthcare for everyone.
                                </Text>
                            </Box>
                            <a href="#more-info" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>

                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-2xl font-bold text-blue-700 mb-4">
                                    Education & Wellness
                                </Heading>
                                <Text className="text-gray-600 leading-relaxed">
                                    We provide innovative educational programs and wellness services designed to promote physical and mental well-being across diverse communities.
                                </Text>
                            </Box>
                            <a href="#more-info" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>

                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-2xl font-bold text-blue-700 mb-4">
                                    Charitable Foundation
                                </Heading>
                                <Text className="text-gray-600 leading-relaxed">
                                    Our foundation offers free eye check-ups and essential healthcare services for children, adults, and the elderly, ensuring healthcare accessibility for all.
                                </Text>
                            </Box>
                            <a href="#more-info" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>

                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-3xl font-semibold text-indigo-600 mb-4">
                                    Part of the Gadhiya Group
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    As a vital division of the globally recognized Gadhiya Group, we share a commitment to advancing healthcare through innovative solutions and community initiatives.
                                </Text>
                            </Box>
                            <a href="#more-info" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>

                        <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
                            <Box>
                                <Heading as="h3" className="text-3xl font-semibold text-indigo-600 mb-4">
                                    Technological Innovation
                                </Heading>
                                <Text className="text-gray-700 leading-relaxed">
                                    Our commitment to innovation drives us to create advanced, reliable solutions that reflect a deep understanding of ophthalmologists needs worldwide.
                                </Text>
                            </Box>
                            <a href="#more-info" className="mt-4 inline-block text-blue-600 hover:underline">Learn More</a>
                        </Box>
                    </div>
                </Box>
            </section>

            <Section className="py-20 text-center bg-gray-100 relative overflow-hidden">
                <Box className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-400 opacity-60 transform rotate-6"></Box>

                <Box className="relative z-10 max-w-4xl mx-auto p-10 rounded-lg shadow-2xl bg-white text-justify">
                    <Heading as="h2" className="text-5xl font-extrabold mb-8 text-gray-800">Our Vision & Impact</Heading>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-4">
                        At Gadhiya Group, our vision is to revolutionize healthcare by leveraging cutting-edge technology and innovative solutions. We aim to empower healthcare providers with the tools they need to deliver the highest quality of care.
                    </Text>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-4">
                        We strive to create a world where advanced medical technologies are accessible to all, fostering healthier communities and improving patient outcomes globally.
                    </Text>
                    <Text className="text-lg text-gray-700 leading-relaxed mb-6">
                        Through strategic partnerships and community initiatives, we are dedicated to making a tangible impact on health and well-being for all age groups.
                    </Text>

                    <Box className="flex justify-center mt-8">
                        <a href="#learn-more" aria-label="Discover our journey" className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-l transition duration-300 transform hover:-translate-y-1">
                            Discover Our Journey
                        </a>
                    </Box>
                </Box>
                <Box className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-400 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></Box>
            </Section>
        </div>
    );
}
