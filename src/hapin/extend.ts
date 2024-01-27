import { toLowerCase } from "../utils"

interface IHapinChar {
    [key: string]: string | undefined
    a: string
    b: string
    t: string
    j: string
    h: string
    d: string
    r: string
    z: string
    s: string
    sh: string
    gh: string
    f: string
    q: string
    k: string
    l: string
    m: string
    n: string
    o: string
    e: string
    i: string
    p: string
    ch: string
    ng: string
    g: string
    hh: string
    v: string
    u: string
    w: string
    ye: string
    xa: string
    xo: string
    xe: string
    xu: string
    shsh?: string
}

export type HapinDirectSchemeType = [string, IHapinChar]

class HapinTransformer {
    private _word = ""
    private _index = 0
    private _res = ""
    private _scheme = ""
    private _hc: IHapinChar | null = null

    constructor(word: string, scheme: HapinDirectSchemeType) {
        this._word = word
        this._scheme = scheme[0]
        this._hc = scheme[1]
    }

    private combineSpace() {
        this._res += " "
        while (this._word[this._index + 1] === " ") {
            this._index++
        }
        this._index++
    }

    private correct() {
        if (!this._hc) {
            return
        }

        if (["ipa-cna"].includes(this._scheme)) {
            // 修正shsh
            const n3 = this._word[this._index + 3]
            if (n3 === "h") {
                this._res += this._hc["shsh"]
                this._index += 4
                return
            } else {
                this._res += this._hc["sh"] + this._hc["s"]
                this._index += 3
                return
            }
        }
    }

    private quoteWords() {
        const pos = this._word.indexOf('"', this._index + 1)
        if (pos !== -1) {
            this._res += `"${this._word
                .substring(this._index + 1, pos)
                .replace(/\u200b/g, "")}"`
            this._index = pos + 1
        } else {
            this._res += `"${this._word
                .substring(this._index + 1)
                .replace(/\u200b/g, "")}"`
            this._index = this._word.length - 1
        }
    }

    go = () => {
        if (!this._word || !this._hc) {
            return ""
        }

        while (this._index < this._word.length) {
            const c = this._word[this._index]
            const next = this._word[this._index + 1]

            // 处理特殊字符
            if (c === `\u200b`) {
                this._res += `\u200b`
                this._index++
                continue
            }

            if (c === " ") {
                this.combineSpace()
                continue
            }

            if (c === `"`) {
                this.quoteWords()
                continue
            }

            // 处理普通字符
            if (c === "s") {
                if (next === `\u200b`) {
                    this._res += this._hc["s"]
                    this._res += `\u200b`
                    this._index += 2
                    continue
                }

                if (next === "h") {
                    if (this._word[this._index + 2] === "s") {
                        this.correct()
                    } else {
                        this._res += this._hc["sh"]
                        this._index += 2
                    }
                } else {
                    this._res += this._hc["s"]
                    this._index++
                }
                continue
            }

            if (c === "g") {
                if (next === `\u200b`) {
                    this._res += this._hc["g"]
                    this._res += `\u200b`
                    this._index += 2
                    continue
                }

                if (next === "h") {
                    this._res += this._hc["gh"]
                    this._index += 2
                } else {
                    this._res += this._hc["g"]
                    this._index++
                }
                continue
            }

            if (c === "c") {
                if (next === `\u200b`) {
                    this._res += this._hc["t"] + this._hc["s"]
                    this._res += `\u200b`
                    this._index += 2
                    continue
                }

                if (next === "h") {
                    this._res += this._hc["ch"]
                    this._index += 2
                } else {
                    this._res += this._hc["t"] + this._hc["s"]
                    this._index++
                }
                continue
            }

            if (c === "n") {
                if (next === `\u200b`) {
                    this._res += this._hc["n"]
                    this._res += `\u200b`
                    this._index += 2
                    continue
                }

                if (next === "g") {
                    this._res += this._hc["ng"]
                    this._index += 2
                } else {
                    this._res += this._hc["n"]
                    this._index++
                }
                continue
            }

            if (c === "h") {
                if (next === `\u200b`) {
                    this._res += this._hc["h"]
                    this._res += `\u200b`
                    this._index += 2
                    continue
                }

                if (next === "h") {
                    this._res += this._hc["hh"]
                    this._index += 2
                } else {
                    this._res += this._hc["h"]
                    this._index++
                }
                continue
            }

            if (c === "y") {
                if (next === `\u200b`) {
                    this._index += 2
                    continue
                }

                // 支持 yu -> xu
                if (next === "u") {
                    this._res += this._hc["xu"]
                    this._index += 2
                } else if (next === "e") {
                    this._res += this._hc["ye"]
                    this._index += 2
                } else if (next === "w") {
                    // yw -> iw
                    this._res += this._hc["i"] + this._hc["w"]
                    this._index += 2
                } else if (next === "a") {
                    // ya -> ia
                    this._res += this._hc["i"] + this._hc["a"]
                    this._index += 2
                } else if (next === "o") {
                    // yo -> io
                    this._res += this._hc["i"] + this._hc["o"]
                    this._index += 2
                } else {
                    this._index++
                }
                continue
            }

            if (Object.keys(this._hc).includes(c)) {
                this._res += this._hc[c]
            } else {
                this._res += c
            }

            this._index++
            continue
        }

        return this._res
    }
}

export const transformHapinToExtend = (
    h: string,
    scheme: HapinDirectSchemeType,
    clean = true
) => {
    if (!h) {
        return ""
    }

    const res = new HapinTransformer(toLowerCase(h), scheme)
        .go()
        .replace(/(?=[\s])( +)(?=[\!\#-\/\:-\@])/g, "")

    return clean ? res.replace(/\u200b/g, "") : res
}
