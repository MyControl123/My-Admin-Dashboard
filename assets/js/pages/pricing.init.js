function check() {
  for (
    var e = document.getElementById("plan-switch"),
      l = document.getElementsByClassName("month"),
      n = document.getElementsByClassName("annual"),
      t = 0;
    t < l.length;
    t++
  )
    1 == e.checked
      ? ((n[t].style.display = "block"), (l[t].style.display = "none"))
      : 0 == e.checked &&
        ((n[t].style.display = "none"), (l[t].style.display = "block"));
}
check();
