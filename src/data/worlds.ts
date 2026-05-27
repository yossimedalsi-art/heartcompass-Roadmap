export type Archetype = {
  id: string;
  name: string;
  role: string;
  icon?: string;
  description: string;
  coachPrompt: string;
  triggers: string[];
  imageUrl?: string;
};

export type World = {
  id: string;
  title: string;
  theme: "clouds" | "forest" | "arcade" | "fairies";
  archetypes: Archetype[];
};

export const worldsData: World[] = [
  {
    id: "clouds",
    title: "ממלכת העננים",
    theme: "clouds",
    archetypes: [
      {
        id: "turtle",
        name: "צב הקריסטל",
        role: "השריון / הסתגרות",
        description: "מתחבא בשריון נוצץ כשיש רעש.",
        coachPrompt: "הימנעות. שאלת סקרנות: מה הצב מנסה להגיד?",
        triggers: ["מישהו הרים עליי קול או שפט אותי", "הרגשתי יותר מדי תשומת לב פתאום", "פחדתי להגיד את הדבר הלא נכון", "היה רעש ועומס סביבי שחנק אותי"],
        imageUrl: "/images/turtle.png"
      },
      {
        id: "bunny",
        name: "ארנב הכוכבים",
        role: "סוחב הנטל",
        description: "סוחב כוכבים של אחרים כדי שלא ייפלו.",
        coachPrompt: "ריצוי. שאלת סקרנות: מה יקרה אם יניח את התרמיל?",
        triggers: ["הרגשתי שאני חייב להציל את המצב", "מישהו ציפה ממני ליותר מדי", "לא רציתי לאכזב חבר או הורה", "לקחתי על עצמי אשמה שלא שלי"],
        imageUrl: "/images/bunny.png"
      },
      {
        id: "cloud",
        name: "הענן הדאגן",
        role: "מחשבות יתר",
        description: "אוסף דמעות ומנסה למנוע אסון.",
        coachPrompt: "חרדה. שאלת סקרנות: מאיזו סופה הוא מגן?",
        triggers: ["מבחן או אירוע גדול שמתקרב", "מחשבה ש'כולם מסתכלים עליי'", "פחד לעשות פדיחה או לטעות", "מישהו קרא את ההודעה שלי וסינן"],
        imageUrl: "/images/cloud.png"
      },
      {
        id: "panda",
        name: "פנדה אדומה",
        role: "כעס מתפרץ",
        description: "הפרווה מסתמרת כשהיא נבהלת.",
        coachPrompt: "כעס הגנתי. שאלת סקרנות: מי איים עליה?",
        triggers: ["מישהו זלזל בי ודיבר אליי לא יפה", "הרגשתי שאין לי שום שליטה במצב", "פרצו לי את הגבולות הפרטיים", "הרגשתי שלא רואים את הצד שלי"],
        imageUrl: "/images/panda.png"
      },
      {
        id: "ghost",
        name: "רוח רפאים בשמיכה",
        role: "בושה / העלמות",
        description: "מציצה מהשמיכה ורוצה רק שלא יראו אותה.",
        coachPrompt: "בושה. שאלת סקרנות: מה הרוח מפחדת שיראו?",
        triggers: ["תחושה שאני פגום או 'לא בסדר'", "הרגשתי שלא מבינים אותי בכלל", "רציתי שהאדמה תבלע אותי אחרי משהו שקרה", "תחושת קנאה עמוקה שאי אפשר להסביר"],
        imageUrl: "/images/ghost.png"
      },
      {
        id: "whale",
        name: "לווייתן השמיים",
        role: "המצפן",
        description: "יצור ששוחה לאט עם נשימות עמוקות.",
        coachPrompt: "משאב הרגעה. שאלת סקרנות: איזו עצה הלווייתן לוחש?",
        triggers: ["הייתי צריך רגע של שקט לעצמי", "הרגשתי צורך להאט את הקצב", "חיפשתי תשובה מבפנים", "רציתי להרגיש בטוח ועטוף"],
        imageUrl: "/images/whale.png"
      }
    ]
  },
  {
    id: "forest",
    title: "היער הפנימי",
    theme: "forest",
    archetypes: [
      {
        id: "golem",
        name: "ענק האבן",
        role: "אטימות רגשית",
        description: "חוסם את השביל ולא מראה רגש.",
        coachPrompt: "אטימות כהגנה. מה המפתח אליו?",
        triggers: ["מישהו פגע בי והחלטתי לאטום את הלב", "שמעתי בשורה שהקפיאה אותי", "הרגשתי חלש ורציתי להיראות חזק", "אמרו לי משהו פוגע והעדפתי לא להגיב"],
        imageUrl: "/images/golem.png"
      },
      {
        id: "wolf",
        name: "זאב הערבה",
        role: "הגיבור הבודד",
        description: "בטוח שהוא חייב לצוד לבד.",
        coachPrompt: "פחד מתלות. מה יקרה אם מישהו אחר ישמור?",
        triggers: ["איבדתי אמון במישהו שסמכתי עליו", "הרגשתי שאני יכול לסמוך רק על עצמי", "הרחיקו אותי מהקבוצה אז התרחקתי יותר", "תחושה שאף אחד לא יכול לעזור לי באמת"],
        imageUrl: "/images/wolf.png"
      },
      {
        id: "dragon",
        name: "דרקון הקוצים",
        role: "התפרצות זעם",
        description: "יורק אש כשהוא מבועת.",
        coachPrompt: "זעם. על איזה פצע הוא שומר?",
        triggers: ["מישהו לחץ לי על הנקודה הכי רגישה", "התעלמו מהדעה שלי מול כולם", "הרגשתי כלוא בלי דרך לצאת", "העליבו או פגעו במישהו שאני אוהב"],
        imageUrl: "/images/dragon.png"
      },
      {
        id: "wasps",
        name: "ענן הצרעות",
        role: "הלקאה עצמית",
        description: "מזמזם את כל מה שמשתבש.",
        coachPrompt: "חרדה. איזה משפט הן חוזרות עליו?",
        triggers: ["עשיתי טעות קטנה שלא יוצאת לי מהראש", "מישהו העיר לי הערה והיא מהדהדת", "פחד ממה שיגידו עליי מחר בבוקר", "תחושה של 'אני אף פעם לא מספיק טוב'"],
        imageUrl: "/images/wasps.png"
      },
      {
        id: "lake",
        name: "האגם הקפוא",
        role: "ניתוק / חוסר תחושה",
        description: "משטח קרח שלא מאפשר לשום רגש לחדור.",
        coachPrompt: "דיסוציאציה. מה שוחה עמוק מתחת לקרח?",
        triggers: ["היה עומס רגשי גדול מדי ופשוט נכביתי", "רציתי להפסיק להרגיש את הכאב", "הכל נראה חסר משמעות ומשעמם", "העדפתי להעביר שעות במסך בלי לחשוב"],
        imageUrl: "/images/lake.png"
      },
      {
        id: "guardian",
        name: "שומר היער העתיק",
        role: "המצפן",
        description: "עץ זוהר שיודע את הדרך.",
        coachPrompt: "קול ההיגיון. מה שומר היער מציע?",
        triggers: ["חיפשתי תשובה בוגרת לבעיה קשה", "רציתי לקבל פרופורציה על משהו", "הייתי צריך להזכיר לעצמי מי אני באמת", "הרגשתי אמיץ ומוכן להתמודד"],
        imageUrl: "/images/guardian.png"
      }
    ]
  },
  {
    id: "arcade",
    title: "עיר הניאון",
    theme: "arcade",
    archetypes: [
      {
        id: "firewall",
        name: "האנטיווירוס",
        role: "ניתוק מגע",
        description: "מפעיל חומת אש וחוסם הודעות.",
        coachPrompt: "הגנה. מאיזו הודעה הוא מפחד?",
        triggers: ["הרגשתי שמנסים לחדור לי לפרטיות", "מישהו שאל יותר מדי שאלות", "רציתי לנתק מגע ופשוט להיעלם לאינסטגרם", "פחדתי שיראו את החולשה שלי"],
        imageUrl: "/images/firewall.png"
      },
      {
        id: "battery",
        name: "סוללה על 1%",
        role: "ריקנות / ריצוי",
        description: "נותן את כל החשמל לאחרים.",
        coachPrompt: "חוסר גבולות. למי נתן את רוב האנרגיה?",
        triggers: ["ביליתי יותר מדי זמן בניסיון לרצות חברים", "הרגשתי שאני שקוף אבל נותן הכל", "אמרתי 'כן' למרות שממש רציתי להגיד 'לא'", "אין לי כוח פיזי ונפשי לקום בבוקר"],
        imageUrl: "/images/battery.png"
      },
      {
        id: "hacker",
        name: "ההאקר",
        role: "מרדנות",
        description: "משבש את המערכת כדי להשיג שליטה.",
        coachPrompt: "מרד. מאיזו מערכת הוא מנסה להתנתק?",
        triggers: ["הציבו לי גבול לא הוגן והחלטתי לשבור אותו", "הרגשתי ששולטים בי והחזרתי מאבק", "עשיתי דווקא כי לא הקשיבו לי", "רציתי להוכיח שאני לא פראייר של אף אחד"],
        imageUrl: "/images/hacker.png"
      },
      {
        id: "glitch",
        name: "הגליץ'",
        role: "לופ חרדתי",
        description: "דמות מרצדת שמייצרת התראות אדומות.",
        coachPrompt: "OCD/לופ. מה נשמע מאחורי הרעש?",
        triggers: ["לופ של מחשבות לפני השינה שלא פוסק", "פאניקה פתאומית בתוך סיטואציה חברתית", "הרגשה שמשהו נורא הולך לקרות", "פחדתי להפסיד משהו (FOMO) שכולם שם"],
        imageUrl: "/images/glitch.png"
      },
      {
        id: "airplane",
        name: "מצב טיסה",
        role: "ניתוק מהסביבה",
        description: "מנתק את כל הרשתות והופך לבלתי נראה.",
        coachPrompt: "בריחה. לאן הוא בורח?",
        triggers: ["פשוט רציתי שכולם יעזבו אותי בשקט", "לא היה לי כוח להתמודד עם דרמה של אחרים", "הרגשתי מוצף מידע ודרישות", "חוויתי כישלון ורציתי להתחבא"],
        imageUrl: "/images/airplane.png"
      },
      {
        id: "ai",
        name: "ליבת ה-AI",
        role: "המצפן",
        description: "רואה את כל הנתונים ועושה ריסטארט שקט.",
        coachPrompt: "אינטגרציה. איזה עדכון הוא מוריד?",
        triggers: ["חיפשתי לאפס את היום שלי מחדש", "הבנתי שאני צריך לשנות גישה", "רציתי לנתח את המצב בלי רגשות אשמה", "הייתי זקוק לאור אובייקטיבי על הבעיה"],
        imageUrl: "/images/ai.png"
      }
    ]
  },
  {
    id: "fairies",
    title: "יער הפיות והשדונים",
    theme: "fairies",
    archetypes: [
      {
        id: "perfection_fairy",
        name: "פיית השלמות",
        role: "פרפקציוניזם / שיתוק",
        description: "מסרבת להתחיל שום דבר עד שזה לא נראה מושלם.",
        coachPrompt: "פחד מכישלון. שאלת סקרנות: ממה היא באמת מגינה עליך?",
        triggers: ["רציתי להתחיל משהו חדש ופחדתי לטעות", "הרגשתי שאם זה לא יהיה 100% עדיף לא לעשות בכלל", "השוויתי את עצמי לאחרים והרגשתי קטן", "ביקרו משהו שעשיתי והרגשתי שזה סוף העולם"],
        imageUrl: "/images/perfection_fairy.png"
      },
      {
        id: "doubt_troll",
        name: "טרול הספקות",
        role: "חוסר אמונה / הקטנה",
        description: "יושב על הכתף ולוחש באוזן שזה גדול עליך.",
        coachPrompt: "חוסר ביטחון. שאלת סקרנות: למה הוא מנסה להקטין אותך?",
        triggers: ["הייתי צריך לקבל החלטה חשובה והתחלתי להסס", "מישהו החמיא לי ולא האמנתי לו", "הרגשתי שאני לא מספיק טוב לעומת כולם", "רציתי לבקש משהו והשתפנתי ברגע האחרון"],
        imageUrl: "/images/doubt_troll.png"
      },
      {
        id: "illusion_elf",
        name: "שדון האשליות",
        role: "ריצוי / מטרות זרות",
        description: "מפזר נצנצים על מטרות שלא באמת שייכות לך.",
        coachPrompt: "בלבול זהות. שאלת סקרנות: של מי החלום הזה באמת?",
        triggers: ["עשיתי משהו רק כי ציפו ממני", "הסכמתי למשהו למרות שבפנים רציתי להגיד לא", "ניסיתי להיות מישהו שאני לא כדי שיאהבו אותי", "שמתי את הרצונות של אחרים לפני הרצונות שלי"],
        imageUrl: "/images/illusion_elf.png"
      },
      {
        id: "procrastination_fairy",
        name: "הפיה הדחיינית",
        role: "הימנעות / דחיינות",
        description: "מפזרת אבקת שינה על משימות כדי לא להתמודד איתן.",
        coachPrompt: "בריחה ממאמץ. שאלת סקרנות: מאיזה קושי היא נמנעת?",
        triggers: ["הייתה לי משימה חשובה ומצאתי את עצמי גולש בטלפון", "הרגשתי עומס ופשוט הלכתי לישון", "חיכיתי לרגע האחרון כדי לעשות משהו שפחדתי ממנו", "אמרתי לעצמי 'מחר יהיה לי יותר כוח'"],
        imageUrl: "/images/procrastination_fairy.png"
      },
      {
        id: "frustration_dwarf",
        name: "גמד התסכול",
        role: "חוסר סבלנות",
        description: "מתעצבן כשדברים לוקחים זמן ורוצה תוצאות עכשיו.",
        coachPrompt: "קושי בדחיית סיפוקים. שאלת סקרנות: מה מפחיד אותו בדרך ארוכה?",
        triggers: ["משהו לא הלך לי מהר כמו שרציתי והתעצבנתי", "רציתי לוותר רק כי זה לקח יותר מדי זמן", "השוותי את ההתקדמות שלי לשל אחרים והתייאשתי", "כעסתי על עצמי שאני עדיין לא נמצא איפה שרציתי"],
        imageUrl: "/images/frustration_dwarf.png"
      },
      {
        id: "magic_guardian",
        name: "שומרת יער הקסם",
        role: "המצפן",
        description: "מחזיקה את פנס האמת שמראה את הרצון הפנימי הנקי.",
        coachPrompt: "אותנטיות. שאלת סקרנות: מה הפנס מראה כשמסננים רעשי רקע?",
        triggers: ["הרגשתי חיבור עמוק למה שאני באמת רוצה", "הצלחתי להגיד לא למשהו שלא התאים לי", "בחרתי לפעול מתוך אמונה בעצמי", "לקחתי צעד קטן ואמיץ לעבר המטרה שלי"],
        imageUrl: "/images/magic_guardian.png"
      }
    ]
  }
];

