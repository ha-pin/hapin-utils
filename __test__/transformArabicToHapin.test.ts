import { transformArabicToHapin } from "../src/transformArabicToHapin"

test("Test transformArabicToHapin  Simple", () => {
    const res = transformArabicToHapin("جاقسى ، ەرلان", false)
    expect(res).toEqual("jaqse, yerlan")
})

test("Test transformArabicToHapin  Easy", () => {
    const res = transformArabicToHapin("جاقسى! ەرلان", true)
    expect(res).toEqual("j'a'q's'e'! ye'r'l'a'n")
})

test("Test transformArabicToHapin  X", () => {
    const res = transformArabicToHapin("ء", false)
    expect(res).toEqual("")
})
