import { transformCyrillicToArabic } from "../src/transformCyrillicToArabic"

test("Test transformCyrillicToArabic", () => {
    const res = transformCyrillicToArabic("жақсы")
    expect(res).toEqual("جاقسى")
})

test("Test transformCyrillicToArabic", () => {
    const res = transformCyrillicToArabic(`жақсы "Hapin"`)
    expect(res).toEqual(`جاقسى "Hapin"`)
})
