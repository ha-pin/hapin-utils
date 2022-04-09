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
