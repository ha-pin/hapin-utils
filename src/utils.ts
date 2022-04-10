export const toLowerCase = (h: string) => {
    // 匹配所有被引号包括的字符串不处理
    let _quoted = false
    return h.split("").map(item => {
        if (item === `"`) {
            _quoted = !_quoted
            return item
        }

        if (_quoted) {
            return item
        } else {
            return item.toLowerCase()
        }
    }).join("")
}
