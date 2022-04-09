import { transformHapinToArabic } from "../src/transformHapinToArabic"

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("sxalyem")
    expect(res).toEqual("سالەم")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("jaqse")
    expect(res).toEqual("جاقسى")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("bxer")
    expect(res).toEqual("ٴبىر")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("xa")
    expect(res).toEqual("ٴا")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("xo")
    expect(res).toEqual("ٴو")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("xe")
    expect(res).toEqual("ٴى")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("xu")
    expect(res).toEqual("ٴۇ")
})

test("Test TransformToArabic", () => {
    const res = transformHapinToArabic("yu")
    expect(res).toEqual("ٴۇ")
})
