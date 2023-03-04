const keys="cfb5b48c51fc2ee019187a2aa7a959b3";

const fetchData= async(value)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${keys}`
    respone= await fetch(url)
    data= await respone.json();
    displayData(data);
}
fetchData("dhaka");


const displayData=data =>{
    console.log(data);
    if(data.cod == 404){
        document.getElementById("status").innerHTML="No Data Found"
        document.getElementById("name").innerText='';
        document.getElementById("temp").innerHTML='';
        document.getElementById('weather').innerHTML='';
        document.getElementById("input").value;
    }
    else{
        document.getElementById("status").innerHTML="";
        const name=data.name;
        let temp=data.main.temp;
        temp=temp-273;
        temp=temp.toFixed(2);
        const weather=data.weather[0].main;
        // console.log(name,temp,weather);
        document.getElementById("name").innerText=name;
        document.getElementById("temp").innerHTML=temp;
        document.getElementById('weather').innerHTML=weather;
        document.getElementById("input").value;
    }
    
}


document.getElementById("search").addEventListener("click",function(){
    const value=document.getElementById("input").value;
    fetchData(value);
})