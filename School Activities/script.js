let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
let sub3 = document.getElementById("sub3");
let sub4 = document.getElementById("sub4");
let sub5 = document.getElementById("sub5");
let sub6 = document.getElementById("sub6");
let sub7 = document.getElementById("sub7");
let sub8 = document.getElementById("sub8");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function(){

    let val1 = parseInt(sub1.value);
    let val2 = parseInt(sub2.value);
    let val3 = parseInt(sub3.value);
    let val4 = parseInt(sub4.value);
    let val5 = parseInt(sub5.value);
    let val6 = parseInt(sub6.value);
    let val7 = parseInt(sub7.value);
    let val8 = parseInt(sub8.value);

    let total = val1+val2+val3+val4+val5+val6+val7+val8;
    let ave = total/8;

    document.getElementById("ave").innerHTML = `"Average: ${ave}"`;

    let status;
    if(ave >= 97){
        status = "With Highest Honors";
    }
    else if(ave >= 94){
        status = "With High Honors";
    }
    else if(ave >= 90){
        status = "With Honors";
    }
    else if(ave >= 80){
        status = "Passed";
    }
    else{
        status = "Failed";
    }

    document.getElementById("status").innerHTML = `Status: ${status}`;
});
