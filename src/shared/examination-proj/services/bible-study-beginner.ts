import { QuizQuestion, AnswerKey, ExamSubject } from './exam-question-services';
import { signal } from '@angular/core';
import { randomizeQuestionsIfRequested } from './examDb';

// ============================================================================
// Bible Study — Beginner Level
// 80 questions (45 single-answer, 35 multi-option). isMultiOption: true marks
// multi-select questions. Correct option(s) are tagged with "// correct".
// See bibleAnswers for the answer key and bibleExam for the ExamSubject object.
// ============================================================================
export const bibleQuestions: QuizQuestion[] = [
  // ---------- Single-answer (1-45) ----------
  {
    id: 1,
    title: "How many books are in the Protestant Bible?",
    options: [
      { id: 1, text: "39" },
      { id: 2, text: "66" }, // correct
      { id: 3, text: "27" },
      { id: 4, text: "73" }
    ]
  },
  {
    id: 2,
    title: "What are the two main divisions of the Bible?",
    options: [
      { id: 1, text: "The Old Testament and the New Testament" }, // correct
      { id: 2, text: "The Law and the Prophets" },
      { id: 3, text: "Genesis and Revelation" },
      { id: 4, text: "The Gospels and the Letters" }
    ]
  },
  {
    id: 3,
    title: "Which is the first book of the Bible?",
    options: [
      { id: 1, text: "Genesis" }, // correct
      { id: 2, text: "Exodus" },
      { id: 3, text: "Matthew" },
      { id: 4, text: "Psalms" }
    ]
  },
  {
    id: 4,
    title: "Which is the last book of the Bible?",
    options: [
      { id: 1, text: "Malachi" },
      { id: 2, text: "Revelation" }, // correct
      { id: 3, text: "Acts" },
      { id: 4, text: "Jude" }
    ]
  },
  {
    id: 5,
    title: "According to Genesis 1:1, who created the heavens and the earth?",
    options: [
      { id: 1, text: "God" }, // correct
      { id: 2, text: "The angels" },
      { id: 3, text: "Humans" },
      { id: 4, text: "Nature" }
    ]
  },
  {
    id: 6,
    title: "Who were the first man and woman?",
    options: [
      { id: 1, text: "Cain and Abel" },
      { id: 2, text: "Adam and Eve" }, // correct
      { id: 3, text: "Abraham and Sarah" },
      { id: 4, text: "Isaac and Rebekah" }
    ]
  },
  {
    id: 7,
    title: "In which garden did Adam and Eve live?",
    options: [
      { id: 1, text: "Gethsemane" },
      { id: 2, text: "Eden" }, // correct
      { id: 3, text: "Babylon" },
      { id: 4, text: "Canaan" }
    ]
  },
  {
    id: 8,
    title: "Who built the ark to survive the great flood?",
    options: [
      { id: 1, text: "Moses" },
      { id: 2, text: "Noah" }, // correct
      { id: 3, text: "Abraham" },
      { id: 4, text: "David" }
    ]
  },
  {
    id: 9,
    title: "What did God set in the sky as a sign of His covenant after the flood?",
    options: [
      { id: 1, text: "A star" },
      { id: 2, text: "A rainbow" }, // correct
      { id: 3, text: "A dove" },
      { id: 4, text: "A cloud" }
    ]
  },
  {
    id: 10,
    title: "Who was asked by God to sacrifice his son Isaac?",
    options: [
      { id: 1, text: "Abraham" }, // correct
      { id: 2, text: "Isaac" },
      { id: 3, text: "Jacob" },
      { id: 4, text: "Noah" }
    ]
  },
  {
    id: 11,
    title: "What was the name of Abraham's promised son?",
    options: [
      { id: 1, text: "Ishmael" },
      { id: 2, text: "Isaac" }, // correct
      { id: 3, text: "Jacob" },
      { id: 4, text: "Esau" }
    ]
  },
  {
    id: 12,
    title: "Who had a coat of many colors and was sold by his brothers?",
    options: [
      { id: 1, text: "Joseph" }, // correct
      { id: 2, text: "Benjamin" },
      { id: 3, text: "Judah" },
      { id: 4, text: "Reuben" }
    ]
  },
  {
    id: 13,
    title: "Who led the Israelites out of slavery in Egypt?",
    options: [
      { id: 1, text: "Aaron" },
      { id: 2, text: "Moses" }, // correct
      { id: 3, text: "Joshua" },
      { id: 4, text: "Joseph" }
    ]
  },
  {
    id: 14,
    title: "Through which sea did the Israelites cross to escape Egypt?",
    options: [
      { id: 1, text: "The Dead Sea" },
      { id: 2, text: "The Red Sea" }, // correct
      { id: 3, text: "The Sea of Galilee" },
      { id: 4, text: "The Mediterranean Sea" }
    ]
  },
  {
    id: 15,
    title: "On which mountain did Moses receive the Ten Commandments?",
    options: [
      { id: 1, text: "Mount Ararat" },
      { id: 2, text: "Mount Sinai" }, // correct
      { id: 3, text: "Mount Carmel" },
      { id: 4, text: "Mount of Olives" }
    ]
  },
  {
    id: 16,
    title: "How many commandments did God give Moses?",
    options: [
      { id: 1, text: "Seven" },
      { id: 2, text: "Ten" }, // correct
      { id: 3, text: "Twelve" },
      { id: 4, text: "Five" }
    ]
  },
  {
    id: 17,
    title: "Who led Israel into the Promised Land after Moses died?",
    options: [
      { id: 1, text: "Joshua" }, // correct
      { id: 2, text: "Caleb" },
      { id: 3, text: "Aaron" },
      { id: 4, text: "Samuel" }
    ]
  },
  {
    id: 18,
    title: "Whose walls fell down after the Israelites marched around the city?",
    options: [
      { id: 1, text: "Babylon" },
      { id: 2, text: "Jericho" }, // correct
      { id: 3, text: "Nineveh" },
      { id: 4, text: "Jerusalem" }
    ]
  },
  {
    id: 19,
    title: "Who was the strong man whose strength was in his hair?",
    options: [
      { id: 1, text: "Samson" }, // correct
      { id: 2, text: "Goliath" },
      { id: 3, text: "Saul" },
      { id: 4, text: "Gideon" }
    ]
  },
  {
    id: 20,
    title: "Who defeated the giant Goliath with a sling and a stone?",
    options: [
      { id: 1, text: "Saul" },
      { id: 2, text: "David" }, // correct
      { id: 3, text: "Jonathan" },
      { id: 4, text: "Samuel" }
    ]
  },
  {
    id: 21,
    title: "Who was the wise king of Israel and son of David?",
    options: [
      { id: 1, text: "Solomon" }, // correct
      { id: 2, text: "David" },
      { id: 3, text: "Saul" },
      { id: 4, text: "Hezekiah" }
    ]
  },
  {
    id: 22,
    title: "Who was swallowed by a great fish?",
    options: [
      { id: 1, text: "Jonah" }, // correct
      { id: 2, text: "Job" },
      { id: 3, text: "Joel" },
      { id: 4, text: "Amos" }
    ]
  },
  {
    id: 23,
    title: "Which book contains 150 songs and poems of praise?",
    options: [
      { id: 1, text: "Proverbs" },
      { id: 2, text: "Psalms" }, // correct
      { id: 3, text: "Lamentations" },
      { id: 4, text: "Job" }
    ]
  },
  {
    id: 24,
    title: "Who was thrown into the lions' den but kept safe by God?",
    options: [
      { id: 1, text: "Daniel" }, // correct
      { id: 2, text: "David" },
      { id: 3, text: "Shadrach" },
      { id: 4, text: "Elijah" }
    ]
  },
  {
    id: 25,
    title: "In which town was Jesus born?",
    options: [
      { id: 1, text: "Nazareth" },
      { id: 2, text: "Bethlehem" }, // correct
      { id: 3, text: "Jerusalem" },
      { id: 4, text: "Egypt" }
    ]
  },
  {
    id: 26,
    title: "Who was the mother of Jesus?",
    options: [
      { id: 1, text: "Martha" },
      { id: 2, text: "Mary" }, // correct
      { id: 3, text: "Elizabeth" },
      { id: 4, text: "Ruth" }
    ]
  },
  {
    id: 27,
    title: "Who baptized Jesus in the Jordan River?",
    options: [
      { id: 1, text: "Peter" },
      { id: 2, text: "John the Baptist" }, // correct
      { id: 3, text: "Paul" },
      { id: 4, text: "Andrew" }
    ]
  },
  {
    id: 28,
    title: "How many disciples (apostles) did Jesus choose?",
    options: [
      { id: 1, text: "Seven" },
      { id: 2, text: "Twelve" }, // correct
      { id: 3, text: "Ten" },
      { id: 4, text: "Three" }
    ]
  },
  {
    id: 29,
    title: "Which disciple betrayed Jesus?",
    options: [
      { id: 1, text: "Peter" },
      { id: 2, text: "Judas Iscariot" }, // correct
      { id: 3, text: "Thomas" },
      { id: 4, text: "John" }
    ]
  },
  {
    id: 30,
    title: "Which disciple denied Jesus three times?",
    options: [
      { id: 1, text: "Peter" }, // correct
      { id: 2, text: "Judas" },
      { id: 3, text: "James" },
      { id: 4, text: "Philip" }
    ]
  },
  {
    id: 31,
    title: "What are the first four books of the New Testament called?",
    options: [
      { id: 1, text: "The Gospels" }, // correct
      { id: 2, text: "The Epistles" },
      { id: 3, text: "The Law" },
      { id: 4, text: "The Prophets" }
    ]
  },
  {
    id: 32,
    title: "On what was Jesus crucified?",
    options: [
      { id: 1, text: "A tree" },
      { id: 2, text: "A cross" }, // correct
      { id: 3, text: "A pillar" },
      { id: 4, text: "An altar" }
    ]
  },
  {
    id: 33,
    title: "On which day did Jesus rise from the dead?",
    options: [
      { id: 1, text: "On the third day" }, // correct
      { id: 2, text: "On the seventh day" },
      { id: 3, text: "After one day" },
      { id: 4, text: "After forty days" }
    ]
  },
  {
    id: 34,
    title: "What is the celebration of Jesus' resurrection called?",
    options: [
      { id: 1, text: "Christmas" },
      { id: 2, text: "Easter" }, // correct
      { id: 3, text: "Pentecost" },
      { id: 4, text: "Passover" }
    ]
  },
  {
    id: 35,
    title: "What was the name of the place where Jesus was crucified?",
    options: [
      { id: 1, text: "Bethany" },
      { id: 2, text: "Golgotha (the place of the skull)" }, // correct
      { id: 3, text: "Bethlehem" },
      { id: 4, text: "Capernaum" }
    ]
  },
  {
    id: 36,
    title: "What does the parable of the Good Samaritan mainly teach?",
    options: [
      { id: 1, text: "To love your neighbor" }, // correct
      { id: 2, text: "To save money" },
      { id: 3, text: "To travel often" },
      { id: 4, text: "To avoid strangers" }
    ]
  },
  {
    id: 37,
    title: "How many loaves did Jesus use to feed the 5,000 (with two fish)?",
    options: [
      { id: 1, text: "Two" },
      { id: 2, text: "Five" }, // correct
      { id: 3, text: "Ten" },
      { id: 4, text: "Twelve" }
    ]
  },
  {
    id: 38,
    title: "At the wedding in Cana, Jesus turned water into what?",
    options: [
      { id: 1, text: "Oil" },
      { id: 2, text: "Wine" }, // correct
      { id: 3, text: "Honey" },
      { id: 4, text: "Milk" }
    ]
  },
  {
    id: 39,
    title: "The Lord's Prayer begins, 'Our Father who art in ___.'",
    options: [
      { id: 1, text: "Heaven" }, // correct
      { id: 2, text: "Zion" },
      { id: 3, text: "Glory" },
      { id: 4, text: "Light" }
    ]
  },
  {
    id: 40,
    title: "Who wrote many of the New Testament letters after his conversion?",
    options: [
      { id: 1, text: "Paul" }, // correct
      { id: 2, text: "Peter" },
      { id: 3, text: "Luke" },
      { id: 4, text: "Mark" }
    ]
  },
  {
    id: 41,
    title: "Which is the first book of the New Testament?",
    options: [
      { id: 1, text: "Matthew" }, // correct
      { id: 2, text: "Mark" },
      { id: 3, text: "John" },
      { id: 4, text: "Acts" }
    ]
  },
  {
    id: 42,
    title: "'For God so loved the world...' (John 3:16) is found in which Gospel?",
    options: [
      { id: 1, text: "Luke" },
      { id: 2, text: "John" }, // correct
      { id: 3, text: "Romans" },
      { id: 4, text: "Mark" }
    ]
  },
  {
    id: 43,
    title: "What did God do on the seventh day of creation?",
    options: [
      { id: 1, text: "Created man" },
      { id: 2, text: "Rested" }, // correct
      { id: 3, text: "Created light" },
      { id: 4, text: "Made the sea" }
    ]
  },
  {
    id: 44,
    title: "Who was the brother of Moses and the first high priest?",
    options: [
      { id: 1, text: "Aaron" }, // correct
      { id: 2, text: "Joshua" },
      { id: 3, text: "Caleb" },
      { id: 4, text: "Miriam" }
    ]
  },
  {
    id: 45,
    title: "What food did God provide the Israelites in the wilderness?",
    options: [
      { id: 1, text: "Honey" },
      { id: 2, text: "Manna" }, // correct
      { id: 3, text: "Figs" },
      { id: 4, text: "Bread from Cana" }
    ]
  },

  // ---------- Multi-option (46-80) ----------
  {
    id: 46,
    title: "Which of these are books of the Old Testament?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Genesis" }, // correct
      { id: 2, text: "Matthew" },
      { id: 3, text: "Acts" },
      { id: 4, text: "Romans" }
    ]
  },
  {
    id: 47,
    title: "Which of these are books of the New Testament?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Matthew" }, // correct
      { id: 2, text: "Mark" }, // correct
      { id: 3, text: "Acts" }, // correct
      { id: 4, text: "Psalms" }
    ]
  },
  {
    id: 48,
    title: "Which of these are among the Ten Commandments?",
    isMultiOption: true,
    options: [
      { id: 1, text: "You shall not steal" }, // correct
      { id: 2, text: "You shall not murder" }, // correct
      { id: 3, text: "Always attend church on Sunday" },
      { id: 4, text: "Always give exactly 10%" }
    ]
  },
  {
    id: 49,
    title: "Which of these were among Jesus' twelve apostles?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Peter" }, // correct
      { id: 2, text: "James" }, // correct
      { id: 3, text: "John" }, // correct
      { id: 4, text: "Moses" }
    ]
  },
  {
    id: 50,
    title: "Which of these are the four Gospels?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Matthew" }, // correct
      { id: 2, text: "Mark" }, // correct
      { id: 3, text: "Luke" }, // correct
      { id: 4, text: "Acts" }
    ]
  },
  {
    id: 51,
    title: "Which of these are fruits of the Spirit (Galatians 5)?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Love" }, // correct
      { id: 2, text: "Joy" }, // correct
      { id: 3, text: "Peace" }, // correct
      { id: 4, text: "Wealth" }
    ]
  },
  {
    id: 52,
    title: "Which of these people are found in the Old Testament?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Abraham" }, // correct
      { id: 2, text: "Peter" },
      { id: 3, text: "John the Baptist" },
      { id: 4, text: "Paul" }
    ]
  },
  {
    id: 53,
    title: "Which of these were sons of Jacob (tribes of Israel)?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Judah" }, // correct
      { id: 2, text: "Levi" }, // correct
      { id: 3, text: "Benjamin" }, // correct
      { id: 4, text: "Esau" }
    ]
  },
  {
    id: 54,
    title: "Which of these were plagues God sent on Egypt?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Frogs" }, // correct
      { id: 2, text: "Locusts" }, // correct
      { id: 3, text: "Snowstorms" },
      { id: 4, text: "Earthquakes" }
    ]
  },
  {
    id: 55,
    title: "Which of these are miracles of Jesus?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Turning water into wine" }, // correct
      { id: 2, text: "Walking on water" }, // correct
      { id: 3, text: "Raising Lazarus from the dead" }, // correct
      { id: 4, text: "Building the temple in a day" }
    ]
  },
  {
    id: 56,
    title: "Which of these are parables Jesus told?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The Prodigal Son" }, // correct
      { id: 2, text: "The Good Samaritan" }, // correct
      { id: 3, text: "The Exodus story" },
      { id: 4, text: "Noah's Ark" }
    ]
  },
  {
    id: 57,
    title: "Which of these are names or titles for Jesus?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Savior" }, // correct
      { id: 2, text: "Messiah" }, // correct
      { id: 3, text: "Lamb of God" }, // correct
      { id: 4, text: "Pharaoh" }
    ]
  },
  {
    id: 58,
    title: "Which of these were the patriarchs of Israel?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Abraham" }, // correct
      { id: 2, text: "Isaac" }, // correct
      { id: 3, text: "Jacob" }, // correct
      { id: 4, text: "Joshua" }
    ]
  },
  {
    id: 59,
    title: "Which of these animal accounts appear in the Bible?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The serpent in the Garden of Eden" }, // correct
      { id: 2, text: "The great fish that swallowed Jonah" }, // correct
      { id: 3, text: "The donkey that spoke to Balaam" }, // correct
      { id: 4, text: "The dragon that fought Samson" }
    ]
  },
  {
    id: 60,
    title: "Which of these are women in the Bible?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Ruth" }, // correct
      { id: 2, text: "Esther" }, // correct
      { id: 3, text: "Mary" }, // correct
      { id: 4, text: "Goliath" }
    ]
  },
  {
    id: 61,
    title: "Which of these are letters written by (or attributed to) Paul?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Romans" }, // correct
      { id: 2, text: "Galatians" }, // correct
      { id: 3, text: "Philippians" }, // correct
      { id: 4, text: "Genesis" }
    ]
  },
  {
    id: 62,
    title: "Which of these events happen in the book of Genesis?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The Creation" }, // correct
      { id: 2, text: "The Flood" }, // correct
      { id: 3, text: "The Tower of Babel" }, // correct
      { id: 4, text: "The Crucifixion of Jesus" }
    ]
  },
  {
    id: 63,
    title: "Which of these are part of the Nativity (Christmas) story?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Shepherds" }, // correct
      { id: 2, text: "Wise men (Magi)" }, // correct
      { id: 3, text: "A star" }, // correct
      { id: 4, text: "The parting of the sea" }
    ]
  },
  {
    id: 64,
    title: "Which of these were kings of Israel or Judah?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Saul" }, // correct
      { id: 2, text: "David" }, // correct
      { id: 3, text: "Solomon" }, // correct
      { id: 4, text: "Daniel" }
    ]
  },
  {
    id: 65,
    title: "Which of these are Old Testament prophets?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Isaiah" }, // correct
      { id: 2, text: "Jeremiah" }, // correct
      { id: 3, text: "Ezekiel" }, // correct
      { id: 4, text: "Matthew" }
    ]
  },
  {
    id: 66,
    title: "Which of these describe what happened at and after Jesus' crucifixion?",
    isMultiOption: true,
    options: [
      { id: 1, text: "He was crucified" }, // correct
      { id: 2, text: "He died" }, // correct
      { id: 3, text: "He was buried" }, // correct
      { id: 4, text: "He built the temple" }
    ]
  },
  {
    id: 67,
    title: "Which gifts did the wise men bring to the young Jesus?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Gold" }, // correct
      { id: 2, text: "Frankincense" }, // correct
      { id: 3, text: "Myrrh" }, // correct
      { id: 4, text: "Silver" }
    ]
  },
  {
    id: 68,
    title: "Which of these are true about Noah's account?",
    isMultiOption: true,
    options: [
      { id: 1, text: "He built an ark" }, // correct
      { id: 2, text: "Animals came in pairs" }, // correct
      { id: 3, text: "It rained 40 days and 40 nights" }, // correct
      { id: 4, text: "He defeated Goliath" }
    ]
  },
  {
    id: 69,
    title: "Which of these are part of the 'armor of God' (Ephesians 6)?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The helmet of salvation" }, // correct
      { id: 2, text: "The shield of faith" }, // correct
      { id: 3, text: "The belt of truth" }, // correct
      { id: 4, text: "The crown of gold" }
    ]
  },
  {
    id: 70,
    title: "Which of these are poetry / wisdom books of the Old Testament?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Psalms" }, // correct
      { id: 2, text: "Proverbs" }, // correct
      { id: 3, text: "Ecclesiastes" }, // correct
      { id: 4, text: "Exodus" }
    ]
  },
  {
    id: 71,
    title: "Which of these people were raised from the dead in the Bible?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Lazarus" }, // correct
      { id: 2, text: "Jairus' daughter" }, // correct
      { id: 3, text: "The widow of Nain's son" }, // correct
      { id: 4, text: "Pontius Pilate" }
    ]
  },
  {
    id: 72,
    title: "Which of these are true about the apostle Peter?",
    isMultiOption: true,
    options: [
      { id: 1, text: "He was a fisherman" }, // correct
      { id: 2, text: "He denied Jesus three times" }, // correct
      { id: 3, text: "He was one of the twelve apostles" }, // correct
      { id: 4, text: "He wrote the book of Revelation" }
    ]
  },
  {
    id: 73,
    title: "Which of these are true about Moses?",
    isMultiOption: true,
    options: [
      { id: 1, text: "He was raised in Egypt" }, // correct
      { id: 2, text: "He received the Ten Commandments" }, // correct
      { id: 3, text: "He led Israel out of Egypt" }, // correct
      { id: 4, text: "He built Noah's ark" }
    ]
  },
  {
    id: 74,
    title: "Which of these make up the Holy Trinity?",
    isMultiOption: true,
    options: [
      { id: 1, text: "The Father" }, // correct
      { id: 2, text: "The Son" }, // correct
      { id: 3, text: "The Holy Spirit" }, // correct
      { id: 4, text: "The Angels" }
    ]
  },
  {
    id: 75,
    title: "Which of these are things David did?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Defeated Goliath" }, // correct
      { id: 2, text: "Played the harp" }, // correct
      { id: 3, text: "Became king of Israel" }, // correct
      { id: 4, text: "Parted the Red Sea" }
    ]
  },
  {
    id: 76,
    title: "Which of these are places mentioned in the Bible?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Jerusalem" }, // correct
      { id: 2, text: "Bethlehem" }, // correct
      { id: 3, text: "Nazareth" }, // correct
      { id: 4, text: "Mount Olympus" }
    ]
  },
  {
    id: 77,
    title: "Which of these did God create (Genesis 1)?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Light" }, // correct
      { id: 2, text: "The sea and dry land" }, // correct
      { id: 3, text: "Animals" }, // correct
      { id: 4, text: "Automobiles" }
    ]
  },
  {
    id: 78,
    title: "Which of these did Jesus teach His followers to do?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Love God" }, // correct
      { id: 2, text: "Love your neighbor" }, // correct
      { id: 3, text: "Forgive others" }, // correct
      { id: 4, text: "Worship idols" }
    ]
  },
  {
    id: 79,
    title: "Which of these were among the twelve tribes of Israel?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Judah" }, // correct
      { id: 2, text: "Reuben" }, // correct
      { id: 3, text: "Dan" }, // correct
      { id: 4, text: "Samaria" }
    ]
  },
  {
    id: 80,
    title: "Which of these are New Testament letters (epistles)?",
    isMultiOption: true,
    options: [
      { id: 1, text: "Romans" }, // correct
      { id: 2, text: "1 Corinthians" }, // correct
      { id: 3, text: "Hebrews" }, // correct
      { id: 4, text: "Genesis" }
    ]
  }
];

