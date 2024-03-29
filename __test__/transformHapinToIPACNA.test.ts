import { transformHapinToIPA_CNA } from "../src/hapin/transformHapinToIPACNA"

test("Test transformHapinToIPA_CNA", () => {
    const res = transformHapinToIPA_CNA("jaqse")
    expect(res).toEqual("dʒɑqsə")
})

test("Test transformHapinToIPA_CNA", () => {
    const res = transformHapinToIPA_CNA(`jaqse "Hapin"`)
    expect(res).toEqual(`dʒɑqsə "Hapin"`)
})

test("Test transformHapinToIPA_CNA", () => {
    const res = transformHapinToIPA_CNA(`shyeshye`)
    expect(res).toEqual(`ʃeʃe`)
})

test("Test transformHapinToArabic", () => {
    const res = transformHapinToIPA_CNA(`shsh`)
    expect(res).toEqual(`ʃtʃ`)
})
