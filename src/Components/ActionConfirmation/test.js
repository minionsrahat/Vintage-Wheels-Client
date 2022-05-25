class Animal {
    static belly = [];
     eat() {
          Animal.belly.push("food");
         }
}
let a = new Animal(); 
a.eat();
console.log(/* Snippet Here */); //Prints food 