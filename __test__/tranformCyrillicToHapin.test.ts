import { transformCyrillicToHapin } from "../src/tranformCyrillicToHapin"

test('Test transformCyrillicToHapin', () => {
    const res = transformCyrillicToHapin("жақсы")
    expect(res).toEqual("jaqse")
})
