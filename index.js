// Code your solutions in this file

function writeCards (arr,event) {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
          
    }
   return messages

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(){
for (let countup = 0; countup <= 10; countup++) {
    console.log(countup);
  }
}
 