//图片替换
/*let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/t2.jpeg'){
        myImage.setAttribute('src','image/tt.jpeg');
    }else{
        myImage.setAttribute('src','image/t2.jpeg')
    }
}
//点击提示
document.querySelector('html').onclick = function(){
    alert("don't click me")
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字');
    if(myName === null){
        localStorage.setItem('name',myName);
        myHeading.textContent = '好好学习噢,' + myName;
    }
    else if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent = '好好学习噢,' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '好好学习，' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

