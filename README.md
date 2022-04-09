# hapin-utils

[![version](https://img.shields.io/npm/v/hapin-utils.svg)](https://www.npmjs.com/package/hapin-utils)
[![download](https://img.shields.io/npm/dm/hapin-utils.svg)](https://www.npmjs.com/package/hapin-utils)

Hapin JavaScript(TypeScript) 开放工具包。

## 安装

```bash
npm i hapin-utils
```

## 快速开始

```js
import { transformHapinToArabic } from 'hapin-utils'

transformHapinToArabic('ara') // ارا
```

## API

- `transformArabicToHapin(word: string): string` 将老文字转化为哈拼
- `transformHapinToArabic(word: string): string` 将哈拼转化为老文字
- `transformCyrillicToHapin(word: string): string` 将西里尔文字转化为哈拼
- `transformCyrillicToArabic(word: string): string` 将西里尔文字转化为老文字
