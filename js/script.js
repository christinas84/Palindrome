 function palindrome(){
        revString = "";
        inpString = document.getElementById("text").value;
        i = inpString.length;

        for(var j=i; j>=0; j--){
            revString = revString + inpString.charAt(j);
        }
        if(inpString === revString) {
            document.getElementById("answer").innerHTML = inpString+" is a palindrome";
        } else {
            document.getElementById("answer").innerHTML = inpString+" is not a palindrome";
        }
 }
   
   function clearAnswer(){
     document.getElementById("answer", "text").innerHTML = '';

   }

    
