function display() {
    let sel = document.getElementById("dropdown-list");
    let val = sel[sel.selectedIndex].text;

    console.log(val);
    document.getElementById("comment").innerHTML = val;
}
