const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var str='';
	var str2='';
	var str3='';
	for(var  i=0;i<expr.length;i+=10){
		var count=i+10;
		var str1=expr.slice(i,count);
		if (str1=='**********'){
			str+=' ';
			continue;
		}
		str2='';
		str3='';
		for(var k=0;k<str1.length;k+=2){
			str2=str1[k]+str1[k+1];
			if (str2=='00'){
				continue;
			}
			if(str2=='10'){
				str3+='.';
				
			}
			if(str2=='11'){
				str3+='-';
				
			} 
			if(k==str1.length-2){
				str += MORSE_TABLE[str3];
				
			}
				
		}
	}
	return str;
}

module.exports = {
    decode
}