let i = 0;

function ChangeSlide(num) {
  i += num;
  SlideShow(i)
}
SlideShow(i)
function SlideShow(index) {
  let slide = document.getElementsByClassName("slide");
  if (index == slide.length) {
    i = 0;
    index = 0;
  }
  if (index < 0) {
    i = slide.length - 1;
    index = slide.length - 1;
  }

  for (let item of slide) {
    item.style.display = "none";
  }

  slide[index].style.display = "block";
  console.log(slide[index]);
}



