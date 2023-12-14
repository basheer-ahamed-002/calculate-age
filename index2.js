const age=document.querySelector(".cal");
const date=document.querySelector(".date")
const cal=document.querySelector(".result")
const click=document.querySelector(".click")
const act=document.querySelector(".main")
 

age.addEventListener('click',tabclick);

function tabclick(){
    let birthdate=new Date( date.value);

    let d1=birthdate.getDate();
    let m1=birthdate.getMonth();
    let y1=birthdate.getFullYear();
    

    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();

    let d3,m3,y3;
    y3=y2-y1;

    if(m2>m1){
        m3=m2-m1;

    }else{
        y3--;
        m3 =12+ m2-m1;
    }
    if(d2>d1){
        d3=d2-d1
    }else{
        m3--;
        d3=getdays(m1,m2)+d2-d1
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    cal.innerHTML=`you are ${y3} years,${m3}months and ${d3}days old`
    


}

function getdays(year,month){
    return new Date(year,month,0).getDate();
}

click.addEventListener('click',()=>{
    act.classList.add('active-main');
    click.classList.add('active')

})