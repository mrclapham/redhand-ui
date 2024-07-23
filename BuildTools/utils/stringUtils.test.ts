import { makeKeyString, removeSuffix } from './stringUtils';

describe('stringUtils', () => {
    describe("removeSuffix", () => {
        it("Should remove the suffix from a string", () => {
            expect(removeSuffix("ButtonTw.tsx")).toEqual("ButtonTw");
            expect(removeSuffix("ButtonTw.json")).toEqual("ButtonTw");
            expect(removeSuffix("ButtonTw.json")).toEqual("ButtonTw");
            expect(removeSuffix("ButtonTw.other.json")).toEqual("ButtonTw");
        })
    })   

    describe('makeKeyString', () => {
        it('should return a string', () => {
            const result = makeKeyString('Primary 100%');
            expect(result).toEqual('Primary100');
        });
        it('should return a string with a removed string', () => {
            const result = makeKeyString('Primary 100%', 'Primary');
            expect(result).toEqual('100');
        });
        it('should return a string with a removed string, regardless of casing', () => {
            const result1 = makeKeyString('Primary 100%', 'primary');
            expect(result1).toEqual('100');

            const result2 = makeKeyString('primary 200%', 'Primary');
            expect(result2).toEqual('200');
        });
        
    });
});
