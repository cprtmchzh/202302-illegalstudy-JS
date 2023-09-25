function numInput(num_1) {
    var check = num_1 || 0;
    console.log(check);
}

function numCheck(num_2) {
    var check_2 = !isNaN(num_2) || "It's not a Number";
    if (check_2) check_2 = "Success";
    console.log(check_2);
}
    
    numInput(123); // 값을 넣지 않아도 기본적으로 0 할당
    numCheck(123123); // 숫자인지 아닌지 판별