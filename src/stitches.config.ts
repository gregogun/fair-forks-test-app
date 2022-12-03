import { blue, slate } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, theme, globalCss } = createStitches({
    theme: {
        colors: {
            ...slate,
            ...blue
        }
    }
});