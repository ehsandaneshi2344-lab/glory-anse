import type { Lang } from "./i18n";

import p1a from "@/assets/p1-640.webp";
import p1b from "@/assets/p1-1080.webp";
import p1c from "@/assets/p1-1600.webp";
import p2a from "@/assets/p2-640.webp";
import p2b from "@/assets/p2-1080.webp";
import p2c from "@/assets/p2-1600.webp";
import p3a from "@/assets/p3-640.webp";
import p3b from "@/assets/p3-1080.webp";
import p3c from "@/assets/p3-1600.webp";
import p4a from "@/assets/p4-640.webp";
import p4b from "@/assets/p4-1080.webp";
import p4c from "@/assets/p4-1600.webp";
import p5a from "@/assets/p5-640.webp";
import p5b from "@/assets/p5-1080.webp";
import p5c from "@/assets/p5-1600.webp";
import p6a from "@/assets/p6-640.webp";
import p6b from "@/assets/p6-1080.webp";
import p6c from "@/assets/p6-1600.webp";
import p7a from "@/assets/p7-640.webp";
import p7b from "@/assets/p7-1080.webp";
import p7c from "@/assets/p7-1600.webp";
import p8a from "@/assets/p8-640.webp";
import p8b from "@/assets/p8-1080.webp";
import p8c from "@/assets/p8-1600.webp";

export type CategoryId = "cleansing" | "hydration" | "sun" | "hair";

export type ProductImage = { small: string; medium: string; large: string };

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export type Product = {
  slug: string;
  category: CategoryId;
  image: ProductImage;
  name: Localized;
  /** توضیحات تکمیلی — extended description */
  extended: Localized;
  /** مواد تشکیل‌دهنده — ingredients */
  ingredients: LocalizedList;
  /** توضیحات — formulation notes */
  notes: Localized;
  /** کلمات کلیدی — keywords */
  keywords: LocalizedList;
};

const img = (a: string, b: string, c: string): ProductImage => ({
  small: a,
  medium: b,
  large: c,
});

export const categories: {
  id: CategoryId;
  slug: string;
  name: Localized;
  intro: Localized;
}[] = [
  {
    id: "cleansing",
    slug: "cleansing",
    name: {
      fa: "پاک‌سازی",
      en: "Cleansing",
      ar: "التنظيف",
    },
    intro: {
      fa: "پاک‌سازی ملایم روزانه با فرمولاسیون‌های متعادل؛ بدون ایجاد احساس خشکی و کشیدگی پوست.",
      en: "Gentle daily cleansing with balanced formulations that leave no feeling of dryness or tightness.",
      ar: "تنظيف يومي لطيف بتركيبات متوازنة لا تترك إحساساً بالجفاف أو الشدّ.",
    },
  },
  {
    id: "hydration",
    slug: "hydration",
    name: {
      fa: "آبرسان و مرطوب‌کننده",
      en: "Hydration & Moisture",
      ar: "الترطيب",
    },
    intro: {
      fa: "بافت‌های سبک با هیالورونیک اسید، عصاره‌ها و روغن‌های گیاهی برای تأمین و حفظ رطوبت پوست.",
      en: "Lightweight textures with hyaluronic acid, botanical extracts and plant oils to deliver and hold moisture.",
      ar: "قوام خفيف مع حمض الهيالورونيك والخلاصات والزيوت النباتية لمنح الرطوبة والحفاظ عليها.",
    },
  },
  {
    id: "sun",
    slug: "sun-care",
    name: {
      fa: "ضدآفتاب",
      en: "Sun Care",
      ar: "الحماية من الشمس",
    },
    intro: {
      fa: "محافظت فیزیکی SPF 30 با نانو اکسید روی کوتد با دایمتیکون، در بافت‌هایی متناسب با هر نوع پوست.",
      en: "Physical SPF 30 protection with dimethicone-coated nano zinc oxide, in textures suited to each skin type.",
      ar: "حماية فيزيائية SPF 30 بأكسيد الزنك النانوي المغلّف بالدايميثيكون، بقوامات تناسب كل نوع بشرة.",
    },
  },
  {
    id: "hair",
    slug: "hair-care",
    name: {
      fa: "مراقبت مو",
      en: "Hair Care",
      ar: "العناية بالشعر",
    },
    intro: {
      fa: "مراقبت گیاهی از مو و پوست سر با عصاره‌ها، روغن‌ها و مواد مغذی.",
      en: "Botanical care for hair and scalp with extracts, oils and nourishing actives.",
      ar: "عناية نباتية بالشعر وفروة الرأس بالخلاصات والزيوت والمكوّنات المغذّية.",
    },
  },
];

