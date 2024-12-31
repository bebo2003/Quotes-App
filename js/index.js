var Bodi = document.getElementById("Name");
var array = [];
const verificationQuestions = {
  aya: "اي اسم الدلع اللي انتي بتقولهولي؟",
  alaa: "انتي اي بالنسبالي؟",
  memo: "انتي اي بالنسبالي؟",
  menna: "اي اكتر اكلة سوري بحبها",
  monmon: "الفلاحة بتاعة العجمي...ع راي تامر حسني اكتر حاجة بحبها فيكي ؟؟",
  bassant: "اي كتر كلمه بتقوليها؟",
  rowan: "انتي خرا شطفات ؟؟",
  tarek: "🌚طااروق..اي اكتر اسم بندهك بيه اول مشوفك",
  halem: "😂حوولم...اي اكتر كلمة بقولها ف الحيااة",
  hossam: "🌚حووس..بقالنا اد اي نعرف بعض؟",
  mohamed: "🌚اي اكتر اسم بنديك بيه",
  saad: "🌚سعدوكاا...بقالنا اد اي نعرف  بعض؟",
  mahmoud: "دفعاااه...بحب فيفا ولا لا😂؟",
  zeyad: "اي الدلع بتاعي اللي الشلة بتعتنا بس اللي عرفااه؟",
  mira: "الفلاحة بتاعة العجمي...اي اللي حاجة اللي زلاني بيها دلوقتي😂؟",
  amira: "اميرة بنت الناس...اسم المكان اللي باخد معااكي في كورس؟",
  ashrakat: "اي الدلع اللي بنديكي بيه؟",
  nada: "عين اعياان الزتون...انا بقولك اي اول مشوفك😂؟",
  fathy: "🌚خلي الوفي..بقالنا قد اي نعرف بعض يصحبي",
  eman: "😂اكتر اسم بندوكي بيه؟",
  maro: "😂ماروو...اسمي التاني اللي انتوا بس اللي عارفينه؟",
  joo: "😂اسمي  التاني اللي انتوا عارفينه؟",
  salma: "😂انا علطول مسميكي اي؟",
  sohad: "🌚سوسو...ستيل زعلانة مني؟",
  meme: "ميمي الضالة...who is your fav person?🌚",
  Esraa: "بصي انا مش طايقك..بس انتي بالنسبالي اي؟"
};
const correctAnswers = {
  aya: "بطاطا",
  alaa: "خرا شطفات",
  memo: "خرا شطفات",
  menna: "بطاطس سوري",
  monmon: "🌚كل حاجة ",
  bassant: "يا روان",
  rowan: "ايوة",
  tarek: "طارق ابن الناس",
  halem: "اشكال ضالة",
  hossam: "6",
  mohamed: "جوني ",
  saad: "4",
  mahmoud: "لا",
  zeyad: "زلطة",
  mira: "صورة",
  amira: "route",
  ashrakat: "shosho",
  nada: "الضالة بتاعة انجلش",
  fathy: "9",
  eman: "ابو رحااب",
  maro: "زلطة",
  joo: "زلطة",
  salma: "سلمي بنت الناس",
  sohad: "لا",
  meme: "tarek",
  Esraa: "اسراء بنت الناس"
};

