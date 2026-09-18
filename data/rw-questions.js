// 100 SAT Reading & Writing questions (choices pre-shuffled).
const VOCAB_GLOSSARY = [
  {
    "word": "ubiquitous",
    "definition": "present, appearing, or found everywhere"
  },
  {
    "word": "meticulous",
    "definition": "showing great attention to detail; very careful and precise"
  },
  {
    "word": "ambivalent",
    "definition": "having mixed or contradictory feelings about something"
  },
  {
    "word": "candid",
    "definition": "truthful and straightforward; frank"
  },
  {
    "word": "resilient",
    "definition": "able to recover quickly from difficult conditions"
  },
  {
    "word": "pragmatic",
    "definition": "dealing with things sensibly and realistically"
  },
  {
    "word": "arbitrary",
    "definition": "based on random choice rather than reason or system"
  },
  {
    "word": "benevolent",
    "definition": "well-meaning and kindly"
  },
  {
    "word": "comprehensive",
    "definition": "complete and including everything necessary"
  },
  {
    "word": "deteriorate",
    "definition": "become progressively worse"
  },
  {
    "word": "eloquent",
    "definition": "fluent and persuasive in speaking or writing"
  },
  {
    "word": "frivolous",
    "definition": "not having any serious purpose or value"
  },
  {
    "word": "hindrance",
    "definition": "a thing that provides obstruction or delay"
  },
  {
    "word": "impartial",
    "definition": "treating all rivals or disputants equally; unbiased"
  },
  {
    "word": "laconic",
    "definition": "using very few words"
  },
  {
    "word": "mitigate",
    "definition": "make less severe, serious, or painful"
  },
  {
    "word": "notorious",
    "definition": "famous or well known for some bad quality or deed"
  },
  {
    "word": "obsolete",
    "definition": "no longer produced or used; out of date"
  },
  {
    "word": "pervasive",
    "definition": "spreading widely throughout an area or group"
  },
  {
    "word": "quell",
    "definition": "put an end to (a rebellion or disturbance), typically by force"
  },
  {
    "word": "redundant",
    "definition": "no longer needed or useful; superfluous"
  },
  {
    "word": "skeptical",
    "definition": "not easily convinced; having doubts"
  },
  {
    "word": "tenacious",
    "definition": "tending to keep a firm hold; persistent"
  },
  {
    "word": "unprecedented",
    "definition": "never done or known before"
  },
  {
    "word": "volatile",
    "definition": "liable to change rapidly and unpredictably"
  },
  {
    "word": "zealous",
    "definition": "having or showing great energy or enthusiasm for a cause"
  },
  {
    "word": "austere",
    "definition": "severe or strict in manner; without comfort or luxury"
  },
  {
    "word": "cogent",
    "definition": "clear, logical, and convincing"
  },
  {
    "word": "diligent",
    "definition": "showing care and conscientiousness in one's work"
  },
  {
    "word": "empirical",
    "definition": "based on observation or experience rather than theory"
  }
];

