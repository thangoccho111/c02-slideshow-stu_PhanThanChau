let a = 1;
function hienThiSlideKeTiep() {
  if (a === 4) {
    a = 1;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
    // alert("Đã đến cuối");
  } else {
    a++;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
  }
}
function hienThiSlideTruocDo() {
  if (a === 1) {
    a = 4;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
  } else {
    a--;
    document.getElementById("img").src = "./anh" + [a] + ".jpg";
  }
}
