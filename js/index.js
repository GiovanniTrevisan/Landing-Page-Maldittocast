
const nav = document.querySelector(".navbar");

if (matchMedia('(pointer:fine)').matches) {
  document.addEventListener("mousemove", parallax);
}


function colorChange() {
  var scroll = window.pageYOffset;
  if (typeof (nav) != 'undefined' && nav != null) {
    if (scroll > 100) {
      nav.classList.add('color-change')
    } else {
      nav.classList.remove('color-change')
    }
  }
}


function newFact() {
  const facts = [
    '(｡◕‿‿◕｡)',
    '(｡♥‿♥｡)',
    '(ﾉ･ｪ･)ﾉ',
    '╰(・∇・╰)',
    '^_^',
    '(/◕ヮ◕)/',
    '∩(·ω·)∩',
    '(·ω·)',
    '^ω^'
  ];
  const randomFact = Math.floor(Math.random() * facts.length);
  const emoteElement = document.getElementById('emote');
  emoteElement.innerHTML = facts[randomFact];

  if (emoteElement.innerHTML.length > 10) {
    emoteElement.innerHTML = ':D';
  }

}

window.onscroll = function (event) {
  colorChange();
};

newFact();

colorChange();


function parallax(event) {
  var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  if (width > 992) {
    this.querySelectorAll(".parallax-wrap div, p, h2, .mockup, .celular").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90 - 10;
      const y = (window.innerHeight - event.pageY * position) / 90 - 10;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}

