import { shortTokens } from './mocks/theme.json.mock';
import {
    extractObjectsWithKeys,
    extractTopLevelElements,
    extractTypes,
    groupItemsByParent,
    tailwindConfigBuilder,
    figmaToTailwindDictionary,
    arrayOfObjectsToObject,
    isObjectAndNotArray,
    createPluginFromTypography,
    extractValueFromObjectWithStringKey,
    removeCurlyBrackets
} from './tailwindConfigBuilder';

describe('tailwindConfigBuilder', () => {
    describe('extractTopLevelElements', () => {
        const result = extractTopLevelElements(shortTokens) as unknown as { keyTitle: string; parent: string | null; }[];
        it('should return an array', () => {
            const topLevelValue = {
                keyTitle: "Tertiary 90%",
                parent: null,
                value: "#fdcc4ae6",
                type: "color",
            };

            const nestedValue = {
                keyTitle: "Secondary 90%",
                parent: "Secondary",
                type: "color",
                value: "#fdcc4ae6",
            }


            const topLevel = result.filter((item) => item.keyTitle === "Tertiary 90%");
            const nestedLevel = result.filter((item) => item.keyTitle === "Secondary 90%");

            expect(topLevel).toEqual(expect.arrayContaining([topLevelValue]));
            expect(nestedLevel).toEqual(expect.arrayContaining([nestedValue]));
        });
    });
    describe('objectHasTypeKey', () => {
        const result = extractObjectsWithKeys(shortTokens, 'type');
        const keys = result.map((d: Record<string, unknown>) => d.type || null);
        it('should return an array', () => {
            expect(result.length).toEqual(20);

            const expectedResults = [{
                keyTitle: "source-sans-pro",
                type: "fontFamilies",
                value: "Source Sans Pro",
            }];
            expect(result).toEqual(expect.arrayContaining(expectedResults));
        });
        it.each([keys])('should return an array of strings', (key) => {
            expect(keys).toEqual(expect.arrayContaining([key]));
        });
    });

    describe('extractTypes', () => {
        const result = extractTypes(shortTokens, 'color');

        it('should return an array of colors', () => {
            const color = result.map((d) => d.type || null);
            expect(result.length).toEqual(5);
            expect(color).toEqual(expect.arrayContaining(['color']));
        });
    });

    describe('groupItemsByParent', () => {
        it('should return an object with parent keys', () => {
            const extractedTypes = extractTypes(shortTokens, 'color');
            expect(extractedTypes.length).toEqual(5);

            const result = groupItemsByParent(extractedTypes);
            expect(result).toEqual(
                expect.objectContaining({
                    Primary: expect.objectContaining({ 100: "#e86c00", "90": "#e86c00e6" }),
                    Secondary: expect.objectContaining({ 100: "#fdcc4a", "90": "#fdcc4ae6" }),
                    Tertiary90: "#fdcc4ae6"
                })
            );
        });
    });

    describe("isObjectAndNotArray", () => {
        it("Should return true for an Object but false for anything else, including an Array", () => {
            const val1 = { a: 1, b: 2 }
            const val2 = [1, 2, 3, 4]
            const val3 = 3
            const val4 = "four"
            expect(isObjectAndNotArray(val1)).toBe(true);
            expect(isObjectAndNotArray(val2)).toBe(false);
            expect(isObjectAndNotArray(val3)).toBe(false);
            expect(isObjectAndNotArray(val4)).toBe(false);
        })
    });

    describe("arrayOfObjectsToObject", () => {
        it("Should turn an Array of Objects into an Object", () => {
            const testData = [
                {
                    "source-sans-pro": "Source Sans Pro",
                },
                {
                    "inter": "Inter",
                }
            ]
            const expected = {
                "source-sans-pro": "Source Sans Pro",
                "inter": "Inter"
            }
            const result = arrayOfObjectsToObject(testData);
            expect(result).toEqual(expected);
        });
    });

    describe("extractValueFromObjectWithStringKey", () => { 
        it("Should extract the value at the given path", () => {
            const extractedValue = extractValueFromObjectWithStringKey("{fontFamilies.source-sans-pro}", shortTokens);
            expect(extractedValue).toEqual("Source Sans Pro");
        });
        it("Should return the string as is if it does not have curly brackets", () => {
            const extractedValue = extractValueFromObjectWithStringKey("non.valid.path", shortTokens);
            expect(extractedValue).toEqual(undefined);
        });
        it("Should not throw an Error id there is no value to extract", () => {
            const extractedValue = extractValueFromObjectWithStringKey("{fontFamilies.source-sans-pro}", {});
            expect(extractedValue).toEqual(undefined);
        }) 
        
    })
    
    describe("removeCurlyBrackets", () => {
        it("Should remove the curly brackets from a string", () => {        
            const [result, bool] = removeCurlyBrackets("{hello.world}")
            expect(result).toEqual("hello.world")
            expect(bool).toBe(true);
        });
        it("Should return the string as is if it does not have curly brackets", () => { 
            const [result, bool] = removeCurlyBrackets("hello.world")
            expect(result).toEqual("hello.world")
            expect(bool).toBe(false);
        })
     });
    describe('tailwindConfigBuilder', () => {
        const result = tailwindConfigBuilder(shortTokens, 'color', true);
        const keys = Object.keys(result);
        it('should return an object', () => {
            expect(keys).toEqual(expect.arrayContaining(['colors']));
            expect(keys.length).toEqual(1);
        });
        it("Should not nest the object if nestValues is false", () => {
            const result = tailwindConfigBuilder(shortTokens, 'fontFamilies');
            const keys = Object.keys(result)
            expect(keys).toEqual(['fontFamily']);
            expect(figmaToTailwindDictionary.fontFamilies).toEqual(keys[0])
        });
        it("Should return an Object with the keys and values derived from the Object passed as an argument", () => {
            const {fontFamily} = tailwindConfigBuilder(shortTokens, 'fontFamilies');
            const keys = Object.keys(fontFamily);
            const values = Object.values(fontFamily)
            expect(keys).toEqual(expect.arrayContaining(["source-sans-pro", "inter"]));
            expect(values).toEqual(expect.arrayContaining(["Source Sans Pro", "Inter"]));

        })
    });
    describe("createPluginFromTypography", () => { 
        it("Should create a plugin from the 'typography' elements", () => {

            const expected = {
                ".heading": {
                    "fontFamily": "Source Sans Pro",
                    "fontSize": "11",
                    "lineHeight": "56",
                },
                ".strapline": {
                    "fontFamily": "Inter",
                }
            }
            const result = createPluginFromTypography(shortTokens);
            expect(result).toEqual(expected);
        });
    })

});