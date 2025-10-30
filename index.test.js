import { describe,it,expect } from "vitest";
import {isBrelan} from "./index.js";

describe("isBrelan",()=>{
    it("should return true for [2,2,2,4,5]",()=>{
        const result = isBrelan([2,2,2,4,5]);
        expect(result).toBe(true);
    });
});