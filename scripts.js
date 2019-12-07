

$(document).ready(function() {


    load_text();
    load_choice();

});


var check1_value = document.getElementById("Check1");
var check2_value = document.getElementById("Check2");
var check3_value = document.getElementById("Check3");
var check4_value = document.getElementById("Check4");
var check5_value = document.getElementById("Check5");
var check6_value = document.getElementById("Check6");
var btn_save_choice = document.getElementById("btn_save_choice");



function load_text() {
    var inputCity_fromStorege = localStorage.getItem('area');

    var inputCity = document.getElementById("inputCity");
    var inputCityLabel = document.getElementById("inputCityLabel");
    var inputCityHelp = document.getElementById("inputCityHelp");
    var delCity = document.getElementById("delCity");


    if (inputCity_fromStorege) {
        console.log('значение найдено - ', inputCity_fromStorege);
        inputCity.style.display = 'none';
        inputCityHelp.style.display = 'none';
        inputCityLabel.innerText = 'Здравствуйте!!! Привет городу ' + inputCity_fromStorege;
    }
    else {
        delCity.style.display = 'none';
        inputCity.style.display = 'block';
        console.log('значения нет');
    }

    var inputCity_fromText = '';
   
    inputCity.value = localStorage.getItem('area');
    inputCity.oninput = () => {
        inputCity_fromText = inputCity.value;
        console.log(inputCity_fromText);
        localStorage.setItem('area', inputCity_fromText);
    };
}


function del_save_City() {
    localStorage.removeItem('area');
}


function save_choice() {

    localStorage.setItem('Check1', check1_value.checked ? '1' : '0');
    localStorage.setItem('Check2', check2_value.checked ? '1' : '0');
    localStorage.setItem('Check3', check3_value.checked ? '1' : '0');
    localStorage.setItem('Check4', check4_value.checked ? '1' : '0');
    localStorage.setItem('Check5', check5_value.checked ? '1' : '0');
    localStorage.setItem('Check6', check6_value.checked ? '1' : '0');

}


function load_choice() {
    var check1_fromStorege = localStorage.getItem('Check1');
    var check2_fromStorege = localStorage.getItem('Check2');
    var check3_fromStorege = localStorage.getItem('Check3');
    var check4_fromStorege = localStorage.getItem('Check4');
    var check5_fromStorege = localStorage.getItem('Check5');
    var check6_fromStorege = localStorage.getItem('Check6');

    if (check1_fromStorege == '1' | check2_fromStorege == '1' | 
            check3_fromStorege == '1' | check4_fromStorege == '1' |
            check5_fromStorege == '1' | check6_fromStorege == '1') {
        if (check1_fromStorege == '1') {
            check1_value.checked = true;
        }
        if (check2_fromStorege == '1') {
            check2_value.checked = true;
        }
        if (check3_fromStorege == '1') {
            check3_value.checked = true;
        }
        if (check4_fromStorege == '1') {
            check4_value.checked = true;
        }
        if (check5_fromStorege == '1') {
            check5_value.checked = true;
        }
        if (check6_fromStorege == '1') {
            check6_value.checked = true;
        }
        btn_save_choice.setAttribute("disabled", "disabled");
        check1_value.setAttribute("disabled", "disabled");
        check2_value.setAttribute("disabled", "disabled");
        check3_value.setAttribute("disabled", "disabled");
        check4_value.setAttribute("disabled", "disabled");
        check5_value.setAttribute("disabled", "disabled");
        check6_value.setAttribute("disabled", "disabled");
    }
    

}