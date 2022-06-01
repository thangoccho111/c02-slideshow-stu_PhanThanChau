let a = 1;
function hienThiSlideKeTiep() {
  if (a === 4) {
    alert("Đã đến cuối");
  } else {
    a++;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
    console.log(a);
  }
}
function hienThiSlideTruocDo() {
  if (a === 1) {
    alert("Đã đến cuối");
  } else {
    a--;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
    console.log(a);
  }
}
