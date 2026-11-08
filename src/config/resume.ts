import data from "../../content/settings/cv.json";
import { list, obj, str } from "@/lib/content";
import { slugify } from "@/lib/slugify";

export type CvVariant = {
  slug: string;
  title: string;
  focus: string;
  pdf: string;
  docx?: string;
};

const content = obj(data);

export const resumeConfig = {
  title: str(content.title, "CV"),
  description: str(content.description),
  variants: list(content.variants)
    .map(obj)
    .filter((variant) => str(variant.title) && str(variant.pdf))
    .map((variant) => ({
      slug: slugify(str(variant.title)),
      title: str(variant.title),
      focus: str(variant.focus),
      pdf: str(variant.pdf),
      docx: str(variant.docx) || undefined,
    })) satisfies CvVariant[],
};
