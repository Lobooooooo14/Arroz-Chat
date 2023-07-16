import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        name: string
        colors: {
            primary: string
            secondary: string
            primaryScreenGradient: string
            secondaryScreenGradient: string
            primaryGradient: string
            secondaryGradient: string
            headingColor: string
            textColor: string
            background: string
            iconColor: string
            shadow: string
            error: string
            warn: string
            success: string
            bubbleColor: string
        }
    }
}