import { transformToOld } from "../src/transformToOld"

test("Test TransformToOld", () => {
	const res = transformToOld("syelxam")
	expect(res).toEqual("سەلام")
})

test("Test TransformToOld", () => {
    const res = transformToOld("jaqse")
    expect(res).toEqual("جاقسى")
})