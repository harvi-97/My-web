console.log("script running......")
document.querySelector('.cross').style.dsiplay = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.dsiplay = 'inline'
        document.querySelector('.cross').style.dsiplay = 'none'
    }
    else{
        document.querySelector('.ham').style.dsiplay = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.dsiplay = 'inline'
     
        },300)
        
    }
})