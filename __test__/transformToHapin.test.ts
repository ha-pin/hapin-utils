import { transformToHapin } from "../src/transformToHapin"

test('Test TransformToHapin Simple', () => {
	const res = transformToHapin("جاقسى ، ەرلان", false)
	expect(res).toEqual("jaqse, yerlan")
})

test("Test TransformToHapin Easy", () => {
    const res = transformToHapin("جاقسى! ەرلان", true)
    expect(res).toEqual("j'a'q's'e'! ye'r'l'a'n")
})

test("Test TransformToHapin X", () => {
    const res = transformToHapin("ء", false);
    expect(res).toEqual("x");
});
