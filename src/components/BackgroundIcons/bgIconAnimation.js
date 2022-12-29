export default function bgIconAnimation() {
  const icon = document.querySelectorAll('.mainPageContainer > .bgIcon');
  const cursor = document.getElementById('cursor');

  const animateit = function (e) {
        const svg = this.querySelector('svg');
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        svg.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') svg.style.transform = '';
  };

  const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        console.log(cursor)
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
  };

  icon.forEach(b => b.addEventListener('mousemove', animateit));
  icon.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);

};