import { Box } from "@radix-ui/themes";

// BackgroundImage.js
export default function BackgroundImage({ imageUrl, opacity = 0.7 }) {
    return (
        <Box
            className={`absolute inset-0 bg-cover bg-center bg-fixed opacity-${Math.round(opacity * 100)}`}
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
    );
}
