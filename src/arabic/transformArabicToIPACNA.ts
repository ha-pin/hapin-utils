import { transformArabicToHapin } from "./transformArabicToHapin"
import { transformHapinToIPA_CNA } from "../hapin/transformHapinToIPACNA"

export const transformArabicToIPA_CNA = (o: string) => {
    return transformHapinToIPA_CNA(transformArabicToHapin(o, false))
}