function generateQuote() {
  var inputs = {
    name: Bodi.value.trim().toLowerCase()
  };
  if (!inputs.name) {
    Swal.fire({
      icon: 'error',
      title: 'يضاال',
      text: 'دانت  mis جدا',
      background: 'black', // لون الخلفية
      color: 'white' // لون النص لضمان وضوحه
    });
    return;
  }
  array.push(inputs);
  localStorage.setItem("Array", JSON.stringify(array));

  if (verificationQuestions[inputs.name]) {
    Swal.fire({
      title: verificationQuestions[inputs.name],
      input: 'text',
      inputPlaceholder: 'write your Name',
      showCancelButton: true,
      background: 'black', // لون الخلفية
      color: 'white', // لون النص لضمان وضوحه
      inputValidator: (value) => {
        if (!value) {
          return 'لزمن تكتب اسمك يفلااح';
        }
      }
    }).then((result) => {
      if (result.isConfirmed && result.value.trim().toLowerCase() === correctAnswers[inputs.name].toLowerCase()) {
        let quotes = "";
        if (inputs.name === "aya") {
          quotes = "💙يويو بنت الناس كل سنة وانتي طيبة وربنا يديمك اشطر يويو فالتيم ";
        } else if (inputs.name === "alaa") {
          quotes = `"My Best Friend are the blessings I always thank God for. With them, my life is filled with laughter, beautiful memories, and support at all times You’re not just friends; you’re family with a unique sparkle, lifting my spirits and making life more colorful. True friendship is having someone who understands me without words, cheers me on without hesitation, and supports me unconditionally. That’s what my best friend are to me. Without you in my life, I’d be missing so much joy. You’re not just friends; you’re a part of my soul ❤️."`;
        } else if (inputs.name === "memo") {
          quotes = `You’re not just a friend; you’re my sister by heart. Your presence makes my life brighter, and I can’t imagine my days without your laughter and support...t Having you as my friend feels like winning life’s greatest gift. You’ve been there for me in every moment, and I’m so grateful for your love and care...You’re the kind of friend who turns ordinary moments into extraordinary memories. I’m so lucky to have you in my life...I don’t say it often, but you mean the world to me. Your kindness, loyalty, and friendship have been my greatest comfort...You’ve always been my safe place, the one I can trust with everything. I can’t thank you enough for being the incredible person you are ❤️.`;
        } else if (inputs.name === "menna") {
          quotes = "❤️اختي منة اللي ليا بحبك وبحب مين يحبك ";
        } else if (inputs.name === "bassant") {
          quotes = "❤️اختي باسنت اللي ليا بحبك وبحب مين يحبك ";
        } else if (inputs.name === "monmon") {
          quotes = "❤️مونمون عشرة اربع سنين بجد من الناس اللي ليها معزة عندي لدرجة متتصورهاش بتمني تكون سنة سعيدة عليكي ان شاء الله واشوفك مبسوطة علطول";
        } else if (inputs.name === "rowan") {
          quotes = "❤️اختي روان اللي ليا بحبك وبحب مين يحبك ";
        } else if (inputs.name === "tarek") {
          quotes = "❤️اخوياا طارووق ابن الناس بجد يصحبي من الناس اللي بحبها بطريقة متتصورهاش ربنا يخليك يخويا وتكون سنة سعيدة عليك باذن الله";
        } else if (inputs.name === "halem") {
          quotes = "❤️حولم صديقي الصدوق بحبك وبحب مين يحبك وربنا يخليك لياا وتكون سنة سعيدة عليك باذن الله";
        } else if (inputs.name === " hossam") {
          quotes = "❤️اخوياا وصحبي اللي طلعت بيه ان شاء الله تكون سنة سعيدة عليك يا حبيبي ودي حاجة بسيطة حبية ابسطك بيها بس";
        } else if (inputs.name === "mohamed") {
          quotes = "❤️اخوياا جوني ين اعيان المندرة بحبك وبحب مين يحبك وان شاء الله تكون سنة سعيدة عليك يخوياا";
        } else if (inputs.name === "saad") {
          quotes = "❤️اخوياا سعدوكاا عشرة الاربع سنين والمنسق اللي ف القلب يارب تكون سنة سعيدة عليك";
        } else if (inputs.name === "mahmoud") {
          quotes = "❤️حودة الفرونت اند القادم اللي ف القلب ان شاء الله تكون سنة سعيدة عليك يا صحبي واشوفك مبسوط علطول";
        } else if (inputs.name === "zeyad") {
          quotes = "❤️زيااد زورو عشرة العمر بحبك حب انت متتصوروش ربنا يخليك ليا يخويا وتكون سنة سعيدة عليك ان شاء الله";
        } else if (inputs.name === "mira") {
          quotes = "❤️الفلاحة بتاعة العجمي مع اني مش طايقك بس ان شااء الله تكون سنة سعيدة عليكي عارف انها حاجة عبيطة بس حبية ابسط بيها يعني اهو حاولت ";
        } else if (inputs.name === "amira") {
          quotes = "❤️اختي اميرة عشرة سنة وحبة ان شاء الله تكون سنة سعيدة عليكي  حبية بس اعمل حاجة مختلفة حتي لو عبيطة بس ان شاء الله تعجبك";
        } else if (inputs.name === "ashrakat") {
          quotes = "❤️شوشو اللي ف القلب اللي ان شاء الله حتكون بشمنهندسة اد الدنياا وان شاء الله تكون سنة سعيدة عليكي حبية اعمل حاجة حاجة بسيطة كدا وان شاء الله تعجبك ";
        } else if (inputs.name === "nada") {
          quotes = "❤️اختي ندى زتون اللي شيلانا ف المواد ان شاء الله تكون سنة سعيدة عليكي حبية بس اعمل حاجة عبيطة كدا انش شاء الله تعجبك";
        } else if (inputs.name === "fathy") {
          quotes = "❤️صحبي واخويا انا عشرة سنين بحبك وبحب مين يحبك ربنا يخليك ليا يصحبي ويديمك ليا وان شاء الله تكون سنة سعيدة عليك حبية اعملك حاجة بسيطة كدا وان شاء الله تعجبك يحبيبي ";
        } else if (inputs.name === "eman") {
          quotes = "❤️اختي ابو رحاب الوحدية اللي م فلاحة م العجمي ان شاء الله تكون سنة سعيدة عليكي حبية بس اعمل حاجة عبيطة كدا وان شاء الله تعجبك";
        } else if (inputs.name === "maro") {
          quotes = "❤️اخويا مارو اللي ليا والمدرس القادم باذن الله ان شاء الله تكون سنة سعيدة عليك باذن الله حبية بس اعملك حاجة كدا بسيطة ان شاء الله تعجبك";
        } else if (inputs.name === "joo") {
          quotes = "❤️اخوياا عطعط اللي ف القلب بحبك يخويا وبحب مين يحبك وان شاء الله تكون سنة سعيدة عليك يحبيبي واشوفك مبسوط علطول";
        } else if (inputs.name === "salma") {
          quotes = "❤️اختي سلمي بنت الناس اللي متربية تلت اربع مرات  بجد متشرف بمعرفتك وان شاء الله تكون سنةسعيدة عليكي واشوفك مبسوطة علطول باذن الله ";
        } else if (inputs.name === "sohad") {
          quotes = "❤️ سهااد بنت الناس من الناس اللي محترمة جدا اللي عرفتها وان شاء الله تكون سنة سعيدة عليكي حبية اعملك حاجة بسيطة وان شاء الله تبسطك";
        } else if (inputs.name === "meme") {
          quotes = "❤️😂اختي ميمي من الناس اللي محترمة ومبسوط اني اتعرفت عليها ان شاء الله تكون سنة سعيدة عليكي وسمع خبر حلو بقاا عشان زهقت ";
        } else if (inputs.name === "Esraa") {
          quotes = "❤️اختي اسراء بنت الناس حقيقي انت ضالة بس سالكة فدي حاجة مش موجودة ف القسم عموما ان شاء الله تبقي سنة سعيدة عليكي حبية اعمل حاجة بسيطة ";
        }

        Swal.fire({
          icon: 'success',
          title: '⚯ ͛ ',
          text: quotes,
          showConfirmButton: true,
          background: 'black', // لون الخلفية
          color: 'white' // لون النص لضمان وضوحه
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: '😡 ة/يفلاااااح',
          text: "مش فاهم الاشكال الضالة اللي علي بليل دي",
          showConfirmButton: true,
          background: 'black', // لون الخلفية
          color: 'white' // لون النص لضمان وضوحه
        });
      }
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'مش نسيك والله',
      text: ' بحبك وبحب مين يحبك وكل سنة وانت/ي طيب يضاال/ة ويديمك في حياتي مش بس السنة الجية طلما جيت هنا ف عاوزك تعرف انت الحتة اللي في الوسط اللي تميل الي اليسار قليلا ✨❤️',
      showConfirmButton: true,
      background: 'black', // لون الخلفية
      color: 'white' // لون النص لضمان وضوحه
    });
  }
}

const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

// Set canvas size to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the raindrops
const raindrops = [];

// Function to create a new raindrop
function createRaindrop() {
  const x = Math.random() * canvas.width;
  const y = -5;
  const speed = Math.random() * 5 + 2;
  const length = Math.random() * 20 + 10;

  raindrops.push({ x, y, speed, length });
}

// Function to update the raindrops' positions
function updateRaindrops() {
  for (let i = 0; i < raindrops.length; i++) {
    const raindrop = raindrops[i];

    raindrop.y += raindrop.speed;

    if (raindrop.y > canvas.height) {
      raindrops.splice(i, 1);
      i--;
    }
  }
}

// Function to draw the raindrops
function drawRaindrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;

  for (let i = 0; i < raindrops.length; i++) {
    const raindrop = raindrops[i];

    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    ctx.stroke();
  }
}

// Function to animate the raindrops
function animate() {
  createRaindrop();
  updateRaindrops();
  drawRaindrops();

  requestAnimationFrame(animate);
}

// Start the animation
animate();


