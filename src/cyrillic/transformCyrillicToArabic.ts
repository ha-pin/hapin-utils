import { transformCyrillicToHapin } from "./tranformCyrillicToHapin"
import { transformHapinToArabic } from "../hapin/transformHapinToArabic"

export const transformCyrillicToArabic = (o: string) =>
    transformHapinToArabic(transformCyrillicToHapin(o))
