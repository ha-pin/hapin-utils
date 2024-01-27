import { transformCyrillicToHapin } from "./tranformCyrillicToHapin"
import { transformHapinToArabic } from "../hapin/transformHapinToArabic"

export const transformCyrillicToArabic = (o: string, clean = true) =>
    transformHapinToArabic(transformCyrillicToHapin(o, clean), clean)
