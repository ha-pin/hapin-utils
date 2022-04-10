import { transformCyrillicToHapin } from "../src/tranformCyrillicToHapin"

test('Test transformCyrillicToHapin', () => {
    const res = transformCyrillicToHapin("жақсы")
    expect(res).toEqual("jaqse")
})

test('Test transformCyrillicToHapin', () => {
    const res = transformCyrillicToHapin(`жақсы "Hapin"`)
    expect(res).toEqual(`jaqse "Hapin"`)
})

test('Test transformCyrillicToHapin', () => {
    const res = transformCyrillicToHapin(`жақсы "Hapin  Go"`)
    expect(res).toEqual(`jaqse "Hapin  Go"`)
})
