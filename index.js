const input=document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer=Math.floor(Math.random()*35)+1;
//console.log(answer);
input.addEventListener("keypress", function(e){
    if (e.keyCode===13){
        play();
    }
})

button.addEventListener("click", play);

function play(){
    const userNumber=document.querySelector("#guess").value;
    //console.log(userNumber);
    if (userNumber< 5 || userNumber> 35){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 5 to 35',
           
          })
    }
    else if (isNaN (userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number',
    })
    }
    else{
        if(userNumber<answer){
            Swal.fire('Enter above!','The computer is winning');
        }
        else if(userNumber>answer){
           Swal.fire("Enter below!","the computer is winning");
        }
        else{
            Swal.fire({
                title: 'YOU ARE WON!!!',
                width: 500,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url(https://media.tenor.com/ang0VzOwbdAAAAAC/the-matrix-reloaded-matrix.gif)
                 right top
                  no-repeat
                `
              })
        }
    }
}

let text="Let's Play...";
let i=0;
let speed=300;

function type(){
    if(i< text.length){
        document.querySelector("#par").textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();