const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
 
  var newActive = event.target;
  
  var isItem = newActive.closest('.carousel__item');
  console.log(isItem);
  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  update(isItem);
});



const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 3);
  // const prev = elems.find((elem) => elem.dataset.pos == -1);
  // const next = elems.find((elem) => elem.dataset.pos == 1);
  // const first = elems.find((elem) => elem.dataset.pos == -2);
  // const last = elems.find((elem) => elem.dataset.pos == 2);
  // const three = elems.find((elem) => elem.dataset.pos == 3);
  
  current.classList.remove('carousel__item_active');
  
  // [current, prev, next, first, last, three].forEach(item => {
  //   var itemPos = item.dataset.pos;

  //   item.dataset.pos = getPos(itemPos, newActivePos)
  // });
  elems.forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  console.log(current, active);
  var diff = current - active + 3;

  // if (Math.abs(current - active) > 2) {
  //   return -current
  // }

  if (diff <= 0) {
    diff = diff + 10;
  }

  if (diff > 10) {
    diff = diff - 10;
  }

  // const diff = current

  return diff;
}