import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Hello: "Hello!",
      "Who I am":
        "My name is Yuliia Pysarenko. I'm a content manager who is deeply in love with IT technologies.",
      "Why?": "Why?",
      About: "About me",
      Portfolio: "Portfolio",
      Contacts: "Contacts",
      "Feel free to contact me": "Feel free to contact me:",
      StoryTitle1: "The beginning",
      StoryTitle2: "Word & Music",
      StoryTitle3: "Study and teach",
      StoryTitle4: "The start of the Сontent era",
      StoryTitle5: "Have you tested it?",
      StoryTitle6: "It's time for developing!",
      Story1: `From the 4th to the 10th grade, I attended a computer club, where I acquired my first profession - a computer operator. That's why we've been with MS Office as friends since childhood.`,
      Story2:
        "I'm studying at two universities at the same time: Drahomanov pedagogical university (Ukrainian philology; Information and analytical activity) and Karpenko-Karyi university (Sound directing). This is how I combined my love for texts (beloved and trained by language competitions) with music and sound recordings.",
      Story3:
        "Taught children in a sound recording group and worked as a methodologist at the Makariv creativity center for children and youth (Makariv, Kyiv region). Here I helped my fellow teachers to master educational technologies, wrote and filled the site with educational and methodical materials, organized seminars, master classes, and other events, as well as wrote my combined educational program, which won first place at the regional competition.",
      Story4:
        "I've been working as a content manager, including SMM. During this period, more than 500 announcements for TV programs and more than 1,100 posts for the social networks of the Ukrainian digital television operator Viasat were written.",
      Story5a: `Mastering and improving my testing skills, working on Ukrainian and Dutch projects (among them are `,
      Story5b: `). At the same time, I worked with my team on the creation of a national export portal - `,
      Story5c: `. I filled the Ukrainian and English versions of the portal with original content (specialized articles about exports, text blocks, descriptions, etc.) by the time the project was launched. Also, I wrote instructions for using website admin panels `,
      Story5d: ` and filled in content for such companies as `,
      Story6a:
        "A new stage and new skills :). Working as a content manager, I took FullStack developer courses. Now I'm working with the ",
      Story6b: " (React) and the Dutch collectible toy store ",
      Story6c: " (JS, PHP, OpenCart) websites. Also, SEO appears in my life, so I'm working on creation of analytics with website visit statistics, writing meta tags, conducting SEO analyzes, etc. for ",
      Story6d: ", and creating content for ",
      'diia': {
        "description": "The website of the Ministry of Economic Development of Ukraine, created for the purpose of organizing cooperation with foreign partners and developing Ukrainian exports.",
        "articles": "Creating original content for the Ukrainian and English versions. Examples: articles ",
        "guides": "export guides",
        "cards": "Creating country cards (summaries). Examples: ",
        "PL": "Poland",
        "GB": "United Kingdom",
        "news": "Filling the list of news, events, success stories, etc.",
        "manual": "Writing instructions for using the admin panel (Laravel), organizing a training seminar for the customer",
      },
      "uia": {
        "description": "Official website of the Ukrainian International Airlines",
        "editing": "Content editing for 16 languages, working with the ModX admin panel (PHP)",
        "schedules": "Prompt updating of the flight schedule, working with hundreds of pages of various tourist destinations",
        "landings": "Making landings",
        "news": "News publication",
        "emails": "Conducting email newsletters",
      },
      "viasat": {
        "description": "The official website of the Ukrainian satellite television operator",
        "admin": "Working with the Laravel admin panel. Downloading TV programs, linking announcement texts to films and TV series",
        "manuals": "Writing and proofreading user instructions",
        "linking device": "equipment connection",
        "viber bot": "connecting services via Viber bot",
        "personal": "working with a personal cabinet",
        "post": "ordering a tuner by mail",
        "ivr": "Text editing for Interactive Voice Responce",
        "announcements": "Writing hundreds of announcements for films, series and TV programs",
        "posts": "Creating content for social networks (about 1,200 publications)",
        "examples": "examples",
        "Bold Type": "Bold Type",
        "Forgotten engineering": "Forgotten engineering",
        "Time loop": "Time loop",
        "Amnesia": "Amnesia",
      },
      "vodafone": {
        "description": "The official website of the operator Vodafone Ukraine",
        "admin": "Working with admin panel",
        "testing site": "Website testing",
        "seo": "SEO audits",
        "gtm": "Setting up GTM tags to track user activity on the site, creating heatmaps via Hotjar",
        "analytics": "Creating analytical reports based on data in Google Analytics, Semrush and Ahrefs, showing results in Data Studio",
        "manuals": "Writing instructions for creating landing pages",
      },
      "yp": {
        "description": "Country recreation complex dedicated to aviation",
        "admin": "Working with the WordPress admin panel",
        "content": "Creating original content",
        "events": "event pages",
        "Banquets": "Banquets",
        "Conferences and seminars": "Conferences and seminars",
        "social": "Making content for social networks",
        "banners": "Creating banners for events",
      },
      "borscht": {
        "description": "Ukrainian restaurant in Alkmaar, the Netherlands",
        "admin": "Working with the WordPress admin panel",
        "content": "Creating original content for Ukrainian and English versions",
        "for example": "for example",
        "Borscht": "Borscht",
        "Pancakes with chicken": "Pancakes with chicken",
      },
      "tascombank": {
        "description": "Sites",
        "for business": "for business",
        "etc": ", etc",
        "tech support": "Tech support",
        "admin": "Performing software tasks; working with the admin panel",
        "content": "Content publication: news, promotions, including the creating of promotional landing pages",
        "calculators": "Updating deposit calculators",
        "manuals": "Writing instructions for the internal portal",
      },
      "wetronic": {
        "description": "Dutch online store of collectible toys",
        "frontend": "Frontend works",
        "admin": "Working with the OpenCart admin panel",
      },
      "testing product": "Product testing",
    },
  },
  uk: {
    translation: {
      Hello: "Вітаю!",
      "Who I am":
        "Мене звати Юлія Писаренко, і я контент-менеджерка, що закохана в IT-технології.",
      "Why?": "Чому?",
      About: "Слівце про мене",
      Portfolio: "Портфоліо",
      Contacts: "Контакти",
      "Feel free to contact me": "Буду рада вашому відгуку :)",
      StoryTitle1: "Початок",
      StoryTitle2: "Слово і музика",
      StoryTitle3: "Навчайся і навчай",
      StoryTitle4: "Початок ери контенту",
      StoryTitle5: "Як щодо тестування?)",
      StoryTitle6: "Час розробки",
      Story1: `З 4 до 10 класу я відвідую комп'ютерний гурток, де здобуваю свою першу професію - оператор комп'ютерного набору. Тому ми з MS Office на "ти" із самісінького дитинства.`,
      Story2: `Навчаюсь одночасно у двох університетах: НПУ імені М.П. Драгоманова (напрями "Українська філологія" та "Інформаційно-аналітична діяльність") і КНУТКіТ імені І.К. Карпенка-Карого (звукорежисура). Так я поєднувала свою викохану і треновану мовними конкурсами та олімпіадами любов до текстів разом з музикою та звукозаписами.`,
      Story3: `Працюю керівником гуртка звукозапису і методистом у Макарівському центрі творчості дітей та юнацтва, Київська область. Тут допомагаю своїм викладачам-колегам опановувати освітні технології, пишу навчально-методичні матеріали, наповнюю сайт закладу освітніми матеріалами, організовую семінари, майстер-класи і тренінги, а також пишу свою комбіновану навчальну програму, яка виборює перше місце на обласному конкурсі.`,
      Story4: `Працюю контент-менеджером із SMM-нахилом: пишу більше 500 анонсів для телепрограм та більше 1100 постів для соцмереж української компанії-оператора цифрового телебачення Viasat.`,
      Story5a: `Опановую та вдосконалюю навички тестування, працюючи на українських та нідерландських проектах (серед них `,
      Story5b: `). У цей же час разом зі своєю компанією починаю працювати над створенням національного експортного порталу, що пізніше отримає назву `,
      Story5c: `. Пишаюся тим, що я забезпечила наповнення української та англійської версій порталу оригінальним контентом (спеціалізовані статті з експорту, текстові блоки, описи тощо) до моменту запуску проекту. Пишу інструкції з користування андмінпанелями сайтів `,
      Story5d: `), займаюсь наповненням контенту для `,
      Story6a: `Новий етап і нові навички :) - проходжу курси FullStack-девелопера і тепер працюю з сайтами банку `,
      Story6b: `Tascombank (React) та нідерландського магазину колекційних іграшок `,
      Story6c: ` (JS, PHP, OpenCart). Також у моєму житті з'являється SEO, а з ним створення аналітики зі статистикою відвідування сайту, написання meta-тегів, проведення SEO-аналізів і т.д. для `,
      Story6d: `, та створення контенту для `,
      "diia": {
        "description": "Сайт Мінекономрозвитку України, створений з метою організації співпраці з іноземними партнерами та розвитку українського експорту.",
        "articles": "Створення оригінального контенту для української та англійської версій. Приклади - статті ",
        "guides": "гайди для експорту",
        "cards": "Створення карток країн. Приклади: ",
        "PL": "Польща",
        "GB": "Великобританія",
        "news": "Наповнення списку новин, подій, історій успіху і т.д.",
        "manual": "Написання інструкції з користування адмінпанеллю (Laravel), проведення навчального семінару для замовника",
      },
      "uia": {
        "description": "Офіційний сайт Міжнародних авіаліній України",
        "editing": "Редагування контенту для 16-ти мов, робота з адмінпанеллю ModX (PHP)",
        "schedules": "Оперативне оновлення розкладу рейсів, робота з сотнями сторінок різних туристичних напрямків",
        "landings": "Створення лендингів",
        "news": "Публікація новин",
        "emails": "Проведення email-розсилок",
      },
      "viasat": {
        "description": "Офіційний сайт українського оператора супутникового телебачення",
        "admin": "Робота з адмінпанеллю Laravel. Завантаження телепрограми, прив'язка текстів анонсів до фільмів та серіалів",
        "manuals": "Написання і вичитка інструкцій користувача",
        "linking device": "підключення обладнання",
        "viber bot": "підключення послуг через Вайбер-бот",
        "personal": "робота з особистим кабінетом",
        "post": "замовлення тюнера поштою",
        "ivr": "Редагування текстів для інтерактивного голосового меню",
        "announcements": "Написання сотень анонсів до фільмів, серіалів та телепрограм",
        "posts": "Створення контенту для соцмереж (близько 1200 публікацій)",
        "examples": "приклади",
        "Bold Type": "Жирний шрифт",
        "Forgotten engineering": "Забута інженерія",
        "Time loop": "Петля часу",
        "Amnesia": "Амнезія",
      },
      "vodafone": {
        "description": "Офіційний сайт оператора Vodafone Україна",
        "admin": "Робота з адмінпанеллю",
        "testing site": "Тестування сайту",
        "seo": "Проведення SEO-аудитів",
        "gtm": "Налаштування GTM-міток з метою відслідковування активності користувачів на сайті, створення карт heatmaps через Hotjar",
        "analytics": "Створення аналітичних звітів на основі даних в Google Analytics, Semrush i Ahrefs, показ результатів у Data Studio",
        "manuals": "Написання інструкції зі створення лендингів",
      },
      "yp": {
        "description": "Заміський комплекс відпочинку, присвячений авіації",
        "admin": "Робота з адмінпанеллю WordPress",
        "content": "Створення оригінального контенту",
        "events": "описи заходів",
        "Banquets": "Банкети",
        "Conferences and seminars": "Конференції та семінари",
        "social": "Генерування контенту для соцмереж",
        "banners": "Створення банерів для анонсів подій",
      },
      "borscht": {
        "description": "Український ресторан у місті Алкмар, Нідерланди",
        "admin": "Робота з адмінпанеллю WordPress",
        "content": "Створення оригінального контенту для української та англійської версій",
        "for example": "наприклад",
        "Borscht": "Борщ",
        "Pancakes with chicken": "Млинці з куркою",
      },
      "tascombank": {
        "description": "Sites",
        "for business": "для бізнесу",
        "etc": " та інші",
        "tech support": "Технічна підтримка",
        "admin": "Виконання програмних задач, робота з адмінпанеллю",
        "content": "Публікація контенту: новини, акції, включно зі створенням промо-лендингів та сторінок",
        "calculators": "Оновлення калькуляторів для депозитів",
        "manuals": "Написання інструкції для внутрішнього порталу",
      },
      "wetronic": {
        "description": "Нідерландський інтернет-магазин колекційних моделей іграшок",
        "frontend": "Фронтендні роботи",
        "admin": "Робота з адмінпанеллю OpenCart",
      },
      "testing product": "Тестування продукту"

    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;