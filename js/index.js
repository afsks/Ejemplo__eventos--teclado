var teclas = {
   A:65,
   B:66,
   C:67,
   D:68,
   E:69,
   F:70,
   G:71,
   H:72,
   I:73,
   J:74,
   K:75,
   L:76,
   M:77,
   N:78,
   O:79,
   P:80,
   Q:81,
   R:82,
   S:83,
   T:84,
   U:85,
   V:86,
   W:87,
   X:88,
   Y:89,
   Z:90,

    Ñ:192,
    ENTER: 13,
    UP:38
};

document.addEventListener("keydown", myFunction);
// function myFunction(keydown) {
//     console.log(keydown.keyCode);
// }


function myFunction(keydown){
    switch (keydown.keyCode) {
        case 65:
            document.getElementById("section").style.backgroundColor = "#ff0000";
            break;
        case 66:
            document.getElementById("section").style.backgroundColor = "#00ffd5";
            break;
        case 67:
            document.getElementById("section").style.backgroundColor = "#ffbb00";
            break;
        case 68:
            document.getElementById("section").style.backgroundColor = "#ffee00";
            break;
        case 69:
            document.getElementById("section").style.backgroundColor = "#a6ff00";
            break;
        case 70:
            document.getElementById("section").style.backgroundColor = "#48ff00";
            break;
        case 71:
            document.getElementById("section").style.backgroundColor = "#00ff2a";
            break;
        case 72:
            document.getElementById("section").style.backgroundColor = "#00ff80";
            break;
        case 73:
            document.getElementById("section").style.backgroundColor = "#00ffd5";
            break;
        case 74:
            document.getElementById("section").style.backgroundColor = "#00a2ff";
            break;
        case 75:
            document.getElementById("section").style.backgroundColor = "#0044ff";
            break;
        case 76:
            document.getElementById("section").style.backgroundColor = "#1900ff";
            break;
        case 77:
            document.getElementById("section").style.backgroundColor = "#7700ff";
            break;
        case 78:
            document.getElementById("section").style.backgroundColor = "#c300ff";
            break; 
            
            
        case 79:
            document.getElementById("section").style.backgroundColor = "#ff00d4";
            break;
        case 80:
            document.getElementById("section").style.backgroundColor = "#ff006a";
            break;
        case 81:
            document.getElementById("section").style.backgroundColor = "#a0e426";
            break;
        case 82:
            document.getElementById("section").style.backgroundColor = "#52e3e1";
            break;
        case 83:
            document.getElementById("section").style.backgroundColor = "#48bfe3";
            break;
        case 84:
            document.getElementById("section").style.backgroundColor = "#f20089";
            break;
        case 85:
            document.getElementById("section").style.backgroundColor = "#2d00f7";
            break;
        case 86:
            document.getElementById("section").style.backgroundColor = "#fdfffc";
            break;
        case 87:
            document.getElementById("section").style.backgroundColor = "#bfd200";
            break;
        case 88:
            document.getElementById("section").style.backgroundColor = "#f15bb5";
            break; 
        case 89:
            document.getElementById("section").style.backgroundColor = "#d90429";
            break;
        case 90:
            document.getElementById("section").style.backgroundColor = "#7400b8";
            break; 
        case 192:
            document.getElementById("section").style.backgroundColor = "#03045e";
            break; 


        case 13:
            document.getElementById("body").style.backgroundColor = "red";
            break;
    
        default:
            alert("Error, tecla no admitida")
            break;
    }  
}
