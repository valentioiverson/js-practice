let year = 1900 ; // change to required year
if (year % 4 == 0 ){
    if( year % 100 == 0) {
        if(year % 400 == 0){
            console.log(true) ;
        }
        else{
            console.log(false);
        }
    } 
    else{
        console.log(true);
    }
}
