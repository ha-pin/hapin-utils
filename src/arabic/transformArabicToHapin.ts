enum SpecialChar {
    "S1653" = "ٴا",
    "S1654" = "ٴو",
    "S1655" = "ٴۇ",
    "S1656" = "ٴى",
}

enum NormalChar {
    "C1548" = ",",
    "C1563" = ";",
    "C1567" = "?",
    "C1569" = "x",
    "C1575" = "a",
    "C1576" = "b",
    "C1578" = "t",
    "C1580" = "j",
    "C1581" = "h",
    "C1583" = "d",
    "C1585" = "r",
    "C1586" = "z",
    "C1587" = "s",
    "C1588" = "sh",
    "C1593" = "gh",
    "C1600" = "-",
    "C1601" = "f",
    "C1602" = "q",
    "C1603" = "k",
    "C1604" = "l",
    "C1605" = "m",
    "C1606" = "n",
    "C1608" = "o",
    "C1609" = "e",
    "C1610" = "i",
    "C1652" = "x",
    "C1662" = "p",
    "C1670" = "ch",
    "C1709" = "ng",
    "C1711" = "g",
    "C1726" = "hh",
    "C1734" = "v",
    "C1735" = "u",
    "C1739" = "w",
    "C1749" = "ye",
    "SC1575" = "xa",
    "SC1608" = "xo",
    "SC1735" = "xu",
    "SC1609" = "xe",
}

const VowelsID = [1575, 1608, 1735, 1609]

/**
 * 处理哈语特殊字符, 重整化解决可能导致的字体显示问题
 * @param word 词组序列
 * @returns
 */
const handleSpecialCharacters = (word: string): string => {
    return word
        .split("")
        .map((i) => {
            const code = i.charCodeAt(0)
            if (code > 1652 && code < 1657) {
                return SpecialChar[`S${code}`]
            }

            return i
        })
        .join("")
}

class HapinTransformer {
    private _weakTone = false
    private _word = ""
    private _index = 0
    private _res = ""
    constructor(word: string) {
        this._word = word
    }

    private addSeparator = (easy: boolean) => {
        if (easy && this._index !== this._word.length - 1) {
            this._res += `'`
        }
    }

    private combineSpace() {
        this._res += " "
        while (this._word[this._index + 1] === " ") {
            this._index++
        }
        this._index++
    }

    go = (easy: boolean) => {
        if (!this._word) {
            return ""
        }

        while (this._index < this._word.length) {
            const c = this._word[this._index].charCodeAt(0)
            if (this._word[this._index] === " ") {
                this.combineSpace()
                continue
            }

            if ([1652, 1569].includes(c)) {
                this._weakTone = true
                this._index++
                continue
            }

            // 处理元音
            if (VowelsID.includes(c)) {
                if (this._weakTone) {
                    this._weakTone = false
                    this._res += NormalChar[`SC${c}`]
                } else {
                    this._res += NormalChar[`C${c}`]
                }
                this.addSeparator(easy)
                this._index++
                continue
            }

            // 处理普通字符
            if (Object.keys(NormalChar).includes(`C${c}`)) {
                this._res += NormalChar[`C${c}`]
            } else {
                this._res += this._word[this._index]
            }

            this.addSeparator(easy)
            this._index++
            continue
        }
        return this._res
    }
}

export const transformArabicToHapin = (o: string, easy = false) => {
    const array = o
        .split(/( +)/g)
        .map((item) => item.trim())
        .filter((item) => !!item)

    const res = array
        .map((item: string) => {
            const tmp = handleSpecialCharacters(item)
            return new HapinTransformer(tmp).go(easy)
        })
        .join(" ")

    return res.replace(/(?=[\s])( +)(?=[\!\#-\/\:-\@])/g, "")
}
