// test("Get Special Char Unicode", () => {
//     ;["ٵ", "ٶ", "ٷ", "ٸ", "ء"].forEach((item) => {
//         console.log(`${item} -> ${item.charCodeAt(0)}`);
//     });
// })

test("Get Normal Char Unicode", () => {
    const tmp = [
        "ا",
        "ب",
        "د",
        "ى",
        "ف",
        "گ",
        "ح",
        "ي",
        "ج",
        "ك",
        "ل",
        "م",
        "ن",
        "و",
        "پ",
        "ق",
        "ر",
        "س",
        "ت",
        "ۇ",
        "ۆ",
        "ۋ",
        "ز",
        "ە",
        "ع",
        "ڭ",
        "ھ",
        "ش",
        "چ",
        "ٴ",
        "،",
        "؟",
        "؛",
        "ـ",
    ]
        .map((item) => [item.charCodeAt(0), item])
        .sort((a, b) => (a[0] as number) - (b[0] as number))
        .map((item) => `"C${item[0]}" = "${item[1]}"`)
        .join(",")

    // console.log(tmp)
})

test("Get Cyrillic Char Unicode", () => {
    const tmp = [
        ...new Set(
            [
                "А",
                "а",
                "Б",
                "б",
                "Д",
                "д",
                "Ы",
                "ы",
                "Ф",
                "ф",
                "Г",
                "г",
                "Х",
                "х",
                "Й",
                "й",
                "Ж",
                "ж",
                "К",
                "к",
                "Л",
                "л",
                "М",
                "м",
                "Н",
                "н",
                "О",
                "о",
                "П",
                "п",
                "Қ",
                "қ",
                "Р",
                "р",
                "С",
                "с",
                "Т",
                "т",
                "Ұ",
                "ұ",
                "В",
                "в",
                "У",
                "у",
                "З",
                "з",
                "Е",
                "е",
                "Ғ",
                "ғ",
                "Һ",
                "һ",
                "Ң",
                "ң",
                "Ш",
                "ш",
                "Ч",
                "ч",
                "Ә",
                "ә",
                "І",
                "і",
                "Ө",
                "ө",
                "Ү",
                "ү",
                "Ё",
                "ё",
                "И",
                "и",
                "Щ",
                "щ",
                "Ц",
                "ц",
                "Ъ",
                "ъ",
                "Ь",
                "ь",
                "Э",
                "э",
                "Ю",
                "ю",
                "Я",
                "я",
            ].map((item) => item.toLowerCase())
        ),
    ]

    const tmp1 = tmp.map((item) => [item.charCodeAt(0), item])
        .sort((a, b) => (a[0] as number) - (b[0] as number))

    // console.log(tmp)
    // console.log(tmp1.length)
})
