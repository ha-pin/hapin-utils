import { HapinDirectSchemeType, transformHapinToExtend } from "./extend"

const ipaCNAScheme: HapinDirectSchemeType = [
    "ipa-cna",
    {
        a: "ɑ",
        b: "b",
        v: "v",
        g: "ɡ",
        d: "d",
        ye: "e",
        j: "dʒ",
        z: "z",
        i: "j",
        k: "k",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "p",
        r: "r",
        s: "s",
        t: "t",
        w: "w",
        f: "f",
        h: "x",
        ch: "tʃ",
        sh: "ʃ",
        shsh: "ʃtʃ",
        e: "ə",
        iw: "jw",
        ia: "jɑ",
        io: "jo",
        xe: "i",
        gh: "ʁ",
        q: "q",
        ng: "ŋ",
        xu: "ø",
        u: "u",
        hh: "h",
        xa: "æ",
        xo: "y",
    },
]

export const transformHapinToIPA_CNA = (o: string) => {
    let ext = transformHapinToExtend(o, ipaCNAScheme)

    if (!ext) return ""

    const vowelRegExp = /(ɑ|o|u|ə|æ|ø|y|i|e)/g

    // 没有元音
    if (!vowelRegExp.test(ext)) {
        if (/(g|k)/.test(ext)) {
            return ext.replace(/j/g, "ij").replace(/w/g, "yw")
        }

        return ext.replace(/j/g, "əj").replace(/w/g, "uw")
    }

    // 查找第一个元音
    const firstVowel = ext.match(vowelRegExp)![0]

    if (!["ɑ", "o", "u", "ə"].includes(firstVowel)) {
        const regExp = /(ɑ|o|u|ə)(j|w)(ɑ|o|u|ə)/
        if (!regExp.test(ext)) {
            return ext.replace(/j/g, "əj").replace(/w/g, "uw")
        }
    } else if (
        ["j", "w"].includes(ext[1]) &&
        !["ɑ", "o", "u", "ə"].includes(ext[0])
    ) {
        return ext.replace(/j/g, "əj").replace(/w/g, "uw")
    }

    if (["æ", "ø", "y", "i", "e"].includes(firstVowel)) {
        const regExp = /(æ|ø|y|i|e)(j|w)(æ|ø|y|i)/
        if (!regExp.test(ext)) {
            return ext.replace(/j/g, "ij").replace(/w/g, "yw")
        }

        if (
            ["j", "w"].includes(ext[1]) &&
            !["æ", "ø", "y", "i", "e"].includes(ext[0])
        ) {
            return ext.replace(/j/g, "ij").replace(/w/g, "yw")
        }
    }

    return ext
}