const RW_QUESTIONS = [
  {
    "id": 1,
    "category": "Vocabulary in Context",
    "passage": "Smartphones have become so _____ that it is rare to see anyone without one.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "skeptical",
      "ubiquitous",
      "eloquent",
      "meticulous"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "ubiquitous",
        "definition": "present, appearing, or found everywhere"
      }
    ]
  },
  {
    "id": 2,
    "category": "Vocabulary in Context",
    "passage": "The surgeon's _____ preparation ensured that every step of the operation went smoothly.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "meticulous",
      "ambivalent",
      "frivolous",
      "tenacious"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "meticulous",
        "definition": "showing great attention to detail; very careful and precise"
      }
    ]
  },
  {
    "id": 3,
    "category": "Vocabulary in Context",
    "passage": "She felt _____ about the job offer, excited about the salary but wary of the long hours.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "unprecedented",
      "impartial",
      "ambivalent",
      "candid"
    ],
    "correctIndex": 2,
    "vocab": [
      {
        "word": "ambivalent",
        "definition": "having mixed or contradictory feelings about something"
      }
    ]
  },
  {
    "id": 4,
    "category": "Vocabulary in Context",
    "passage": "In a _____ interview, the senator admitted that the policy had failed.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "candid",
      "volatile",
      "resilient",
      "laconic"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "candid",
        "definition": "truthful and straightforward; frank"
      }
    ]
  },
  {
    "id": 5,
    "category": "Vocabulary in Context",
    "passage": "Despite losing their home in the flood, the family remained _____ and rebuilt within a year.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "pragmatic",
      "notorious",
      "zealous",
      "resilient"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "resilient",
        "definition": "able to recover quickly from difficult conditions"
      }
    ]
  },
  {
    "id": 6,
    "category": "Vocabulary in Context",
    "passage": "Rather than debating theory, the manager took a _____ approach and simply fixed the broken machine.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "pragmatic",
      "austere",
      "obsolete",
      "arbitrary"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "pragmatic",
        "definition": "dealing with things sensibly and realistically"
      }
    ]
  },
  {
    "id": 7,
    "category": "Vocabulary in Context",
    "passage": "The judge criticized the fine as _____, since it bore no relation to the severity of the offense.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "pervasive",
      "benevolent",
      "arbitrary",
      "cogent"
    ],
    "correctIndex": 2,
    "vocab": [
      {
        "word": "arbitrary",
        "definition": "based on random choice rather than reason or system"
      }
    ]
  },
  {
    "id": 8,
    "category": "Vocabulary in Context",
    "passage": "The _____ donor asked that her gift to the hospital remain anonymous.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "redundant",
      "comprehensive",
      "diligent",
      "benevolent"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "benevolent",
        "definition": "well-meaning and kindly"
      }
    ]
  },
  {
    "id": 9,
    "category": "Vocabulary in Context",
    "passage": "The report offered a _____ review of the company's finances over the past decade.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "empirical",
      "eloquent",
      "skeptical",
      "comprehensive"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "comprehensive",
        "definition": "complete and including everything necessary"
      }
    ]
  },
  {
    "id": 10,
    "category": "Vocabulary in Context",
    "passage": "Without regular maintenance, the old bridge began to _____ rapidly.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "multiply",
      "deteriorate",
      "expand",
      "improve"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "deteriorate",
        "definition": "become progressively worse"
      }
    ]
  },
  {
    "id": 11,
    "category": "Vocabulary in Context",
    "passage": "The young debater's _____ closing argument won over even the skeptical judges.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "impartial",
      "meticulous",
      "unprecedented",
      "eloquent"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "eloquent",
        "definition": "fluent and persuasive in speaking or writing"
      }
    ]
  },
  {
    "id": 12,
    "category": "Vocabulary in Context",
    "passage": "The board dismissed the lawsuit as _____, noting it had no real legal basis.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "ambivalent",
      "volatile",
      "frivolous",
      "laconic"
    ],
    "correctIndex": 2,
    "vocab": [
      {
        "word": "frivolous",
        "definition": "not having any serious purpose or value"
      }
    ]
  },
  {
    "id": 13,
    "category": "Vocabulary in Context",
    "passage": "Heavy traffic proved to be a major _____ to the ambulance's arrival.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "hindrance",
      "coincidence",
      "benefit",
      "solution"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "hindrance",
        "definition": "a thing that provides obstruction or delay"
      }
    ]
  },
  {
    "id": 14,
    "category": "Vocabulary in Context",
    "passage": "As a referee, she was expected to remain _____ regardless of which team was favored.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "austere",
      "obsolete",
      "resilient",
      "impartial"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "impartial",
        "definition": "treating all rivals or disputants equally; unbiased"
      }
    ]
  },
  {
    "id": 15,
    "category": "Vocabulary in Context",
    "passage": "His _____ reply of \"fine\" gave no hint of how upset he actually was.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "cogent",
      "pervasive",
      "laconic",
      "pragmatic"
    ],
    "correctIndex": 2,
    "vocab": [
      {
        "word": "laconic",
        "definition": "using very few words"
      }
    ]
  },
  {
    "id": 16,
    "category": "Vocabulary in Context",
    "passage": "Planting trees along the riverbank helped _____ the damage caused by flooding.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "predict",
      "document",
      "increase",
      "mitigate"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "mitigate",
        "definition": "make less severe, serious, or painful"
      }
    ]
  },
  {
    "id": 17,
    "category": "Vocabulary in Context",
    "passage": "The city's _____ traffic jams make the morning commute a daily ordeal.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "benevolent",
      "skeptical",
      "empirical",
      "notorious"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "notorious",
        "definition": "famous or well known for some bad quality or deed"
      }
    ]
  },
  {
    "id": 18,
    "category": "Vocabulary in Context",
    "passage": "Many of the factory's machines are now _____ and have been replaced by automated systems.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "ubiquitous",
      "tenacious",
      "comprehensive",
      "obsolete"
    ],
    "correctIndex": 3,
    "vocab": [
      {
        "word": "obsolete",
        "definition": "no longer produced or used; out of date"
      }
    ]
  },
  {
    "id": 19,
    "category": "Vocabulary in Context",
    "passage": "The scent of fresh bread was _____ throughout the small bakery.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "pervasive",
      "meticulous",
      "unprecedented",
      "eloquent"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "pervasive",
        "definition": "spreading widely throughout an area or group"
      }
    ]
  },
  {
    "id": 20,
    "category": "Vocabulary in Context",
    "passage": "Additional police officers were sent to _____ the growing unrest downtown.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "encourage",
      "quell",
      "study",
      "document"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "quell",
        "definition": "put an end to (a rebellion or disturbance), typically by force"
      }
    ]
  },
  {
    "id": 21,
    "category": "Vocabulary in Context",
    "passage": "After the merger, several administrative positions became _____.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "impartial",
      "redundant",
      "candid",
      "zealous"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "redundant",
        "definition": "no longer needed or useful; superfluous"
      }
    ]
  },
  {
    "id": 22,
    "category": "Vocabulary in Context",
    "passage": "Scientists remained _____ of the study's results until the experiment could be repeated.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "laconic",
      "skeptical",
      "austere",
      "resilient"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "skeptical",
        "definition": "not easily convinced; having doubts"
      }
    ]
  },
  {
    "id": 23,
    "category": "Vocabulary in Context",
    "passage": "Her _____ pursuit of the scholarship paid off after three rejected applications.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "tenacious",
      "pragmatic",
      "cogent",
      "notorious"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "tenacious",
        "definition": "tending to keep a firm hold; persistent"
      }
    ]
  },
  {
    "id": 24,
    "category": "Vocabulary in Context",
    "passage": "The heat wave brought _____ temperatures to a region unaccustomed to such extremes.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "unprecedented",
      "obsolete",
      "arbitrary",
      "diligent"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "unprecedented",
        "definition": "never done or known before"
      }
    ]
  },
  {
    "id": 25,
    "category": "Vocabulary in Context",
    "passage": "Investors grew nervous as the stock market became increasingly _____.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "benevolent",
      "empirical",
      "volatile",
      "pervasive"
    ],
    "correctIndex": 2,
    "vocab": [
      {
        "word": "volatile",
        "definition": "liable to change rapidly and unpredictably"
      }
    ]
  },
  {
    "id": 26,
    "category": "Vocabulary in Context",
    "passage": "The _____ campaign volunteers knocked on doors from dawn until dusk.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "zealous",
      "redundant",
      "ubiquitous",
      "comprehensive"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "zealous",
        "definition": "having or showing great energy or enthusiasm for a cause"
      }
    ]
  },
  {
    "id": 27,
    "category": "Vocabulary in Context",
    "passage": "After years of luxury, the former executive adjusted to a more _____ lifestyle.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "austere",
      "cogent",
      "notorious",
      "pragmatic"
    ],
    "correctIndex": 0,
    "vocab": [
      {
        "word": "austere",
        "definition": "severe or strict in manner; without comfort or luxury"
      }
    ]
  },
  {
    "id": 28,
    "category": "Vocabulary in Context",
    "passage": "The lawyer's _____ argument left little room for doubt among the jurors.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "obsolete",
      "cogent",
      "diligent",
      "arbitrary"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "cogent",
        "definition": "clear, logical, and convincing"
      }
    ]
  },
  {
    "id": 29,
    "category": "Vocabulary in Context",
    "passage": "Her _____ note-taking throughout the semester made studying for finals much easier.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "empirical",
      "diligent",
      "pervasive",
      "benevolent"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "diligent",
        "definition": "showing care and conscientiousness in one's work"
      }
    ]
  },
  {
    "id": 30,
    "category": "Vocabulary in Context",
    "passage": "The theory was eventually supported by _____ evidence gathered over several field studies.",
    "question": "Which choice completes the text with the most logical and precise word?",
    "choices": [
      "comprehensive",
      "empirical",
      "redundant",
      "ubiquitous"
    ],
    "correctIndex": 1,
    "vocab": [
      {
        "word": "empirical",
        "definition": "based on observation or experience rather than theory"
      }
    ]
  },
  {
    "id": 31,
    "category": "Transitions",
    "passage": "Many students find calculus challenging. _____ with consistent practice, most can master its core concepts.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Meanwhile",
      "However",
      "Therefore",
      "Moreover"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 32,
    "category": "Transitions",
    "passage": "The bridge has been closed for repairs. _____ commuters must use the detour on Route 9.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Therefore",
      "Meanwhile",
      "Similarly",
      "However"
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 33,
    "category": "Transitions",
    "passage": "The new policy reduces paperwork for small businesses. _____ it lowers filing fees by twenty percent.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "However",
      "Therefore",
      "In contrast",
      "Moreover"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 34,
    "category": "Transitions",
    "passage": "The hikers knew a storm was approaching. _____ they continued toward the summit.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Therefore",
      "Additionally",
      "For example",
      "Nevertheless"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 35,
    "category": "Transitions",
    "passage": "The factory failed three safety inspections in a row. _____ regulators shut it down.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Meanwhile",
      "Similarly",
      "In contrast",
      "Consequently"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 36,
    "category": "Transitions",
    "passage": "Wolves hunt in coordinated packs to bring down large prey. _____ lions rely on group strategy to hunt buffalo.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Therefore",
      "Alternatively",
      "In contrast",
      "Similarly"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 37,
    "category": "Transitions",
    "passage": "The coastal city enjoys mild winters. _____ the inland town regularly sees snow and freezing temperatures.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "In contrast",
      "Similarly",
      "Thus",
      "Additionally"
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 38,
    "category": "Transitions",
    "passage": "Several museums have adopted interactive exhibits. The science center, _____ now lets visitors control a robotic arm.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "in contrast,",
      "for example,",
      "consequently,",
      "nevertheless,"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 39,
    "category": "Transitions",
    "passage": "The committee could not reach a majority. _____ the proposal was sent back for revision.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Additionally",
      "Thus",
      "Meanwhile",
      "In contrast"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 40,
    "category": "Transitions",
    "passage": "The internship offers hands-on lab experience. _____ participants receive a stipend for travel expenses.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Additionally",
      "Consequently",
      "In contrast",
      "However"
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 41,
    "category": "Transitions",
    "passage": "The lead actor rehearsed her lines backstage. _____ the crew adjusted the lighting for the final scene.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Therefore",
      "In fact",
      "Meanwhile",
      "As a result"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 42,
    "category": "Transitions",
    "passage": "Students can complete the assignment as a written essay. _____ they may submit a short recorded presentation.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Moreover",
      "Alternatively",
      "Similarly",
      "Consequently"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 43,
    "category": "Transitions",
    "passage": "The report criticized the city's transportation plan. _____ it pointed to the lack of funding for bike lanes.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "As a result",
      "However",
      "Meanwhile",
      "Specifically"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 44,
    "category": "Transitions",
    "passage": "Some assumed the small bakery would struggle downtown. _____ it became the neighborhood's most popular breakfast spot.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "Therefore",
      "Meanwhile",
      "Alternatively",
      "In fact"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 45,
    "category": "Transitions",
    "passage": "The river overflowed its banks after days of rain. _____ several nearby roads were closed.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      "In contrast",
      "Similarly",
      "Alternatively",
      "As a result"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 46,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "After the meeting ended, the team, returned to their desks.",
      "After the meeting, ended the team returned to their desks.",
      "After the meeting ended, the team returned to their desks.",
      "After the meeting ended the team returned to their desks."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 47,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The museum was crowded: we decided to come back the next morning.",
      "The museum was crowded we decided to come back the next morning.",
      "The museum was crowded; we decided to come back the next morning.",
      "The museum was crowded, we decided to come back the next morning."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 48,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The band finished their set, and the crowd cheered loudly.",
      "The band finished their set and, the crowd cheered loudly.",
      "The band finished their set and the crowd cheered loudly.",
      "The band finished their set, and, the crowd cheered loudly."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 49,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "She finished her homework, and went for a run.",
      "She finished, her homework and went for a run.",
      "She finished her homework and went for a run.",
      "She finished her homework and, went for a run."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 50,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "My uncle, who lives in Denver visits us every summer.",
      "My uncle who lives in Denver, visits us every summer.",
      "My uncle, who lives in Denver, visits us every summer.",
      "My uncle who lives in Denver visits us every summer."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 51,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "Students who arrive late will not be admitted until intermission.",
      "Students, who arrive late will not be admitted until intermission.",
      "Students who arrive late, will not be admitted until intermission.",
      "Students, who arrive late, will not be admitted until intermission."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 52,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The recipe requires three ingredients; flour, sugar, and butter.",
      "The recipe requires three ingredients: flour, sugar, and butter.",
      "The recipe requires: three ingredients, flour, sugar, and butter.",
      "The recipe requires three ingredients, flour, sugar, and butter."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 53,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The dogs' leash was left on the porch.",
      "The dogs leash was left on the porch.",
      "The dog's leash was left on the porch.",
      "The dog's' leash was left on the porch."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 54,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The students' projects were displayed in the hallway.",
      "The studentss' projects were displayed in the hallway.",
      "The student's projects were displayed in the hallway.",
      "The students projects were displayed in the hallway."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 55,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The company announced its' quarterly earnings on Monday.",
      "The company announced it is quarterly earnings on Monday.",
      "The company announced its quarterly earnings on Monday.",
      "The company announced it's quarterly earnings on Monday."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 56,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The negotiations stalled for weeks; neither side, would compromise.",
      "The negotiations stalled for weeks; neither side would compromise.",
      "The negotiations stalled for weeks neither side would compromise.",
      "The negotiations stalled for weeks, neither side would compromise."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 57,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "Mount Kilimanjaro, the tallest peak in Africa attracts climbers from around the world.",
      "Mount Kilimanjaro the tallest peak in Africa, attracts climbers from around the world.",
      "Mount Kilimanjaro, the tallest peak in Africa, attracts climbers from around the world.",
      "Mount Kilimanjaro, the tallest, peak in Africa, attracts climbers from around the world."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 58,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The chef prepared soup, salad and, grilled salmon for the guests.",
      "The chef prepared soup, salad, and grilled salmon for the guests.",
      "The chef prepared soup, salad, and, grilled salmon for the guests.",
      "The chef prepared soup salad and grilled salmon for the guests."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 59,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "It was a long, exhausting journey across the desert.",
      "It was a long, exhausting, journey across the desert.",
      "It was a long exhausting, journey across the desert.",
      "It was a long exhausting journey across the desert."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 60,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The scientists, who conducted the study published their findings in a major journal.",
      "The scientists who conducted the study published their findings in a major journal.",
      "The scientists who conducted the study published, their findings in a major journal.",
      "The scientists who conducted the study, published their findings in a major journal."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 61,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "There was only one explanation, for the empty shelves: a shipment had been delayed.",
      "There was only one explanation for the empty shelves: a shipment had been delayed.",
      "There was only one explanation for the empty shelves; a shipment had been delayed.",
      "There was only one explanation for the empty shelves, a shipment had been delayed."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 62,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The award went to the youngest, contestant, a violinist from Ohio.",
      "The award went to the youngest contestant, a violinist, from Ohio.",
      "The award went to the youngest contestant, a violinist from Ohio.",
      "The award went to the youngest contestant a violinist from Ohio."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 63,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "If the shipment, arrives on time, the store will restock by Friday.",
      "If the shipment arrives on time, the store will restock by Friday.",
      "If the shipment arrives on time the store will restock by Friday.",
      "If the shipment arrives, on time, the store will restock by Friday."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 64,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The director whose latest film won three awards will speak at the festival.",
      "The director, whose latest film won three awards will speak at the festival.",
      "The director, who's latest film won three awards, will speak at the festival.",
      "The director, whose latest film won three awards, will speak at the festival."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 65,
    "category": "Punctuation",
    "passage": "",
    "question": "Which choice uses punctuation correctly?",
    "choices": [
      "The line was long but, the tickets were worth the wait.",
      "The line was long, but the tickets were worth the wait.",
      "The line was long, the tickets were worth the wait.",
      "The line was long the tickets were worth the wait."
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 66,
    "category": "Grammar & Usage",
    "passage": "The results of the experiment _____ surprising.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "is",
      "are",
      "has been",
      "was"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 67,
    "category": "Grammar & Usage",
    "passage": "Each of the students _____ required to submit an essay.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "were",
      "have been",
      "is",
      "are"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 68,
    "category": "Grammar & Usage",
    "passage": "The players celebrated _____ victory on the field.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "her",
      "its",
      "their",
      "his"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 69,
    "category": "Grammar & Usage",
    "passage": "By the time the guests arrived, she _____ the entire meal.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "will prepare",
      "prepare",
      "had prepared",
      "prepares"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 70,
    "category": "Grammar & Usage",
    "passage": "She enjoys hiking, swimming, and _____ on weekends.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "bikes",
      "to bike",
      "bike",
      "biking"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 71,
    "category": "Grammar & Usage",
    "passage": "The plan was not only expensive but also _____.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "riskier than expected",
      "it was risky",
      "risky",
      "a risk"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 72,
    "category": "Grammar & Usage",
    "passage": "Of the two routes, the coastal highway is the _____.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "shortest",
      "short",
      "shorter",
      "more short"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 73,
    "category": "Grammar & Usage",
    "passage": "Of all the routes we tried, the coastal highway was the _____.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "shortest",
      "short",
      "shorter",
      "more shortest"
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 74,
    "category": "Grammar & Usage",
    "passage": "She is responsible for _____ the weekly reports.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "prepared",
      "to prepare",
      "prepare",
      "preparing"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 75,
    "category": "Grammar & Usage",
    "passage": "If I _____ you, I would accept the offer.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "am",
      "was",
      "will be",
      "were"
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 76,
    "category": "Grammar & Usage",
    "passage": "_____ did you invite to the ceremony?",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "Who",
      "Whose",
      "Whom",
      "Who's"
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 77,
    "category": "Grammar & Usage",
    "passage": "The team played _____ in the final match.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "well",
      "best",
      "good",
      "better"
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 78,
    "category": "Grammar & Usage",
    "passage": "Neither the coach nor the players _____ satisfied with the result.",
    "question": "Which choice completes the sentence so that it conforms to the conventions of Standard English?",
    "choices": [
      "has been",
      "were",
      "is",
      "was"
    ],
    "correctIndex": 1,
    "vocab": null
  },
  {
    "id": 79,
    "category": "Grammar & Usage",
    "passage": "Rushing to catch the bus,",
    "question": "Which choice most logically and grammatically completes the sentence?",
    "choices": [
      "Maria dropped her keys on the sidewalk.",
      "the keys were dropped by Maria on the sidewalk.",
      "the sidewalk was where Maria dropped her keys.",
      "Maria's bag spilled its contents onto the sidewalk."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 80,
    "category": "Grammar & Usage",
    "passage": "After reviewing the budget carefully,",
    "question": "Which choice most logically and grammatically completes the sentence?",
    "choices": [
      "the board approved the new marketing plan.",
      "the new marketing plan's approval came from the board.",
      "it was decided that the marketing plan should be approved.",
      "the marketing plan was approved by the board."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 81,
    "category": "Rhetorical Synthesis",
    "passage": "The Wright brothers flew the first powered airplane in 1903. The flight lasted 12 seconds. It covered 120 feet. The location was Kitty Hawk, North Carolina.",
    "question": "The student wants to emphasize how brief the historic flight was. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "In 1903, the Wright brothers achieved the first powered flight, covering 120 feet.",
      "Kitty Hawk, North Carolina, was the site of the Wright brothers' first flight in 1903.",
      "The Wright brothers flew the first powered airplane at Kitty Hawk, North Carolina, in 1903.",
      "Though it lasted just 12 seconds, the Wright brothers' 1903 flight at Kitty Hawk changed the course of history."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 82,
    "category": "Rhetorical Synthesis",
    "passage": "Marie Curie won the Nobel Prize in Physics in 1903. She won the Nobel Prize in Chemistry in 1911. She is the only person to win Nobel Prizes in two different sciences.",
    "question": "The student wants to highlight Curie's unique achievement among Nobel laureates. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Marie Curie remains the only person ever to win Nobel Prizes in two different scientific fields.",
      "Marie Curie's second Nobel Prize came in 1911, in the field of chemistry.",
      "In 1903, Marie Curie became a Nobel Prize winner in the field of physics.",
      "Marie Curie won two Nobel Prizes during her lifetime as a scientist."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 83,
    "category": "Rhetorical Synthesis",
    "passage": "The Great Wall of China is over 13,000 miles long. Construction began more than 2,000 years ago. It was built by multiple dynasties. It was designed to protect against invasions.",
    "question": "The student wants to underscore the wall's enormous length. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Stretching more than 13,000 miles, the Great Wall of China is one of the largest construction projects ever undertaken.",
      "The Great Wall of China was built by multiple dynasties over more than 2,000 years.",
      "The Great Wall of China was designed primarily to protect against invasions.",
      "Construction of the Great Wall of China began more than 2,000 years ago."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 84,
    "category": "Rhetorical Synthesis",
    "passage": "Octopuses have three hearts. Two hearts pump blood to the gills. One heart pumps blood to the rest of the body. Octopus blood is blue due to a copper-based protein.",
    "question": "The student wants to explain why octopus blood is blue. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Octopus blood appears blue because it contains a copper-based protein rather than the iron-based protein found in human blood.",
      "One of the octopus's three hearts pumps blood to the rest of its body.",
      "Octopuses are unusual among sea creatures for having three separate hearts.",
      "Octopuses have three hearts, two of which pump blood to the gills."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 85,
    "category": "Rhetorical Synthesis",
    "passage": "The library added 24-hour access in 2019. Student visits increased by 40 percent that year. A new study found extended hours reduced overnight security incidents. The change cost the university $50,000 annually.",
    "question": "The student wants to present evidence that the policy change benefited students. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "The university spends $50,000 annually to keep the library open 24 hours.",
      "A recent study examined security incidents at the library during overnight hours.",
      "After the library introduced 24-hour access in 2019, student visits rose by 40 percent.",
      "The library's 24-hour access policy began in 2019."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 86,
    "category": "Rhetorical Synthesis",
    "passage": "Coral reefs cover less than 1% of the ocean floor. They support roughly 25% of all marine species. Rising ocean temperatures cause coral bleaching. Bleached coral is more vulnerable to disease.",
    "question": "The student wants to emphasize how disproportionately important coral reefs are to marine life. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Although coral reefs make up less than 1% of the ocean floor, they support about 25% of all marine species.",
      "Rising ocean temperatures are a major cause of coral bleaching worldwide.",
      "Bleached coral becomes significantly more vulnerable to disease.",
      "Coral reefs are found in oceans throughout the world."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 87,
    "category": "Rhetorical Synthesis",
    "passage": "Vincent van Gogh sold only one painting during his lifetime. He created over 2,000 artworks. His paintings now sell for tens of millions of dollars. He died in 1890 at age 37.",
    "question": "The student wants to highlight the contrast between van Gogh's lifetime success and his posthumous fame. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Van Gogh sold just one painting while he was alive, yet his works now sell for tens of millions of dollars.",
      "Today, van Gogh's paintings sell for tens of millions of dollars each.",
      "Van Gogh created more than 2,000 artworks over the course of his career.",
      "Van Gogh died in 1890 at the age of 37."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 88,
    "category": "Rhetorical Synthesis",
    "passage": "Honeybees communicate through a 'waggle dance.' The dance indicates the direction and distance of food sources. Scientists decoded the dance's meaning in the 1960s. A single hive can contain up to 60,000 bees.",
    "question": "The student wants to explain the function of the waggle dance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "A single beehive can contain as many as 60,000 bees.",
      "Scientists first decoded the meaning of the honeybee waggle dance in the 1960s.",
      "Honeybees are known for their complex forms of communication.",
      "Honeybees perform a 'waggle dance' to tell other bees the direction and distance of nearby food sources."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 89,
    "category": "Rhetorical Synthesis",
    "passage": "The printing press was invented by Johannes Gutenberg around 1440. Before this, books were copied by hand. The press allowed books to be produced far faster and cheaper. Literacy rates across Europe rose significantly in the following century.",
    "question": "The student wants to show a cause-and-effect relationship between the printing press and literacy. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Johannes Gutenberg invented the printing press around the year 1440.",
      "Before the printing press, all books had to be copied by hand.",
      "Literacy rates across Europe rose significantly during the century after 1440.",
      "By making books faster and cheaper to produce, Gutenberg's printing press helped literacy rates rise significantly across Europe."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 90,
    "category": "Rhetorical Synthesis",
    "passage": "The Amazon rainforest produces about 20% of the world's oxygen. It is home to roughly 10% of all known species. Deforestation has removed nearly 20% of the forest since 1970. Much of the cleared land is used for cattle ranching.",
    "question": "The student wants to draw a connection between deforestation and its cause. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "choices": [
      "Much of the Amazon's deforestation, which has removed nearly 20% of the forest since 1970, is driven by land clearing for cattle ranching.",
      "The Amazon rainforest is estimated to produce about 20% of the world's oxygen.",
      "The Amazon is home to roughly 10% of all species known to science.",
      "Nearly 20% of the Amazon rainforest has disappeared since 1970."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 91,
    "category": "Reading Comprehension",
    "passage": "Bioluminescence, the ability of living organisms to produce light through chemical reactions, occurs in a surprising range of species, from deep-sea anglerfish to fireflies. In the ocean, where sunlight fades within a few hundred meters, bioluminescence often serves as a survival tool. Some fish use glowing lures to attract prey, while others flash light to startle predators or communicate with potential mates. Scientists estimate that the majority of deep-sea creatures possess some form of bioluminescent ability, suggesting that in the dark waters of the deep ocean, producing one's own light is less a rare adaptation than a basic requirement for survival.",
    "question": "Which choice best states the main idea of the passage?",
    "choices": [
      "Fireflies and anglerfish are the two species most associated with bioluminescence.",
      "Scientists have only recently begun studying bioluminescent deep-sea creatures.",
      "Sunlight disappears within a few hundred meters of the ocean's surface.",
      "Bioluminescence is a widespread and often essential adaptation for deep-sea survival."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 92,
    "category": "Reading Comprehension",
    "passage": "Bioluminescence, the ability of living organisms to produce light through chemical reactions, occurs in a surprising range of species, from deep-sea anglerfish to fireflies. In the ocean, where sunlight fades within a few hundred meters, bioluminescence often serves as a survival tool. Some fish use glowing lures to attract prey, while others flash light to startle predators or communicate with potential mates. Scientists estimate that the majority of deep-sea creatures possess some form of bioluminescent ability, suggesting that in the dark waters of the deep ocean, producing one's own light is less a rare adaptation than a basic requirement for survival.",
    "question": "Based on the passage, what can reasonably be inferred about most deep-sea creatures?",
    "choices": [
      "They rely on producing their own light rather than on sunlight.",
      "They are generally larger than fish that live near the surface.",
      "They cannot survive if brought to the ocean's surface.",
      "They primarily use bioluminescence to navigate long distances."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 93,
    "category": "Reading Comprehension",
    "passage": "When the Library of Alexandria was established in Egypt during the third century BCE, its founders envisioned a collection containing every book in the known world. Scholars were sent abroad to acquire texts, and ships arriving in the harbor were reportedly searched for scrolls, which were copied before being returned to their owners. At its height, the library may have held several hundred thousand papyrus scrolls, drawing scholars from across the Mediterranean. Although the library's ultimate fate remains debated, with fires, wars, and centuries of neglect all cited as contributing causes, its ambition to gather universal knowledge in one place has never been forgotten.",
    "question": "The passage indicates that the Library of Alexandria's founders were primarily motivated by a desire to",
    "choices": [
      "assemble a comprehensive collection of the world's written knowledge.",
      "preserve Egyptian religious texts specifically.",
      "train scholars in the art of copying scrolls.",
      "compete with rival libraries in other regions."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 94,
    "category": "Reading Comprehension",
    "passage": "When the Library of Alexandria was established in Egypt during the third century BCE, its founders envisioned a collection containing every book in the known world. Scholars were sent abroad to acquire texts, and ships arriving in the harbor were reportedly searched for scrolls, which were copied before being returned to their owners. At its height, the library may have held several hundred thousand papyrus scrolls, drawing scholars from across the Mediterranean. Although the library's ultimate fate remains debated, with fires, wars, and centuries of neglect all cited as contributing causes, its ambition to gather universal knowledge in one place has never been forgotten.",
    "question": "The author's discussion of the library's 'ultimate fate' mainly serves to",
    "choices": [
      "prove that the library never actually contained as many scrolls as claimed.",
      "argue that fire was the sole cause of the library's destruction.",
      "acknowledge that historians disagree about how and why the library was lost.",
      "criticize modern historians for failing to study the topic."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 95,
    "category": "Reading Comprehension",
    "passage": "Urban planners have increasingly promoted the '15-minute city,' a model in which residents can reach work, schools, groceries, and healthcare within a short walk or bike ride from home. Proponents argue the approach reduces traffic congestion, lowers carbon emissions, and strengthens neighborhood ties by encouraging local commerce. Critics, however, caution that strict implementation could inadvertently restrict residents' freedom of movement or raise housing costs in newly desirable neighborhoods. Most planners agree that successful implementation depends heavily on local context, since a model well suited to a dense European city may require significant adaptation before it could work in a sprawling suburban region.",
    "question": "Which choice best describes the overall structure of the passage?",
    "choices": [
      "It compares two competing planning models in direct detail.",
      "It presents a single expert's opinion without acknowledging opposing views.",
      "It introduces a concept, presents its potential benefits and drawbacks, and notes a caveat about implementation.",
      "It narrates the history of urban planning from its origins to the present."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 96,
    "category": "Reading Comprehension",
    "passage": "Urban planners have increasingly promoted the '15-minute city,' a model in which residents can reach work, schools, groceries, and healthcare within a short walk or bike ride from home. Proponents argue the approach reduces traffic congestion, lowers carbon emissions, and strengthens neighborhood ties by encouraging local commerce. Critics, however, caution that strict implementation could inadvertently restrict residents' freedom of movement or raise housing costs in newly desirable neighborhoods. Most planners agree that successful implementation depends heavily on local context, since a model well suited to a dense European city may require significant adaptation before it could work in a sprawling suburban region.",
    "question": "The passage suggests that critics of the 15-minute city are mainly concerned about",
    "choices": [
      "unintended restrictions on residents and rising housing costs.",
      "the model's failure to reduce carbon emissions.",
      "the difficulty of building new grocery stores.",
      "a lack of interest from urban planners."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 97,
    "category": "Reading Comprehension",
    "passage": "The invention of photography in the nineteenth century provoked anxiety among many painters, who feared the new technology would make their craft obsolete. Why labor over a portrait, some asked, when a camera could capture a likeness in an instant? Yet rather than replacing painting, photography ultimately transformed it. Freed from the obligation to record appearances with strict accuracy, painters increasingly turned toward abstraction, emotion, and experimentation, movements that gave rise to Impressionism and, later, Cubism. In this sense, the camera did not silence painting so much as it gave painters a new reason to ask what painting was for.",
    "question": "Which choice best captures the main point of the passage?",
    "choices": [
      "Painters universally welcomed the invention of photography.",
      "Photography and painting have always served identical artistic purposes.",
      "Photography changed the purpose of painting rather than eliminating it.",
      "Cubism developed entirely independently of photography's influence."
    ],
    "correctIndex": 2,
    "vocab": null
  },
  {
    "id": 98,
    "category": "Reading Comprehension",
    "passage": "The invention of photography in the nineteenth century provoked anxiety among many painters, who feared the new technology would make their craft obsolete. Why labor over a portrait, some asked, when a camera could capture a likeness in an instant? Yet rather than replacing painting, photography ultimately transformed it. Freed from the obligation to record appearances with strict accuracy, painters increasingly turned toward abstraction, emotion, and experimentation, movements that gave rise to Impressionism and, later, Cubism. In this sense, the camera did not silence painting so much as it gave painters a new reason to ask what painting was for.",
    "question": "The phrase 'gave painters a new reason to ask what painting was for' mainly suggests that",
    "choices": [
      "critics began to question whether photography was a legitimate art form.",
      "painters stopped creating representational art altogether.",
      "photography made painters question whether to continue painting at all.",
      "photography pushed painters to reconsider the purpose and identity of their art form."
    ],
    "correctIndex": 3,
    "vocab": null
  },
  {
    "id": 99,
    "category": "Reading Comprehension",
    "passage": "Sleep researchers have long debated why humans, unlike many animals, sleep in one consolidated block rather than several short naps throughout the day. Some anthropologists point to historical evidence suggesting pre-industrial societies often slept in two segments, waking briefly at night before returning to sleep until dawn. Artificial lighting, they argue, gradually compressed this pattern into a single continuous block by allowing people to stay productive later into the evening. If this theory holds, the now-common struggle with midnight wakefulness may not be a disorder at all, but rather an echo of a much older, historically ordinary sleep pattern.",
    "question": "The main purpose of the passage is to",
    "choices": [
      "present a historical explanation for a modern sleep phenomenon.",
      "argue that artificial lighting should be banned after sunset.",
      "recommend a treatment for chronic sleep disorders.",
      "prove that all pre-industrial societies slept in identical patterns."
    ],
    "correctIndex": 0,
    "vocab": null
  },
  {
    "id": 100,
    "category": "Reading Comprehension",
    "passage": "Sleep researchers have long debated why humans, unlike many animals, sleep in one consolidated block rather than several short naps throughout the day. Some anthropologists point to historical evidence suggesting pre-industrial societies often slept in two segments, waking briefly at night before returning to sleep until dawn. Artificial lighting, they argue, gradually compressed this pattern into a single continuous block by allowing people to stay productive later into the evening. If this theory holds, the now-common struggle with midnight wakefulness may not be a disorder at all, but rather an echo of a much older, historically ordinary sleep pattern.",
    "question": "Based on the passage, sleep researchers who hold this theory would most likely view occasional midnight wakefulness as",
    "choices": [
      "a modern phenomenon with no historical precedent.",
      "a sign of serious underlying illness requiring treatment.",
      "a possible remnant of a historically normal sleep pattern rather than a medical problem.",
      "evidence that artificial lighting has no effect on sleep."
    ],
    "correctIndex": 2,
    "vocab": null
  }
];
