  const controls = document.querySelector('#controls');
  const boxesContainer = document.querySelector('#boxes');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('[data-create]');
  const destroyBtn = controls.querySelector('[data-destroy]');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxes.push(box);
      size += 10;
    }

    boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
      return;
    }

    destroyBoxes();          // önce eski koleksiyonu temizle
    createBoxes(amount);     // yeni koleksiyonu oluştur
    input.value = '';        // input'u temizle
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
    input.value = '';
  });