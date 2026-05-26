/**
 * Written lessons for each unit — short explainers for 6th graders.
 * Read these first, then watch the videos.
 */

export type UnitLesson = {
  id: string;
  title: string;
  summary: string;
  body: string[];
  tryIt?: string;
  tip?: string;
};

const LESSONS: Record<string, UnitLesson[]> = {
  "unit-1": [
    {
      id: "u1-l1",
      title: "Factors, multiples, GCF & LCM",
      summary: "Numbers that divide in, and numbers you count by.",
      body: [
        "A factor is a number that goes into another evenly. The factors of 12 are 1, 2, 3, 4, 6, and 12. A multiple is what you get when you skip-count: 4, 8, 12, 16…",
        "GCF = biggest number two numbers share. LCM = smallest number both divide into. For 8 and 12, GCF is 4 and LCM is 24.",
      ],
      tryIt: "Find the GCF and LCM of 6 and 9.",
      tip: "Listing factors helps on small numbers. For bigger ones, try breaking into primes.",
    },
    {
      id: "u1-l2",
      title: "Adding & subtracting fractions",
      summary: "Same bottom number? Just add the tops.",
      body: [
        "Same denominator? Add or subtract the numerators only. 2/7 + 3/7 = 5/7.",
        "Different denominators? Find a common one first. For 1/3 + 1/4, use 12: that's 4/12 + 3/12 = 7/12. Always simplify when you can.",
      ],
      tryIt: "What is 5/6 − 1/4?",
    },
    {
      id: "u1-l3",
      title: "Multiplying & dividing fractions",
      summary: "Multiply across. To divide, flip the second fraction.",
      body: [
        "To multiply: top × top, bottom × bottom. 2/3 × 4/5 = 8/15.",
        "To divide: keep the first, change ÷ to ×, flip the second. 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8. Turn mixed numbers into improper fractions first.",
      ],
      tryIt: "What is 2/3 × 3/8?",
    },
    {
      id: "u1-l4",
      title: "Decimal operations",
      summary: "Line up the decimal point for + and −.",
      body: [
        "Adding and subtracting: stack the numbers so the decimal points line up. 3.45 + 1.2 = 4.65.",
        "Multiplying: multiply like whole numbers, then count decimal places in both numbers. 0.3 × 0.4 = 0.12.",
      ],
      tryIt: "Find 4.5 − 2.75.",
    },
  ],

  "unit-2": [
    {
      id: "u2-l1",
      title: "What is a ratio?",
      summary: "A way to compare two amounts.",
      body: [
        "A ratio compares two things. 2 cups flour to 3 cups sugar = 2:3 (or 2/3 or \"2 to 3\").",
        "Order matters! Flour to sugar (2:3) is not the same as sugar to flour (3:2). Multiply both parts by the same number to get an equivalent ratio — like 4:6.",
      ],
      tryIt: "Write the ratio of 5 dogs to 8 cats.",
    },
    {
      id: "u2-l2",
      title: "Unit rates",
      summary: "How much for ONE of something.",
      body: [
        "A unit rate tells you the amount per one. 60 miles in 2 hours → 30 miles per hour.",
        "Divide the first number by the second. $3.20 for 4 apples → $0.80 per apple. Unit rates help you compare which deal is better.",
      ],
      tryIt: "150 miles in 3 hours — what's the speed per hour?",
    },
    {
      id: "u2-l3",
      title: "Proportional relationships",
      summary: "Two things that grow together at the same rate.",
      body: [
        "If you always earn $12 per hour, hours and dollars are proportional — the rate stays 12.",
        "To solve a proportion, use cross-multiply. If 3/5 = x/20, then 3 × 20 = 5 × x, so x = 12.",
      ],
      tryIt: "5 notebooks cost $7.50. How much for 8?",
      tip: "A double number line can help when you're stuck.",
    },
  ],

  "unit-3": [
    {
      id: "u3-l1",
      title: "Exponents & order of operations",
      summary: "Powers first, then × and ÷, then + and −.",
      body: [
        "4³ means 4 × 4 × 4 = 64. PEMDAS tells you the order: Parentheses, Exponents, Multiply/Divide, Add/Subtract.",
        "In 3 + 4 × 2, multiply first: 3 + 8 = 11. Parentheses come first: (3 + 4) × 2 = 14.",
      ],
      tryIt: "What is 2 + 3² × 2?",
    },
    {
      id: "u3-l2",
      title: "Writing algebraic expressions",
      summary: "Turn words into math.",
      body: [
        "\"Five more than a number\" → n + 5. \"Three times a number, minus 7\" → 3n − 7.",
        "To evaluate, plug in the number. If x = 4 in 2x + 5, you get 2(4) + 5 = 13.",
      ],
      tryIt: "Write an expression for \"twice a number plus 9.\"",
    },
    {
      id: "u3-l3",
      title: "Distributive property & like terms",
      summary: "Spread the number outside, then combine matching terms.",
      body: [
        "4(2x + 3) = 8x + 12. That's the distributive property.",
        "Like terms have the same variable: 5x + 3x = 8x. Constants combine too: 2 + 4 = 6.",
      ],
      tryIt: "Simplify 2x + 4 + 3x − 1.",
    },
  ],

  "unit-4": [
    {
      id: "u4-l1",
      title: "One-step equations",
      summary: "Undo what's happening to x.",
      body: [
        "x + 7 = 15 → subtract 7 from both sides → x = 8. Same rule for × and ÷.",
        "Always check: plug your answer back in. 8 + 7 = 15 ✓",
      ],
      tryIt: "Solve n − 9 = 14.",
    },
    {
      id: "u4-l2",
      title: "Inequalities & number lines",
      summary: "Solve like equations — watch the sign if you multiply by a negative.",
      body: [
        "x + 3 < 10 → x < 7. Graph it on a number line: open circle if it's < or >, closed if it's ≤ or ≥.",
        "\"At least 12\" means ≥ 12. \"Fewer than 5\" means < 5.",
      ],
      tryIt: "Solve and graph x + 3 < 10.",
    },
    {
      id: "u4-l3",
      title: "Independent & dependent variables",
      summary: "What you pick vs. what changes because of it.",
      body: [
        "Independent = the input (hours you work). Dependent = the output (money you earn).",
        "$9 per hour → dollars = 9 × hours. Hours is independent, dollars is dependent.",
      ],
      tryIt: "A taxi is $3 plus $2 per mile. Write an equation for the cost.",
    },
  ],

  "unit-5": [
    {
      id: "u5-l1",
      title: "Area of triangles & quadrilaterals",
      summary: "Space inside a flat shape.",
      body: [
        "Rectangle: length × width. Triangle: ½ × base × height. The height must be straight up, not slanted.",
        "Parallelogram: base × height. Trapezoid: average the two parallel sides, then × height.",
      ],
      tryIt: "Triangle with base 10 cm and height 6 cm — what's the area?",
    },
    {
      id: "u5-l2",
      title: "Composite figures",
      summary: "Split weird shapes into ones you know.",
      body: [
        "Break the shape into rectangles and triangles. Find each area, then add them up.",
        "If there's a hole (like a frame), subtract the inner area from the outer area.",
      ],
      tryIt: "An L-shape is 8×6 with a 3×2 corner cut out. Find the area.",
    },
    {
      id: "u5-l3",
      title: "Surface area & volume",
      summary: "Outside vs. inside of a 3D shape.",
      body: [
        "Volume = how much fits inside. Box: length × width × height (cubic units).",
        "Surface area = add up all the faces. Unfold the box (a net) to see every face.",
      ],
      tryIt: "A box is 5 × 3 × 2 cm. Find the volume.",
      tip: "Area = square units. Volume = cubic units.",
    },
  ],

  "unit-6": [
    {
      id: "u6-l1",
      title: "Statistical questions & center",
      summary: "When the answer isn't just one number.",
      body: [
        "Statistical question: \"How tall are kids in our class?\" (heights vary). Non-statistical: \"How tall is the door?\" (one answer).",
        "Mean = average. Median = middle number when sorted. Mode = most common value.",
      ],
      tryIt: "Find the mean of 4, 7, 7, 9, 12.",
    },
    {
      id: "u6-l2",
      title: "Spread: range & IQR",
      summary: "How spread out the data is.",
      body: [
        "Range = biggest − smallest. Quick, but one weird value can mess it up.",
        "IQR = middle 50% of the data. It ignores extreme high and low values.",
      ],
      tryIt: "Range of 2, 5, 7, 8, 11, 14, 20?",
    },
    {
      id: "u6-l3",
      title: "Choosing the right display",
      summary: "Pick the graph that fits your data.",
      body: [
        "Dot plot = small data sets (you see every value). Histogram = bigger sets grouped into bins.",
        "Box plot = good for comparing two groups side by side.",
      ],
      tryIt: "200 test scores — dot plot or histogram?",
    },
  ],

  "unit-7": [
    {
      id: "u7-l1",
      title: "Area review & polygons",
      summary: "Triangles, rectangles, and breaking shapes apart.",
      body: [
        "Triangle area: ½ × base × height. Split any polygon into triangles and rectangles you know.",
        "Pick a base, then find the height that goes straight down from it.",
      ],
      tryIt: "A hexagon splits into 6 triangles, each area 12 cm². Total area?",
    },
    {
      id: "u7-l2",
      title: "Nets & surface area",
      summary: "Unfold the shape and add every face.",
      body: [
        "A net is a 3D shape flattened out. A box has 6 rectangles — find each pair and add.",
        "Read the problem: do you need all sides, or just walls? Just the box, or extra for overlap?",
      ],
      tryIt: "Cube with edge 4 cm — what's the surface area?",
    },
    {
      id: "u7-l3",
      title: "Volume with fractions",
      summary: "Same formula — edges can be fractions.",
      body: [
        "Volume = length × width × height. Mixed numbers? Turn them into improper fractions first.",
        "2½ × 3 × 1⅓ → multiply all three, then simplify.",
      ],
      tryIt: "Volume of a box that's 1½ ft × 2 ft × 4 ft?",
      tip: "Label every edge on your sketch before you multiply.",
    },
  ],
};

export function getUnitLessons(unitId: string): UnitLesson[] {
  return LESSONS[unitId] ?? [];
}
