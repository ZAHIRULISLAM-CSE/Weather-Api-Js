const keys="cfb5b48c51fc2ee019187a2aa7a959b3";

const fetchData= async(value)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${keys}`
    respone= await fetch(url)
    data= await respone.json();
    displayData(data);
}

const displayData=data =>{
    console.log(data);
    const name=data.name;
    let temp=data.main.temp;
    temp=temp-273;
    const weather=data.weather[0].main;
    console.log(name,temp,weather);
}

document.getElementById("search").addEventListener("click",function(){
    const value=document.getElementById("input").value;
    fetchData(value);
})