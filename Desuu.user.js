// ==UserScript==
// @name         Desu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cheats in real life!
// @author       hachh
// @match        *iq.karelia.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(async() => {

    if (window.location.href.includes("finish")) {
        //window.location.replace("https://iq.karelia.ru/enter.php?t_id=165")
        return
    }

    if (!window.location.href.includes("next")) {

        //if (Object.keys(qq).length == 1) {unsafeWindow.setQ(baza)}

        return
    }

    // Дальше код для захвата и сохранения ответов
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }

    function antiMos(encstr) {
        encstr += "\n"
        var regx = /(?<=\n)[^\n]{3,}(?=\n)/g;
        var lines = encstr.match(regx);
        var endq = ""

        for (var y = 1; y < lines.length; y = y+2) {
            lines[y] = lines[y] + " "
        }

        for (var j = 0; j < lines.length; j = j+2) {
            for (var i = 0; i < lines[j].length; i++) {
                if (lines[j][i] == " ") {
                    if (lines[j+1][i] != " ") {
                        lines[j] = lines[j].replaceAt(i, lines[j+1][i])
                    }
                }
            }
            endq += " " + lines[j]
        }
        return endq;
    }

    var question = document.evaluate("//*[contains(@style, 'padding-left:30px; padding-right:30px')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText

    try {
        question = antiMos(question)
    } catch {}
    question = question.replaceAll("xА", "xA")
    question = question.replaceAll("xВ", "xB")
    question = question.replaceAll("xС", "xC")
    question = question.replaceAll("xЕ", "xE")
    function barseInt(o) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        if (question.includes("0b")) {
            question = question.replaceAll("1 1", "11")
            question = question.replaceAll("1 0", "10")
            question = question.replaceAll("0 1", "01")
            question = question.replaceAll("0 0", "00")
        }
        var n = question.match(bro)[0]
        var bi
        if (n.includes("0b")) { bi = parseInt(n.slice(2), 2) }
        else if (n.includes("O")) { bi = parseInt(n.slice(1), 8) }
        else { bi = parseInt(n) }

        document.getElementsByName("a_form_id[]")[0].value = bi.toString(o).toUpperCase()
    }

    function primer(bruh) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g
        if (question.includes("0b")) {
            question = question.replaceAll("1 1", "11")
            question = question.replaceAll("1 0", "10")
            question = question.replaceAll("0 1", "01")
            question = question.replaceAll("0 0", "00")
        }

        if (question.includes("+")) { bruh = "+"; question = question.replace("+", "") }
        else if (question.includes("-")) { bruh = "-"; question = question.replace("-", "") }
        var ns = question.match(bro)
        var n1 = ns[0]
        var n2 = ns[1]

        if (n1.includes("0b")) { n1 = parseInt(n1.slice(2), 2) }
        else if (n1.includes("O")) { n1 = parseInt(n1.slice(1), 8) }
        else { n1 = parseInt(n1) }
        if (n2.includes("0b")) { n2 = parseInt(n2.slice(2), 2) }
        else if (n2.includes("O")) { n2 = parseInt(n2.slice(1), 8) }
        else { n2 = parseInt(n2) }

        console.log(n1)
        console.log(n2)
        var ss;
        if (question.includes("шестнадцатерично")) {ss = 16}
        else if (question.includes("десятично")) {ss = 10}
        else if (question.includes("двоично")) {ss = 2}
        else if (question.includes("восьмерично")) {ss = 8}

        if (bruh == "+") { document.getElementsByName("a_form_id[]")[0].value = (n1 + n2).toString(ss).toUpperCase() }
        else if (bruh == "-") { document.getElementsByName("a_form_id[]")[0].value = (n1 - n2).toString(ss).toUpperCase() }
    }

    function sdvig(d) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        question = question.replace("1-", "-")
        question = question.replace(" 1 ", "-")
        var n = question.match(bro)[0]
        console.log(n)

        if (n.includes("0b")) { n = parseInt(n.slice(2), 2) }
        else if (n.includes("O")) { n = parseInt(n.slice(1), 8) }
        else { n = parseInt(n) }
        console.log(n)

        if (question.includes("однобайтового")) {
            //console.log("0".repeat(8 -n.toString(2).length) + n.toString(2))
            console.log("bro")
            console.log(n.toString(2).length)
            if (d == "left") { n = ("0".repeat(8 - n.toString(2).length) + n.toString(2) + "0").slice(1)}
            else if (d == "right") { n = ("0" + n.toString(2)).slice(0, -1) }
        }
        else {
            console.log("nope")
            if (d == "left") { n = (n.toString(2) + "0") }
            else if (d == "right") { n = ("0" + n.toString(2)).slice(0, -1) }
        }
        console.log(n)
        var ss = 10;
        if (question.includes("шестнадцатеричном")) { ss = 16}
        else if (question.includes("десятичном")) { ss = 10 }
        else if (question.includes("восьмеричном")) { ss = 8 }
        else if (question.includes("двоичном")) { ss = 2 }

        document.getElementsByName("a_form_id[]")[0].value = (parseInt(n, 2)).toString(ss).toUpperCase()
    }

    function xorim(bruh) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        question = question.replace("1-", "-")
        question = question.replace(" 1 ", "-")
        var n1 = question.match(bro)[0]
        var n2 = question.match(bro)[1]

        if (n1.includes("0b")) { n1 = parseInt(n1.slice(2), 2) }
        else if (n1.includes("O")) { n1 = parseInt(n1.slice(1), 8) }
        else { n1 = parseInt(n1) }

        if (n2.includes("0b")) { n2 = parseInt(n2.slice(2), 2) }
        else if (n2.includes("O")) { n2 = parseInt(n2.slice(1), 8) }
        else { n2 = parseInt(n2) }

        var ss = 10
        if (question.includes("шестнадцатеричном")) { ss = 16}
        else if (question.includes("в шестнадцатеричной")) { ss = 16 }
        else if (question.includes("в десятичной")) { ss = 10 }
        else if (question.includes("десятичном")) { ss = 10 }
        else if (question.includes("восьмеричном")) { ss = 8 }
        else if (question.includes("в восьмеричной")) { ss = 8 }
        else if (question.includes("двоичном")) { ss = 2 }
        else if (question.includes("в двоичной")) { ss = 2 }

        console.log(n1)
        console.log(n2)

        document.getElementsByName("a_form_id[]")[0].value = (n1^n2).toString(ss).toUpperCase()
    }

    function vicht(bruh) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        var n1 = question.match(bro)[0]
        var n2 = question.match(bro)[1]

        if (n1.includes("0b")) { n1 = parseInt(n1.slice(2), 2) }
        else if (n1.includes("O")) { n1 = parseInt(n1.slice(1), 8) }
        else { n1 = parseInt(n1) }

        if (n2.includes("0b")) { n2 = parseInt(n2.slice(2), 2) }
        else if (n2.includes("O")) { n2 = parseInt(n2.slice(1), 8) }
        else { n2 = parseInt(n2) }

        var ss = 10
        if (question.includes("шестнадцатерично")) { ss = 16}
        else if (question.includes("десятично")) { ss = 10 }
        else if (question.includes("восьмерично")) { ss = 8 }
        else if (question.includes("двоично")) { ss = 2 }

        if (bruh != "sloj") { document.getElementsByName("a_form_id[]")[0].value = (n1 - n2).toString(ss).toUpperCase() }
        else { document.getElementsByName("a_form_id[]")[0].value = (n1 + n2).toString(ss).toUpperCase() }
    }

    function pereve(o) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        if (question.includes("0b")) {
            question = question.replaceAll("1 1", "11")
            question = question.replaceAll("1 0", "10")
            question = question.replaceAll("0 1", "01")
            question = question.replaceAll("0 0", "00")
        }
        var n = question.match(bro)[0]
        var bi
        if (n.includes("0b")) { bi = parseInt(n.slice(2), 2) }
        else if (n.includes("O")) { bi = parseInt(n.slice(1), 8) }
        else { bi = parseInt(n) }

        if (question.includes("шестнадцатеричное.")) { o = 16 }
        else if (question.includes("десятичное.")) { o = 10 }
        else if (question.includes("восьмеричное.")) { o = 8 }
        else if (question.includes("двоичное.")) { o = 2 }

        document.getElementsByName("a_form_id[]")[0].value = bi.toString(o).toUpperCase()
    }

    function iz(ss) {
        var bro = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g;
        var n = parseInt(question.match(bro)[0], ss)
        if (question.includes("шестнадцатеричную")) { ss = 16 }
        else if (question.includes("десятичную")) { ss = 10 }
        else if (question.includes("девятиричную")) { ss = 6 }
        else if (question.includes("восьмеричную")) { ss = 8 }
        else if (question.includes("семеричную")) { ss = 6 }
        else if (question.includes("шестеричную")) { ss = 6 }
        else if (question.includes("пятеричную")) { ss = 5 }
        else if (question.includes("четверичную")) { ss = 4 }
        else if (question.includes("троичную")) { ss = 3 }
        else if (question.includes("двоичную")) { ss = 2 }
        document.getElementsByName("a_form_id[]")[0].value = n.toString(ss).toUpperCase()
    }

    var baza = {
        "Запишите в десятичной": [barseInt, 10],
        "Запишите в шестнадцатеричной": [barseInt, 16],
        "Запишите в двоичной": [barseInt, 2],
        "Запишите в восьмеричной": [barseInt, 8],
        "в шестнадцатеричную систему": [barseInt, 16],
        "Переведите в двоичную": [barseInt, 2],
        "Переведите в восьмеричную": [barseInt, 8],
        "Решите пример": [primer, 16],
        "Выполните операцию логического сдвига влево": [sdvig, "left"],
        "Выполните операцию логического сдвига вправо": [sdvig, "right"],
        "Выполните операцию XOR": [xorim, "bruh"],
        "Из числа": [vicht, "bruh"],
        "Переведите бинарное": [pereve, 10],
        "Переведите восьмеричное": [pereve, 10],
        "Переведите шестнадцатеричное": [pereve, 10],
        "Переведите в десятичную": [barseInt, 10],
        "Выполните сложение": [vicht, "sloj"],
        "из троичной с": [iz, 3],
        "из четверичной с": [iz, 4],
        "из пятеричной с": [iz, 5],
        "из шестеричной с": [iz, 6],
        "из девятиричной с": [iz, 9]
    }


    var qq = "NONE";
    var kys = Object.keys(baza)
    for (var i=0; i < kys.length; i++) {
        if (question.includes(kys[i])) {
            console.log(kys[i])
            qq = kys[i]
            break
        }
    }


    //document.evaluate("//*[contains(@value, 'Отослать ответ')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    document.addEventListener("keydown", function(e) {
        if (e.key == "`") {
            baza[qq][0](baza[qq][1])
        }
    })

    var broo = /\b(O[0-9a-fA-F]+|0b[0-9a-fA-F]+|0x[0-9a-fA-F]+|[0-9]+)\b/g
    document.getElementsByName("a_form_id[]")[0] = " "
    if (question.includes("0b")) {
        question = question.replaceAll("1 1", "11")
        question = question.replaceAll("1 0", "10")
        question = question.replaceAll("0 1", "01")
        question = question.replaceAll("0 0", "00")
    }
    question = question.replace("1-", "-")
    question = question.replace(" 1 ", "-")
    var mc = question.match(broo)

    for (i = 0; i < mc.length; i++) {
        if (mc[i].includes("0b")) { mc[i] = parseInt(mc[i].slice(2), 2) }
        else if (mc[i].includes("O")) { mc[i] = parseInt(mc[i].slice(1), 8) }
        else { mc[i] = parseInt(mc[i]) }
    }

    var hint = ""
    for (i = 0; i < mc.length; i++) {
        hint += mc[i].toString(16) + "\n" + mc[i].toString(10) + "\n" + mc[i].toString(8) + "\n" + mc[i].toString(2)
            + "\n\n"
    }
    document.getElementsByName("a_form_id[]")[0].title = hint
    document.getElementsByName("a_form_id[]")[0].addEventListener("click", function() {
        try {
            var ab = document.getElementsByName("a_form_id[]")[0].value
            if (ab.includes("0b")) { ab = parseInt(ab.slice(2), 2) }
            else if (ab.includes("O")) { ab = parseInt(ab.slice(1), 8) }
            else { ab = parseInt(ab) }
            var hihi = "------\n" + ab.toString(16) + "\n" + ab.toString(10) + "\n" + ab.toString(8) + "\n" + ab.toString(2)
            document.getElementsByName("a_form_id[]")[0].title = hint + hihi

        } catch {}
    })

})()