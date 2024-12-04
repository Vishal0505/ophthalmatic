export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};

export const whatsapplink = () => {
    const phoneNumber = '+918140259610';
    const message = 'Hello, I need help!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 100);
};