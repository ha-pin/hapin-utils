import { transformCyrillicToIPA_CNA } from "../src/cyrillic/transformCyrillicToIPACNA"

test("Test transformCyrillicToArabic", () => {
    const res = transformCyrillicToIPA_CNA("жақсы")
    expect(res).toEqual("ʤɑqsə")
})

test("Test transformCyrillicToArabic", () => {
    const res = transformCyrillicToIPA_CNA(`жақсы "Hapin"`)
    expect(res).toEqual(`ʤɑqsə "Hapin"`)
})
