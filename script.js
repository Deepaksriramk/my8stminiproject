function bmi(){
   var Height= document.getElementById('height').value;
   var Weight=document.getElementById('weight').value;
    var Height=Height/100;
   var Bmi=Weight/(Height**2);
   Bmi=Bmi.toFixed(3);

   alert("your BMI is "+Bmi);
   document.getElementById('reveal').innerHTML='your BMI is '+Bmi;
   if(Bmi>35){
      document.getElementById('reveal1').innerHTML='Extremly Obese';
      document.getElementById('reveal1').style.color='red';
   }
   if(Bmi>30.34 && Bmi<34.90){
      document.getElementById('reveal1').innerHTML='Obesity';
      document.getElementById('reveal1').style.color='red';
   }
   if(Bmi>25.299 && Bmi<29,90){
      document.getElementById('reveal1').innerHTML='OverWeight';
      document.getElementById('reveal1').style.color='red';
   }
   if(Bmi>18.5 && Bmi<24.9){
      document.getElementById('reveal1').innerHTML='Normal';
      document.getElementById('reveal1').style.color='green';
   }
   else{
      document.getElementById('reveal1').innerHTML='UnderWeight';
      document.getElementById('reveal1').style.color='red';
   }
   document.getElementById('height').value='';
   document.getElementById('weight').value='';
   // var hii=prompt('enter final');
}
addEventListener("keydown",(e)=>e.key === "Enter" && bmi());