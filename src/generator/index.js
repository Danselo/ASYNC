function* generator(){
    yield 1
    yield 2
    yield 3
}
const g = generator()
console.log(g.next().value);
console.log(g.next());
console.log(g.next());

function* iterate(array){

    for(let value of array){
        yield value
    }
}
const it = iterate(["Pedro","Arturo","Josefin","Ruperto"])
console.log(it.next().value);