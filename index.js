// Oppgave 1
for (let i = 0; i<11; i++) {
    console.log(i);
    document.writeln(`<p style="color: red;">Hello World</p> `)
}
// Oppgave 2
for (let i = 0; i<51; i++) {
    console.log(i);
    document.writeln(`<p>${i}</p>`)
}
// Oppgave 3
var sum = 0;
for (let i = 1; i < 11; i++) {
    sum = sum + i
    document.writeln(sum)
}
// Oppgave 4
I = ""
for (let i = 1; i < 5; i++) {
    I = I + "#"
    console.log(I);
}
// Oppgave 5
for (let i = 1; i < 51; i++) {
    if (i%2==0){
        console.log(i);
        
    }
}
// Oppgave 6
for (let i = 1; i < 101; i++) {
    if (i%3==0 && i%5==0)
        console.log(i);
        
}
// Oppgave 7 
let nummer = [2,3,7,8,5]

let largest = nummer[0]
for (let i = 0; i<6; i++){
    if (nummer[i]>largest) {
        largest=nummer[i]
       
    }
}
console.log(Math.max(largest));