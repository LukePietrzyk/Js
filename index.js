/* "use strict";

let ileDanych = prompt("Wprowadz liczbe osob do obliczneia BMI");

if(ileDanych == 1){
    let wzrost = prompt("Wprowadz wzrost: ");
    let waga = prompt("Wprowadz wage: ");
    let osoba = [wzrost,waga];
    calculatorBMI(osoba[0],osoba[1],osoba.length,dataStorage);

}else if(ileDanych == 2){
    
    //let wzrost1 = prompt("Wprowadz wzrost1: ");
    //let waga1 = prompt("Wprowadz wage1: ");
    //let wzrost2 = prompt("Wprowadz wzrost2: ");
    //let waga2 = prompt("Wprowadz wage2: "); 
    let osoba1 = [1.69,90,1];
    let osoba2 = [1.79,80,1,1];

    calculatorBMI(osoba1[0],osoba1[1],osoba1.length,dataStorage);
    calculatorBMI(osoba2[0],osoba2[1],osoba2.length,dataStorage);
}else{
    console.log("Wprowadz jeden lub 2");
}



function dataStorage(bmiData1,bmiData2){
    
    let bmiDataPPL = [];
        
    bmiDataPPL.push(bmiData1)[0];
    console.log("Osoba 1 BMI "+ bmiDataPPL[0]);
   
    bmiDataPPL.push(bmiData2)[1];
    console.log("Osoba 2 BMI "+ bmiDataPPL[1]);
    
}

function calculatorBMI(height,mass,length,myCallBack){

    let BMI1;
    let BMI2;

    if(length === 3){
        BMI1 = Math.round(mass/(height*height));
        return BMI1;
    }else if(length === 4){
        BMI2 = Math.round(mass/(height*height));
        return BMI2;
    }else{

    }
    
    myCallBack(BMI1,BMI2);
        
 }
*/