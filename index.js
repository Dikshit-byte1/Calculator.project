function input(num){
    var text = document.form.number.value;
    document.form.number.value = text+num;
}
function square_root(){
    document.form.number.value = Math.sqrt(document.form.number.value);
}
function cancel(){
    document.form.number.value = "";
}
function clean(){
    var text = document.form.number.value;
    document.form.number.value = text.substring(0,text.length-1);
}
function square(){
    var text = document.form.number.value;
    document.form.number.value = Math.pow(text,2);
}
function plus_minus(){
    var text = document.form.number.value;
    document.form.number.value = -(text);
}
function equal(){
    var text = document.form.number.value;
    document.form.number.value = eval(text);
}
