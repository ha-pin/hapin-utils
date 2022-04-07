enum CyrillicChar {
    "C1072" = "a",
    "C1073" = "b",
    "C1074" = "v",
    "C1075" = "g",
    "C1076" = "d",
    "C1077" = "ye",
    "C1078" = "j",
    "C1079" = "z",
    "C1080" = "xe",
    "C1081" = "i",
    "C1082" = "k",
    "C1083" = "l",
    "C1084" = "m",
    "C1085" = "n",
    "C1086" = "o",
    "C1087" = "p",
    "C1088" = "r",
    "C1089" = "s",
    "C1090" = "t",
    "C1091" = "w",
    "C1092" = "f",
    "C1093" = "h",
    "C1094" = "ts",
    "C1095" = "ch",
    "C1096" = "sh",
    "C1097" = "shsh",
    "C1099" = "e",
    "C1101" = "ye",
    "C1102" = "iw",
    "C1103" = "ia",
    "C1105" = "io",
    "C1110" = "xe",
    "C1171" = "gh",
    "C1179" = "q",
    "C1187" = "ng",
    "C1199" = "xu",
    "C1201" = "u",
    "C1211" = "hh",
    "C1241" = "xa",
    "C1257" = "xo",
}

// 俄语的硬音和软音符号 ъ ь 处理
const Tones = [1098, 1100]

/**
 * 处理俄语硬音和软音符号问题
 * @param word
 * @returns
 */
const handleTones = (word: string): string => {
    return word
        .split("")
        .filter((item) => !Tones.includes(item.charCodeAt(0)))
        .join("")
}

class HapinTransformer {
    private _word = ""
    private _index = 0
    private _res = ""

    constructor(word: string) {
        this._word = word
    }

    go = () => {
        if (!this._word) {
            return ""
        }

        while (this._index < this._word.length) {
            const c = this._word[this._index].charCodeAt(0)

            // 处理普通字符
            if (Object.keys(CyrillicChar).includes(`C${c}`)) {
                this._res += CyrillicChar[`C${c}`]
            } else {
                this._res += this._word[this._index]
            }

            this._index++
            continue
        }

        return this._res
    }
}

export const transformCyrillicToHapin = (o: string) => {
    const array = o
        .toLowerCase()
        .split(/( +)/g)
        .map((item) => item.trim())
        .filter((item) => !!item)

    const res = array
        .map((item: string) => new HapinTransformer(handleTones(item)).go())
        .join("")

    return res.replace(/(?=[\s])( +)(?=[!-\/\:-\@])/g, "")
}
