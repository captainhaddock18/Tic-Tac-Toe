let arr = [null,null,null,null,null,null,null,null,null];
console.log(arr)
count = 0
clicked = (id) =>{
    let num = id.charCodeAt(0)
    num = num - 97
    if( count<=8)  {
        if(count%2 == 0){
            //  console.log("X");
            let er = document.getElementById(id).querySelector('div')
            let vi = getComputedStyle(er).visibility
            console.log(er,vi)
             if(vi === "hidden"){
               let ele = document.getElementById(id).querySelector('h1')
              console.log(ele)
              ele.style.visibility = 'visible' 
              arr[num]= 4
              if((arr[0]==4 && arr[4]==4 && arr[8]==4) || (arr[2]==4 && arr[4]==4 && arr[6]==4)  || (arr[0]==4 && arr[3]==4 && arr[6]==4) || (arr[1]==4 && arr[4]==4 && arr[7]==4)  || (arr[2]==4 && arr[5]==4 && arr[8]==4) || (arr[0]==4 && arr[1]==4 && arr[2]==4)  || (arr[3]==4 && arr[4]==4 && arr[5]==4)  || (arr[6]==4 && arr[7]==4 && arr[8]==4) ){
                alert("X WON!");
                a = document.getElementsByClassName('X')
                b = document.getElementsByClassName('O')
                i = 0 
                count = 0
                arr = [null,null,null,null,null,null,null,null,null];
                while(i<9){
                    a[i].style.visibility = "hidden"
                    b[i].style.visibility = "hidden"
                    i=i+1
        
                }                                                 
                
            }
              if((arr[0]==5 && arr[4]==5 && arr[8]==5) || (arr[2]==5 && arr[4]==5 && arr[6]==5)  || (arr[0]==5 && arr[3]==5 && arr[6]==5) || (arr[1]==5 && arr[4]==5 && arr[7]==5)  || (arr[2]==5 && arr[5]==5 && arr[8]==5) || (arr[0]==5 && arr[1]==5 && arr[2]==5)  || (arr[3]==5 && arr[4]==5 && arr[5]==5)  || (arr[6]==5 && arr[7]==5 && arr[8]==5) ){
                alert("O WON!");
                a = document.getElementsByClassName('X')
                b = document.getElementsByClassName('O')
                i = 0 
                count = 0
                arr = [null,null,null,null,null,null,null,null,null];
                while(i<9){
                    a[i].style.visibility = "hidden"
                    b[i].style.visibility = "hidden"
                    i=i+1
        
                }  
        
            }
        
              count = count + 1; 
            }
          } 
          else{
          let er = document.getElementById(id).querySelector('h1')
          let vi = getComputedStyle(er).visibility
          console.log(er)
          if(vi === 'hidden'){
             let ele = document.getElementById(id).querySelector('div')
              console.log(ele)
              ele.style.visibility = 'visible' 
              arr[num] = 5  
              if((arr[0]==4 && arr[4]==4 && arr[8]==4) || (arr[2]==4 && arr[4]==4 && arr[6]==4)  || (arr[0]==4 && arr[3]==4 && arr[6]==4) || (arr[1]==4 && arr[4]==4 && arr[7]==4)  || (arr[2]==4 && arr[5]==4 && arr[8]==4) || (arr[0]==4 && arr[1]==4 && arr[2]==4)  || (arr[3]==4 && arr[4]==4 && arr[5]==4)  || (arr[6]==4 && arr[7]==4 && arr[8]==4) ){
                alert("X WON!");
                a = document.getElementsByClassName('X')
                b = document.getElementsByClassName('O')
                i = 0 
                count = 0
                arr = [null,null,null,null,null,null,null,null,null];
                while(i<9){
                    a[i].style.visibility = "hidden"
                    b[i].style.visibility = "hidden"
                    i=i+1
        
                }                                                 
                
            }
              if((arr[0]==5 && arr[4]==5 && arr[8]==5) || (arr[2]==5 && arr[4]==5 && arr[6]==5)  || (arr[0]==5 && arr[3]==5 && arr[6]==5) || (arr[1]==5 && arr[4]==5 && arr[7]==5)  || (arr[2]==5 && arr[5]==5 && arr[8]==5) || (arr[0]==5 && arr[1]==5 && arr[2]==5)  || (arr[3]==5 && arr[4]==5 && arr[5]==5)  || (arr[6]==5 && arr[7]==5 && arr[8]==5) ){
                alert("O WON!");
                a = document.getElementsByClassName('X')
                b = document.getElementsByClassName('O')
                i = 0 
                count = 0
                arr = [null,null,null,null,null,null,null,null,null];
                while(i<9){
                    a[i].style.visibility = "hidden"
                    b[i].style.visibility = "hidden"
                    i=i+1
        
                }  
        
            }   
              
              count = count + 1; 
         } 
          }
    }  
    else{
        a = document.getElementsByClassName('X')
        b = document.getElementsByClassName('O')
        alert('GAME DRAW')
        count = 0
        i = 0 
        arr = [null,null,null,null,null,null,null,null,null];
        while(i<9){
            a[i].style.visibility = "hidden"
            b[i].style.visibility = "hidden"
            i=i+1

        }                                                   
        
    }


    console.log(arr)
    console.log(count)
}
function restart(){
    a = document.getElementsByClassName('X')
    b = document.getElementsByClassName('O')
    alert('New Game!')
    count = 0
    i = 0 
    arr = [null,null,null,null,null,null,null,null,null];
    while(i<9){
        a[i].style.visibility = "hidden"
        b[i].style.visibility = "hidden"
        i=i+1

    }    

}