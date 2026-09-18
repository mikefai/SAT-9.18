const MATH_QUESTIONS = [
  {
    "category": "Algebra",
    "prompt": "If 3x + 4 = 19, what is the value of x?",
    "promptTr": "3x + 4 = 19 ise, x'in değeri kaçtır?",
    "choices": [
      "-5",
      "8",
      "6",
      "5"
    ],
    "correctIndex": 3,
    "steps": [
      "Subtract 4 from both sides: 3x = 15",
      "Divide both sides by 3: x = 5"
    ],
    "id": 1
  },
  {
    "category": "Algebra",
    "prompt": "If 4x - 7 = 25, what is the value of x?",
    "promptTr": "4x - 7 = 25 ise, x'in değeri kaçtır?",
    "choices": [
      "-8",
      "11",
      "8",
      "6"
    ],
    "correctIndex": 2,
    "steps": [
      "Add 7 to both sides: 4x = 32",
      "Divide both sides by 4: x = 8"
    ],
    "id": 2
  },
  {
    "category": "Algebra",
    "prompt": "If 6x + 10 = 52, what is the value of x?",
    "promptTr": "6x + 10 = 52 ise, x'in değeri kaçtır?",
    "choices": [
      "7",
      "10",
      "-7",
      "9"
    ],
    "correctIndex": 0,
    "steps": [
      "Subtract 10 from both sides: 6x = 42",
      "Divide both sides by 6: x = 7"
    ],
    "id": 3
  },
  {
    "category": "Algebra",
    "prompt": "If 2x + 15 = 41, what is the value of x?",
    "promptTr": "2x + 15 = 41 ise, x'in değeri kaçtır?",
    "choices": [
      "21",
      "16",
      "13",
      "-13"
    ],
    "correctIndex": 2,
    "steps": [
      "Subtract 15 from both sides: 2x = 26",
      "Divide both sides by 2: x = 13"
    ],
    "id": 4
  },
  {
    "category": "Algebra",
    "prompt": "If 7x - 4 = 59, what is the value of x?",
    "promptTr": "7x - 4 = 59 ise, x'in değeri kaçtır?",
    "choices": [
      "12",
      "9",
      "-9",
      "8"
    ],
    "correctIndex": 1,
    "steps": [
      "Add 4 to both sides: 7x = 63",
      "Divide both sides by 7: x = 9"
    ],
    "id": 5
  },
  {
    "category": "Algebra",
    "prompt": "If 3(x + 2) = 18, what is the value of x?",
    "promptTr": "3(x + 2) = 18 ise, x'in değeri kaçtır?",
    "choices": [
      "2",
      "-4",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "steps": [
      "Divide both sides by 3: x + 2 = 6",
      "Subtract 2 from both sides: x = 4"
    ],
    "id": 6
  },
  {
    "category": "Algebra",
    "prompt": "If 5(x - 3) = 15, what is the value of x?",
    "promptTr": "5(x - 3) = 15 ise, x'in değeri kaçtır?",
    "choices": [
      "-6",
      "4",
      "6",
      "3"
    ],
    "correctIndex": 2,
    "steps": [
      "Divide both sides by 5: x - 3 = 3",
      "Add 3 to both sides: x = 6"
    ],
    "id": 7
  },
  {
    "category": "Algebra",
    "prompt": "If 2(x + 7) = 34, what is the value of x?",
    "promptTr": "2(x + 7) = 34 ise, x'in değeri kaçtır?",
    "choices": [
      "8",
      "17",
      "-10",
      "10"
    ],
    "correctIndex": 3,
    "steps": [
      "Divide both sides by 2: x + 7 = 17",
      "Subtract 7 from both sides: x = 10"
    ],
    "id": 8
  },
  {
    "category": "Algebra",
    "prompt": "If 4(x - 1) = 16, what is the value of x?",
    "promptTr": "4(x - 1) = 16 ise, x'in değeri kaçtır?",
    "choices": [
      "5",
      "4",
      "3",
      "-5"
    ],
    "correctIndex": 0,
    "steps": [
      "Divide both sides by 4: x - 1 = 4",
      "Add 1 to both sides: x = 5"
    ],
    "id": 9
  },
  {
    "category": "Algebra",
    "prompt": "If 6(x + 5) = 48, what is the value of x?",
    "promptTr": "6(x + 5) = 48 ise, x'in değeri kaçtır?",
    "choices": [
      "8",
      "-3",
      "3",
      "1"
    ],
    "correctIndex": 2,
    "steps": [
      "Divide both sides by 6: x + 5 = 8",
      "Subtract 5 from both sides: x = 3"
    ],
    "id": 10
  },
  {
    "category": "Algebra",
    "prompt": "If x + y = 14 and x - y = 6, what is the value of x?",
    "promptTr": "x + y = 14 ve x - y = 6 ise, x'in değeri kaçtır?",
    "choices": [
      "20",
      "-10",
      "10",
      "4"
    ],
    "correctIndex": 2,
    "steps": [
      "Add the two equations: 2x = 20",
      "Divide both sides by 2: x = 10"
    ],
    "id": 11
  },
  {
    "category": "Algebra",
    "prompt": "If x + y = 16 and x - y = -2, what is the value of x?",
    "promptTr": "x + y = 16 ve x - y = -2 ise, x'in değeri kaçtır?",
    "choices": [
      "9",
      "7",
      "-7",
      "14"
    ],
    "correctIndex": 1,
    "steps": [
      "Add the two equations: 2x = 14",
      "Divide both sides by 2: x = 7"
    ],
    "id": 12
  },
  {
    "category": "Algebra",
    "prompt": "If x + y = 18 and x - y = 12, what is the value of x?",
    "promptTr": "x + y = 18 ve x - y = 12 ise, x'in değeri kaçtır?",
    "choices": [
      "30",
      "-15",
      "3",
      "15"
    ],
    "correctIndex": 3,
    "steps": [
      "Add the two equations: 2x = 30",
      "Divide both sides by 2: x = 15"
    ],
    "id": 13
  },
  {
    "category": "Algebra",
    "prompt": "If x + y = 17 and x - y = -5, what is the value of x?",
    "promptTr": "x + y = 17 ve x - y = -5 ise, x'in değeri kaçtır?",
    "choices": [
      "6",
      "-6",
      "11",
      "12"
    ],
    "correctIndex": 0,
    "steps": [
      "Add the two equations: 2x = 12",
      "Divide both sides by 2: x = 6"
    ],
    "id": 14
  },
  {
    "category": "Algebra",
    "prompt": "If x + y = 25 and x - y = 15, what is the value of x?",
    "promptTr": "x + y = 25 ve x - y = 15 ise, x'in değeri kaçtır?",
    "choices": [
      "40",
      "20",
      "-20",
      "5"
    ],
    "correctIndex": 1,
    "steps": [
      "Add the two equations: 2x = 40",
      "Divide both sides by 2: x = 20"
    ],
    "id": 15
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "What is 25% of 80?",
    "promptTr": "80 sayısının %25'i kaçtır?",
    "choices": [
      "20",
      "25",
      "200",
      "60"
    ],
    "correctIndex": 0,
    "steps": [
      "Convert 25% to a decimal: 25/100 = 0.25",
      "Multiply: 0.25 × 80 = 20"
    ],
    "id": 16
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "What is 10% of 40?",
    "promptTr": "40 sayısının %10'u kaçtır?",
    "choices": [
      "10",
      "40",
      "4",
      "36"
    ],
    "correctIndex": 2,
    "steps": [
      "Convert 10% to a decimal: 10/100 = 0.1",
      "Multiply: 0.1 × 40 = 4"
    ],
    "id": 17
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "What is 5% of 120?",
    "promptTr": "120 sayısının %5'i kaçtır?",
    "choices": [
      "60",
      "5",
      "114",
      "6"
    ],
    "correctIndex": 3,
    "steps": [
      "Convert 5% to a decimal: 5/100 = 0.05",
      "Multiply: 0.05 × 120 = 6"
    ],
    "id": 18
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "What is 20% of 60?",
    "promptTr": "60 sayısının %20'si kaçtır?",
    "choices": [
      "20",
      "12",
      "120",
      "48"
    ],
    "correctIndex": 1,
    "steps": [
      "Convert 20% to a decimal: 20/100 = 0.2",
      "Multiply: 0.2 × 60 = 12"
    ],
    "id": 19
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "What is 15% of 200?",
    "promptTr": "200 sayısının %15'i kaçtır?",
    "choices": [
      "170",
      "30",
      "300",
      "15"
    ],
    "correctIndex": 1,
    "steps": [
      "Convert 15% to a decimal: 15/100 = 0.15",
      "Multiply: 0.15 × 200 = 30"
    ],
    "id": 20
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A store item that costs $140 increases in price by 20%. What is the new price?",
    "promptTr": "140 dolarlık bir ürünün fiyatı %20 artıyor. Yeni fiyat kaç dolar olur?",
    "choices": [
      "178",
      "112",
      "28",
      "168"
    ],
    "correctIndex": 3,
    "steps": [
      "Find 20% of 140: (20/100) × 140 = 28",
      "Add the increase to the original price: 140 + 28 = 168"
    ],
    "id": 21
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A store item that costs $60 increases in price by 30%. What is the new price?",
    "promptTr": "60 dolarlık bir ürünün fiyatı %30 artıyor. Yeni fiyat kaç dolar olur?",
    "choices": [
      "78",
      "88",
      "18",
      "42"
    ],
    "correctIndex": 0,
    "steps": [
      "Find 30% of 60: (30/100) × 60 = 18",
      "Add the increase to the original price: 60 + 18 = 78"
    ],
    "id": 22
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A store item that costs $220 increases in price by 15%. What is the new price?",
    "promptTr": "220 dolarlık bir ürünün fiyatı %15 artıyor. Yeni fiyat kaç dolar olur?",
    "choices": [
      "33",
      "187",
      "263",
      "253"
    ],
    "correctIndex": 3,
    "steps": [
      "Find 15% of 220: (15/100) × 220 = 33",
      "Add the increase to the original price: 220 + 33 = 253"
    ],
    "id": 23
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A store item that costs $90 increases in price by 40%. What is the new price?",
    "promptTr": "90 dolarlık bir ürünün fiyatı %40 artıyor. Yeni fiyat kaç dolar olur?",
    "choices": [
      "126",
      "136",
      "36",
      "54"
    ],
    "correctIndex": 0,
    "steps": [
      "Find 40% of 90: (40/100) × 90 = 36",
      "Add the increase to the original price: 90 + 36 = 126"
    ],
    "id": 24
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A store item that costs $340 increases in price by 5%. What is the new price?",
    "promptTr": "340 dolarlık bir ürünün fiyatı %5 artıyor. Yeni fiyat kaç dolar olur?",
    "choices": [
      "367",
      "17",
      "357",
      "323"
    ],
    "correctIndex": 2,
    "steps": [
      "Find 5% of 340: (5/100) × 340 = 17",
      "Add the increase to the original price: 340 + 17 = 357"
    ],
    "id": 25
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "If 2/3 = x/12, what is the value of x?",
    "promptTr": "2/3 = x/12 ise, x kaçtır?",
    "choices": [
      "10",
      "18",
      "8",
      "24"
    ],
    "correctIndex": 2,
    "steps": [
      "Cross-multiply: 2 × 12 = 3 × x",
      "24 = 3x",
      "Divide both sides by 3: x = 8"
    ],
    "id": 26
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "If 3/5 = x/25, what is the value of x?",
    "promptTr": "3/5 = x/25 ise, x kaçtır?",
    "choices": [
      "42",
      "75",
      "22",
      "15"
    ],
    "correctIndex": 3,
    "steps": [
      "Cross-multiply: 3 × 25 = 5 × x",
      "75 = 5x",
      "Divide both sides by 5: x = 15"
    ],
    "id": 27
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "If 4/7 = x/21, what is the value of x?",
    "promptTr": "4/7 = x/21 ise, x kaçtır?",
    "choices": [
      "17",
      "12",
      "37",
      "84"
    ],
    "correctIndex": 1,
    "steps": [
      "Cross-multiply: 4 × 21 = 7 × x",
      "84 = 7x",
      "Divide both sides by 7: x = 12"
    ],
    "id": 28
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "If 5/2 = x/12, what is the value of x?",
    "promptTr": "5/2 = x/12 ise, x kaçtır?",
    "choices": [
      "7",
      "30",
      "60",
      "5"
    ],
    "correctIndex": 1,
    "steps": [
      "Cross-multiply: 5 × 12 = 2 × x",
      "60 = 2x",
      "Divide both sides by 2: x = 30"
    ],
    "id": 29
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "If 7/5 = x/15, what is the value of x?",
    "promptTr": "7/5 = x/15 ise, x kaçtır?",
    "choices": [
      "105",
      "11",
      "8",
      "21"
    ],
    "correctIndex": 3,
    "steps": [
      "Cross-multiply: 7 × 15 = 5 × x",
      "105 = 5x",
      "Divide both sides by 5: x = 21"
    ],
    "id": 30
  },
  {
    "category": "Advanced Math",
    "prompt": "What are the solutions to x² - 7x + 10 = 0?",
    "promptTr": "x² - 7x + 10 = 0 denkleminin çözümleri nelerdir?",
    "choices": [
      "x = 2 or x = 5",
      "x = -2 or x = -5",
      "x = -2 or x = 5",
      "x = 2 or x = -5"
    ],
    "correctIndex": 0,
    "steps": [
      "Factor: (x - 2)(x - 5) = 0",
      "Set each factor equal to zero: x - 2 = 0 or x - 5 = 0",
      "Solve each equation: x = 2 or x = 5"
    ],
    "id": 31
  },
  {
    "category": "Advanced Math",
    "prompt": "What are the solutions to x² - x - 12 = 0?",
    "promptTr": "x² - x - 12 = 0 denkleminin çözümleri nelerdir?",
    "choices": [
      "x = 3 or x = -4",
      "x = -3 or x = -4",
      "x = -3 or x = 4",
      "x = 3 or x = 4"
    ],
    "correctIndex": 2,
    "steps": [
      "Factor: (x + 3)(x - 4) = 0",
      "Set each factor equal to zero: x + 3 = 0 or x - 4 = 0",
      "Solve each equation: x = -3 or x = 4"
    ],
    "id": 32
  },
  {
    "category": "Advanced Math",
    "prompt": "What are the solutions to x² - 5x - 14 = 0?",
    "promptTr": "x² - 5x - 14 = 0 denkleminin çözümleri nelerdir?",
    "choices": [
      "x = -2 or x = -7",
      "x = -2 or x = 7",
      "x = 2 or x = 7",
      "x = 2 or x = -7"
    ],
    "correctIndex": 1,
    "steps": [
      "Factor: (x + 2)(x - 7) = 0",
      "Set each factor equal to zero: x + 2 = 0 or x - 7 = 0",
      "Solve each equation: x = -2 or x = 7"
    ],
    "id": 33
  },
  {
    "category": "Advanced Math",
    "prompt": "What are the solutions to x² + 5x - 24 = 0?",
    "promptTr": "x² + 5x - 24 = 0 denkleminin çözümleri nelerdir?",
    "choices": [
      "x = 3 or x = 8",
      "x = 3 or x = -8",
      "x = -3 or x = -8",
      "x = -3 or x = 8"
    ],
    "correctIndex": 1,
    "steps": [
      "Factor: (x - 3)(x + 8) = 0",
      "Set each factor equal to zero: x - 3 = 0 or x + 8 = 0",
      "Solve each equation: x = 3 or x = -8"
    ],
    "id": 34
  },
  {
    "category": "Advanced Math",
    "prompt": "What are the solutions to x² + 11x + 30 = 0?",
    "promptTr": "x² + 11x + 30 = 0 denkleminin çözümleri nelerdir?",
    "choices": [
      "x = 5 or x = 6",
      "x = 5 or x = -6",
      "x = -5 or x = 6",
      "x = -5 or x = -6"
    ],
    "correctIndex": 3,
    "steps": [
      "Factor: (x + 5)(x + 6) = 0",
      "Set each factor equal to zero: x + 5 = 0 or x + 6 = 0",
      "Solve each equation: x = -5 or x = -6"
    ],
    "id": 35
  },
  {
    "category": "Advanced Math",
    "prompt": "If the solutions to x² - 7x + 12 = 0 are r and t, what is the value of r × t?",
    "promptTr": "x² - 7x + 12 = 0 denkleminin kökleri r ve t ise, r × t kaçtır?",
    "choices": [
      "12",
      "-7",
      "7",
      "-12"
    ],
    "correctIndex": 0,
    "steps": [
      "For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.",
      "Here C = 12, so r × t = 12."
    ],
    "id": 36
  },
  {
    "category": "Advanced Math",
    "prompt": "If the solutions to x² - 8x - 20 = 0 are r and t, what is the value of r × t?",
    "promptTr": "x² - 8x - 20 = 0 denkleminin kökleri r ve t ise, r × t kaçtır?",
    "choices": [
      "-20",
      "8",
      "20",
      "-8"
    ],
    "correctIndex": 0,
    "steps": [
      "For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.",
      "Here C = -20, so r × t = -20."
    ],
    "id": 37
  },
  {
    "category": "Advanced Math",
    "prompt": "If the solutions to x² - 11x + 30 = 0 are r and t, what is the value of r × t?",
    "promptTr": "x² - 11x + 30 = 0 denkleminin kökleri r ve t ise, r × t kaçtır?",
    "choices": [
      "-30",
      "30",
      "-11",
      "11"
    ],
    "correctIndex": 1,
    "steps": [
      "For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.",
      "Here C = 30, so r × t = 30."
    ],
    "id": 38
  },
  {
    "category": "Advanced Math",
    "prompt": "If the solutions to x² + 11x + 28 = 0 are r and t, what is the value of r × t?",
    "promptTr": "x² + 11x + 28 = 0 denkleminin kökleri r ve t ise, r × t kaçtır?",
    "choices": [
      "11",
      "-28",
      "-11",
      "28"
    ],
    "correctIndex": 3,
    "steps": [
      "For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.",
      "Here C = 28, so r × t = 28."
    ],
    "id": 39
  },
  {
    "category": "Advanced Math",
    "prompt": "If the solutions to x² + 7x - 18 = 0 are r and t, what is the value of r × t?",
    "promptTr": "x² + 7x - 18 = 0 denkleminin kökleri r ve t ise, r × t kaçtır?",
    "choices": [
      "18",
      "7",
      "-7",
      "-18"
    ],
    "correctIndex": 3,
    "steps": [
      "For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.",
      "Here C = -18, so r × t = -18."
    ],
    "id": 40
  },
  {
    "category": "Advanced Math",
    "prompt": "Which expression is equivalent to x^3 · x^4?",
    "promptTr": "x^3 · x^4 ifadesine eşit olan ifade hangisidir?",
    "choices": [
      "x^12",
      "x^6",
      "x^7",
      "x^8"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the product rule for exponents: x^m · x^n = x^(m + n)",
      "Add the exponents: 3 + 4 = 7",
      "So the expression simplifies to x^7"
    ],
    "id": 41
  },
  {
    "category": "Advanced Math",
    "prompt": "Which expression is equivalent to x^4 · x^2?",
    "promptTr": "x^4 · x^2 ifadesine eşit olan ifade hangisidir?",
    "choices": [
      "x^7",
      "x^6",
      "x^5",
      "x^8"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the product rule for exponents: x^m · x^n = x^(m + n)",
      "Add the exponents: 4 + 2 = 6",
      "So the expression simplifies to x^6"
    ],
    "id": 42
  },
  {
    "category": "Advanced Math",
    "prompt": "Which expression is equivalent to x^3 · x^5?",
    "promptTr": "x^3 · x^5 ifadesine eşit olan ifade hangisidir?",
    "choices": [
      "x^8",
      "x^7",
      "x^15",
      "x^9"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the product rule for exponents: x^m · x^n = x^(m + n)",
      "Add the exponents: 3 + 5 = 8",
      "So the expression simplifies to x^8"
    ],
    "id": 43
  },
  {
    "category": "Advanced Math",
    "prompt": "Which expression is equivalent to x^6 · x^4?",
    "promptTr": "x^6 · x^4 ifadesine eşit olan ifade hangisidir?",
    "choices": [
      "x^11",
      "x^24",
      "x^9",
      "x^10"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the product rule for exponents: x^m · x^n = x^(m + n)",
      "Add the exponents: 6 + 4 = 10",
      "So the expression simplifies to x^10"
    ],
    "id": 44
  },
  {
    "category": "Advanced Math",
    "prompt": "Which expression is equivalent to x^2 · x^7?",
    "promptTr": "x^2 · x^7 ifadesine eşit olan ifade hangisidir?",
    "choices": [
      "x^14",
      "x^10",
      "x^9",
      "x^8"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the product rule for exponents: x^m · x^n = x^(m + n)",
      "Add the exponents: 2 + 7 = 9",
      "So the expression simplifies to x^9"
    ],
    "id": 45
  },
  {
    "category": "Algebra",
    "prompt": "What is the slope of the line that passes through the points (1, 2) and (4, 8)?",
    "promptTr": "(1, 2) ve (4, 8) noktalarından geçen doğrunun eğimi kaçtır?",
    "choices": [
      "2",
      "3",
      "1/2",
      "-2"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the slope formula: m = (y2 − y1) / (x2 − x1)",
      "m = (8 − 2) / (4 − 1) = 6/3",
      "Simplify: m = 2"
    ],
    "id": 46
  },
  {
    "category": "Algebra",
    "prompt": "What is the slope of the line that passes through the points (0, -1) and (4, 1)?",
    "promptTr": "(0, -1) ve (4, 1) noktalarından geçen doğrunun eğimi kaçtır?",
    "choices": [
      "2",
      "-1/2",
      "1",
      "1/2"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the slope formula: m = (y2 − y1) / (x2 − x1)",
      "m = (1 − -1) / (4 − 0) = 2/4",
      "Simplify: m = 1/2"
    ],
    "id": 47
  },
  {
    "category": "Algebra",
    "prompt": "What is the slope of the line that passes through the points (-2, 5) and (3, -5)?",
    "promptTr": "(-2, 5) ve (3, -5) noktalarından geçen doğrunun eğimi kaçtır?",
    "choices": [
      "-1/2",
      "-2",
      "-1",
      "2"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the slope formula: m = (y2 − y1) / (x2 − x1)",
      "m = (-5 − 5) / (3 − -2) = -10/5",
      "Simplify: m = -2"
    ],
    "id": 48
  },
  {
    "category": "Algebra",
    "prompt": "What is the slope of the line that passes through the points (2, -3) and (8, 6)?",
    "promptTr": "(2, -3) ve (8, 6) noktalarından geçen doğrunun eğimi kaçtır?",
    "choices": [
      "2",
      "2/3",
      "-3/2",
      "3/2"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the slope formula: m = (y2 − y1) / (x2 − x1)",
      "m = (6 − -3) / (8 − 2) = 9/6",
      "Simplify: m = 3/2"
    ],
    "id": 49
  },
  {
    "category": "Algebra",
    "prompt": "What is the slope of the line that passes through the points (-1, -4) and (3, -16)?",
    "promptTr": "(-1, -4) ve (3, -16) noktalarından geçen doğrunun eğimi kaçtır?",
    "choices": [
      "3",
      "-1/3",
      "-3",
      "-2"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the slope formula: m = (y2 − y1) / (x2 − x1)",
      "m = (-16 − -4) / (3 − -1) = -12/4",
      "Simplify: m = -3"
    ],
    "id": 50
  },
  {
    "category": "Algebra",
    "prompt": "A line has a slope of 3 and passes through the point (2, 10). What is the y-intercept of the line?",
    "promptTr": "Eğimi 3 olan ve (2, 10) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?",
    "choices": [
      "4",
      "10",
      "-4",
      "16"
    ],
    "correctIndex": 0,
    "steps": [
      "Use slope-intercept form: y = mx + b",
      "Substitute the point and slope: 10 = 3(2) + b",
      "Solve for b: b = 10 − (6) = 4"
    ],
    "id": 51
  },
  {
    "category": "Algebra",
    "prompt": "A line has a slope of -2 and passes through the point (5, 1). What is the y-intercept of the line?",
    "promptTr": "Eğimi -2 olan ve (5, 1) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?",
    "choices": [
      "1",
      "-9",
      "11",
      "-11"
    ],
    "correctIndex": 2,
    "steps": [
      "Use slope-intercept form: y = mx + b",
      "Substitute the point and slope: 1 = -2(5) + b",
      "Solve for b: b = 1 − (-10) = 11"
    ],
    "id": 52
  },
  {
    "category": "Algebra",
    "prompt": "A line has a slope of 4 and passes through the point (-3, -5). What is the y-intercept of the line?",
    "promptTr": "Eğimi 4 olan ve (-3, -5) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?",
    "choices": [
      "-5",
      "-17",
      "7",
      "-7"
    ],
    "correctIndex": 2,
    "steps": [
      "Use slope-intercept form: y = mx + b",
      "Substitute the point and slope: -5 = 4(-3) + b",
      "Solve for b: b = -5 − (-12) = 7"
    ],
    "id": 53
  },
  {
    "category": "Algebra",
    "prompt": "A line has a slope of -1 and passes through the point (6, 2). What is the y-intercept of the line?",
    "promptTr": "Eğimi -1 olan ve (6, 2) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?",
    "choices": [
      "2",
      "-8",
      "-4",
      "8"
    ],
    "correctIndex": 3,
    "steps": [
      "Use slope-intercept form: y = mx + b",
      "Substitute the point and slope: 2 = -1(6) + b",
      "Solve for b: b = 2 − (-6) = 8"
    ],
    "id": 54
  },
  {
    "category": "Algebra",
    "prompt": "A line has a slope of 5 and passes through the point (-2, -13). What is the y-intercept of the line?",
    "promptTr": "Eğimi 5 olan ve (-2, -13) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?",
    "choices": [
      "-13",
      "-3",
      "-23",
      "3"
    ],
    "correctIndex": 1,
    "steps": [
      "Use slope-intercept form: y = mx + b",
      "Substitute the point and slope: -13 = 5(-2) + b",
      "Solve for b: b = -13 − (-10) = -3"
    ],
    "id": 55
  },
  {
    "category": "Algebra",
    "prompt": "If f(x) = 3x + 4, what is f(5)?",
    "promptTr": "f(x) = 3x + 4 ise, f(5) kaçtır?",
    "choices": [
      "12",
      "15",
      "19",
      "27"
    ],
    "correctIndex": 2,
    "steps": [
      "Substitute x = 5: f(5) = 15 + 4",
      "Calculate: 15 + 4 = 19"
    ],
    "id": 56
  },
  {
    "category": "Algebra",
    "prompt": "If f(x) = -2x + 7, what is f(3)?",
    "promptTr": "f(x) = -2x + 7 ise, f(3) kaçtır?",
    "choices": [
      "1",
      "8",
      "-20",
      "-6"
    ],
    "correctIndex": 0,
    "steps": [
      "Substitute x = 3: f(3) = -6 + 7",
      "Calculate: -6 + 7 = 1"
    ],
    "id": 57
  },
  {
    "category": "Algebra",
    "prompt": "If f(x) = 5x - 6, what is f(4)?",
    "promptTr": "f(x) = 5x - 6 ise, f(4) kaçtır?",
    "choices": [
      "14",
      "20",
      "3",
      "-10"
    ],
    "correctIndex": 0,
    "steps": [
      "Substitute x = 4: f(4) = 20 - 6",
      "Calculate: 20 - 6 = 14"
    ],
    "id": 58
  },
  {
    "category": "Algebra",
    "prompt": "If f(x) = 4x + 2, what is f(-3)?",
    "promptTr": "f(x) = 4x + 2 ise, f(-3) kaçtır?",
    "choices": [
      "3",
      "-4",
      "-12",
      "-10"
    ],
    "correctIndex": 3,
    "steps": [
      "Substitute x = -3: f(-3) = -12 + 2",
      "Calculate: -12 + 2 = -10"
    ],
    "id": 59
  },
  {
    "category": "Algebra",
    "prompt": "If f(x) = -3x - 1, what is f(-2)?",
    "promptTr": "f(x) = -3x - 1 ise, f(-2) kaçtır?",
    "choices": [
      "5",
      "-6",
      "6",
      "9"
    ],
    "correctIndex": 0,
    "steps": [
      "Substitute x = -2: f(-2) = 6 - 1",
      "Calculate: 6 - 1 = 5"
    ],
    "id": 60
  },
  {
    "category": "Advanced Math",
    "prompt": "If f(x) = x² + 2x + 1, what is f(3)?",
    "promptTr": "f(x) = x² + 2x + 1 ise, f(3) kaçtır?",
    "choices": [
      "10",
      "-16",
      "16",
      "7"
    ],
    "correctIndex": 2,
    "steps": [
      "Substitute x = 3: f(3) = (3)² + 2(3) + 1",
      "Calculate each term: 9 + 6 + 1 = 16"
    ],
    "id": 61
  },
  {
    "category": "Advanced Math",
    "prompt": "If f(x) = x² - 3x + 5, what is f(2)?",
    "promptTr": "f(x) = x² - 3x + 5 ise, f(2) kaçtır?",
    "choices": [
      "-3",
      "-1",
      "9",
      "3"
    ],
    "correctIndex": 3,
    "steps": [
      "Substitute x = 2: f(2) = (2)² - 3(2) + 5",
      "Calculate each term: 4 - 6 + 5 = 3"
    ],
    "id": 62
  },
  {
    "category": "Advanced Math",
    "prompt": "If f(x) = x² + 4x - 2, what is f(-1)?",
    "promptTr": "f(x) = x² + 4x - 2 ise, f(-1) kaçtır?",
    "choices": [
      "-1",
      "5",
      "-5",
      "-6"
    ],
    "correctIndex": 2,
    "steps": [
      "Substitute x = -1: f(-1) = (-1)² + 4(-1) - 2",
      "Calculate each term: 1 - 4 - 2 = -5"
    ],
    "id": 63
  },
  {
    "category": "Advanced Math",
    "prompt": "If f(x) = x² - x - 6, what is f(4)?",
    "promptTr": "f(x) = x² - x - 6 ise, f(4) kaçtır?",
    "choices": [
      "-10",
      "-6",
      "6",
      "10"
    ],
    "correctIndex": 2,
    "steps": [
      "Substitute x = 4: f(4) = (4)² - 1(4) - 6",
      "Calculate each term: 16 - 4 - 6 = 6"
    ],
    "id": 64
  },
  {
    "category": "Advanced Math",
    "prompt": "If f(x) = x² + 5x + 3, what is f(-2)?",
    "promptTr": "f(x) = x² + 5x + 3 ise, f(-2) kaçtır?",
    "choices": [
      "-7",
      "-3",
      "7",
      "3"
    ],
    "correctIndex": 1,
    "steps": [
      "Substitute x = -2: f(-2) = (-2)² + 5(-2) + 3",
      "Calculate each term: 4 - 10 + 3 = -3"
    ],
    "id": 65
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangle has a length of 12 and a width of 5. What is its area?",
    "promptTr": "Bir dikdörtgenin uzun kenarı 12, kısa kenarı 5 ise, alanı kaç birim karedir?",
    "choices": [
      "17",
      "120",
      "34",
      "60"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the area formula: A = length × width",
      "A = 12 × 5 = 60"
    ],
    "id": 66
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangle has a length of 9 and a width of 7. What is its area?",
    "promptTr": "Bir dikdörtgenin uzun kenarı 9, kısa kenarı 7 ise, alanı kaç birim karedir?",
    "choices": [
      "32",
      "63",
      "126",
      "16"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the area formula: A = length × width",
      "A = 9 × 7 = 63"
    ],
    "id": 67
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangle has a length of 14 and a width of 6. What is its area?",
    "promptTr": "Bir dikdörtgenin uzun kenarı 14, kısa kenarı 6 ise, alanı kaç birim karedir?",
    "choices": [
      "20",
      "168",
      "84",
      "40"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the area formula: A = length × width",
      "A = 14 × 6 = 84"
    ],
    "id": 68
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangle has a length of 11 and a width of 8. What is its area?",
    "promptTr": "Bir dikdörtgenin uzun kenarı 11, kısa kenarı 8 ise, alanı kaç birim karedir?",
    "choices": [
      "19",
      "38",
      "176",
      "88"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the area formula: A = length × width",
      "A = 11 × 8 = 88"
    ],
    "id": 69
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangle has a length of 13 and a width of 4. What is its area?",
    "promptTr": "Bir dikdörtgenin uzun kenarı 13, kısa kenarı 4 ise, alanı kaç birim karedir?",
    "choices": [
      "17",
      "34",
      "104",
      "52"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the area formula: A = length × width",
      "A = 13 × 4 = 52"
    ],
    "id": 70
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A circle has a radius of 3. What is the area of the circle, in terms of π?",
    "promptTr": "Yarıçapı 3 olan bir dairenin alanı π cinsinden kaç birim karedir?",
    "choices": [
      "9π",
      "6π",
      "18π",
      "3π"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the area formula: A = πr²",
      "A = π(3)² = 9π"
    ],
    "id": 71
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A circle has a radius of 5. What is the area of the circle, in terms of π?",
    "promptTr": "Yarıçapı 5 olan bir dairenin alanı π cinsinden kaç birim karedir?",
    "choices": [
      "10π",
      "25π",
      "50π",
      "5π"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the area formula: A = πr²",
      "A = π(5)² = 25π"
    ],
    "id": 72
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A circle has a radius of 4. What is the area of the circle, in terms of π?",
    "promptTr": "Yarıçapı 4 olan bir dairenin alanı π cinsinden kaç birim karedir?",
    "choices": [
      "8π",
      "16π",
      "4π",
      "32π"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the area formula: A = πr²",
      "A = π(4)² = 16π"
    ],
    "id": 73
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A circle has a radius of 6. What is the area of the circle, in terms of π?",
    "promptTr": "Yarıçapı 6 olan bir dairenin alanı π cinsinden kaç birim karedir?",
    "choices": [
      "12π",
      "72π",
      "6π",
      "36π"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the area formula: A = πr²",
      "A = π(6)² = 36π"
    ],
    "id": 74
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A circle has a radius of 7. What is the area of the circle, in terms of π?",
    "promptTr": "Yarıçapı 7 olan bir dairenin alanı π cinsinden kaç birim karedir?",
    "choices": [
      "98π",
      "49π",
      "14π",
      "7π"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the area formula: A = πr²",
      "A = π(7)² = 49π"
    ],
    "id": 75
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangular prism has a length of 4, a width of 3, and a height of 5. What is its volume?",
    "promptTr": "Boyutları 4, 3 ve 5 olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?",
    "choices": [
      "12",
      "94",
      "60",
      "17"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the volume formula: V = length × width × height",
      "V = 4 × 3 × 5 = 60"
    ],
    "id": 76
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangular prism has a length of 6, a width of 2, and a height of 7. What is its volume?",
    "promptTr": "Boyutları 6, 2 ve 7 olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?",
    "choices": [
      "15",
      "84",
      "19",
      "136"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the volume formula: V = length × width × height",
      "V = 6 × 2 × 7 = 84"
    ],
    "id": 77
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangular prism has a length of 5, a width of 5, and a height of 3. What is its volume?",
    "promptTr": "Boyutları 5, 5 ve 3 olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?",
    "choices": [
      "13",
      "110",
      "75",
      "28"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the volume formula: V = length × width × height",
      "V = 5 × 5 × 3 = 75"
    ],
    "id": 78
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangular prism has a length of 8, a width of 3, and a height of 2. What is its volume?",
    "promptTr": "Boyutları 8, 3 ve 2 olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?",
    "choices": [
      "48",
      "13",
      "26",
      "92"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the volume formula: V = length × width × height",
      "V = 8 × 3 × 2 = 48"
    ],
    "id": 79
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A rectangular prism has a length of 4, a width of 6, and a height of 3. What is its volume?",
    "promptTr": "Boyutları 4, 6 ve 3 olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?",
    "choices": [
      "108",
      "72",
      "13",
      "27"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the volume formula: V = length × width × height",
      "V = 4 × 6 × 3 = 72"
    ],
    "id": 80
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A right triangle has legs of length 3 and 4. What is the length of the hypotenuse?",
    "promptTr": "Bir dik üçgenin dik kenarları 3 ve 4 ise, hipotenüsün uzunluğu kaçtır?",
    "choices": [
      "4",
      "25",
      "7",
      "5"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the Pythagorean theorem: a² + b² = c²",
      "3² + 4² = 9 + 16 = 25",
      "c = √25 = 5"
    ],
    "id": 81
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    "promptTr": "Bir dik üçgenin dik kenarları 6 ve 8 ise, hipotenüsün uzunluğu kaçtır?",
    "choices": [
      "100",
      "10",
      "14",
      "9"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the Pythagorean theorem: a² + b² = c²",
      "6² + 8² = 36 + 64 = 100",
      "c = √100 = 10"
    ],
    "id": 82
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
    "promptTr": "Bir dik üçgenin dik kenarları 5 ve 12 ise, hipotenüsün uzunluğu kaçtır?",
    "choices": [
      "17",
      "13",
      "12",
      "169"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the Pythagorean theorem: a² + b² = c²",
      "5² + 12² = 25 + 144 = 169",
      "c = √169 = 13"
    ],
    "id": 83
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
    "promptTr": "Bir dik üçgenin dik kenarları 9 ve 12 ise, hipotenüsün uzunluğu kaçtır?",
    "choices": [
      "225",
      "14",
      "21",
      "15"
    ],
    "correctIndex": 3,
    "steps": [
      "Use the Pythagorean theorem: a² + b² = c²",
      "9² + 12² = 81 + 144 = 225",
      "c = √225 = 15"
    ],
    "id": 84
  },
  {
    "category": "Geometry & Trigonometry",
    "prompt": "A right triangle has legs of length 8 and 15. What is the length of the hypotenuse?",
    "promptTr": "Bir dik üçgenin dik kenarları 8 ve 15 ise, hipotenüsün uzunluğu kaçtır?",
    "choices": [
      "17",
      "23",
      "289",
      "16"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the Pythagorean theorem: a² + b² = c²",
      "8² + 15² = 64 + 225 = 289",
      "c = √289 = 17"
    ],
    "id": 85
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "The average of 5 numbers is 90. If 4 of the numbers are 60, 75, 95, 105, what is the value of the remaining number?",
    "promptTr": "Ortalaması 90 olan 5 sayıdan 4 tanesi şunlardır: 60, 75, 95, 105. Kalan sayı kaçtır?",
    "choices": [
      "90",
      "60",
      "450",
      "115"
    ],
    "correctIndex": 3,
    "steps": [
      "Multiply the average by the number of values: 90 × 5 = 450",
      "Subtract the sum of the known numbers: 450 − 335 = 115"
    ],
    "id": 86
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "The average of 4 numbers is 16. If 3 of the numbers are 10, 14, 18, what is the value of the remaining number?",
    "promptTr": "Ortalaması 16 olan 4 sayıdan 3 tanesi şunlardır: 10, 14, 18. Kalan sayı kaçtır?",
    "choices": [
      "22",
      "10",
      "64",
      "16"
    ],
    "correctIndex": 0,
    "steps": [
      "Multiply the average by the number of values: 16 × 4 = 64",
      "Subtract the sum of the known numbers: 64 − 42 = 22"
    ],
    "id": 87
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "The average of 5 numbers is 13. If 4 of the numbers are 4, 9, 13, 17, what is the value of the remaining number?",
    "promptTr": "Ortalaması 13 olan 5 sayıdan 4 tanesi şunlardır: 4, 9, 13, 17. Kalan sayı kaçtır?",
    "choices": [
      "22",
      "13",
      "65",
      "4"
    ],
    "correctIndex": 0,
    "steps": [
      "Multiply the average by the number of values: 13 × 5 = 65",
      "Subtract the sum of the known numbers: 65 − 43 = 22"
    ],
    "id": 88
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "The average of 3 numbers is 150. If 2 of the numbers are 100, 150, what is the value of the remaining number?",
    "promptTr": "Ortalaması 150 olan 3 sayıdan 2 tanesi şunlardır: 100, 150. Kalan sayı kaçtır?",
    "choices": [
      "100",
      "150",
      "200",
      "450"
    ],
    "correctIndex": 2,
    "steps": [
      "Multiply the average by the number of values: 150 × 3 = 450",
      "Subtract the sum of the known numbers: 450 − 250 = 200"
    ],
    "id": 89
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "The average of 6 numbers is 18. If 5 of the numbers are 8, 12, 16, 20, 24, what is the value of the remaining number?",
    "promptTr": "Ortalaması 18 olan 6 sayıdan 5 tanesi şunlardır: 8, 12, 16, 20, 24. Kalan sayı kaçtır?",
    "choices": [
      "108",
      "18",
      "28",
      "8"
    ],
    "correctIndex": 2,
    "steps": [
      "Multiply the average by the number of values: 18 × 6 = 108",
      "Subtract the sum of the known numbers: 108 − 80 = 28"
    ],
    "id": 90
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A bag contains 3 red marbles and 5 blue marbles. If one marble is selected at random, what is the probability that it is red?",
    "promptTr": "Bir torbada 3 kırmızı ve 5 mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?",
    "choices": [
      "3/5",
      "8/3",
      "5/8",
      "3/8"
    ],
    "correctIndex": 3,
    "steps": [
      "Find the total number of marbles: 3 + 5 = 8",
      "Probability = red marbles / total marbles = 3/8",
      "Simplify: 3/8"
    ],
    "id": 91
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A bag contains 4 red marbles and 6 blue marbles. If one marble is selected at random, what is the probability that it is red?",
    "promptTr": "Bir torbada 4 kırmızı ve 6 mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?",
    "choices": [
      "3/5",
      "2/3",
      "2/5",
      "5/2"
    ],
    "correctIndex": 2,
    "steps": [
      "Find the total number of marbles: 4 + 6 = 10",
      "Probability = red marbles / total marbles = 4/10",
      "Simplify: 2/5"
    ],
    "id": 92
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A bag contains 7 red marbles and 3 blue marbles. If one marble is selected at random, what is the probability that it is red?",
    "promptTr": "Bir torbada 7 kırmızı ve 3 mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?",
    "choices": [
      "7/3",
      "3/10",
      "7/10",
      "10/7"
    ],
    "correctIndex": 2,
    "steps": [
      "Find the total number of marbles: 7 + 3 = 10",
      "Probability = red marbles / total marbles = 7/10",
      "Simplify: 7/10"
    ],
    "id": 93
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A bag contains 5 red marbles and 7 blue marbles. If one marble is selected at random, what is the probability that it is red?",
    "promptTr": "Bir torbada 5 kırmızı ve 7 mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?",
    "choices": [
      "5/7",
      "12/5",
      "5/12",
      "7/12"
    ],
    "correctIndex": 2,
    "steps": [
      "Find the total number of marbles: 5 + 7 = 12",
      "Probability = red marbles / total marbles = 5/12",
      "Simplify: 5/12"
    ],
    "id": 94
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A bag contains 2 red marbles and 10 blue marbles. If one marble is selected at random, what is the probability that it is red?",
    "promptTr": "Bir torbada 2 kırmızı ve 10 mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?",
    "choices": [
      "1/6",
      "6",
      "5/6",
      "1/5"
    ],
    "correctIndex": 0,
    "steps": [
      "Find the total number of marbles: 2 + 10 = 12",
      "Probability = red marbles / total marbles = 2/12",
      "Simplify: 1/6"
    ],
    "id": 95
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A car travels at a constant speed of 60 miles per hour. How far does the car travel in 3 hours?",
    "promptTr": "Bir araç sabit 60 mil/saat hızla gidiyorsa, 3 saatte kaç mil yol alır?",
    "choices": [
      "180",
      "360",
      "63",
      "20"
    ],
    "correctIndex": 0,
    "steps": [
      "Use the formula: distance = rate × time",
      "distance = 60 × 3 = 180"
    ],
    "id": 96
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A car travels at a constant speed of 45 miles per hour. How far does the car travel in 5 hours?",
    "promptTr": "Bir araç sabit 45 mil/saat hızla gidiyorsa, 5 saatte kaç mil yol alır?",
    "choices": [
      "50",
      "9",
      "225",
      "450"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the formula: distance = rate × time",
      "distance = 45 × 5 = 225"
    ],
    "id": 97
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A car travels at a constant speed of 55 miles per hour. How far does the car travel in 4 hours?",
    "promptTr": "Bir araç sabit 55 mil/saat hızla gidiyorsa, 4 saatte kaç mil yol alır?",
    "choices": [
      "59",
      "440",
      "220",
      "14"
    ],
    "correctIndex": 2,
    "steps": [
      "Use the formula: distance = rate × time",
      "distance = 55 × 4 = 220"
    ],
    "id": 98
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A car travels at a constant speed of 70 miles per hour. How far does the car travel in 2 hours?",
    "promptTr": "Bir araç sabit 70 mil/saat hızla gidiyorsa, 2 saatte kaç mil yol alır?",
    "choices": [
      "35",
      "140",
      "72",
      "280"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the formula: distance = rate × time",
      "distance = 70 × 2 = 140"
    ],
    "id": 99
  },
  {
    "category": "Problem-Solving & Data Analysis",
    "prompt": "A car travels at a constant speed of 35 miles per hour. How far does the car travel in 6 hours?",
    "promptTr": "Bir araç sabit 35 mil/saat hızla gidiyorsa, 6 saatte kaç mil yol alır?",
    "choices": [
      "6",
      "210",
      "420",
      "41"
    ],
    "correctIndex": 1,
    "steps": [
      "Use the formula: distance = rate × time",
      "distance = 35 × 6 = 210"
    ],
    "id": 100
  }
];
