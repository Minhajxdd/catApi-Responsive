// 830 px toggle 

let toggle = document.querySelector(".dropToggle");

toggle.addEventListener("click", () =>{
    let dropDown = document.querySelector(".drop");

    if(dropDown.style.display === 'none'){
        dropDown.style.display = 'block';
    }else{
        dropDown.style.display = 'none';
    }

    
})