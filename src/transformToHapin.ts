export const transformToHapin = (o: string, easy = false) => {
    const array = o.split(/([ ]+)/g)
    const res = array.map((item: string) => {
        // TODO 处理特殊字符, 字体的支持问题
        // 处理标点符号
    })

    // TODO 去除不必要的空格, 根据拉丁字母排版规则
    const tmp = res.join(" ")

    if (easy) {
        return tmp
    }

	// 去除分隔符
	return tmp.replace(/'/g, "")
}
