export const ipaCorrector = (s: string) => {
    if (!s) return ""

    const vowelRegExp = /(ɑ|o|u|ə|æ|ø|y|i|e)/g

    // 没有元音
    if (!vowelRegExp.test(s)) {
        if (/(g|k)/.test(s)) {
            return s.replace(/j/g, "ij").replace(/w/g, "yw")
        }

        return s.replace(/j/g, "əj").replace(/w/g, "uw")
    }

    // 查找第一个元音
    const firstVowel = s.match(vowelRegExp)![0]

    if (!["ɑ", "o", "u", "ə"].includes(firstVowel)) {
        const regExp = /(ɑ|o|u|ə)(j|w)(ɑ|o|u|ə)/
        if (!regExp.test(s)) {
            return s.replace(/j/g, "əj").replace(/w/g, "uw")
        }
    } else if (
        ["j", "w"].includes(s[1]) &&
        !["ɑ", "o", "u", "ə"].includes(s[0])
    ) {
        return s.replace(/j/g, "əj").replace(/w/g, "uw")
    }

    if (["æ", "ø", "y", "i", "e"].includes(firstVowel)) {
        const regExp = /(æ|ø|y|i|e)(j|w)(æ|ø|y|i)/
        if (!regExp.test(s)) {
            return s.replace(/j/g, "ij").replace(/w/g, "yw")
        }

        if (
            ["j", "w"].includes(s[1]) &&
            !["æ", "ø", "y", "i", "e"].includes(s[0])
        ) {
            return s.replace(/j/g, "ij").replace(/w/g, "yw")
        }
    }

    return s
}
