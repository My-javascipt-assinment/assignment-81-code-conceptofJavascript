'use strict'
/*==================================== Question No 1 =========================================
every
======================================= Answer =====================================*/
// let num = [2,4,65,8];
// let ans = num.every((item)=>item % 2 == 0)
// console.log(ans)
/*==================================== Question No 2 =========================================
findIndex
======================================= Answer =====================================*/
// let obj = [
//     {
//         id : 1,
//         name : 'Ali',
//         designation : 'develoepr'
//     },
//     {
//         id : 2,
//         name : 'umer',
//         designation : 'soldier'
//     },

//     {
//         id : 3,
//         name : 'Hashir',
//         designation : 'designer'
//     },

//     {
//         id : 4,
//         name : 'Nabeel',
//         designation : 'teacher'
//     },
// ]
// console.log(obj)
// let ind = obj.findIndex((item)=> item.id == 3)
// console.log(ind)
// let requiredObj = obj.find((item)=> item.id == 3)
// requiredObj.designation = 'army'
// obj.splice(ind,1,requiredObj)
// console.log(obj)
// console.log(requiredObj)
/*==================================== Question No 3 =========================================
Object.groupBy()

======================================= Answer =====================================*/
// let products = [
//     {name :'mobile', price : 20000},
//     {name :'laptop', price : 10000},
//     {name :'mobile', price : 14000},
//     {name :'laptop', price : 8000},
//     {name :'mobile', price : 20000},
// ]
// // let ans = Object.groupBy(products,(item)=> item.name == 'mobile')
// // console.log(ans)
// let need = {
//     a : [],
//     b : []
// }
// for(let i =0 ;i < products.length;i++){
//     // console.log(products[i]) 
//     if(products[i].name == 'mobile'){
//         need.a.push(products[i])
//     }
//     else{
//         need.b.push(products[i])
//     }
// }
// console.log(need)
/*==================================== Question No 4 =========================================
Object.entries,values and keys
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 44,
//     city : 'karachi'
// }
// // let ent = Object.entries(obj); 
// // let ent = Object.values(obj)
// let ent = Object.keys(obj)
// console.log(ent)
/*==================================== Question No 5 =========================================
Object.freeze(locks completely an object)
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 44,
//     city : 'karachi'
// }
// Object.freeze(obj)
// console.log(obj.name)
// delete obj.name
// obj.designation = 'developer'
// console.log(obj)
/*==================================== Question No 6 =========================================
object.seal also locks and object but we can only update any keys value
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 44,
//     city : 'karachi'
// }
// Object.seal(obj)
// console.log(obj.name)
// delete obj.name
// obj.city = 'lahore'
// obj.designation = 'developer'
// console.log(obj)
/*==================================== Question No 7 =========================================
Object.is( )
======================================= Answer =====================================*/
// let a = 5;
// let b = '5'
// // console.log( a == b)
// // console.log(a === b) 
// console.log(Object.is(a,b))
/*==================================== Question No 8 =========================================
currying funciton
======================================= Answer =====================================*/
// function testing(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 console.log(a+b + c+d)
//             }
//         }

//     }

// }
// let ans = testing(4)(3)(2)(9)

// const testing = (a)=>{
//     return function(b){
//         return function(c){
//             console.log(`${a} ${b} ${c}`)
//         }
//     }

// }
// let ans = testing('I')('love')('js')
// ans
/*==================================== Question No 9 =========================================
event bubbling = from child to parent 
event capturing = from parent but not move towards child
======================================= Answer =====================================*/
// function one(){
//     alert('i am parent div')
// }
// function two(m){
//     alert('i am child dvi')
//     m.stopPropagation()
// }
/*==================================== Question No 10 =========================================
addeventlistener 
call dom element in js and attaching it with function 
======================================= Answer =====================================*/
// let btn = document.getElementById('btn')
// console.log(btn)
// function abc(){
//     console.log('hello addeventlistener')
// }
// btn.addEventListener('click',abc)
/*==================================== Question No 11 =========================================
call()
======================================= Answer =====================================*/
// let info = {
//     name : 'Ali',
//     city : 'karachi'
// }

