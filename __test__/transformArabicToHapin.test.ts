import { transformArabicToHapin } from "../src/arabic/transformArabicToHapin"

test("Test transformArabicToHapin  Simple", () => {
    const res = transformArabicToHapin("جاقسى ، ەرلان", true, false)
    expect(res).toEqual("jaqse, yerlan")
})

test("Test transformArabicToHapin With u+200b Simple", () => {
    const res = transformArabicToHapin("جاقسى ، ەرلان", false, false)
    console.log(res)
})

test("Test transformArabicToHapin  Simple", () => {
    const res = transformArabicToHapin("جاقسى ، ەرلان", true, false)
    expect(res).toEqual("jaqse, yerlan")
})

test("Test transformArabicToHapin  Easy", () => {
    const res = transformArabicToHapin("جاقسى! ەرلان", true, true)
    expect(res).toEqual("j'a'q's'e'! ye'r'l'a'n")
})

test("Test transformArabicToHapin  X", () => {
    const res = transformArabicToHapin("ء", false)
    expect(res).toEqual("")
})
