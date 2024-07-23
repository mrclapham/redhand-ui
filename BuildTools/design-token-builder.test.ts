/**
 * @jest-environment node
 */

import type { DesignTokensFigma } from './design-token-builder';
import { extractThemes } from './utils/extractThemes'

const testData: DesignTokensFigma = {
    "dark": {
        "Primary": {
            "Primary 100%": {
                "value": "#e86c00",
                "type": "color"
            },

            "capitalize": {
                "value": "capitalize",
                "type": "textCase"
            }
        },
        "textDecoration": {
            "none": {
                "value": "none",
                "type": "textDecoration"
            }
        },
        "paragraphIndent": {
            "0": {
                "value": "0px",
                "type": "dimension"
            }
        },
        "Heading": {
            "value": {
                "fontFamily": "{fontFamilies.source-sans-pro}",
                "fontSize": "{fontSize.1}",
                "lineHeight": "{lineHeights.1}"
            },
            "type": {
                "value": "typography",
                "type": "string"
            },
            "description": {
                "value": "Heading style",
                "type": "string"
            }
        }
    },
    "light": {
        "Primary": {
            "Primary 100%": {
                "value": "#e86c00",
                "type": "color"
            },

            "capitalize": {
                "value": "capitalize",
                "type": "textCase"
            }
        },
        "textDecoration": {
            "none": {
                "value": "none",
                "type": "textDecoration"
            }
        },
        "paragraphIndent": {
            "0": {
                "value": "0px",
                "type": "dimension"
            }
        },
        "Heading": {
            "value": {
                "fontFamily": "{fontFamilies.source-sans-pro}",
                "fontSize": "{fontSize.1}",
                "lineHeight": "{lineHeights.1}"
            },
            "type": {
                "value": "typography",
                "type": "string"
            },
            "description": {
                "value": "Heading style",
                "type": "string"
            }
        }
    },
    "$themes": [], // Update the value of $themes property to an empty array
    "$metadata": {
        "tokenSetOrder": [
            "dark",
            "light"
        ]
    }
}

describe("design-token-builder", () => {
    describe("extractThemes", () => { 
        const result = extractThemes(["dark", "light", "dud"], testData);
        it("Should return an array of themes", () => {
            expect(result[0][0]).toEqual("dark")
            expect(result[0][1]).toEqual(testData["dark"])
            expect(result[1][0]).toEqual("light")
            expect(result[1][1]).toEqual(testData["light"])
            expect(result.length).toEqual(2)
        })
        
    })
    describe('createConfig', () => {
        it("Should generate a customConfig", () => {
            expect(testData).toEqual(testData)
        })
    });
    
        
})