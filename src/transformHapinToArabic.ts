import { toLowerCase } from "./utils"

enum HapinArabic {
    "," = "،",
    ";" = "؛",
    "?" = "؟",
    "a" = "ا",
    "b" = "ب",
    "t" = "ت",
    "j" = "ج",
    "h" = "ح",
    "d" = "د",
    "r" = "ر",
    "z" = "ز",
    "s" = "س",
    "sh" = "ش",
    "gh" = "ع",
    "-" = "ـ",
    "f" = "ف",
    "q" = "ق",
    "k" = "ك",
    "l" = "ل",
    "m" = "م",
    "n" = "ن",
    "o" = "و",
    "e" = "ى",
    "i" = "ي",
    "x" = "ٴ",
    "p" = "پ",
    "ch" = "چ",
    "ng" = "ڭ",
    "g" = "گ",
    "hh" = "ھ",
    "v" = "ۆ",
    "u" = "ۇ",
    "w" = "ۋ",
    "ye" = "ە",
}

class ArabicTransformer {
    private _word = ""
    private _index = 0
    private _res = ""
    private _omit = false
    // 新词提取处理指针
    private _flag = [0, 0]
    constructor(word: string) {
        this._word = word
    }

    private combineSpace() {
        this._res += " "
        while (this.next() === " ") {
            this._index++
        }
        this._index++
    }

    private searchNextFlag() {
        // 获取子字符串空格坐标
        const pos = this._word.indexOf(" ", this._index)
        const pos1 = this._word.indexOf("\"", this._index)
        if (pos !== -1 && pos1 !== -1) {
            this._flag = [this._flag[1], Math.min(pos, pos1)]
        }

        if (pos === -1 && pos1 !== -1) {
            this._flag = [this._flag[1], pos1]
        }

        if (pos !== -1 && pos1 === -1) {
            this._flag = [this._flag[1], pos]
        }

        if (pos === -1 && pos1 === -1) {
            this._flag = [this._flag[1], this._word.length]
        }
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

    private omitTheWeakToneModification = () => {
        // 省略弱音符号问题
        // 匹配 k g ye 但是不匹配 ng gh
        const tmp = this._word.substring(this._flag[0], this._flag[1]).replace(/([ng|gh])/g, "")
        if (/([k|g])/.test(tmp) || /ye/.test(tmp)) {
            this._omit = true
        }
    }

    // Weak tone modification
    private addWTM = () => {
        if (
            !this._omit &&
            (this._res.length === 0 || this._res[0].charCodeAt(0) !== 1652)
        ) {
            this._res = "ٴ" + this._res
        }
        this._index++
    }

    private next = () => {
        // 解决双字符的问题
        return this._word[this._index + 1]
    }

    go = () => {
        if (!this._word) {
            return ""
        }

        // 搜寻第一个 Flag 位置
        this.searchNextFlag()
        this.omitTheWeakToneModification()

        while (this._index < this._word.length) {
            // 处理新词组标志
            if (this._index > this._flag[1]) {
                this.searchNextFlag()
                this.omitTheWeakToneModification()
            }

            const c = this._word[this._index]
            const next = this.next()

            // 处理空格合并
            if (c === " ") {
                this.combineSpace()
                continue
            }

            // 处理引用状态
            if (c === "\"") {
                this.quoteWords()
                continue
            }

            // 处理弱音符号
            if (c === "x") {
                this.addWTM()
                continue
            }

            // 处理双字符字母
            if (c === "s") {
                if (next === "h") {
                    this._res += HapinArabic["sh"]
                    this._index += 2
                } else {
                    this._res += HapinArabic["s"]
                    this._index++
                }
                continue
            }

            if (c === "g") {
                if (next === "h") {
                    this._res += HapinArabic["gh"]
                    this._index += 2
                } else {
                    this._res += HapinArabic["g"]
                    this._index++
                }
                continue
            }

            if (c === "c") {
                if (next === "h") {
                    this._res += HapinArabic["ch"]
                    this._index += 2
                } else {
                    this._index++
                }
                continue
            }

            if (c === "n") {
                if (next === "g") {
                    this._res += HapinArabic["ng"]
                    this._index += 2
                } else {
                    this._res += HapinArabic["n"]
                    this._index++
                }
                continue
            }

            if (c === "h") {
                if (next === "h") {
                    this._res += HapinArabic["hh"]
                    this._index += 2
                } else {
                    this._res += HapinArabic["h"]
                    this._index++
                }
                continue
            }

            if (c === "y") {
                // 支持 yu -> xu
                if (next === "u") {
                    this.addWTM()
                } else if (next === "e") {
                    this._res += HapinArabic["ye"]
                    this._index += 2
                } else {
                    this._index++
                }
                continue
            }

            // 处理常规字符
            if (Object.keys(HapinArabic).includes(c)) {
                this._res += HapinArabic[c]
            } else {
                this._res += c
            }
            this._index++
            continue
        }

        return this._res
    }
}

export const transformHapinToArabic = (h: string) => {
    if (!h) {
        return ""
    }

    const res = new ArabicTransformer(toLowerCase(h)).go()
    // TODO 处理可能多余的空格
    return res
}
