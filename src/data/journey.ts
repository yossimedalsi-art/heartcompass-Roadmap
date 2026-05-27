export const journeyPhases = [
  {
    id: "step_4_goals",
    order: 4,
    traineeTitle: "מה אתה באמת רוצה שיקרה?",
    uiType: "structured-dialogue",
    options: {
      fairies: [
        "להאמין בעצמי באמת",
        "להרגיש חופשי ליד אנשים",
        "להפסיק לפחד מדחייה",
        "להרגיש שאני מספיק טוב"
      ]
    },
    patternRevealed: {
      fairies: [
        "הביקורת הפנימית חזקה מאוד.",
        "החשש משיפוט מנהל את ההתנהגות.",
        "פחד מדחייה גורם להימנעות.",
        "יש רעב עמוק לתחושת ערך."
      ]
    }
  }
];
