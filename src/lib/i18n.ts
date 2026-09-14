export const LANGS = ["fa", "en", "ar"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "fa";

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

export const dir = (lang: Lang): "rtl" | "ltr" => (lang === "en" ? "ltr" : "rtl");

export const langLabels: Record<Lang, string> = {
  fa: "فارسی",
  en: "EN",
  ar: "العربية",
};

export const htmlLang: Record<Lang, string> = { fa: "fa-IR", en: "en", ar: "ar" };

type Dict = {
  brand: string;
  tagline: string;
  nav: { home: string; about: string; products: string; contact: string };
  menu: string;
  close: string;
  language: string;
  home: {
    heroKicker: string;
    heroTitle: string;
    heroText: string;
    heroCta: string;
    collectionKicker: string;
    collectionTitle: string;
    collectionText: string;
    philosophyKicker: string;
    philosophyTitle: string;
    philosophyText: string;
    philosophyCta: string;
    categoriesTitle: string;
    featuredKicker: string;
  };
  about: {
    title: string;
    kicker: string;
    lead: string;
    p1: string;
    p2: string;
    p3: string;
    pillarsTitle: string;
    pillars: { title: string; text: string }[];
  };
  products: {
    title: string;
    lead: string;
    all: string;
    filterLabel: string;
    countOne: string;
    countMany: (n: number) => string;
    viewProduct: string;
  };
  product: {
    extended: string;
    ingredients: string;
    notes: string;
    keywords: string;
    related: string;
    category: string;
    backToProducts: string;
  };
  contact: {
    title: string;
    lead: string;
    formTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sent: string;
    sentNote: string;
    required: string;
    invalidEmail: string;
  };
  footer: { collections: string; navigate: string; rights: string; note: string };
  breadcrumb: { home: string };
  seo: {
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    productsTitle: string;
    productsDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
};

export const t: Record<Lang, Dict> = {
  fa: {
    brand: "گلوری آنسه",
    tagline: "مراقبت از پوست و مو",
    nav: { home: "خانه", about: "درباره برند", products: "محصولات", contact: "تماس" },
    menu: "منو",
    close: "بستن",
    language: "زبان",
    home: {
      heroKicker: "مراقبت گیاهی، با ظرافت",
      heroTitle: "زیبایی در سادگی فرمولاسیون",
      heroText:
        "مجموعه‌ای از محصولات مراقبت از پوست و مو با تمرکز بر عصاره‌ها و روغن‌های گیاهی، بافت‌های سبک و فرمولاسیون‌های متعادل.",
      heroCta: "مشاهده مجموعه",
      collectionKicker: "مجموعه",
      collectionTitle: "هشت محصول، یک زبان مشترک",
      collectionText:
        "از پاک‌سازی ملایم تا آبرسانی، محافظت روزانه و مراقبت از مو؛ هر محصول بر پایه ترکیباتی انتخاب‌شده ساخته شده است.",
      philosophyKicker: "فلسفه برند",
      philosophyTitle: "ترکیبات گیاهی در قلب هر فرمول",
      philosophyText:
        "عصاره گل سرخ، گل بنفشه و کاسنی، روغن‌های زیتون، بادام شیرین، آرگان و جوانه گندم، ژل آلوئه‌ورا و هیالورونیک اسید؛ ترکیباتی که بارها در فرمولاسیون‌های گلوری آنسه تکرار می‌شوند و هویت آن را می‌سازند.",
      philosophyCta: "درباره برند",
      categoriesTitle: "دسته‌بندی‌ها",
      featuredKicker: "منتخب",
    },
    about: {
      kicker: "درباره برند",
      title: "گلوری آنسه",
      lead: "برندی در مراقبت از پوست و مو، با فرمولاسیون‌هایی که بر ترکیبات گیاهی و بافت‌های سبک استوارند.",
      p1: "مجموعه گلوری آنسه از هشت محصول تشکیل شده است: پاک‌کننده‌ها، آبرسان‌ها، محافظت فیزیکی در برابر آفتاب و مراقبت از مو. هر فرمولاسیون بر پایه ترکیباتی مشخص و اعلام‌شده ساخته شده است.",
      p2: "هیالورونیک اسید، ژل آلوئه‌ورا، عصاره گل سرخ، گل بنفشه و کاسنی و روغن‌های گیاهی مانند زیتون، بادام شیرین، آرگان و جوانه گندم، نخ مشترک میان محصولات‌اند؛ انتخاب‌هایی که با هدف حفظ رطوبت، لطافت و مراقبت روزانه انجام شده‌اند.",
      p3: "در محصولات ضدآفتاب، فیلتر فیزیکی نانو اکسید روی کوتد با دایمتیکون به کار رفته است و در شامپو، ترکیبات گیاهی مانند جینسینگ، اسپیرولینا، شنبلیله و بذر کتان. آنچه در فرمولاسیون‌ها نیست نیز بخشی از رویکرد برند است: بدون اوره و لایه‌بردار شیمیایی در ژل‌کرم، بدون مواد صابونی در ژل شستشو، بدون الکل در DD کرم و بدون ماینوکسیدیل و کافئین در شامپو.",
      pillarsTitle: "اصول فرمولاسیون",
      pillars: [
        { title: "ترکیبات گیاهی", text: "عصاره‌ها و روغن‌های گیاهی به‌عنوان پایه فرمولاسیون‌ها." },
        { title: "بافت سبک", text: "بافت‌هایی با جذب مناسب برای استفاده روزانه." },
        { title: "آبرسانی", text: "هیالورونیک اسید، PCA و ویتامین B5 برای حفظ رطوبت." },
        { title: "محافظت فیزیکی", text: "فیلتر فیزیکی SPF 30 در برابر UVA و UVB." },
      ],
    },
    products: {
      title: "محصولات",
      lead: "هشت محصول مراقبت از پوست و مو، در چهار دسته.",
      all: "همه",
      filterLabel: "فیلتر بر اساس دسته",
      countOne: "۱ محصول",
      countMany: (n) => `${n.toLocaleString("fa-IR")} محصول`,
      viewProduct: "مشاهده محصول",
    },
    product: {
      extended: "توضیحات تکمیلی",
      ingredients: "مواد تشکیل‌دهنده",
      notes: "توضیحات",
      keywords: "کلمات کلیدی",
      related: "محصولات مرتبط",
      category: "دسته",
      backToProducts: "بازگشت به محصولات",
    },
    contact: {
      title: "تماس",
      lead: "برای پرسش درباره محصولات گلوری آنسه، پیام خود را از این فرم ارسال کنید.",
      formTitle: "فرم پرسش",
      name: "نام",
      email: "ایمیل",
      subject: "موضوع",
      message: "پیام",
      send: "ارسال پیام",
      sent: "پیام شما ثبت شد.",
      sentNote: "از پیام شما سپاسگزاریم.",
      required: "این فیلد الزامی است.",
      invalidEmail: "ایمیل معتبر وارد کنید.",
    },
    footer: {
      collections: "دسته‌بندی‌ها",
      navigate: "پیمایش",
      rights: "تمامی حقوق محفوظ است.",
      note: "اطلاعات محصولات بر پایه کاتالوگ رسمی گلوری آنسه ارائه شده است.",
    },
    breadcrumb: { home: "خانه" },
    seo: {
      homeTitle: "گلوری آنسه | مراقبت گیاهی از پوست و مو",
      homeDesc:
        "مجموعه گلوری آنسه: ژل‌کرم آبرسان، ژل شستشو، سرم، میسلار واتر، ضدآفتاب‌های فیزیکی SPF 30، DD کرم و شامپو پروتئینه گیاهی.",
      aboutTitle: "درباره گلوری آنسه | فلسفه فرمولاسیون",
      aboutDesc:
        "گلوری آنسه؛ فرمولاسیون‌هایی بر پایه عصاره‌ها و روغن‌های گیاهی، بافت‌های سبک و آبرسانی روزانه.",
      productsTitle: "محصولات گلوری آنسه | پوست و مو",
      productsDesc:
        "هشت محصول گلوری آنسه در چهار دسته: پاک‌سازی، آبرسان و مرطوب‌کننده، ضدآفتاب و مراقبت مو.",
      contactTitle: "تماس با گلوری آنسه",
      contactDesc: "پرسش‌های خود درباره محصولات گلوری آنسه را از طریق فرم تماس ارسال کنید.",
    },
  },
  en: {
    brand: "Glory Anse",
    tagline: "Skin & Hair Care",
    nav: { home: "Home", about: "About", products: "Products", contact: "Contact" },
    menu: "Menu",
    close: "Close",
    language: "Language",
    home: {
      heroKicker: "Botanical care, refined",
      heroTitle: "Beauty in the simplicity of a formula",
      heroText:
        "A collection of skin and hair care products built around botanical extracts and oils, light textures and balanced formulations.",
      heroCta: "View the collection",
      collectionKicker: "The collection",
      collectionTitle: "Eight products, one shared language",
      collectionText:
        "From gentle cleansing to hydration, daily protection and hair care — each product is built on a considered set of ingredients.",
      philosophyKicker: "Philosophy",
      philosophyTitle: "Botanicals at the heart of every formula",
      philosophyText:
        "Rose, violet and chicory extracts; olive, sweet almond, argan and wheat germ oils; aloe vera gel and hyaluronic acid — ingredients that recur across Glory Anse formulations and define them.",
      philosophyCta: "About the brand",
      categoriesTitle: "Categories",
      featuredKicker: "Selected",
    },
    about: {
      kicker: "About",
      title: "Glory Anse",
      lead: "A skin and hair care brand whose formulations rest on botanical ingredients and light textures.",
      p1: "The Glory Anse collection consists of eight products: cleansers, hydrators, physical sun protection and hair care. Each formulation is built on a clearly declared set of ingredients.",
      p2: "Hyaluronic acid, aloe vera gel, rose, violet and chicory extracts and plant oils such as olive, sweet almond, argan and wheat germ are the common thread across the range — choices made to maintain moisture, softness and everyday care.",
      p3: "The sun care products use a physical filter of dimethicone-coated nano zinc oxide, and the shampoo uses botanicals such as ginseng, spirulina, fenugreek and flaxseed. What the formulations leave out is part of the approach too: no urea or chemical exfoliants in the cream gel, no soap agents in the cleansing gel, no alcohol in the DD cream, and no minoxidil or caffeine in the shampoo.",
      pillarsTitle: "Formulation principles",
      pillars: [
        { title: "Botanical ingredients", text: "Plant extracts and oils as the base of every formula." },
        { title: "Light textures", text: "Easily absorbed textures made for daily use." },
        { title: "Hydration", text: "Hyaluronic acid, PCA and vitamin B5 to retain moisture." },
        { title: "Physical protection", text: "Physical SPF 30 filter against UVA and UVB." },
      ],
    },
    products: {
      title: "Products",
      lead: "Eight skin and hair care products, in four categories.",
      all: "All",
      filterLabel: "Filter by category",
      countOne: "1 product",
      countMany: (n) => `${n} products`,
      viewProduct: "View product",
    },
    product: {
      extended: "Extended description",
      ingredients: "Ingredients",
      notes: "Formulation notes",
      keywords: "Keywords",
      related: "Related products",
      category: "Category",
      backToProducts: "Back to products",
    },
    contact: {
      title: "Contact",
      lead: "For enquiries about Glory Anse products, send a message using the form below.",
      formTitle: "Enquiry form",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sent: "Your message has been recorded.",
      sentNote: "Thank you for reaching out.",
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
    },
    footer: {
      collections: "Categories",
      navigate: "Navigate",
      rights: "All rights reserved.",
      note: "Product information is presented from the official Glory Anse catalogue.",
    },
    breadcrumb: { home: "Home" },
    seo: {
      homeTitle: "Glory Anse | Botanical Skin & Hair Care",
      homeDesc:
        "The Glory Anse collection: hydrating cream gel, cleansing gel, serum, micellar water, physical SPF 30 sun care, DD cream and herbal protein shampoo.",
      aboutTitle: "About Glory Anse | Formulation philosophy",
      aboutDesc:
        "Glory Anse: formulations built on botanical extracts and oils, light textures and everyday hydration.",
      productsTitle: "Glory Anse Products | Skin & Hair",
      productsDesc:
        "Eight Glory Anse products across four categories: cleansing, hydration, sun care and hair care.",
      contactTitle: "Contact Glory Anse",
      contactDesc: "Send your questions about Glory Anse products through the contact form.",
    },
  },
  ar: {
    brand: "جلوري آنسه",
    tagline: "العناية بالبشرة والشعر",
    nav: { home: "الرئيسية", about: "عن العلامة", products: "المنتجات", contact: "تواصل" },
    menu: "القائمة",
    close: "إغلاق",
    language: "اللغة",
    home: {
      heroKicker: "عناية نباتية راقية",
      heroTitle: "الجمال في بساطة التركيبة",
      heroText:
        "مجموعة من منتجات العناية بالبشرة والشعر قائمة على الخلاصات والزيوت النباتية وقوامات خفيفة وتركيبات متوازنة.",
      heroCta: "استعراض المجموعة",
      collectionKicker: "المجموعة",
      collectionTitle: "ثمانية منتجات بلغة واحدة",
      collectionText:
        "من التنظيف اللطيف إلى الترطيب والحماية اليومية والعناية بالشعر؛ كل منتج مبني على مكوّنات مختارة بعناية.",
      philosophyKicker: "الفلسفة",
      philosophyTitle: "المكوّنات النباتية في قلب كل تركيبة",
      philosophyText:
        "خلاصات الورد والبنفسج والهندباء، وزيوت الزيتون واللوز الحلو والأرغان وجنين القمح، وجل الصبار وحمض الهيالورونيك؛ مكوّنات تتكرّر في تركيبات جلوري آنسه وتصنع هويتها.",
      philosophyCta: "عن العلامة",
      categoriesTitle: "الفئات",
      featuredKicker: "مختارات",
    },
    about: {
      kicker: "عن العلامة",
      title: "جلوري آنسه",
      lead: "علامة للعناية بالبشرة والشعر تقوم تركيباتها على المكوّنات النباتية والقوامات الخفيفة.",
      p1: "تتألف مجموعة جلوري آنسه من ثمانية منتجات: منظّفات، ومرطّبات، وحماية فيزيائية من الشمس، وعناية بالشعر. وكل تركيبة مبنية على مكوّنات معلنة بوضوح.",
      p2: "يشكّل حمض الهيالورونيك وجل الصبار وخلاصات الورد والبنفسج والهندباء والزيوت النباتية مثل الزيتون واللوز الحلو والأرغان وجنين القمح الخيط المشترك بين المنتجات؛ خيارات اتُّخذت للحفاظ على الرطوبة والنعومة والعناية اليومية.",
      p3: "تستخدم منتجات الحماية من الشمس فلتراً فيزيائياً من أكسيد الزنك النانوي المغلّف بالدايميثيكون، ويستخدم الشامبو مكوّنات نباتية مثل الجينسنغ والسبيرولينا والحلبة وبذر الكتان. وما تخلو منه التركيبات جزء من المقاربة أيضاً: بلا يوريا أو مقشّرات كيميائية في الجل كريم، وبلا مواد صابونية في جل الغسول، وبلا كحول في DD كريم، وبلا مينوكسيديل أو كافيين في الشامبو.",
      pillarsTitle: "مبادئ التركيب",
      pillars: [
        { title: "مكوّنات نباتية", text: "الخلاصات والزيوت النباتية أساس كل تركيبة." },
        { title: "قوام خفيف", text: "قوامات سريعة الامتصاص للاستخدام اليومي." },
        { title: "الترطيب", text: "حمض الهيالورونيك وPCA وفيتامين B5 للحفاظ على الرطوبة." },
        { title: "حماية فيزيائية", text: "فلتر فيزيائي SPF 30 ضد UVA وUVB." },
      ],
    },
    products: {
      title: "المنتجات",
      lead: "ثمانية منتجات للعناية بالبشرة والشعر ضمن أربع فئات.",
      all: "الكل",
      filterLabel: "تصفية حسب الفئة",
      countOne: "منتج واحد",
      countMany: (n) => `${n} منتجات`,
      viewProduct: "عرض المنتج",
    },
    product: {
      extended: "وصف تفصيلي",
      ingredients: "المكوّنات",
      notes: "ملاحظات التركيبة",
      keywords: "كلمات مفتاحية",
      related: "منتجات ذات صلة",
      category: "الفئة",
      backToProducts: "العودة إلى المنتجات",
    },
    contact: {
      title: "تواصل",
      lead: "للاستفسار عن منتجات جلوري آنسه، أرسل رسالتك عبر النموذج أدناه.",
      formTitle: "نموذج الاستفسار",
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال الرسالة",
      sent: "تم تسجيل رسالتك.",
      sentNote: "شكراً لتواصلك معنا.",
      required: "هذا الحقل مطلوب.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صالح.",
    },
    footer: {
      collections: "الفئات",
      navigate: "التنقّل",
      rights: "جميع الحقوق محفوظة.",
      note: "معلومات المنتجات مقدّمة من الكتالوج الرسمي لجلوري آنسه.",
    },
    breadcrumb: { home: "الرئيسية" },
    seo: {
      homeTitle: "جلوري آنسه | عناية نباتية بالبشرة والشعر",
      homeDesc:
        "مجموعة جلوري آنسه: جل كريم مرطّب، جل غسول، سيروم، ماء ميسيلار، واقيات شمس فيزيائية SPF 30، DD كريم وشامبو بروتيني عشبي.",
      aboutTitle: "عن جلوري آنسه | فلسفة التركيب",
      aboutDesc:
        "جلوري آنسه: تركيبات قائمة على الخلاصات والزيوت النباتية وقوامات خفيفة وترطيب يومي.",
      productsTitle: "منتجات جلوري آنسه | البشرة والشعر",
      productsDesc:
        "ثمانية منتجات من جلوري آنسه ضمن أربع فئات: التنظيف، الترطيب، الحماية من الشمس، والعناية بالشعر.",
      contactTitle: "تواصل مع جلوري آنسه",
      contactDesc: "أرسل استفساراتك حول منتجات جلوري آنسه عبر نموذج التواصل.",
    },
  },
};
