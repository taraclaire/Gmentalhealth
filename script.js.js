  document.getElementById('getstarted').onclick = function(){
      document.getElementById('test1').classList.remove('hidden')
      this.style.display = 'none'
  }
  document.getElementById('submitbtn1').onclick = function(){
      let checkboxes = document.querySelectorAll('.agree');
      let anychecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
      if (anychecked){
          document.getElementById('msg').textContent = '👍🎉 keep going';
      }else{
          document.getElementById('msg').textContent = 'please fill in atleast one checkbox'
      }
  }
  document.getElementById('submitbtn2').onclick = function(){
      let radios = document.querySelectorAll('.agree');
      let anychecked = Array.from(radios).some(radio => radio.checked);
      if (anychecked){
          document.getElementById('msg2').textContent = '👍🎉 keep going';
      }else{
          document.getElementById('msg2').textContent = 'please fill in atleast one checkbox'
      }
  }
  document.getElementById('search').onclick = function(){
      const reason = document.getElementById('searchbox').value.trim();
      if (reason === ''){
          alert('please type something first')
      }
      else if (isNaN(reason)){
          alert('input error, type a number')
      }
      else if (Number(reason) > 10){
          alert(' stop over exuggerating ,error input a number from 1 to ten')
      }
      else{
            prompt(`why do you feel ${reason} levels of stress`);
            alert('your results are ready click results to get them') 
      }
  }
  const result1 =  document.getElementById('results');
  result1.onclick = function(){
   const feelings = Array.from(document.querySelectorAll('#test1 input[type=checkbox]:checked'))
    .map(el => el.value);
    const stresslevel = Number(document.getElementById('searchbox').value.trim())
  const verses = {
    anxiety: [
      "🕊️Philippians 4:6-7 — Encourages prayer and thankfulness instead of anxiety, promising God's peace.",
      "1 Peter 5:7 — Advises casting anxiety on God because He cares for you."
    ],
    fear: [
      "Isaiah 41:10 — Do not fear or be dismayed, for God will strengthen and help you.",
      "2 Timothy 1:7 — God has given us a spirit of power, love, and a sound mind, not fear.",
      "Matthew 6:34 — Do not worry about tomorrow, for each day has enough trouble of its own."
    ],
    depressed: [
      "Psalm 34:18 — The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      "Matthew 11:28-30 — Come to me, all you who are weary and burdened, and I will give you rest.",
      "Psalm 42:11 — Why, my soul, are you downcast? Put your hope in God, for I will yet praise Him.",
      "John 16:33 — In this world you will have trouble. But take heart! I have overcome the world.",
      "Lamentations 3:22-23 — The steadfast love of the Lord never ceases; His mercies are new every morning."
    ],
    anger: [
      "Ephesians 4:26 — In your anger do not sin; do not let the sun go down while you are still angry.",
      "James 1:19-20 — Be quick to listen, slow to speak, and slow to become angry.",
      "Proverbs 16:32 — Better a patient person than a warrior, one with self-control than one who takes a city.",
      "Colossians 3:8 — Rid yourselves of anger, rage, malice, slander, and filthy language."
    ],
    lonely: [
      "Deuteronomy 31:6 — Be strong and courageous. The Lord your God goes with you; He will never leave you nor forsake you.",
      "Psalm 27:10 — Though my father and mother forsake me, the Lord will receive me.",
      "Matthew 28:20 — Surely I am with you always, to the very end of the age.",
      "Hebrews 13:5 — Never will I leave you; never will I forsake you."
    ],
    guilt: [
      "1 John 1:9 — If we confess our sins, He is faithful and just and will forgive us and purify us from all unrighteousness.",
      "Romans 8:1 — There is now no condemnation for those who are in Christ Jesus.",
      "Psalm 32:5 — I acknowledged my sin to You, and You forgave the guilt of my sin.",
      "Proverbs 28:13 — Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy."
    ],
    failing: [
      "Philippians 4:13 — I can do all things through Christ who strengthens me.",
      "Romans 8:28 — God works for the good of those who love Him, who have been called according to His purpose.",
      "Jeremiah 29:11 — For I know the plans I have for you, plans to give you hope and a future.",
      "Psalm 37:23-24 — Though you may stumble, you will not fall, for the Lord upholds you.",
      "Galatians 6:9 — Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up."
    ],
    other: ["Proverbs 3:5-6 — Trust in the Lord with all your heart and lean not on your own understanding."]
  };
  let verse = "John 3:16  For God so loved the world that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life"
let versesToShow = [];

for (let f of feelings) {
    if (verses[f]) {
        versesToShow.push(...verses[f]); // add all verses for this feeling
    }
}
if (stresslevel >= 8) {
    versesToShow.push("Matthew 11:28 — Come to me, all you who are weary and burdened, and I will give you rest.");
}
if (versesToShow.length > 0){
  const allVerses = versesToShow.map(v => `• ${v}`).join('\n\n')
const message = `You are not alone🤗.\nyou chose stress level ${stresslevel}\n\n  Your verses: \n${allVerses}`
document.getElementById('results').innerHTML = `<p>${message.replace(/\n/g,'<br>')}</p>`
}else {
    alert("No verses to show. Please select at least one feeling.")
  }
};
document.addEventListener('DOMContentLoaded', () => {
  // all your JS code here
const openJournalBtn = document.getElementById('openJournalBtn');
const journalContainer = document.getElementById('journalContainer');
const saveEntryBtn = document.getElementById('saveEntryBtn');
const journalInput = document.getElementById('journalInput');
const journalList = document.getElementById('journalList');

// Show the journal when button is clicked
openJournalBtn.onclick = () => {
  journalContainer.classList.toggle('hidden'); // toggle visibility
};

// Load existing entries from localStorage
let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
renderEntries();

function renderEntries() {
  journalList.innerHTML = '';
  entries.forEach((entry, index) => {
    const li = document.createElement('li');
    li.textContent = entry;
    journalList.appendChild(li);
  });
}

// Save new entry
saveEntryBtn.onclick = () => {
  const text = journalInput.value.trim();
  if (text === '') {
    alert('Please write something before saving!');
    return;
  }

  entries.push(text);
  localStorage.setItem('journalEntries', JSON.stringify(entries));
  journalInput.value = '';
  renderEntries();
};
});

  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizContainer = document.getElementById('quizContainer');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const nextBtn = document.getElementById('nextBtn');
  const quizResult = document.getElementById('quizResult');

  startQuizBtn.onclick = () => {
    startQuizBtn.style.display = 'none';
    quizContainer.classList.remove('hidden');
    showQuestion(currentQuestion);
  };

  const questions = [
    {
      text: "If you were in a forest, what would you do first?",
      options: [
        { text: "Explore deeper into the woods", value: 1 },
        { text: "Find a safe spot to rest", value: 2 },
        { text: "Look for food or water", value: 3 },
        { text: "Climb a tree to see surroundings", value: 4 }
      ]
    },
    {
      text: "You find a river. What do you do?",
      options: [
        { text: "Swim across", value: 1 },
        { text: "Follow it downstream", value: 2 },
        { text: "Fish or collect water", value: 3 },
        { text: "Build a small raft", value: 4 }
      ]
    },
    {
      text: "A stranger approaches you. How do you react?",
      options: [
        { text: "Greet them and chat", value: 1 },
        { text: "Stay cautious", value: 2 },
        { text: "Offer them food", value: 3 },
        { text: "Observe quietly from afar", value: 4 }
      ]
    },
    {
      text: "Night falls in the forest. What do you do?",
      options: [
        { text: "Set up a campfire", value: 1 },
        { text: "Find a safe shelter", value: 2 },
        { text: "Look for food for the night", value: 3 },
        { text: "Keep exploring under moonlight", value: 4 }
      ]
    },
    {
      text: "You hear a loud noise nearby. How do you react?",
      options: [
        { text: "Investigate the source", value: 1 },
        { text: "Hide and observe", value: 2 },
        { text: "Call for help", value: 3 },
        { text: "Prepare a defense", value: 4 }
      ]
    },
    {
      text: "You find a strange object on the ground. What do you do?",
      options: [
        { text: "Pick it up and examine", value: 1 },
        { text: "Leave it alone", value: 2 },
        { text: "Use it creatively", value: 3 },
        { text: "Hide it for safety", value: 4 }
      ]
    },
    {
      text: "You need to cross a dangerous path. How do you proceed?",
      options: [
        { text: "Rush through carefully", value: 1 },
        { text: "Look for an alternate route", value: 2 },
        { text: "Wait for guidance", value: 3 },
        { text: "Use tools or resources to aid crossing", value: 4 }
      ]
    }
  ];

  let currentQuestion = 0;
  let answers = [];

  function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option.text;
      btn.onclick = () => {
        answers.push(option.value);
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          showQuestion(currentQuestion);
        } else {
          showResult();
        }
      };
      optionsContainer.appendChild(btn);
    });
  }

  function showResult() {
    quizContainer.innerHTML = '<h3>Personality Result</h3>';
    const counts = {};
    answers.forEach(val => {
      counts[val] = (counts[val] || 0) + 1;
    });
    const maxValue = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b);

    let personality;
    switch (parseInt(maxValue)) {
      case 1: personality = "Adventurous and Bold"; break;
      case 2: personality = "Cautious and Thoughtful"; break;
      case 3: personality = "Helpful and Caring"; break;
      case 4: personality = "Strategic and Observant"; break;
      default: personality = "Undefined"; break;
    }

    quizContainer.innerHTML += `<p>Your personality type is: <strong>${personality}</strong></p>`;
  }
  document.addEventListener('DOMContentLoaded', () => {
  const showQuoteBtn = document.getElementById('showQuoteBtn');
  const quoteContainer = document.getElementById('quoteContainer');
  const quoteText = document.getElementById('quoteText');
  const nextQuoteBtn = document.getElementById('nextQuoteBtn');

  const quotes = [
    "🌟 Believe in yourself. You are capable of amazing things!",
    "💪 Every day may not be good, but there is something good in every day.",
    "🕊️ Peace begins with a smile. Take a moment for yourself.",
    "🌈 Difficult roads often lead to beautiful destinations.",
    "✨ You are stronger than you think and braver than you feel.",
    "💖 Take time to do what makes your soul happy.",
    "🌸 Small steps each day can lead to big changes over time.",
    "☀️ Keep going. Every step forward counts, no matter how small."
  ];

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }

  showQuoteBtn.onclick = () => {
    quoteContainer.classList.remove('hidden');
    showRandomQuote();
  };

  nextQuoteBtn.onclick = () => {
    showRandomQuote();
  };
});