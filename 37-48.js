// Chapter 38 to 42 Task 1
// Chapter 38 to 42 Task 1
// function power(a,b){
//     return a**b
// }
// alert(power(3,2))

// Chapter 38 to 42 Task 2
// function leap(year){
//     if (year%4==0){
//         if(year%100!=0||year%400==0){
//             alert(year+' is a leap year')
//         }
//         else {
//             alert(year+' is not a leap year')
//         }
//     }
//     else {
//         alert(year+' is not a leap year')
//     }
// }
// var a=+prompt('Enter a year: ')
// leap(a)

// Chapter 38 to 42 Task 3
// function area(a,b,c){
//     S=calcS(a,b,c)
//     Area=S*(S-a)*(S-b)*(S-c)
//     return Area
// }
// function calcS(a,b,c){
//     return (a+b+c)/2
// }

// var areaT=area(40,40,40)
// alert(areaT)

// Chapter 38 to 42 Task 4
// function mainFun(sub1,sub2,sub3){
//     var avg=av(sub1,sub2,sub3)
//     var per=pe(sub1,sub2,sub3)
//     return [avg,per];
// }
// function av(sub1,sub2,sub3){
//     return (sub1+sub2+sub3)/3
// }
// function pe(sub1,sub2,sub3){
//     return ((sub1+sub2+sub3)/300)*100
// }
// var fstSub=parseInt(prompt("Enter marks for first subject"))
// var secSub=parseInt(prompt("Enter marks for second subject"))
// var thSub=parseInt(prompt("Enter marks for third subject"))
// var result=mainFun(fstSub,secSub,thSub)
// alert(result[0])
// alert(result[1]+'%')

// Chapter 38 to 42 Task 5
// function indOf(arr,element){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==element){
//             return i
//             break;
//         }
//     }
// }

// var arr1=['moiz','raza','hi','hello']
// var a=indOf(arr1,'hello')
// console.log(a)


// Chapter 38 to 42 Task 6
// function delVow(stg){

//     stg=stg.toLowerCase()
//     for(var i=0;i<stg.length;i++){
//         if(stg[i]==='a'||stg[i]==='e'||stg[i]==='i'||stg[i]==='o'||stg[i]==='u'){
//             stg=stg.replace(stg[i],'')
//         }
//     }
//     return stg
// }

// var a='My Name is Abdul Moiz'
// var res=delVow(a)
// alert(res)

// Chapter 38 to 42 Task 7
// function findVow(str){
//     var chars=str.toLowerCase().split('');
//     var count=0
//     for (var i=0;i<chars.length-1;i++){
//         var char=chars[i]
//         var next=chars[i+1]
//     if (isCorrect(char)===true&&isCorrect(next)===true){
//         count++;
//     }
//     }
//     return count;
// }
// function isCorrect(char) {
//     switch (char) {
//       case 'a':
//         return true;
//         break;
//       case 'e':
//         return true;
//         break;
//       case 'i':
//         return true;
//         break;
//       case 'o':
//         return true;
//         break;
//       case 'u':
//         return true;
//         break;
//       default:
//         return false;
//     }
//   }

// var text='Pleases read this application and give me gratuity'
// var c=findVow(text)
// alert(c)

// Chapter 38 to 42 Task 8
// function meter(km){
//     var m=km*1000
//     return m
// }
// function feet(km){
//     var f=km*3281
//     return f
// }
// function inch(km){
//     var i=km*39370.1
//     return i
// }
// function cent(km){
//     var c=km*100000
//     return c
// }
// var dis=parseInt(prompt('Distance in kilometer'))
// var m=meter(dis)
// var f=feet(dis)
// var i=inch(dis)
// var c=cent(dis)
// alert(m)
// alert(f)
// alert(i)
// alert(c)

// Chapter 38 to 42 Task 9
// function overtime(hours,salary){
//     if(hours>40){
//         ov=hours-40
//         salary=salary+(12*ov)
//         return salary
//     }
//     else{
//         return salary
//     }

// }
// var sal=overtime(50,12000)
// alert(sal)

// Chapter 38 to 42 Task 10
// function cashier(money){
//     var hun=parseInt(money/100)
//     var fif=parseInt((money%100)/50)
//     var ten=parseInt(((money%100)%50)/10)
//     var arr=[hun,fif,ten]
//     return arr
// }
// var amount=parseInt(prompt('Enter amount'))
// var rem=cashier(amount)
// alert(rem[0]+' hundreds '+rem[1]+' fifty '+ rem[2]+' tens.')

// Chapter 43 to 48 Task 1
//Done in html

// Chapter 43 to 48 Task 2
//Done in html

// Chapter 43 to 48 Task 3
// function del(num){
//     document.getElementById("Table").deleteRow(num+1);
// }

// Chapter 43 to 48 Task 4
// function swapimg(){
//     var img=document.getElementById('image')
//     img.src = 'data:image/jpeg;base64,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'
// }

// function retimg(){
//     var img=document.getElementById('image')
//     img.src = 'data:image/jpeg;base64,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'

// }

// Chapter 43 to 48 Task 5
// function Increase(){
//     var count=document.getElementById('count')
//     count.innerHTML = parseInt(count.innerHTML)+1
// }
// function Decrease(){
//     var count=document.getElementById('count')
//     count.innerHTML = parseInt(count.innerHTML)-1
// }
