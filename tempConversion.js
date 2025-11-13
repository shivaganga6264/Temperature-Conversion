const textBtn=document.getElementById("textBtn");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const Result=document.getElementById("Result");

let temp;

function convert(){
              if(toFahrenheit.checked){
                            temp=Number(textBtn.value);
                            temp=temp*9/5+32;
                            Result.textContent=temp.toFixed(1)+"0F";

              }
              else if(toCelsius.checked){
                             temp=Number(textBtn.value);
                            temp=(temp-32)*(5/9);
                            Result.textContent=temp.toFixed(1)+"0C";

              }
              else{
                            Result.textContent="Select a unit";
              }
}
