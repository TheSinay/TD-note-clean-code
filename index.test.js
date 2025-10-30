import { describe,it,expect } from "vitest";
import { isBrelan, isCarre, isPair, isYams,isGrandeSuite } from "./index.js";

describe("isBrelan",()=>{
    it("should return true for [2,2,2,4,5]",()=>{
        const result = isBrelan([2,2,2,4,5]);
        expect(result).toBe(true);
    });
    it("should return false for [1,2,3,4,5]",()=>{
        const result = isBrelan([1,2,3,4,5]);
        expect(result).toBe(false);
    });
    it("should return true for [6,6,6,6,1]",()=>{
        const result = isBrelan([6,6,6,6,1]);
        expect(result).toBe(true);
    });
    it("should return false for [3,3,4,4,5]",()=>{
        const result = isBrelan([3,3,4,4,5]);
        expect(result).toBe(false);
    });
    it("should return true for [5,5,5,5,5]",()=>{
        const result = isBrelan([5,5,5,5,5]);
        expect(result).toBe(true);
    });
});

describe("iscarre",()=>{
    it("should return true for [4,4,4,4,2]",()=>{
        const result = isCarre([4,4,4,4,2]);
        expect(result).toBe(true);
    });
    it("should return false for [1,1,2,2,3]",()=>{
        const result = isCarre([1,1,2,2,3]);
        expect(result).toBe(false);
    });
});


describe("isPair",()=>{
    it("should return true for [3,3,1,4,5]",()=>{
        const result = isPair([3,3,1,4,5]);
        expect(result).toBe(true);
    });
    it("should return false for [1,2,3,4,5]",()=>{
        const result = isPair([1,2,3,4,5]);
        expect(result).toBe(false);
    });
});

describe("isYams",()=>{
    it("should return true for [6,6,6,6,6]",()=>{
        const result = isYams([6,6,6,6,6]);
        expect(result).toBe(true);
    });
    it("should return false for [6,6,6,6,5]",()=>{
        const result = isYams([6,6,6,6,5]);
        expect(result).toBe(false);
    });
});

describe("grande suite" ,()=>{
    it("should return true for [1,2,3,4,5] isBrelan",()=>{
        const result = isGrandeSuite([1,2,3,4,5]);
        expect(result).toBe(true);
    });
});

describe("cheackDicesResult",()=>{
    it("should return 2 for [2,2,2,4,5] and repeat 3",()=>{
        const result = cheackDicesResult([2,2,2,4,5],3);
        expect(result).toBe(2);
    });
    it("should return false for [1,2,3,4,5] and repeat 3",()=>{
        const result = cheackDicesResult([1,2,3,4,5],3);
        expect(result).toBe(false); 
    });
    it("should return 4 for [4,4,4,4,2] and repeat 4",()=>{
        const result = cheackDicesResult([4,4,4,4,2],4);
        expect(result).toBe(4); 
    });
});