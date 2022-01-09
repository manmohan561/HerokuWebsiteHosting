const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name')

const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');

const day=document.getElementById('day');
const today_date=document.getElementById('today_date')

const getInfo=async(event)=>{

    event.preventDefault();
    let cityVal=cityName.value;
    console.log(cityVal)
    if(cityVal===""){
        city_name.innerText="Please write the name before search"
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=92c4e8d8aca5b498a9164f2265d05601`
            const response= await fetch(url);
            const data=await response.json()
            let dataArr=[data]
            //console.log(dataArr)
            console.log(`${dataArr[0].name},${dataArr[0].sys.country}`)
            city_name.innerText=`${dataArr[0].name},${dataArr[0].sys.country}`
            temp.innerText=(dataArr[0].main.temp-273.15).toFixed(1);
            temp_status.innerText=dataArr[0].weather[0].main;
        }catch{
            city_name.innerText='Plz enter the city name properly'
        }
    }
}


const getCurrentDayName = () => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentTime = new Date();
    return weekday[currentTime.getDay()];
}

const getCurrentMonthName = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = d.getMonth();
    let day = d.getDate();
    let year=d.getFullYear();
    return `${day} ${months[month]} ${year}`;
}

submitBtn.addEventListener('click',getInfo)
day.innerText=getCurrentDayName();
today_date.innerText=getCurrentMonthName();