export const goodPowersData: Archetype[] = [
  {
    id: "power_hug",
    name: "חיבוק עוטף",
    role: "נחמה",
    icon: "🫂",
    description: "חיבוק שמזכיר שאתה לא לבד ויש מי ששומר עליך.",
    coachPrompt: "מציע ביטחון פיזי ורגשי",
    triggers: [],
    imageUrl: "/images/powers/power_hug.png"
  },
  {
    id: "power_word",
    name: "מילה טובה",
    role: "עידוד",
    icon: "💬",
    description: "להזכיר לעצמך שאתה עושה הכי טוב שאתה יכול, וזה מספיק.",
    coachPrompt: "מציע קול פנימי חומל",
    triggers: [],
    imageUrl: "/images/powers/power_word.png"
  },
  {
    id: "power_breath",
    name: "נשימה עמוקה",
    role: "השהייה",
    icon: "🌬️",
    description: "כלי שעוזר להכניס חמצן ולהרגיע את הלחץ בגוף.",
    coachPrompt: "מציע חזרה לקרקע דרך הגוף",
    triggers: [],
    imageUrl: "/images/powers/power_breathe.png"
  },
  {
    id: "power_listen",
    name: "נראות ותיקוף",
    role: "הכלה",
    icon: "👁️",
    description: "פשוט להרגיש שרואים אותך כמו שאתה.",
    coachPrompt: "מציע נראות ותיקוף",
    triggers: [],
    imageUrl: "/images/powers/power_validation.png"
  },
  {
    id: "power_grounding",
    name: "קרקוע",
    role: "יציבות",
    icon: "🌳",
    description: "להרגיש את הרגליים על הקרקע ולחזור לכאן ועכשיו.",
    coachPrompt: "מציע יציבות כשהכל מרגיש סוער",
    triggers: [],
    imageUrl: "/images/powers/power_grounding.png"
  },
  {
    id: "power_pause",
    name: "פסק זמן",
    role: "מנוחה",
    icon: "⏸️",
    description: "רשות לקחת הפסקה מהכל בלי להרגיש אשמה.",
    coachPrompt: "מציע שבירת לופ דרך התנתקות זמנית",
    triggers: [],
    imageUrl: "/images/powers/power_pause.png"
  },
  {
    id: "power_compassion",
    name: "חמלה עצמית",
    role: "קבלה",
    icon: "❤️",
    description: "להיות החבר הכי טוב של עצמך, במיוחד כשטועים.",
    coachPrompt: "מציע מנוגד ישיר לביקורת פנימית",
    triggers: [],
    imageUrl: "/images/powers/power_compassion.png"
  },
  {
    id: "power_action",
    name: "תנועה או יצירה",
    role: "שחרור",
    icon: "🎨",
    description: "להזיז את הגוף או ליצור משהו כדי לפרוק אנרגיה תקועה.",
    coachPrompt: "מציע המרת אנרגיה (סובלימציה)",
    triggers: [],
    imageUrl: "/images/powers/power_action.png"
  }
];
