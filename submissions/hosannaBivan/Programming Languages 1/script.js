document.open();

// print numbers from 1 to 116
for(i = 1; i <= 116; i++){
    
    if(i % 15 == 0){
        document.write("Software Developer");
    }

    // multiples of 3 prints Software
    else if(i % 3 == 0){
        document.write("Software");
    }

     // multiples of 5 prints Developer
    else if(i % 5 == 0){
        document.write("Developer");
    }  

    else {
        document.write(i);
    }

}

document.close();


