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
    private _word = "";
    private _index = 0;
    private _res = "";
    private _omit = false;
    constructor(word: string) {
        this._word = word;
    }

    private omitTheWeakToneModification = () => {
        // 省略弱音符号问题
        // 匹配 k g ye 但是不匹配 ng gh
        const tmp = this._word.replace(/([ng|gh])/g, "");
        if (/([k|g])/.test(tmp) || /ye/.test(tmp)) {
            this._omit = true;
        }
    };

    // Weak tone modification
    private addWTM = () => {
        if (this._res[0].charCodeAt(0) !== 1652 && !this._omit) {
            this._res = "ٴ" + this._res;
        }
        this._index++;
    };

    private next = () => {
        // 解决双字符的问题
        return this._word[this._index + 1];
    };

    go = () => {
        if (!this._word) {
            return "";
        }

        // 弱音符号省略检测
        this.omitTheWeakToneModification();

        while (this._index < this._word.length) {
            const c = this._word[this._index];
            const next = this.next();

            // 处理弱音符号
            if (c === "x") {
                this.addWTM();
                continue;
            }

            // 处理双字符字母
            if (c === "s") {
                if (next === "h") {
                    this._res += HapinArabic["sh"];
                    this._index += 2;
                } else {
                    this._res += HapinArabic["s"];
                    this._index++;
                }
                continue;
            }

            if (c === "g") {
                if (next === "h") {
                    this._res += HapinArabic["gh"];
                    this._index += 2;
                } else {
                    this._res += HapinArabic["g"];
                    this._index++;
                }
                continue;
            }

            if (c === "c") {
                if (next === "h") {
                    this._res += HapinArabic["ch"];
                    this._index += 2;
                } else {
                    this._index++;
                }
                continue;
            }

            if (c === "n") {
                if (next === "g") {
                    this._res += HapinArabic["ng"];
                    this._index += 2;
                } else {
                    this._res += HapinArabic["n"];
                    this._index++;
                }
                continue;
            }

            if (c === "h") {
                if (next === "h") {
                    this._res += HapinArabic["hh"];
                    this._index += 2;
                } else {
                    this._res += HapinArabic["h"];
                    this._index++;
                }
                continue;
            }

            if (c === "y") {
                // 支持 yu -> xu
                if (next === "u") {
                    this.addWTM();
                } else if (next === "e") {
                    this._res += HapinArabic["ye"];
                    this._index += 2;
                } else {
                    this._index++;
                }
                continue;
            }

            // 处理常规字符
            if (Object.keys(HapinArabic).includes(c)) {
                this._res += HapinArabic[c];
            } else {
                this._res += c;
            }
            this._index++;
            continue;
        }

        return this._res;
    };
}

export const transformHapinToArabic = (h: string) => {
    const array = h
        .toLowerCase()
        .split(/( +)/g)
        .map((item) => item.trim())
        .filter((item) => !!item);

    const res = array
        .map((item: string) => new ArabicTransformer(item).go())
        .join(" ");

    // TODO 处理可能多余的空格
    return res;
};
