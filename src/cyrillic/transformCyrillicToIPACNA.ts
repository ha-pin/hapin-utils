import { ipaCorrector } from "../ipa/corrector"
import { CyrillicSchemeType, transformCyrillicToExtend } from "./extend"

const ipaCNAScheme: CyrillicSchemeType = [
    "ipa-cna",
    {
        C1072: "ɑ",
        C1073: "b",
        C1074: "v",
        C1075: "ɡ",
        C1076: "d",
        C1077: "e",
        C1078: "dʒ",
        C1079: "z",
        C1080: "j",
        C1081: "j",
        C1082: "k",
        C1083: "l",
        C1084: "m",
        C1085: "n",
        C1086: "o",
        C1087: "p",
        C1088: "r",
        C1089: "s",
        C1090: "t",
        C1091: "w",
        C1092: "f",
        C1093: "x",
        C1094: "ts",
        C1095: "tʃ",
        C1096: "ʃ",
        C1097: "ʃtʃ",
        C1099: "ə",
        C1101: "e",
        C1102: "jw",
        C1103: "jɑ",
        C1105: "jo",
        C1110: "i",
        C1171: "ʁ",
        C1179: "q",
        C1187: "ŋ",
        C1199: "ø",
        C1201: "u",
        C1211: "h",
        C1241: "æ",
        C1257: "y",
    },
]

export const transformCyrillicToIPA_CNA = (o: string) => {
    const ext = transformCyrillicToExtend(o.toLowerCase(), ipaCNAScheme)

    if (!!o.match(/(ё|я|э|ю)/g)) {
        return ext
    }

    return ipaCorrector(ext)
}
