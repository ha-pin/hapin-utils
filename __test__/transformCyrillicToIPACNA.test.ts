import { transformCyrillicToIPA_CNA } from "../src/cyrillic/transformCyrillicToIPACNA"

test("Test transformCyrillicToIPA_CNA", () => {
    const res = transformCyrillicToIPA_CNA("жақсы")
    expect(res).toEqual("dʒɑqsə")
})

test("Test transformCyrillicToIPA_CNA", () => {
    const res = transformCyrillicToIPA_CNA(`жақсы "Hapin"`)
    expect(res).toEqual(`dʒɑqsə "Hapin"`)
})
