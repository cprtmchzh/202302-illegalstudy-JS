document.getElementsByTagName("form")[0].onsubmit = function() {
    var inputNumber = this.inputNumber.value
    var check = '입력 성공';

    check = true || '문자열이 입력되지 않았습니다';
    alert(inputNumber);
}