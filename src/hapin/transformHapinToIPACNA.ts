import { ipaCorrector } from "../ipa/corrector"
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

export const transformHapinToIPA_CNA = (o: string, clean = true) => {
    let ext = transformHapinToExtend(o, ipaCNAScheme, clean)

    return ipaCorrector(ext)
}
