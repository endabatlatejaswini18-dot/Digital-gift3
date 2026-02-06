const steps = [
  {
    text: "lopala em undh ani aalochisthunnava👀",
    img: "images/2.gif",
    btn: "yessss 😌"
  },
  {
    text:"surprise💐",
    img: "images/3.gif",
    btn: "wowwwwww 🥳"
  },
  {
    text: "🖕🏻🖕🏻🖕🏻🖕🏻dengeyyy🤣🖕🏻🤍",
    img: "images/4.gif",
    btn: "🙄",
  },
  {
    text: "hehehehe evdak le em le time pass kaatle ninn disturb chedham ani😌🤣",
    img: "images/5.gif",
    btn: "okayy😒 😏",
  }
];

let i = 0;

function next() {
  if (i < steps.length) {
    document.getElementById("text").innerText = steps[i].text;
    document.getElementById("img").src = steps[i].img;
    document.getElementById("btn").innerText = steps[i].btn;
    i++;
  }
}