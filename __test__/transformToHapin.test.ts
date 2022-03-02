import { transformToHapin } from "../src/transformToHapin"

test('Test TransformToHapin', () => {
	const res = transformToHapin("جاقسى ، حىجۇنجيە", false)
	console.log(res)
})
