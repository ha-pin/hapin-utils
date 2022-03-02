import { transformToHapin } from "../src/transformToHapin"

test('Test TransformToHapin Simple', () => {
	const res = transformToHapin("جاقسى ، حىجۇنجيە", false)
	console.log(res)
})

test("Test TransformToHapin Easy", () => {
    const res = transformToHapin("جاقسى! حىجۇنجيە", true)
    console.log(res)
})