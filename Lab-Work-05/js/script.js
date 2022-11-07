function userForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.getElementsByName("membership");
    var membershipValue;
    for(var i = 0; i < membership.length; i++){
        if(membership[i].checked)
            membershipValue = membership[i].value;
    }
    document.getElementById("output").innerHTML = "First Name: " + fname + "<br>" + "Last Name: " + lname + "<br>" + "Email: " + email + "<br>" + "Address: " + address + "<br>" + "City: " + city + "<br>" + "Province: " + province + "<br>" + "Membership: " + membershipValue;
}

const form = document.getElementById("btn");
form.addEventListener("click", myExcelFuns);

function myExcelFuns(){ 
    let numberStr = document.getElementById("numbers").value;
    if ((numberStr == "")||(numberStr == null)){
        document.getElementById("output").innerHTML = "Please enter a number";
    }else{
        let numberArr = numberStr.split(" ");
        numberArr = numberArr.filter(function (el) {
            return el != "";
        });

        let calcul = document.getElementsByName("result");
        let choice;
        for(var j = 0; j < calcul.length; j++){
            if(calcul[j].checked){
                choice = calcul[j].value;
            }
        }

        let finalArr=[];
        for(i=0; i<numberArr.length; i++){
            finalArr[i] = parseInt(numberArr[i]);
        }

        if (choice == "AutoSum"){
            let sum = 0;
            for (let i = 0; i < finalArr.length; i++){
                sum += finalArr[i];
            }
            document.getElementById("output").innerHTML = "Sum: " + sum;
        }else if(choice == "Average"){
            let sum = 0;
            for (let i = 0; i < finalArr.length; i++){
                sum += finalArr[i];
            }
            let avg = sum / finalArr.length;
            document.getElementById("output").innerHTML = "Average: " + avg;
        }else if(choice == "Max"){
            let max = Math.max(...finalArr);
            document.getElementById("output").innerHTML = "Max: " + max;
        }else if(choice == "Min"){
            let min = Math.min(...finalArr);
            document.getElementById("output").innerHTML = "Min: " + min;
        }
    }
}
