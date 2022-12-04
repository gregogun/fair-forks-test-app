import { slateDark, violetDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, theme, globalCss, keyframes } = createStitches({
    theme: {
        colors: {
            ...slateDark,
            ...violetDark,
            gradientColor1: 'hsl(15 90% 55%)',
            gradientColor2: 'hsl(40 95% 55%)',
            gradientColor3: 'hsl(151, 55%, 42%)',
            gradientColor4: 'hsl(252, 56%, 57%)',
        }
    }
});