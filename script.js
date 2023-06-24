//your JS code here. If required.
function gneratePromise(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}

generatePromise().then((data)=>{
	//data=Hello, world
	const element=document.getElementById("output")
	element.innerText(data)
})