import profileJson from "../../content/settings/profile.json";
import { obj, str, strList } from "@/lib/content";

const profile = obj(profileJson);
const quote = obj(profile.quote);

export const quoteConfig = { text: str(quote.text), author: str(quote.author) };

export const rotatingTitles = strList(profile.rotatingTitles);
