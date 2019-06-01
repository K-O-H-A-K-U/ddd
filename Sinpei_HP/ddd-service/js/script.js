function puldown(event) {
	obj=document.getElementsByClassName(event.target.eventParam);
	obj[0].style.display=(obj[0].style.display=='none')?'block':'none';
}

window.addEventListener('load', function(){
				var elm = document.getElementsByClassName("pulled");
				for (let i = 0; i<elm.length; i++){
					(function(n){
						elm[n].style.display="none";
					})(i);
				}

				document.body.style.visibility="visible";	
			}, false);

{
	let elm = document.getElementsByClassName('chef_pulling');
	for(let i=0;i<elm.length;i++){
		(function(n){
			elm[n].addEventListener('click', puldown, false);
		elm[n].eventParam='chef_pul';
		})(i);
	}
}	

{
	let elm = document.getElementsByClassName('bento_pulling');
	for(let i=0;i<elm.length;i++){
		(function(n){
			elm[n].addEventListener('click', puldown, false);
		elm[n].eventParam='bento_pul';
		})(i);
	}
}

{
	let elm = document.getElementsByClassName('events_pulling');
	for(let i=0;i<elm.length;i++){
		(function(n){
			elm[n].addEventListener('click', puldown, false);
		elm[n].eventParam='events_pul';
		})(i);
	}
}

{
let elm  = document.getElementsByClassName('hum_pulling');
elm[0].addEventListener('click', function(){
	obj=document.getElementsByClassName('hum_pul');
	obj[0].style.display='block';
	elm[0].style.display='none';
}, false);
}

{
let elm  = document.getElementsByClassName('close');
for(let i=0; i<elm.length; i++){
	(function(n){
		elm[n].addEventListener('click', function(){
			obj=document.getElementsByClassName('hum_pul');
			obj[0].style.display='none';
			let pul = document.getElementsByClassName('hum_pulling');
			pul[0].style.display='block';
		}, false);
	})(i);
}
}