import { Box } from "@radix-ui/themes";

export default function RightArrow() {
    return (
        <Box>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-1" y="1" width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48 0)" stroke="#284694" strokeWidth="2" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.1087 17.6997C20.8424 17.966 20.8424 18.3977 21.1087 18.6639L27.4448 25L21.1087 31.3361C20.8424 31.6023 20.8424 32.034 21.1087 32.3003C21.375 32.5666 21.8067 32.5666 22.0729 32.3003L28.8911 25.4821C29.1574 25.2159 29.1574 24.7841 28.8911 24.5179L22.0729 17.6997C21.8067 17.4334 21.375 17.4334 21.1087 17.6997Z" fill="#284694" />
            </svg>
        </Box>
    )
}
