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
	document.getElementById("Dis1").style.display="none";
	document.getElementById("encry").style.display="none";
	document.getElementById("displayopt38").style.display="none";
	
	var log=0;
	

	function msg(p00,p10){
		document.getElementById('p00').innerHTML=p00;
		document.getElementById('p10').innerHTML=p10;
	}
	function enc(m00,m10){
		document.getElementById('m00').innerHTML=m00;
		document.getElementById('m10').innerHTML=m10;
	}
	function ciph(c){
		document.getElementById("cip").innerHTML=c;
	}
	function displaykey()
	{		
		
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
		if(res==0 || check())
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
		document.getElementById('k00').innerHTML=document.getElementById('field00').value;
		document.getElementById('k01').innerHTML=document.getElementById('field01').value;
		document.getElementById('k10').innerHTML=document.getElementById('field10').value;
		document.getElementById('k11').innerHTML=document.getElementById('field11').value;
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
		}
	}
	function next()
	{
		document.getElementById("logic3").style.display="none";
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
			n=n+1;
			
		}
		message=[];
		encode=[];
		cip=[];
		for(var i=0;i<(n/2);i++)
		{
			message.push(myalpha.indexOf(str[pos]),myalpha.indexOf(str[pos+1]));
			res1=one*(myalpha.indexOf(str[pos]))+two*(myalpha.indexOf(str[pos+1]));
			res2=three*(myalpha.indexOf(str[pos]))+four*(myalpha.indexOf(str[pos+1]));			
			res1=res1%26;
			res2=res2%26;
			encode.push(res1,res2);
			cipher=cipher.concat(myalpha[res1]);
			cipher=cipher.concat(myalpha[res2]);
			cip.push(cipher);
			pos=pos+2;
		}	
		console.log(message);
		console.log(encode);
		console.log(message[2*log],message[(2*log+1)]);	
		console.log(encode[2*log],encode[2*log+1]);
			
		msg(message[2*log],message[(2*log+1)]);
		enc(encode[2*log],encode[2*log+1]);
		ciph(cip[log]);
		
		if(log==0)
		{	
			document.getElementById("logic3").style.display="none";
			document.getElementById("logic4").style.display="block";
			document.getElementById("encry").style.display="block";
		}
		if((log>=1)&& (log<(n/2)))
		{
			document.getElementById("logic4").style.display="none";
			document.getElementById("logic5").style.display="block";
			document.getElementById("encry").style.display="block";
		}
		if(log==(n/2))
		{
			document.getElementById("f2").style.display="none";
			document.getElementById("f1").style.display="none";
			document.getElementById("f3").style.display="block";
			document.getElementById("logic5").style.display="none";
			document.getElementById("logic6").style.display="block";
			document.getElementById("encry").style.display="none";
			document.getElementById("display2").style.display="block";
			document.getElementById("ci").innerHTML=cipher;
			
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
		document.getElementById("Dis1").style.display="block";
	}
	function no()
	{
		document.getElementById("logic6").style.display="none";
		document.getElementById("logic7").style.display="block";
		document.getElementById("f3").style.display="none";
		document.getElementById("f4").style.display="block";
		document.getElementById("display4").style.display="block";
		document.getElementById("Dis1").style.display="block";
	}
	function reset()
	{	
		window.location.reload();
	
	}
	function viewresult2()
	{
		var qans=0;
		var selected=0;

		//checking for total marked answers
		if(document.getElementById("Pop11").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop12").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop13").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop14").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop21").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop22").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop31").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop32").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop33").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop34").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop41").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop42").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop43").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop44").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop23").checked==true){
			selected=selected+1;
		}
		if(document.getElementById("Pop24").checked==true){
			selected=selected+1;
		}

		if(selected==4){
		//checking users response
			if(document.getElementById("Pop11").checked==true){
				document.getElementById("Plop11").style.color = 'red'; // red or #fffff
			}
			if(document.getElementById("Pop12").checked==true){
				document.getElementById("Plop12").style.color = 'red';
			}
			if(document.getElementById("Pop13").checked==true){
				document.getElementById("Plop13").style.color = 'red';
			}
			if(document.getElementById("Pop14").checked==true){
				document.getElementById("Plop14").style.color = 'red';
			}
			if(document.getElementById("Pop21").checked==true){
				document.getElementById("Plop21").style.color = 'red';
			}
			if(document.getElementById("Pop22").checked==true){
				document.getElementById("Plop22").style.color = 'red';
			}
			if(document.getElementById("Pop31").checked==true){
				document.getElementById("Plop31").style.color = 'red';
			}
			if(document.getElementById("Pop32").checked==true){
				document.getElementById("Plop32").style.color = 'red';
			}
			if(document.getElementById("Pop33").checked==true){
				document.getElementById("Plop33").style.color = 'red';
			}
			if(document.getElementById("Pop34").checked==true){
				document.getElementById("Plop34").style.color = 'red';
			}
			if(document.getElementById("Pop41").checked==true){
				document.getElementById("Plop41").style.color = 'red';
			}
			if(document.getElementById("Pop42").checked==true){
				document.getElementById("Plop42").style.color = 'red';
			}
			if(document.getElementById("Pop43").checked==true){
				document.getElementById("Plop43").style.color = 'red';
			}
			if(document.getElementById("Pop44").checked==true){
				document.getElementById("Plop44").style.color = 'red';
			}
			if(document.getElementById("Pop23").checked==true){
				document.getElementById("Plop23").style.color = 'red';
			}
			if(document.getElementById("Pop24").checked==true){
				document.getElementById("Plop24").style.color = 'red';
			}
			
		
			//checking correct answers
			if(document.getElementById("Pop11").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("Pop22").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("Pop32").checked==true){
				qans=qans+1;
				}
			if(document.getElementById("Pop42").checked==true){
				qans=qans+1;
				}
			
			//marking correct answers
			document.getElementById("Plop11").style.color = '#2fd677'; 
			document.getElementById("Plop22").style.color = '#2fd677'; 
			document.getElementById("Plop32").style.color = '#2fd677'; 
			document.getElementById("Plop42").style.color = '#2fd677'; 
			
			
			//Rating according to number of correct answers
			if(qans<=2){
				document.getElementById('score1').innerHTML="Beginner! Your score is "+qans+"/4.";
				document.getElementById("score1").style.color = 'red';
			}
			else if(qans<4 && qans>2){
				document.getElementById('score1').innerHTML="Amazing! Your score is "+qans+"/4.";
				document.getElementById("score1").style.color = 'blue';
			}
			else{
				document.getElementById('score1').innerHTML="Extraordinary! Your score is "+qans+"/4.";
				document.getElementById("score1").style.color = '#2fd677'; //light green
			}
			
			document.getElementById('quizsubmit2').disabled= true;
			document.getElementById('quizsubmit2').style.background='grey';
			}
		else{
			document.getElementById('score1').innerHTML="Attempt all questions!";
			document.getElementById("score1").style.color = 'red';
		}
		
		
	}
	function check()
	{		
		console.log("harsh");
		var a=document.getElementById('field00').value;
		var b=document.getElementById('field01').value;
		var c=document.getElementById('field10').value;
		var d=document.getElementById('field11').value;
		if((!(isNaN(parseInt(a))) && parseInt(a)>=0 && parseInt(a)<=25) && (!(isNaN(parseInt(b))) && parseInt(b)>=0 && parseInt(b)<=25) && (!(isNaN(parseInt(c))) && parseInt(c)>=0 && parseInt(c)<=25) && (!(isNaN(parseInt(d))) && parseInt(d)>=0 && parseInt(d)<=25)){
			return false;
		}
		else{
			return true;
		}
	}

	

	


	


	


