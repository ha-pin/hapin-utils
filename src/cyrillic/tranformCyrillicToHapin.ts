import { CyrillicSchemeType, transformCyrillicToExtend } from "./extend"

const hapinScheme: CyrillicSchemeType = [
    "hapin",
    {
        C1072: "a",
        C1073: "b",
        C1074: "v",
        C1075: "g",
        C1076: "d",
        C1077: "ye",
        C1078: "j",
        C1079: "z",
        C1080: "i",
        C1081: "i",
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
        C1093: "h",
        C1094: "ts",
        C1095: "ch",
        C1096: "sh",
        C1097: "shsh",
        C1099: "e",
        C1101: "ye",
        C1102: "iw",
        C1103: "ia",
        C1105: "io",
        C1110: "xe",
        C1171: "gh",
        C1179: "q",
        C1187: "ng",
        C1199: "xu",
        C1201: "u",
        C1211: "hh",
        C1241: "xa",
        C1257: "xo",
    },
]

export const transformCyrillicToHapin = (o: string, clean = true) => {
    return transformCyrillicToExtend(o, hapinScheme, clean)
}

export const transformCyrillicToHapinArray = (o: string) => {
    return transformCyrillicToHapin(o, false)
        .split(`\u200b`)
        .filter((s) => !!s)
}
