

let overview_btn = () => {
    let btn1 = document.getElementById("btn1");
    btn1.onclick = () => {
        btn1.style.borderBottom = "3px solid"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "block"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn2 = document.getElementById("btn2");
    btn2.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "3px solid"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "block"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn3 = document.getElementById("btn3");
    btn3.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "3px solid"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "block"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn4 = document.getElementById("btn4");
    btn4.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "3px solid"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "block"
    }
}
overview_btn()