// function abc(designation){
//     console.log(`My name is ${this.name} i am from ${this.city} and my desigation is ${designation}`)

// }

// abc.call(info,'developer')

/*==================================== Question No 12 =========================================
apply()
======================================= Answer =====================================*/
// let info = {
//     name : 'Ali',
//     city : 'karachi'
// }

// function abc(designation,pay){
//     console.log(`My name is ${this.name} i am from ${this.city} and my desigation is ${designation} my salary is ${pay}`)

// }

// abc.apply(info,['developer','unknown'])
/*==================================== Question No 13 =========================================
bind()
======================================= Answer =====================================*/
// let obj = {
//     name : 'Ali',
//     age : 33
// }
// function testing(desigation){
//     console.log(`my name is ${this.name} my age is ${this.age} and i am ${desigation}`)

// }
// let ans = testing.bind(obj,'develoepr')
// ans()
/*==================================== Question No 14 =========================================
new Set
for storing unique values in an array, remove auto duplicates
======================================= Answer =====================================*/
// let learningSet = new Set();
// learningSet.add('orange')
// learningSet.add('grapes');
// learningSet.add('mango');
// learningSet.add('grapes');
// learningSet.add('dates');
// // learningSet.clear() 
// learningSet.delete('mango')
// console.log(learningSet.has('datess'))
// console.log(learningSet.size)
// console.log(learningSet)


    //    let arr = [2,3,3,6,6,7,8,8,9];
    //   function remover(array){
    //     let newArr = new Set(array)
    //     newArr = [...newArr]

    //     return newArr

    //   }
    //  let ans =  remover(arr);
    //  console.log(ans)
/*==================================== Question No 15 =========================================
sort and comparison funciton 
======================================= Answer =====================================*/
// let num = [33,111,3,2,55,4,333];
// let ans = num.sort((a,b)=>(b -a));
// console.log(ans)
// // let str = ['m','o','d','a'] 
// let str = ['basheer','sohail','ghulam','abid']
// console.log(str.sort())
/*==================================== Question No 16 =========================================
split = array to string 
join = string to array

======================================= Answer =====================================*/
// let str = 'what are you doing';
// let ans = str.split(' '); 
// let srin = ans.join(' ')
// console.log(srin)
// console.log(ans)
/*==================================== Question No 17 =========================================
charAt, at() includes()
======================================= Answer =====================================*/
//at 
// let num = ['apple','mango','grapes'];
// // console.log(num.at(-441)) 
// // console.log(num[2])
// // console.log(num.charAt(1)) 
// // let str = 'hello';
// // console.log(str.charAt(1))
// console.log(num.includes('mango'))
/*==================================== Question No 18 =========================================
starWith
======================================= Answer =====================================*/
// let str = 'hamid';
// console.log(str.startsWith('m'))
// let names = ['shakeel','haider','nabeel','aqeel','saqib'];
// let required = [];
// for(let item of names){
//     // console.log(item) 
//     if(item.endsWith('l')){
//         required.push(item)
//     }
// }
// console.log(required)
/*==================================== Question No 19 =========================================
this 
this always refers to the object where it belongs
======================================= Answer =====================================*/
// let obj = {
//     name : 'Ali',
//     age : 33,
//     info : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)

//     }
// }
// let ans = obj.info();
// console.log(ans)
/*==================================== Question No 20 =========================================
onmouseout and onmouseover
======================================= Answer =====================================*/
// let div = document.getElementById('div')
// function one(){
//     div.style.backgroundColor = 'blue'
// }
// function two(){
//     div.style.backgroundColor = 'red'
// }
/*==================================== Question No 21 =========================================
strict and non-strict mode
======================================= Answer =====================================*/
// x = 10;
// console.log(x) 

