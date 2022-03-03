import { transformToArabic } from "../src/transformToArabic"

test("Test TransformToArabic", () => {
	const res = transformToArabic("syelxam")
	expect(res).toEqual("سەلام")
})

test("Test TransformToArabic", () => {
    const res = transformToArabic("jaqse")
    expect(res).toEqual("جاقسى")
})
