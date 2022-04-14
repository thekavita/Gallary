


function resetEverything(){
    document.getElementById("panel-1").classList.remove("fulsize");
    document.getElementById("panel-2").classList.remove("fulsize");
    document.getElementById("panel-3").classList.remove("fulsize");
    document.getElementById("panel-4").classList.remove("fulsize");
    document.getElementById("panel-5").classList.remove("fulsize");
    document.getElementById("panel-6").classList.remove("fulsize");
    document.getElementById("panel-7").classList.remove("fulsize");

}

function expand(a){
     console.log(a);
     resetEverything();
    document.getElementById(a).classList.add("fulsize");
}