// async function testSometing() {
//     console.log("执行testSometing");
//     return "testSometing";
// }

// async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
// }

// async function test() {
//     console.log("test start...");
//     const v1 = await testSometing();
//     console.log(v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
// }

// test();
// setTimeout(()=>{
//     console.log('hh')
// }, 2000)

// var promise = new Promise(
//     (resolve)  => {
//          console.log("promise start.."); 
//          setTimeout(() => {
//             resolve("promise")
//          }, 3000);
//      }
//  );
// promise.then((val)=> { console.log(val) });

// console.log("test end...")


const a = 'hah'
var b = 'xx'

if (window.a) {
    var c = '34'
    b = '12'
}

console.log(a)
console.log(b)
console.log(c)