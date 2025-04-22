//select side navbar
var sidenavbar=document.querySelector(".sidenavbar")

function shownavbar()
{
    sidenavbar.style.left="0"
}

function closenavbar()
{
    sidenavbar.style.left="-60%"
}

//select searcher page
var dish=document.getElementById("dishboxpage")
var searching=document.getElementById("searching")
var dishlist=dish.querySelectorAll("div")

searching.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    
    for(count=0;count<dishlist.length;count=count+1)
    {
        var dishname=dishlist[count].querySelector("h3").textContent

        if(dishname.toUpperCase().indexOf(enteredvalue)<0) 
        {
            dishlist[count].style.display="none"
        }
        else{
            dishlist[count].style.display="block"
        }
    }
})