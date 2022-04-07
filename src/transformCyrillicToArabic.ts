import { transformCyrillicToHapin } from "./tranformCyrillicToHapin"
import { transformHapinToArabic } from "./transformHapinToArabic"

export const transformCyrillicToArabic = (o: string) =>
    transformHapinToArabic(transformCyrillicToHapin(o))
