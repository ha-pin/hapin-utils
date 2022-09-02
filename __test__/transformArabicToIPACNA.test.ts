import { transformArabicToIPA_CNA } from "../src/arabic/transformArabicToIPACNA"

test("Test transformArabicToIPA_CNA", () => {
    const res = transformArabicToIPA_CNA("جاقسى")
    expect(res).toEqual("dʒɑqsə")
})

test("Test transformArabicToIPA_CNA", () => {
    const res = transformArabicToIPA_CNA(`جاقسى "Hapin"`)
    expect(res).toEqual(`dʒɑqsə "Hapin"`)
})
