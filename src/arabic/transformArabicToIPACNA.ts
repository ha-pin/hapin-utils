import { transformArabicToHapin } from "./transformArabicToHapin"
import { transformHapinToIPA_CNA } from "../hapin/transformHapinToIPACNA"

export const transformArabicToIPA_CNA = (o: string, clean = true) => {
    return transformHapinToIPA_CNA(transformArabicToHapin(o, clean, false))
}
