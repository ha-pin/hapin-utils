import { toLowerCase } from "../utils"

interface ICyrillicChar {
    [key: string]: string
    "C1072": string
    "C1073": string
    "C1074": string
    "C1075": string
    "C1076": string
    "C1077": string
    "C1078": string
    "C1079": string
    "C1080": string
    "C1081": string
    "C1082": string
    "C1083": string
    "C1084": string
    "C1085": string
    "C1086": string
    "C1087": string
    "C1088": string
    "C1089": string
    "C1090": string
    "C1091": string
    "C1092": string
    "C1093": string
    "C1094": string
    "C1095": string
    "C1096": string
    "C1097": string
    "C1099": string
    "C1101": string
    "C1102": string
    "C1103": string
    "C1105": string
    "C1110": string
    "C1171": string
    "C1179": string
    "C1187": string
    "C1199": string
    "C1201": string
    "C1211": string
    "C1241": string
    "C1257": string
}

export type CyrillicSchemeType = [string, ICyrillicChar]

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
    private _cc: ICyrillicChar | null = null

    constructor(word: string, CyrillicChar: ICyrillicChar) {
        this._word = word
        this._cc = CyrillicChar
    }

    private combineSpace() {
        this._res += " "
        while (this._word[this._index + 1] === " ") {
            this._index++
        }
        this._index++
    }

    private quoteWords() {
        const pos = this._word.indexOf("\"", this._index + 1)
        if (pos !== -1) {
            this._res += `"${this._word.substring(this._index + 1, pos)}"`
            this._index = pos + 1
        } else {
            this._res += `"${this._word.substring(this._index + 1)}"`
            this._index = this._word.length - 1
        }
    }

    go = () => {
        if (!this._word || !this._cc) {
            return ""
        }

        while (this._index < this._word.length) {
            const c = this._word[this._index].charCodeAt(0)

            if (this._word[this._index] === " ") {
                this.combineSpace()
                continue
            }

            if (this._word[this._index] === `"`) {
                this.quoteWords()
                continue
            }

            // 处理普通字符
            if (Object.keys(this._cc).includes(`C${c}`)) {
                this._res += this._cc[`C${c}`]
            } else {
                this._res += this._word[this._index]
            }

            this._index++
            continue
        }

        return this._res
    }
}

export const transformCyrillicToExtend = (o: string, scheme: CyrillicSchemeType) => {
    if (!o) {
        return ""
    }

    const res = new HapinTransformer(handleTones(toLowerCase(o)), scheme[1]).go()

    return res
}
