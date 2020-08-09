var marks=0;
var counter=0;
const ids=['fir','sec','thi','four'];
var que=document.getElementById("question")
var fir=document.getElementById("fir")
var sec=document.getElementById("sec")
var thi=document.getElementById("thi")
var fou=document.getElementById("four")

var arr=[
["Who is the father of Computer ?","Charles Babbage","Johny Ibraham"
,"Jackqueline Fernandes","Akshay Kumar","Charles Babbage"],

["Who is the owner of Facebook ?","Charles Babbage","Mark Zukerberg"
,"Romeo","Juliet","Mark Zukerberg"],

["What is the name of the first and only Selected PM of Pakistan ?",
"Nawaz Sharif","Zia-ul-haq","Legend Nawab Liaquat Ali Khan","Shahid Afridi",
"Legend Nawab Liaquat Ali Khan"],

["Who is the motivational speaker among them ?","Sonu Nigam","Vikas Pandey",
"Imran Khan","Qasm Ali Shah","Qasm Ali Shah"],

["Who was called 'ustad-e-ghasal' ?","Allama Iqbal","Mirza Ghalib","John Elia"
,"Mohsin Naqvi","Mirza Ghalib"]
];
first();


//functions



// 0.
function foo(){
	var name=document.getElementById("input");
document.getElementById("name").style.display="none";
document.getElementById("main").style.display="block";
}


// 1.
function first(){
que.innerHTML=arr[0][0];
fir.innerHTML=arr[0][1];
sec.innerHTML=arr[0][2];
thi.innerHTML=arr[0][3];
fou.innerHTML=arr[0][4];
document.getElementById("q_show").innerHTML=`Question #(0${1} from 05)`;
}

// 2.
function select(a){
for (var i = 0; i <= 3; i++) {
if(document.getElementById(ids[i]).classList.contains("Selected")){
document.getElementById(ids[i]).classList.remove("Selected");
}
}
document.getElementById(a).classList.add("Selected");
}

// 3.
function change(){	
	for (var i = 0; i <= 3; i++)
	{
		if(document.getElementById(ids[i]).classList.contains("Selected"))
		{		var Selected_option=document.getElementById(ids[i]).innerHTML;	}
	}
		if(Selected_option==arr[counter][5])
		{		
			marks=marks+10;		
		}

counter++;
		if(counter==5)
		{
			alert("your marks are :" + marks);
			document.getElementById("name").style.display="block";
document.getElementById("main").style.display="none";
			first();
			document.getElementById('submit').innerHTML="Next";
			counter=0;
		}
		else
		{
document.getElementById("q_show").innerHTML=`Question #(0${counter+1} from 05)`			
que.innerHTML=arr[counter][0];
fir.innerHTML=arr[counter][1];
sec.innerHTML=arr[counter][2];
thi.innerHTML=arr[counter][3];
fou.innerHTML=arr[counter][4];

		if(counter==4)
		{
		document.getElementById("submit").innerHTML="submit";	
		}
	for (var i = 0; i <= 3; i++)
	{
		if(document.getElementById(ids[i]).classList.contains("Selected"))
		{
document.getElementById(ids[i]).classList.remove("Selected");
		}
	}
		}	
	}
