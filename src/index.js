module.exports = function toReadable (number) {
            let str = number.toString();
              let result ='';
              var i = 0;          
              while (i <=str.length - 1  ){
       if (i === str.length - 3){
                  switch (str[str.length - 3]){
                    case '1': result = `one hundred`; 
                        break;
                     case '2': result = `two hundred`; 
                        break;
                     case '3': result = `three hundred`; 
                        break;
                     case '4': result = `four hundred`; 
                        break;
                     case '5': result = `five hundred`; 
                        break;
                     case '6': result = `six hundred`; 
                        break;
                     case '7': result = `seven hundred`; 
                        break;
                     case '8': result = `eight hundred`; 
                        break;
                     case '9': result = `nine hundred`; 
                        break;
                    }  
                  }
                  else if (str[str.length - 3] === undefined && str[str.length - 2] === undefined && str[str.length - 1] === '0') {
                     return ('zero');
                  }                           
                 else if (i === str.length - 2 && str[str.length - 2] === '1') {
                            switch (str[str.length - 1]){
                             case '1': result = `${result + ' '}eleven`;
                                
                                break;
                             case '2': result = `${result+ ' '}twelve`; 
                                break;
                             case '3': result = `${result+ ' '}thirteen`; 
                                break;
                             case '4': result = `${result+ ' '}fourteen`; 
                                break;
                             case '5': result = `${result+ ' '}fifteen`; 
                                break;
                             case '6': result = `${result+ ' '}sixteen`; 
                                break;
                             case '7': result = `${result+ ' '}seventeen`;
                                break;
                             case '8': result = `${result+ ' '}eighteen`; 
                                break;
                             case '9': result = `${result+ ' '}nineteen`; 
                                break;
                             case '0': result = `${result+ ' '}ten`;
                   break; 
                    }
         }   
  else if (i === str.length - 2 && str[str.length - 2] !== '1') {
                  switch (str[str.length - 2]){
                     case '2': result = `${result+ ' '}twenty`; 
                        break;
                     case '3': result = `${result+ ' '}thirty`; 
                        break;
                     case '4': result = `${result+ ' '}forty`; 
                        break;
                     case '5': result = `${result+ ' '}fifty`; 
                        break;
                     case '6': result = `${result+ ' '}sixty`; 
                        break;
                     case '7': result = `${result+ ' '}seventy`; 
                        break;
                     case '8': result = `${result+ ' '}eighty`; 
                        break;
                     case '9': result = `${result+ ' '}ninety`; 
                        break;
                     case '0': result = `${result}`;
                    }  
                  }
else if (i === str.length - 1 && str[str.length - 2] === '1') {
  result = `${result}`;
}              
                else if (i === str.length - 1 && str[str.length - 2] !== '1') {
                  switch (str[str.length - 1]){
                   case '1': result = `${result+ ' '}one`; 
                      break;
                   case '2': result = `${result+ ' '}two`; 
                      break;
                   case '3': result = `${result+ ' '}three`; 
                      break;
                   case '4': result = `${result+ ' '}four`; 
                      break;
                   case '5': result = `${result+ ' '}five`; 
                      break;
                   case '6': result = `${result+ ' '}six`; 
                      break;
                   case '7': result = `${result+ ' '}seven`; 
                      break;
                   case '8': result = `${result+ ' '}eight`; 
                      break;
                   case '9': result = `${result+ ' '}nine`; 
                      break;
                   case '0': result = `${result}`;
                       break;
                  }
                }               

                    i += 1;
                }
            
            result = result.trimStart().trimEnd();
            return result;
            }
   
            
    

