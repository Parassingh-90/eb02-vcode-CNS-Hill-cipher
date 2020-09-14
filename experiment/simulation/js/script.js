document.getElementById("display").style.display="none";
	document.getElementById("display1").style.display="none";
	document.getElementById("f1").style.display="none";
	document.getElementById("f2").style.display="none";
	document.getElementById("display2").style.display="none";
	document.getElementById("logic2").style.display="none";
	document.getElementById("logic3").style.display="none";
	document.getElementById("logic4").style.display="none";
	document.getElementById("logic5").style.display="none";
	document.getElementById("displayopt").style.display="none";
	document.getElementById("f3").style.display="none";
	document.getElementById("logic6").style.display="none";
	document.getElementById("f4").style.display="none";
	document.getElementById("logic7").style.display="none";
	document.getElementById("logic8").style.display="none";
	document.getElementById("display3").style.display="none";
	document.getElementById("display4").style.display="none";
	document.getElementById("pst").style.display="none";
	document.getElementById("displayopt1").style.display="none";
	document.getElementById("displayopt2").style.display="none";
	document.getElementById("Dis").style.display="none";
	
	var log=2;
	function displaykey()
	{
		console.log("harsh");
		document.getElementById('00').innerHTML=document.getElementById('field00').value;
		document.getElementById('01').innerHTML=document.getElementById('field01').value;
		document.getElementById('10').innerHTML=document.getElementById('field10').value;
		document.getElementById('11').innerHTML=document.getElementById('field11').value;
		var one=parseInt(document.getElementById('field00').value);
		var two=parseInt(document.getElementById('field01').value);
		var three=parseInt(document.getElementById('field10').value);
		var four=parseInt(document.getElementById('field11').value);
		var one1=document.getElementById('field00').value;
		var two2=document.getElementById('field01').value;
		var three3=document.getElementById('field10').value;
		var four4=document.getElementById('field11').value;
		var res=(one*four)-(two*three)
		if(res==0)
		{
			document.getElementById("displayopt").style.display="block";
			document.getElementById("pst").style.display="block";
			document.getElementById("f4").style.display="block";
			document.getElementById("f").style.display="none";
			document.getElementById("logic1").style.display="none";
		}
		else
		{
			document.getElementById("display").style.display="block";
			document.getElementById("f").style.display="none";
			document.getElementById("f1").style.display="block";
			document.getElementById("logic1").style.display="none";
			document.getElementById("logic2").style.display="block";
		}
	}
	function displaykey1()
	{	
		var str=document.getElementById('f11').value;
		document.getElementById('pl').innerHTML=str;
		if(str=="")
		{
			document.getElementById("displayopt2").style.display="block";
			document.getElementById("f1").style.display="none";
			document.getElementById("f4").style.display="block";
			document.getElementById("logic2").style.display="none";
		}
		else
		{
		document.getElementById("display1").style.display="block";
		document.getElementById("f1").style.display="none";
		document.getElementById("f2").style.display="block";
		document.getElementById("logic2").style.display="none";
		document.getElementById("logic3").style.display="block";
		 document.getElementsByTagName('Submit').style.backgroundColor="gray";
		document.getElementById("Submit").disabled=true;
		}
	}
	function next()
	{
		var myalpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];
		var str=document.getElementById('f11').value;
		var one=parseInt(document.getElementById('field00').value);
		var two=parseInt(document.getElementById('field01').value);
		var three=parseInt(document.getElementById('field10').value);
		var four=parseInt(document.getElementById('field11').value);
		var pos=0
		var res1=0
		var res2=0
		var cipher="";
		str=str.toUpperCase();
		var n=str.length;
		if(n%2!=0)
		{
			str=str.concat("X");
		}
		for(var i=0;i<(n/2);i++)
		{
			res1=one*(myalpha.indexOf(str[pos]))+two*(myalpha.indexOf(str[pos+1]));
			res2=three*(myalpha.indexOf(str[pos]))+four*(myalpha.indexOf(str[pos+1]));
			res1=res1%26;
			res2=res2%26;
			cipher=cipher.concat(myalpha[res1]);
			cipher=cipher.concat(myalpha[res2]);
			pos=pos+2;
		}	
		document.getElementById("ci").innerHTML=cipher;
		if(log==2)
		{	
			document.getElementById("logic3").style.display="none";
			document.getElementById("logic4").style.display="block";
		}
		if(log==3)
		{
			document.getElementById("logic4").style.display="none";
			document.getElementById("logic5").style.display="block";
			document.getElementById("display2").style.display="block";
		}
		if(log==4)
		{
			document.getElementById("f2").style.display="none";
			document.getElementById("f1").style.display="none";
			document.getElementById("f3").style.display="block";
			document.getElementById("logic5").style.display="none";
			document.getElementById("logic6").style.display="block";
		}
			
		log=log+1;
		
	}
	function yes()
	{
		document.getElementById("logic6").style.display="none";
		document.getElementById("logic8").style.display="block";
		document.getElementById("f3").style.display="none";
		document.getElementById("f4").style.display="block";
		var te=document.getElementById("f11").value;
		document.getElementById("cl").innerHTML=te;
		document.getElementById("display3").style.display="block";
	}
	function no()
	{
		document.getElementById("logic6").style.display="none";
		document.getElementById("logic7").style.display="block";
		document.getElementById("f3").style.display="none";
		document.getElementById("f4").style.display="block";
		document.getElementById("display4").style.display="block";
	}
	function reset()
	{	
		log=2;
		document.getElementById('field00').value="";
		document.getElementById('field01').value="";
		document.getElementById('field10').value="";
		document.getElementById('field11').value="";
		document.getElementById("ci").value="";
		document.getElementById('f11').value="";
		document.getElementById("f").style.display="block";
		document.getElementById("display1").style.display="none";
		document.getElementById("display").style.display="none";
		document.getElementById("f2").style.display="none";
		document.getElementById("display2").style.display="none";
		document.getElementById("logic2").style.display="none";
		document.getElementById("logic3").style.display="none";
		document.getElementById("f1").style.display="none";	
		document.getElementById("logic1").style.display="block";
		document.getElementById("Submit").disabled=false;
		document.getElementById("logic4").style.display="none";
		document.getElementById("logic5").style.display="none";
		document.getElementById("displayopt").style.display="none";
		document.getElementById("f3").style.display="none";
		document.getElementById("logic6").style.display="none";
		document.getElementById("logic6").style.display="none";
		document.getElementById("f4").style.display="none";
		document.getElementById("logic7").style.display="none";
		document.getElementById("logic8").style.display="none";
		document.getElementById("display3").style.display="none";
		document.getElementById("cl").innerHTML="";
		document.getElementById("display4").style.display="none";
		document.getElementById("pst").style.display="none";
		document.getElementById("displayopt1").style.display="none";
		document.getElementById("displayopt2").style.display="none";
	
	}
	function viewresult()
	{
		var qans=0;
		var selected=0;

		//checking for total marked answers
		if(document.getElementById("op11").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op12").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op13").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op14").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op21").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op22").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op31").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op32").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op33").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op34").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op41").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op42").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op43").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op44").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op45").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op51").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op52").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op53").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("op54").checked==true){
			selected=selected+1;
		}

		if(selected==5){
		//checking users response
			if(document.getElementById("op11").checked==true){
				document.getElementById("lop11").style.color = 'red'; // red or #fffff
			}
			if(document.getElementById("op12").checked==true){
				document.getElementById("lop12").style.color = 'red';
			}
			if(document.getElementById("op13").checked==true){
				document.getElementById("lop13").style.color = 'red';
			}
			if(document.getElementById("op14").checked==true){
				document.getElementById("lop14").style.color = 'red';
			}
			if(document.getElementById("op21").checked==true){
				document.getElementById("lop21").style.color = 'red';
			}
			if(document.getElementById("op22").checked==true){
				document.getElementById("lop22").style.color = 'red';
			}
			if(document.getElementById("op31").checked==true){
				document.getElementById("lop31").style.color = 'red';
			}
			if(document.getElementById("op32").checked==true){
				document.getElementById("lop32").style.color = 'red';
			}
			if(document.getElementById("op33").checked==true){
				document.getElementById("lop33").style.color = 'red';
			}
			if(document.getElementById("op34").checked==true){
				document.getElementById("lop34").style.color = 'red';
			}
			if(document.getElementById("op41").checked==true){
				document.getElementById("lop41").style.color = 'red';
			}
			if(document.getElementById("op42").checked==true){
				document.getElementById("lop42").style.color = 'red';
			}
			if(document.getElementById("op43").checked==true){
				document.getElementById("lop43").style.color = 'red';
			}
			if(document.getElementById("op44").checked==true){
				document.getElementById("lop44").style.color = 'red';
			}
			if(document.getElementById("op45").checked==true){
				document.getElementById("lop45").style.color = 'red';
			}
			if(document.getElementById("op51").checked==true){
				document.getElementById("lop51").style.color = 'red';
			}
			if(document.getElementById("op52").checked==true){
				document.getElementById("lop52").style.color = 'red';
			}
			if(document.getElementById("op53").checked==true){
				document.getElementById("lop53").style.color = 'red';
			}
			if(document.getElementById("op54").checked==true){
				document.getElementById("lop54").style.color = 'red';
			}
		
			//checking correct answers
			if(document.getElementById("op11").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("op22").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("op32").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("op42").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("op53").checked==true){
				qans=qans+1;
				}
			//marking correct answers
			document.getElementById("lop11").style.color = '#2fd677'; 
			document.getElementById("lop22").style.color = '#2fd677'; 
			document.getElementById("lop32").style.color = '#2fd677'; 
			document.getElementById("lop42").style.color = '#2fd677'; 
			document.getElementById("lop53").style.color = '#2fd677'; 
			
			//Rating according to number of correct answers
			if(qans<=2){
				document.getElementById('score').innerHTML="Beginner! Your score is "+qans+"/5.";
				document.getElementById("score").style.color = 'red';
			}
			else if(qans<5 && qans>2){
				document.getElementById('score').innerHTML="Amazing! Your score is "+qans+"/5.";
				document.getElementById("score").style.color = 'blue';
			}
			else{
				document.getElementById('score').innerHTML="Extraordinary! Your score is "+qans+"/5.";
				document.getElementById("score").style.color = '#2fd677'; //light green
			}
			
			document.getElementById('quizsubmit').disabled= true;
			document.getElementById('quizsubmit').style.backgroundColor='grey';
			}
		else{
			document.getElementById('score').innerHTML="Attempt all questions!";
			document.getElementById("score").style.color = 'red';
		}
		document.getElementById("Dis").style.display="block";
		document.getElementById("quizdiv").style.display="none";
	}

	


	