// let x = 10;
// console.log(x)
/*==================================== Question No 22 =========================================
onfocus and onblur
======================================= Answer =====================================*/
// let div = document.getElementById('div');
// function foc(){
//     div.style.background = 'red'
// }
// function blr(){
//     div.style.background = 'blue'
// }
/*==================================== Question No 23 =========================================
previousElementSibling and nextElementSibling
======================================= Answer =====================================*/
// let main = document.getElementById('cent');
// console.log(main)
// console.log(main.previousElementSibling)
// console.log(main.nextElementSibling)
/*==================================== Question No 24 =========================================
classList
======================================= Answer =====================================*/
// let getHeading = document.getElementById('heading');
// let btn = document.getElementById('btn');
// function adding(){
//     getHeading.classList.add('mystyle')
// }

// function removing(){
//     getHeading.classList.remove('mystyle')
// }


// function toggling(){
//     getHeading.classList.toggle('mystyle')
// }
// btn.addEventListener('click',testing())
/*==================================== Question No 25 =========================================
attribues and its methods
======================================= Answer =====================================*/
// let heading = document.getElementById('heading');
// console.log(heading.hasAttribute('idd'))
// heading.setAttribute('style','color:red')
// heading.setAttribute('style','color : green')
// console.log(heading.getAttribute('id'))
// console.log(heading.attributes.length)
// heading.removeAttribute('style')

// console.log(heading)
/*==================================== Question No 26 =========================================
.toFixed and Math.PI 
======================================= Answer =====================================*/
// let num = 32.687080803;
// console.log(num)
// console.log(num.toFixed(0))
// console.log(Math.PI)
/*==================================== Question No 27 =========================================
string to number
======================================= Answer =====================================*/
// let num = '32.843';
// console.log(num,typeof num)
// // let ans = +(num); 
// // let ans = Number(num) 
// // let ans = parseFloat(num) 
// let ans = parseInt(num)

// console.log(ans,typeof ans)
/*==================================== Question No 28 =========================================
number to string 
======================================= Answer =====================================*/
// let num = 34.33535;
// console.log(num,typeof num)
// // let ans = String(num);  
// // let ans = num.toString(); 
// let ans = num + ''
// console.log(ans,typeof ans)
/*==================================== Question No 29 =========================================
toLowercase and toUppercase
======================================= Answer =====================================*/
// let str = 'ahmaedKHan';
// console.log(str);
// console.log(str.toUpperCase()) 

// let str2 = 'HASHIMKAH'; 
// console.log(str2.toLocaleLowerCase())
/*==================================== Question No 30 =========================================
Math.floor, ceil and round
======================================= Answer =====================================*/
// let num = 43.06899
// console.log(Math.round(num)) 
// console.log(Math.floor(num)) 
// console.log(Math.ceil(num))
/*==================================== Question No 31 =========================================
Math.sqrt and .abs()
======================================= Answer =====================================*/
// let num = 9;
// console.log(Math.sqrt(num)) 

// let n  = -863.343
// console.log(Math.abs(n))
/*==================================== Question No 32 =========================================
Math.random()
======================================= Answer =====================================*/
// let div = document.getElementById('div')
// let color = ['green','black','red','blue']
// // console.log(num)
// // console.log(color[num])
// setInterval(() => {
    
// let num = Math.floor(Math.random()* color.length);

//     div.style.background = color[num]

    
// }, 500);
/*==================================== Question No 33 =========================================
turnary operator / short of if/else statement
======================================= Answer =====================================*/
// let num = prompt('enter number');
// let ans = (num >10)?('greater than ten'):('smaller than ten');
// console.log(ans)
/*==================================== Question No 34 =========================================
array method
======================================= Answer =====================================*/
let fruits = ['apple','mango','banana','orange','dates'];
// let ans = fruits.push('dates') 
// let ans = fruits.unshift('hlva') 
// let ans = fruits.pop() 
// let ans = fruits.shift() 
// let ans = fruits.splice(1,0,'sweet')
// console.log(ans)
// console.log(fruits)
let cop = fruits.slice(1,4);
console.log(cop)
/*==================================== Question No 35 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 36 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 37 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 38 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 39 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 40 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 41 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 42 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 43 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 44 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 45 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 46 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 47 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 48 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 49 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 50 =========================================

======================================= Answer =====================================*/