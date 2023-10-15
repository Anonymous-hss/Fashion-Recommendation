const questionList = [
  {
    question: "Heyy there! How are you feeling today?",
    options: [
      { label: "A. I am good", value: "good" },
      { label: "B. Not so good", value: "notGood" },
    ],
    // responses: {
    //   good: "Awesome!! Let's make your day more wonderful by assisting you with some fashion tips.",
    //   notGood:
    //     "Thats sad!! Hopefully our fashion recommendations will make you feel good.",
    // },
  },
  {
    question: "Let's get started! Are you a:",
    options: [
      { label: "A. Male", value: "male" },
      { label: "B. Female", value: "female" },
      { label: "C. Non-binary", value: "nonBinary" },
      { label: "D. Prefer not to say", value: "preferNotToSay" },
    ],
    // responses: {
    //   male: "You chose Male!",
    //   female: "You chose Female!",
    //   nonBinary: "You chose Non-binary!",
    //   preferNotToSay: "You chose Prefer not to say!",
    // },
  },
  {
    question:
      "Great! To provide you with personalized fashion tips, could you please select your body type?",
    options: [
      { label: "A. Hourglass", value: "hourglass" },
      { label: "B. Rectangle", value: "rectangle" },
      { label: "C. Pear", value: "pear" },
      { label: "D. Apple", value: "apple" },
      { label: "E. Athletic", value: "athletic" },
      { label: "F. Round", value: "round" },
      { label: "G. Skip", value: "skip" },
    ],
    // responses: {
    //   hourglass: "You chose hourglass",
    //   rectangle: "You chose rectangle",
    //   pear: "You chose pear",
    //   apple: "You chose apple",
    //   athletic: "You chose athletic",
    //   round: "You chose round",
    //   skip: "You skipped..",
    // },
  },
  {
    question:
      "Now, let's talk about your skin tone. Which of the following best describes your skin tone?",
    options: [
      { label: "A. Fair", value: "fair" },
      { label: "B. Light", value: "light" },
      { label: "C. Medium", value: "medium" },
      { label: "D. Olive", value: "olive" },
      { label: "E. Dark", value: "dark" },
      { label: "F. Skip", value: "skip" },
    ],
    // responses: {
    //   fair: "You chose fair",
    //   light: "You chose light",
    //   medium: "You chose medium",
    //   olive: "You chose olive",
    //   dark: "You chose dark",
    //   skip: "You skipped..",
    // },
  },
  {
    question: "Next, select the range that best represents your height:",
    options: [
      { label: "A. Short (Under 5'5\" or 165 cm)", value: "short" },
      {
        label: "B. Average (5'5\" - 5'10\" or 165 cm - 178 cm)",
        value: "average",
      },
      { label: "C. Tall (Over 5'10\" or 178 cm)", value: "tall" },
      { label: "D. Skip", value: "skip" },
    ],
    // responses: {
    //   short: "You chose short",
    //   average: "You chose average",
    //   tall: "You chose tall",
    //   skip: "You skipped..",
    // },
  },
  {
    question: "And choose the weight range that matches your current weight:",
    options: [
      { label: "A. Underweight", value: "underweight" },
      { label: "B. Normal weight", value: "normal" },
      { label: "C. Slightly overweight", value: "sOverweight" },
      { label: "D. Overweight", value: "overweight" },
      { label: "E. Skip", value: "skip" },
    ],
    // responses: {
    //   underweight: "You chose underweight",
    //   normal: "You chose normal",
    //   sOverweight: "You chose slightly overweight",
    //   overweight: "You chiode overwweight",
    //   skip: "You skipped..",
    // },
  },
  {
    question:
      "Lastly, please tell us the occasion or event you need fashion tips for:",
    options: [
      { label: "A. Casual", value: "casual" },
      { label: "B. Formal", value: "formal" },
      { label: "C. Work/Professional", value: "work" },
      { label: "D. Party/Night Out", value: "party" },
      { label: "E. Wedding", value: "wedding" },
      { label: "F. Prom/Formal Dance", value: "prom" },
      { label: "G. Date", value: "date" },
      { label: "H. Vacation", value: "vacation" },
      { label: "I. Athletic", value: "athletic" },
      { label: "J. Maternity", value: "maternity" },
      { label: "K. Cannot Say", value: "cannotSay" },
      { label: "L. Day Out", value: "dayOut" },
    ],
    // responses: [],
  },
];

export default questionList;
