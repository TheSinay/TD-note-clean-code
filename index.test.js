import { describe,it,expect } from "vitest";
import { isBrelan, isCarre, isPair, isYams } from "./index.js";

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