export const products: Product[] = [
  {
    slug: "hydrating-cream-gel",
    category: "hydration",
    image: img(p1a, p1b, p1c),
    name: {
      fa: "ژل‌کرم مرطوب‌کننده و آبرسان گلوری آنسه",
      en: "Glory Anse Hydrating & Moisturizing Cream Gel",
      ar: "جل كريم مرطّب ومُرَطِّب للبشرة من جلوري آنسه",
    },
    extended: {
      fa: "ژل‌کرم مرطوب‌کننده و آبرسان با بافت سبک و جذب مناسب، مناسب پوست‌های خشک و معمولی. حاوی هیالورونیک اسید، امگا ۳ و ۶ و ژل آلوئه‌ورا برای کمک به حفظ رطوبت، نرمی و لطافت پوست. ترکیبی از روغن‌های گیاهی مغذی مانند بنفشه، زیتون، بادام شیرین و جوانه گندم در فرمولاسیون آن به کار رفته است.",
      en: "A hydrating, moisturizing cream gel with a light texture and easy absorption, suited to dry and normal skin. It contains hyaluronic acid, omega 3 and 6 and aloe vera gel to help maintain moisture, softness and suppleness. A blend of nourishing plant oils — violet, olive, sweet almond and wheat germ — is used in the formulation.",
      ar: "جل كريم مرطّب بقوام خفيف وامتصاص سريع، مناسب للبشرة الجافة والعادية. يحتوي على حمض الهيالورونيك وأوميغا ٣ و٦ وجل الصبار للمساعدة في الحفاظ على ترطيب البشرة ونعومتها. وتدخل في تركيبته مجموعة من الزيوت النباتية المغذّية مثل البنفسج والزيتون واللوز الحلو وجنين القمح.",
    },
    ingredients: {
      fa: [
        "هیالورونیک اسید",
        "امگا ۳ و ۶",
        "ژل آلوئه‌ورا",
        "اسید پالمتیک",
        "اسید اولئیک",
        "روغن بنفشه",
        "روغن زیتون",
        "روغن بادام شیرین",
        "روغن جوانه گندم",
      ],
      en: [
        "Hyaluronic acid",
        "Omega 3 & 6",
        "Aloe vera gel",
        "Palmitic acid",
        "Oleic acid",
        "Violet oil",
        "Olive oil",
        "Sweet almond oil",
        "Wheat germ oil",
      ],
      ar: [
        "حمض الهيالورونيك",
        "أوميغا ٣ و٦",
        "جل الصبار",
        "حمض البالمتيك",
        "حمض الأولييك",
        "زيت البنفسج",
        "زيت الزيتون",
        "زيت اللوز الحلو",
        "زيت جنين القمح",
      ],
    },
    notes: {
      fa: "بافت سبک ژل‌کرم به دلیل استفاده از ترکیبی از عصاره‌ها، روغن‌ها و امولسیفایرهای مورد استفاده در فرمولاسیون ایجاد شده است. فرمولاسیون فاقد اوره و لایه‌بردارهای شیمیایی است.",
      en: "The light cream-gel texture comes from the combination of extracts, oils and emulsifiers used in the formulation. The formula contains no urea and no chemical exfoliants.",
      ar: "ينتج القوام الخفيف للجل كريم عن مزيج الخلاصات والزيوت والمستحلبات المستخدمة في التركيبة. التركيبة خالية من اليوريا ومن مقشّرات كيميائية.",
    },
    keywords: {
      fa: [
        "کرم مرطوب‌کننده",
        "ژل‌کرم",
        "آبرسان پوست",
        "پوست خشک",
        "پوست معمولی",
        "هیالورونیک اسید",
        "آلوئه‌ورا",
        "امگا ۳",
        "امگا ۶",
        "روغن بنفشه",
        "زیتون",
        "بادام شیرین",
        "جوانه گندم",
      ],
      en: [
        "moisturizing cream",
        "cream gel",
        "skin hydration",
        "dry skin",
        "normal skin",
        "hyaluronic acid",
        "aloe vera",
        "omega 3",
        "omega 6",
        "violet oil",
        "olive",
        "sweet almond",
        "wheat germ",
      ],
      ar: [
        "كريم مرطب",
        "جل كريم",
        "ترطيب البشرة",
        "بشرة جافة",
        "بشرة عادية",
        "حمض الهيالورونيك",
        "الصبار",
        "أوميغا ٣",
        "أوميغا ٦",
        "زيت البنفسج",
        "الزيتون",
        "اللوز الحلو",
        "جنين القمح",
      ],
    },
  },
  {
    slug: "facial-cleansing-gel",
    category: "cleansing",
    image: img(p2a, p2b, p2c),
    name: {
      fa: "ژل شستشوی صورت گلوری آنسه",
      en: "Glory Anse Facial Cleansing Gel",
      ar: "جل غسول الوجه من جلوري آنسه",
    },
    extended: {
      fa: "پاکسازی ملایم پوست بدون ایجاد احساس خشکی و کشیدگی. حاوی هیالورونیک اسید برای کمک به حفظ رطوبت و لطافت پوست. عصاره گل سرخ و کاسنی به ایجاد حس طراوت و خنکی پوست کمک می‌کنند. گلیسرین نیز به حفظ رطوبت و نرمی پوست کمک می‌کند. فرمولاسیون ملایم و متعادل، مناسب استفاده روزانه.",
      en: "Gentle cleansing without any feeling of dryness or tightness. It contains hyaluronic acid to help maintain the skin's moisture and softness. Rose and chicory extracts help create a fresh, cool feel, while glycerin helps preserve moisture and softness. A mild, balanced formulation suited to daily use.",
      ar: "تنظيف لطيف للبشرة دون إحساس بالجفاف أو الشدّ. يحتوي على حمض الهيالورونيك للمساعدة في الحفاظ على ترطيب البشرة ونعومتها. تساهم خلاصتا الورد والهندباء في منح إحساس بالانتعاش والبرودة، فيما يساعد الجليسرين على الحفاظ على الرطوبة والنعومة. تركيبة لطيفة ومتوازنة مناسبة للاستخدام اليومي.",
    },
    ingredients: {
      fa: [
        "هیالورونیک اسید",
        "عصاره گل سرخ",
        "عصاره کاسنی",
        "گلیسرین",
        "فاقد مواد صابونی",
      ],
      en: [
        "Hyaluronic acid",
        "Rose extract",
        "Chicory extract",
        "Glycerin",
        "Soap-free",
      ],
      ar: [
        "حمض الهيالورونيك",
        "خلاصة الورد",
        "خلاصة الهندباء",
        "الجليسرين",
        "خالٍ من المواد الصابونية",
      ],
    },
    notes: {
      fa: "مناسب برای پاکسازی روزانه پوست و حفظ احساس نرمی و طراوت پس از شستشو.",
      en: "Suited to daily cleansing, leaving the skin feeling soft and fresh after washing.",
      ar: "مناسب للتنظيف اليومي مع الحفاظ على إحساس بالنعومة والانتعاش بعد الغسل.",
    },
    keywords: {
      fa: [
        "ژل شستشوی صورت",
        "شوینده صورت",
        "پاکسازی پوست",
        "شوینده ملایم",
        "هیالورونیک اسید",
        "گل سرخ",
        "کاسنی",
        "گلیسرین",
        "مراقبت روزانه پوست",
      ],
      en: [
        "facial cleansing gel",
        "face wash",
        "skin cleansing",
        "gentle cleanser",
        "hyaluronic acid",
        "rose",
        "chicory",
        "glycerin",
        "daily skincare",
      ],
      ar: [
        "جل غسول الوجه",
        "غسول للوجه",
        "تنظيف البشرة",
        "منظّف لطيف",
        "حمض الهيالورونيك",
        "الورد",
        "الهندباء",
        "الجليسرين",
        "العناية اليومية بالبشرة",
      ],
    },
  },
  {
    slug: "hydrating-serum",
    category: "hydration",
    image: img(p3a, p3b, p3c),
    name: {
      fa: "سرم آبرسان گلوری آنسه",
      en: "Glory Anse Hydrating Serum",
      ar: "سيروم الترطيب من جلوري آنسه",
    },
    extended: {
      fa: "سرم آبرسان با ترکیبی از مواد مؤثر برای کمک به تأمین و حفظ رطوبت پوست. PCA، ویتامین B5 و هیالورونیک اسید به آبرسانی و حفظ رطوبت طولانی‌مدت پوست کمک می‌کنند. این ترکیبات همچنین می‌توانند در حفظ لطافت، انعطاف‌پذیری و تقویت عملکرد سد دفاعی پوست نقش داشته باشند.",
      en: "A hydrating serum combining active ingredients that help deliver and retain skin moisture. PCA, vitamin B5 and hyaluronic acid help hydrate the skin and maintain moisture over time. These ingredients can also play a role in keeping the skin soft and supple and in supporting its barrier function.",
      ar: "سيروم مرطّب يجمع مكوّنات فعّالة تساعد على منح البشرة الرطوبة والحفاظ عليها. يساعد كل من PCA وفيتامين B5 وحمض الهيالورونيك على ترطيب البشرة والحفاظ على رطوبتها لفترة أطول، كما يمكن أن تسهم هذه المكوّنات في الحفاظ على نعومة البشرة ومرونتها ودعم وظيفة حاجزها الواقي.",
    },
    ingredients: {
      fa: [
        "PCA",
        "ویتامین B5",
        "هیالورونیک اسید",
        "عصاره گلیکولی گل بنفشه",
        "عصاره کاسنی",
      ],
      en: [
        "PCA",
        "Vitamin B5",
        "Hyaluronic acid",
        "Glycolic violet flower extract",
        "Chicory extract",
      ],
      ar: [
        "PCA",
        "فيتامين B5",
        "حمض الهيالورونيك",
        "خلاصة زهرة البنفسج الجلايكولية",
        "خلاصة الهندباء",
      ],
    },
    notes: {
      fa: "ترکیبات موجود در فرمولاسیون با هدف افزایش رطوبت، لطافت و انعطاف‌پذیری پوست انتخاب شده‌اند.",
      en: "The ingredients in the formulation were selected with the aim of increasing the skin's moisture, softness and suppleness.",
      ar: "اختيرت مكوّنات التركيبة بهدف زيادة رطوبة البشرة ونعومتها ومرونتها.",
    },
    keywords: {
      fa: [
        "سرم آبرسان",
        "آبرسان پوست",
        "PCA",
        "ویتامین B5",
        "هیالورونیک اسید",
        "گل بنفشه",
        "کاسنی",
        "حفظ رطوبت",
        "سد دفاعی پوست",
      ],
      en: [
        "hydrating serum",
        "skin hydration",
        "PCA",
        "vitamin B5",
        "hyaluronic acid",
        "violet flower",
        "chicory",
        "moisture retention",
        "skin barrier",
      ],
      ar: [
        "سيروم مرطب",
        "ترطيب البشرة",
        "PCA",
        "فيتامين B5",
        "حمض الهيالورونيك",
        "زهرة البنفسج",
        "الهندباء",
        "الحفاظ على الرطوبة",
        "حاجز البشرة",
      ],
    },
  },
  {
    slug: "micellar-water",
    category: "cleansing",
    image: img(p4a, p4b, p4c),
    name: {
      fa: "میسلار واتر گلوری آنسه | پاک‌کننده آرایش",
      en: "Glory Anse Micellar Water | Makeup Remover",
      ar: "ماء ميسيلار من جلوري آنسه | مزيل المكياج",
    },
    extended: {
      fa: "پاک‌کننده آرایش و آلودگی‌های روزانه بدون ایجاد احساس خشکی. حاوی گلیسرین برای کمک به حفظ رطوبت و نرمی پوست. عصاره گلیکولی گل بنفشه و عصاره گل سرخ با توجه به ویژگی‌های خود برای مراقبت از پوست انتخاب شده‌اند.",
      en: "Removes makeup and everyday impurities without leaving the skin feeling dry. It contains glycerin to help maintain moisture and softness. Glycolic violet flower extract and rose extract were selected for their skincare properties.",
      ar: "يزيل المكياج والشوائب اليومية دون ترك إحساس بالجفاف. يحتوي على الجليسرين للمساعدة في الحفاظ على رطوبة البشرة ونعومتها. وقد اختيرت خلاصة زهرة البنفسج الجلايكولية وخلاصة الورد لخصائصهما في العناية بالبشرة.",
    },
    ingredients: {
      fa: ["عصاره گلیکولی گل بنفشه", "عصاره گل سرخ", "گلیسرین"],
      en: ["Glycolic violet flower extract", "Rose extract", "Glycerin"],
      ar: ["خلاصة زهرة البنفسج الجلايكولية", "خلاصة الورد", "الجليسرين"],
    },
    notes: {
      fa: "مناسب برای پاک کردن آرایش و آلودگی‌های روزانه. پس از استفاده، پوست آبکشی شود.",
      en: "Suited to removing makeup and everyday impurities. Rinse the skin after use.",
      ar: "مناسب لإزالة المكياج والشوائب اليومية. يُشطف الوجه بعد الاستخدام.",
    },
    keywords: {
      fa: [
        "میسلار واتر",
        "پاک‌کننده آرایش",
        "آرایش پاک‌کن",
        "پاکسازی پوست",
        "گل سرخ",
        "گل بنفشه",
        "گلیسرین",
        "مراقبت پوست",
      ],
      en: [
        "micellar water",
        "makeup remover",
        "cleansing water",
        "skin cleansing",
        "rose",
        "violet flower",
        "glycerin",
        "skincare",
      ],
      ar: [
        "ماء ميسيلار",
        "مزيل المكياج",
        "ماء منظّف",
        "تنظيف البشرة",
        "الورد",
        "زهرة البنفسج",
        "الجليسرين",
        "العناية بالبشرة",
      ],
    },
  },
  {
    slug: "physical-sunscreen-gel-spf30",
    category: "sun",
    image: img(p5a, p5b, p5c),
    name: {
      fa: "ژل ضدآفتاب فیزیکی SPF 30 گلوری آنسه",
      en: "Glory Anse Physical Sunscreen Gel SPF 30",
      ar: "جل واقٍ شمسي فيزيائي SPF 30 من جلوري آنسه",
    },
    extended: {
      fa: "ضدآفتاب فیزیکی SPF 30 با بافت سبک و مناسب پوست‌های چرب. فرمولاسیون حاوی نانو اکسید روی کوتد با دایمتیکون، با هدف ایجاد محافظت در برابر اشعه‌های UVA و UVB. بافت سبک و جذب مناسب، آن را برای استفاده روزانه و آب‌وهوای گرم و مرطوب مناسب می‌کند.",
      en: "A physical SPF 30 sunscreen with a light texture, suited to oily skin. The formulation contains dimethicone-coated nano zinc oxide, intended to provide protection against UVA and UVB rays. Its light texture and easy absorption make it suitable for daily use and for hot, humid climates.",
      ar: "واقٍ شمسي فيزيائي SPF 30 بقوام خفيف مناسب للبشرة الدهنية. تحتوي التركيبة على أكسيد الزنك النانوي المغلّف بالدايميثيكون بهدف توفير الحماية من أشعة UVA وUVB. قوامه الخفيف وامتصاصه السريع يجعلانه مناسباً للاستخدام اليومي وللأجواء الحارة والرطبة.",
    },
    ingredients: {
      fa: [
        "نانو اکسید روی کوتد با دایمتیکون",
        "ژل آلوئه‌ورا",
        "روغن آرگان",
        "هیالورونیک اسید",
        "نیاسینامید",
        "آنتی‌اکسیدان",
        "امگا ۶",
      ],
      en: [
        "Dimethicone-coated nano zinc oxide",
        "Aloe vera gel",
        "Argan oil",
        "Hyaluronic acid",
        "Niacinamide",
        "Antioxidant",
        "Omega 6",
      ],
      ar: [
        "أكسيد الزنك النانوي المغلّف بالدايميثيكون",
        "جل الصبار",
        "زيت الأرغان",
        "حمض الهيالورونيك",
        "نياسيناميد",
        "مضاد أكسدة",
        "أوميغا ٦",
      ],
    },
    notes: {
      fa: "آلوئه‌ورا به حفظ رطوبت و نرمی پوست کمک می‌کند. روغن آرگان و هیالورونیک اسید برای پشتیبانی از رطوبت و نرمی پوست در فرمولاسیون به کار رفته‌اند. نیاسینامید نیز یکی از ترکیبات شناخته‌شده در مراقبت از پوست‌های چرب و مستعد ناهماهنگی بافت پوست است.",
      en: "Aloe vera helps maintain the skin's moisture and softness. Argan oil and hyaluronic acid are used in the formulation to support moisture and softness. Niacinamide is a well-known ingredient in the care of oily skin and skin prone to uneven texture.",
      ar: "يساعد الصبار على الحفاظ على رطوبة البشرة ونعومتها، ويُستخدم زيت الأرغان وحمض الهيالورونيك في التركيبة لدعم الترطيب والنعومة. أما النياسيناميد فهو من المكوّنات المعروفة في العناية بالبشرة الدهنية والمعرّضة لعدم انتظام الملمس.",
    },
    keywords: {
      fa: [
        "ضدآفتاب فیزیکی",
        "ضدآفتاب SPF30",
        "SPF 30",
        "پوست چرب",
        "ضدآفتاب روزانه",
        "اکسید روی",
        "آلوئه‌ورا",
        "آرگان",
        "هیالورونیک اسید",
        "نیاسینامید",
        "UVA",
        "UVB",
      ],
      en: [
        "physical sunscreen",
        "SPF 30 sunscreen",
        "SPF 30",
        "oily skin",
        "daily sunscreen",
        "zinc oxide",
        "aloe vera",
        "argan",
        "hyaluronic acid",
        "niacinamide",
        "UVA",
        "UVB",
      ],
      ar: [
        "واقٍ شمسي فيزيائي",
        "واقٍ شمسي SPF30",
        "SPF 30",
        "بشرة دهنية",
        "واقٍ شمسي يومي",
        "أكسيد الزنك",
        "الصبار",
        "الأرغان",
        "حمض الهيالورونيك",
        "نياسيناميد",
        "UVA",
        "UVB",
      ],
    },
  },
  {
    slug: "physical-sunscreen-moisturizer-cream-spf30",
    category: "sun",
    image: img(p6a, p6b, p6c),
    name: {
      fa: "کرم ضدآفتاب و مرطوب‌کننده فیزیکی SPF 30 گلوری آنسه",
      en: "Glory Anse Physical Sunscreen & Moisturizer Cream SPF 30",
      ar: "كريم واقٍ شمسي ومرطّب فيزيائي SPF 30 من جلوري آنسه",
    },
    extended: {
      fa: "کرم ضدآفتاب و مرطوب‌کننده فیزیکی SPF 30، مناسب پوست‌های خشک و معمولی. حاوی فیلتر فیزیکی نانو اکسید روی کوتد با دایمتیکون و دارای بافت سبک با جذب مناسب. ژل آلوئه‌ورا به حفظ رطوبت و نرمی پوست کمک می‌کند و روغن‌های گیاهی مانند روغن بادام شیرین، به تغذیه و حفظ لطافت پوست کمک می‌کنند.",
      en: "A physical SPF 30 sunscreen and moisturizer cream for dry and normal skin. It contains a physical filter of dimethicone-coated nano zinc oxide and has a light, easily absorbed texture. Aloe vera gel helps maintain moisture and softness, while plant oils such as sweet almond oil help nourish the skin and keep it supple.",
      ar: "كريم واقٍ شمسي ومرطّب فيزيائي SPF 30 مناسب للبشرة الجافة والعادية. يحتوي على فلتر فيزيائي من أكسيد الزنك النانوي المغلّف بالدايميثيكون بقوام خفيف سريع الامتصاص. يساعد جل الصبار على الحفاظ على الرطوبة والنعومة، فيما تسهم الزيوت النباتية مثل زيت اللوز الحلو في تغذية البشرة والحفاظ على نعومتها.",
    },
    ingredients: {
      fa: [
        "نانو اکسید روی کوتد با دایمتیکون",
        "ژل آلوئه‌ورا",
        "روغن بادام شیرین",
        "هیالورونیک اسید",
        "روغن‌های گیاهی",
      ],
      en: [
        "Dimethicone-coated nano zinc oxide",
        "Aloe vera gel",
        "Sweet almond oil",
        "Hyaluronic acid",
        "Plant oils",
      ],
      ar: [
        "أكسيد الزنك النانوي المغلّف بالدايميثيكون",
        "جل الصبار",
        "زيت اللوز الحلو",
        "حمض الهيالورونيك",
        "زيوت نباتية",
      ],
    },
    notes: {
      fa: "فرمولاسیون این محصول با تمرکز بر محافظت روزانه، آبرسانی و حفظ نرمی پوست طراحی شده است.",
      en: "This formulation was designed with a focus on daily protection, hydration and keeping the skin soft.",
      ar: "صُمّمت تركيبة هذا المنتج بالتركيز على الحماية اليومية والترطيب والحفاظ على نعومة البشرة.",
    },
    keywords: {
      fa: [
        "ضدآفتاب فیزیکی",
        "SPF30",
        "ضدآفتاب مرطوب‌کننده",
        "پوست خشک",
        "پوست معمولی",
        "اکسید روی",
        "آلوئه‌ورا",
        "بادام شیرین",
        "هیالورونیک اسید",
        "ضدآفتاب روزانه",
      ],
      en: [
        "physical sunscreen",
        "SPF 30",
        "moisturizing sunscreen",
        "dry skin",
        "normal skin",
        "zinc oxide",
        "aloe vera",
        "sweet almond",
        "hyaluronic acid",
        "daily sunscreen",
      ],
      ar: [
        "واقٍ شمسي فيزيائي",
        "SPF 30",
        "واقٍ شمسي مرطب",
        "بشرة جافة",
        "بشرة عادية",
        "أكسيد الزنك",
        "الصبار",
        "اللوز الحلو",
        "حمض الهيالورونيك",
        "واقٍ شمسي يومي",
      ],
    },
  },
  {
    slug: "dd-cream-spf30",
    category: "sun",
    image: img(p7a, p7b, p7c),
    name: {
      fa: "DD Cream فوق سبک روزانه SPF 30 گلوری آنسه",
      en: "Glory Anse Ultra-Light Daily DD Cream SPF 30",
      ar: "DD كريم يومي فائق الخفة SPF 30 من جلوري آنسه",
    },
    extended: {
      fa: "DD کرم فوق سبک روزانه SPF 30 برای انواع پوست. دارای ترکیبات معدنی و نانو اکسید روی کوتد با دایمتیکون، همراه با ترکیبات مرطوب‌کننده و آبرسان. به یکدست‌تر دیده شدن ظاهر پوست و پوشاندن برخی نواقص ظاهری کمک می‌کند، بدون ایجاد احساس سنگینی. مناسب برای آماده‌سازی پوست پیش از آرایش.",
      en: "An ultra-light daily DD cream SPF 30 for all skin types. It contains mineral ingredients and dimethicone-coated nano zinc oxide together with moisturizing and hydrating ingredients. It helps the skin look more even and covers some surface imperfections without any heavy feel. Suitable for preparing the skin before makeup.",
      ar: "DD كريم يومي فائق الخفة SPF 30 لجميع أنواع البشرة. يحتوي على مكوّنات معدنية وأكسيد الزنك النانوي المغلّف بالدايميثيكون إلى جانب مكوّنات مرطّبة. يساعد على إظهار البشرة بمظهر أكثر تجانساً وتغطية بعض العيوب السطحية دون إحساس بالثقل. مناسب لتهيئة البشرة قبل المكياج.",
    },
    ingredients: {
      fa: [
        "پودر معدنی",
        "نانو اکسید روی کوتد با دایمتیکون",
        "روغن آرگان",
        "کره شی باتر",
        "ترکیبات مرطوب‌کننده و آبرسان",
        "آنتی‌اکسیدان‌ها",
      ],
      en: [
        "Mineral powder",
        "Dimethicone-coated nano zinc oxide",
        "Argan oil",
        "Shea butter",
        "Moisturizing and hydrating ingredients",
        "Antioxidants",
      ],
      ar: [
        "مسحوق معدني",
        "أكسيد الزنك النانوي المغلّف بالدايميثيكون",
        "زيت الأرغان",
        "زبدة الشيا",
        "مكوّنات مرطّبة",
        "مضادات أكسدة",
      ],
    },
    notes: {
      fa: "روغن آرگان و شی‌باتر به ایجاد بافت نرم و پخش مناسب محصول کمک می‌کنند. فرمولاسیون بدون الکل، با هدف ایجاد احساس سبکی بیشتر در استفاده روزانه طراحی شده است.",
      en: "Argan oil and shea butter help create a soft texture and smooth application. The alcohol-free formulation was designed to give a lighter feel in daily use.",
      ar: "يساعد زيت الأرغان وزبدة الشيا على منح قوام ناعم وتوزيع سلس للمنتج. وقد صُمّمت التركيبة الخالية من الكحول لمنح إحساس أخف عند الاستخدام اليومي.",
    },
    keywords: {
      fa: [
        "DD کرم",
        "DD Cream",
        "SPF30",
        "کرم روزانه",
        "کرم رنگی",
        "پوشانندگی سبک",
        "آرایش",
        "پودر معدنی",
        "اکسید روی",
        "آرگان",
        "شی‌باتر",
        "انواع پوست",
      ],
      en: [
        "DD cream",
        "DD Cream",
        "SPF 30",
        "daily cream",
        "tinted cream",
        "light coverage",
        "makeup",
        "mineral powder",
        "zinc oxide",
        "argan",
        "shea butter",
        "all skin types",
      ],
      ar: [
        "DD كريم",
        "DD Cream",
        "SPF 30",
        "كريم يومي",
        "كريم ملوّن",
        "تغطية خفيفة",
        "مكياج",
        "مسحوق معدني",
        "أكسيد الزنك",
        "الأرغان",
        "زبدة الشيا",
        "جميع أنواع البشرة",
      ],
    },
  },
  {
    slug: "herbal-protein-anti-hair-loss-shampoo",
    category: "hair",
    image: img(p8a, p8b, p8c),
    name: {
      fa: "شامپو پروتئینه گیاهی ضد ریزش گلوری آنسه",
      en: "Glory Anse Herbal Protein Anti-Hair-Loss Shampoo",
      ar: "شامبو بروتيني عشبي ضد التساقط من جلوري آنسه",
    },
    extended: {
      fa: "شامپو پروتئینه گیاهی با ترکیبی از عصاره‌ها، روغن‌ها و مواد مغذی، طراحی‌شده برای مراقبت از موهای ضعیف و کم‌حجم. ترکیبات گیاهی مانند جینسینگ، اسپیرولینا، شنبلیله و بذر کتان در فرمولاسیون آن به کار رفته‌اند. روغن‌های گیاهی و آلوئه‌ورا نیز برای کمک به حفظ رطوبت و مراقبت از مو و پوست سر استفاده شده‌اند.",
      en: "A herbal protein shampoo combining extracts, oils and nutrients, designed for the care of weak, fine hair. Botanical ingredients such as ginseng, spirulina, fenugreek and flaxseed are used in the formulation, alongside plant oils and aloe vera to help maintain moisture and care for the hair and scalp.",
      ar: "شامبو بروتيني عشبي يجمع بين الخلاصات والزيوت والمكوّنات المغذّية، مصمّم للعناية بالشعر الضعيف وقليل الكثافة. تدخل في تركيبته مكوّنات نباتية مثل الجينسنغ والسبيرولينا والحلبة وبذر الكتان، إلى جانب زيوت نباتية والصبار للمساعدة في الحفاظ على الرطوبة والعناية بالشعر وفروة الرأس.",
    },
    ingredients: {
      fa: [
        "جینسینگ",
        "قاووت",
        "کتیرا",
        "فیکوسیانین",
        "اسپیرولینا",
        "بذر شنبلیله",
        "بذر کتان",
        "میخک",
        "مورد",
        "روغن کندش",
        "روغن رزماری",
        "روغن کرچک",
        "روغن سیاهدانه",
        "ژل آلوئه‌ورا",
        "ویتامین E",
        "ویتامین‌های گروه B",
        "امگا ۳",
        "زینک ۱٪",
        "عرقیات و عصاره‌های گیاهی",
      ],
      en: [
        "Ginseng",
        "Qavot",
        "Tragacanth",
        "Phycocyanin",
        "Spirulina",
        "Fenugreek seed",
        "Flaxseed",
        "Clove",
        "Myrtle",
        "Kandesh oil",
        "Rosemary oil",
        "Castor oil",
        "Black seed oil",
        "Aloe vera gel",
        "Vitamin E",
        "B-group vitamins",
        "Omega 3",
        "Zinc 1%",
        "Herbal distillates and extracts",
      ],
      ar: [
        "الجينسنغ",
        "قاووت",
        "الكثيراء",
        "الفيكوسيانين",
        "السبيرولينا",
        "بذور الحلبة",
        "بذر الكتان",
        "القرنفل",
        "الآس",
        "زيت الكندش",
        "زيت إكليل الجبل",
        "زيت الخروع",
        "زيت حبة البركة",
        "جل الصبار",
        "فيتامين E",
        "فيتامينات المجموعة B",
        "أوميغا ٣",
        "زنك ١٪",
        "مقطّرات وخلاصات نباتية",
      ],
    },
    notes: {
      fa: "ترکیبات گیاهی موجود در فرمولاسیون با هدف مراقبت از پوست سر، حفظ رطوبت و کمک به تقویت ظاهر و کیفیت مو انتخاب شده‌اند. فاقد ماینوکسیدیل و کافئین.",
      en: "The botanical ingredients in the formulation were selected to care for the scalp, maintain moisture and help improve the appearance and quality of the hair. Free from minoxidil and caffeine.",
      ar: "اختيرت المكوّنات النباتية في التركيبة للعناية بفروة الرأس والحفاظ على الرطوبة والمساعدة في تحسين مظهر الشعر وجودته. خالٍ من المينوكسيديل والكافيين.",
    },
    keywords: {
      fa: [
        "شامپو ضد ریزش",
        "شامپو گیاهی",
        "شامپو پروتئینه",
        "مراقبت مو",
        "موهای ضعیف",
        "موهای کم‌حجم",
        "جینسینگ",
        "اسپیرولینا",
        "رزماری",
        "کرچک",
        "سیاهدانه",
        "آلوئه‌ورا",
        "زینک",
      ],
      en: [
        "anti-hair-loss shampoo",
        "herbal shampoo",
        "protein shampoo",
        "hair care",
        "weak hair",
        "fine hair",
        "ginseng",
        "spirulina",
        "rosemary",
        "castor",
        "black seed",
        "aloe vera",
        "zinc",
      ],
      ar: [
        "شامبو ضد التساقط",
        "شامبو عشبي",
        "شامبو بروتيني",
        "العناية بالشعر",
        "شعر ضعيف",
        "شعر قليل الكثافة",
        "الجينسنغ",
        "السبيرولينا",
        "إكليل الجبل",
        "الخروع",
        "حبة البركة",
        "الصبار",
        "الزنك",
      ],
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const productsByCategory = (id: CategoryId) => products.filter((p) => p.category === id);
