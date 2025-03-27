const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Expanded Drunk Test Questions
const questions = [
  {
    id: 1,
    text: "Can you walk in a straight line?",
    options: [
      { text: "Yes, easily", points: 0 },
      { text: "I can, but it's a bit wobbly", points: 2 },
      { text: "No, I feel like I'm zigzagging", points: 4 },
    ],
  },
  {
    id: 2,
    text: "How well can you type this sentence: 'The quick brown fox jumps over the lazy dog'?",
    options: [
      { text: "Perfectly", points: 0 },
      { text: "A few typos", points: 2 },
      { text: "It looks like gibberish", points: 4 },
    ],
  },
  {
    id: 3,
    text: "How confident are you about texting your ex right now?",
    options: [
      { text: "Not at all", points: 0 },
      { text: "A little tempted", points: 3 },
      { text: "Already typed and ready to send", points: 5 },
    ],
  },
  {
    id: 4,
    text: "Can you balance on one foot for 10 seconds?",
    options: [
      { text: "Yes, no problem", points: 0 },
      { text: "I can, but I’m struggling", points: 2 },
      { text: "I keep falling over", points: 4 },
    ],
  },
  {
    id: 5,
    text: "Try saying 'Peter Piper picked a peck of pickled peppers' three times fast.",
    options: [
      { text: "Flawless!", points: 0 },
      { text: "Some mistakes", points: 2 },
      { text: "I sound like a mess", points: 4 },
    ],
  },
  {
    id: 6,
    text: "Can you remember the last 5 minutes of conversation?",
    options: [
      { text: "Yes, clearly", points: 0 },
      { text: "Bits and pieces", points: 3 },
      { text: "What were we talking about?", points: 5 },
    ],
  },
  {
    id: 7,
    text: "Can you count backward from 30 without stopping?",
    options: [
      { text: "Yes, easily", points: 0 },
      { text: "I hesitated a bit", points: 2 },
      { text: "I got lost halfway", points: 4 },
    ],
  },
  {
    id: 8,
    text: "Can you correctly guess how many fingers you’re holding up in front of your face?",
    options: [
      { text: "Yes, easily", points: 0 },
      { text: "It took a second try", points: 2 },
      { text: "I have no idea", points: 4 },
    ],
  },
  {
    id: 9,
    text: "What’s the capital of France?",
    options: [
      { text: "Paris", points: 0 },
      { text: "Prague? Rome?", points: 3 },
      { text: "Banana Republic?", points: 5 },
    ],
  },
  {
    id: 10,
    text: "Try clapping three times in a row at a steady rhythm.",
    options: [
      { text: "Nailed it", points: 0 },
      { text: "A little offbeat", points: 2 },
      { text: "Totally missed", points: 4 },
    ],
  },
  {
    id: 11,
    text: "How’s your reaction time? Try catching a falling object.",
    options: [
      { text: "Caught it fast", points: 0 },
      { text: "Missed it but almost got it", points: 2 },
      { text: "Didn’t even see it fall", points: 4 },
    ],
  },
  {
    id: 12,
    text: "Describe your current mood in one word.",
    options: [
      { text: "Normal", points: 0 },
      { text: "Excited/Tired", points: 2 },
      { text: "I don’t even know", points: 4 },
    ],
  },
  {
    id: 13,
    text: "Look at yourself in the mirror. Do your eyes look normal?",
    options: [
      { text: "Yes, I look fine", points: 0 },
      { text: "A little red or droopy", points: 2 },
      { text: "I look like a mess", points: 4 },
    ],
  },
  {
    id: 14,
    text: "What’s 5 x 7?",
    options: [
      { text: "35", points: 0 },
      { text: "32? 42?", points: 3 },
      { text: "Elephant?", points: 5 },
    ],
  },
  {
    id: 15,
    text: "Try unlocking your phone with your passcode.",
    options: [
      { text: "Did it smoothly", points: 0 },
      { text: "Took a few tries", points: 3 },
      { text: "Gave up and used Face ID", points: 5 },
    ],
  },
  {
    id: 16,
    text: "How do you feel about eating a large meal right now?",
    options: [
      { text: "I’m hungry!", points: 0 },
      { text: "Maybe a little snack", points: 2 },
      { text: "Ugh, I can’t even think about food", points: 4 },
    ],
  },
  {
    id: 17,
    text: "Try spelling your last name backward.",
    options: [
      { text: "Easy", points: 0 },
      { text: "Struggled but got it", points: 2 },
      { text: "Nope, impossible", points: 4 },
    ],
  },
  {
    id: 18,
    text: "If someone challenges you to a dance battle right now, what do you do?",
    options: [
      { text: "Accept confidently", points: 0 },
      { text: "Might do a little move", points: 2 },
      { text: "I’ll break my ankle", points: 4 },
    ],
  },
  {
    id: 19,
    text: "Do you feel overly emotional about something random right now?",
    options: [
      { text: "No, I’m fine", points: 0 },
      { text: "A little sensitive", points: 2 },
      { text: "I just cried over a dog video", points: 4 },
    ],
  },
  {
    id: 20,
    text: "If you had to make an important decision right now, how confident are you?",
    options: [
      { text: "Completely confident", points: 0 },
      { text: "Maybe with some help", points: 3 },
      { text: "Please don’t make me decide", points: 5 },
    ],
  },
];

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
