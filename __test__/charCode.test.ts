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
        .map((item) => `"C${item[0]}" = "${item[1]}"`).join(",")

    // console.log(tmp)
})
