let result = document.getElementById("result");
let temp = ""
function getData(data){
    let input = data.innerText;
    
    if(input == '='){
        let answer = eval(temp);
        let format = parseFloat(answer);
        
        if(format % 1 !== 0){
            format = +format.toFixed(3);
        }
        result.innerHTML = format;
        temp = answer;

        if(format.toString().length > 10){
            result.style.fontSize = "1.5rem";
        }
        else{
            result.style.fontSize = "2.5rem";
        }
    }
    else{
        temp += input
        console.log(temp);
        result.innerHTML = temp;
        
        if(temp.length > 16){
            result.style.fontSize = "1.2rem";
        }
        else if(temp.length > 12){
            result.style.fontSize = "1.5rem"
        }
        else{
            result.style.fontSize = "2.5rem";
        }
    }
}
function clearForm(){
    result.innerHTML = 0;
    temp = "";
}