export const bibleAnswers: AnswerKey[] = [
  { questionId: 1, correctOptionIds: [2] },
  { questionId: 2, correctOptionIds: [1] },
  { questionId: 3, correctOptionIds: [1] },
  { questionId: 4, correctOptionIds: [2] },
  { questionId: 5, correctOptionIds: [1] },
  { questionId: 6, correctOptionIds: [2] },
  { questionId: 7, correctOptionIds: [2] },
  { questionId: 8, correctOptionIds: [2] },
  { questionId: 9, correctOptionIds: [2] },
  { questionId: 10, correctOptionIds: [1] },
  { questionId: 11, correctOptionIds: [2] },
  { questionId: 12, correctOptionIds: [1] },
  { questionId: 13, correctOptionIds: [2] },
  { questionId: 14, correctOptionIds: [2] },
  { questionId: 15, correctOptionIds: [2] },
  { questionId: 16, correctOptionIds: [2] },
  { questionId: 17, correctOptionIds: [1] },
  { questionId: 18, correctOptionIds: [2] },
  { questionId: 19, correctOptionIds: [1] },
  { questionId: 20, correctOptionIds: [2] },
  { questionId: 21, correctOptionIds: [1] },
  { questionId: 22, correctOptionIds: [1] },
  { questionId: 23, correctOptionIds: [2] },
  { questionId: 24, correctOptionIds: [1] },
  { questionId: 25, correctOptionIds: [2] },
  { questionId: 26, correctOptionIds: [2] },
  { questionId: 27, correctOptionIds: [2] },
  { questionId: 28, correctOptionIds: [2] },
  { questionId: 29, correctOptionIds: [2] },
  { questionId: 30, correctOptionIds: [1] },
  { questionId: 31, correctOptionIds: [1] },
  { questionId: 32, correctOptionIds: [2] },
  { questionId: 33, correctOptionIds: [1] },
  { questionId: 34, correctOptionIds: [2] },
  { questionId: 35, correctOptionIds: [2] },
  { questionId: 36, correctOptionIds: [1] },
  { questionId: 37, correctOptionIds: [2] },
  { questionId: 38, correctOptionIds: [2] },
  { questionId: 39, correctOptionIds: [1] },
  { questionId: 40, correctOptionIds: [1] },
  { questionId: 41, correctOptionIds: [1] },
  { questionId: 42, correctOptionIds: [2] },
  { questionId: 43, correctOptionIds: [2] },
  { questionId: 44, correctOptionIds: [1] },
  { questionId: 45, correctOptionIds: [2] },
  { questionId: 46, correctOptionIds: [1] },
  { questionId: 47, correctOptionIds: [1, 2, 3] },
  { questionId: 48, correctOptionIds: [1, 2] },
  { questionId: 49, correctOptionIds: [1, 2, 3] },
  { questionId: 50, correctOptionIds: [1, 2, 3] },
  { questionId: 51, correctOptionIds: [1, 2, 3] },
  { questionId: 52, correctOptionIds: [1] },
  { questionId: 53, correctOptionIds: [1, 2, 3] },
  { questionId: 54, correctOptionIds: [1, 2] },
  { questionId: 55, correctOptionIds: [1, 2, 3] },
  { questionId: 56, correctOptionIds: [1, 2] },
  { questionId: 57, correctOptionIds: [1, 2, 3] },
  { questionId: 58, correctOptionIds: [1, 2, 3] },
  { questionId: 59, correctOptionIds: [1, 2, 3] },
  { questionId: 60, correctOptionIds: [1, 2, 3] },
  { questionId: 61, correctOptionIds: [1, 2, 3] },
  { questionId: 62, correctOptionIds: [1, 2, 3] },
  { questionId: 63, correctOptionIds: [1, 2, 3] },
  { questionId: 64, correctOptionIds: [1, 2, 3] },
  { questionId: 65, correctOptionIds: [1, 2, 3] },
  { questionId: 66, correctOptionIds: [1, 2, 3] },
  { questionId: 67, correctOptionIds: [1, 2, 3] },
  { questionId: 68, correctOptionIds: [1, 2, 3] },
  { questionId: 69, correctOptionIds: [1, 2, 3] },
  { questionId: 70, correctOptionIds: [1, 2, 3] },
  { questionId: 71, correctOptionIds: [1, 2, 3] },
  { questionId: 72, correctOptionIds: [1, 2, 3] },
  { questionId: 73, correctOptionIds: [1, 2, 3] },
  { questionId: 74, correctOptionIds: [1, 2, 3] },
  { questionId: 75, correctOptionIds: [1, 2, 3] },
  { questionId: 76, correctOptionIds: [1, 2, 3] },
  { questionId: 77, correctOptionIds: [1, 2, 3] },
  { questionId: 78, correctOptionIds: [1, 2, 3] },
  { questionId: 79, correctOptionIds: [1, 2, 3] },
  { questionId: 80, correctOptionIds: [1, 2, 3] }
];

// ExamSubject object that holds the Bible study questions as a property.
const bibleQuestionsSignal = signal<QuizQuestion[]>(randomizeQuestionsIfRequested([...bibleQuestions]));
bibleQuestionsSignal.update(x => {
  x.forEach(y => {
    y.options = randomizeQuestionsIfRequested(y.options);
  });
  return [...x];
});

export const bibleExam: ExamSubject = {
  randomizeQuestions: true,
  randomizeQuestionOptions: true,
  id: signal('bible-101'),
  title: signal('Bible Study (Beginner Level)'),
  duration: signal({ hour: 1, minute: 25, second: 0 }),
  questions: bibleQuestionsSignal
};

