import { DesignTokensFigma, Theme } from '../design-token-builder';

/**
 * Takes a list of themes, as exported from Design Studio for Figma, and extracts them from the design tokens
 * @param themes {string[]} - The themes to extract from the design tokens
 * @param designTokens {DesignTokensFigma} - The design tokens to extract the themes from
 * @returns {[string, Theme][]} - An array of tuples containing the theme name and the theme object
 */
export const extractThemes = (themes: string[], designTokens: DesignTokensFigma): [string, Theme][] => {
    return themes.reduce<[string, Theme][]>((acc, current): [string, Theme][] => {
        const theme = designTokens[current];
        if (theme) {
            return [...acc, [current, theme]];
        } else {
            return acc;
        }
    }, [])
}