
class User{
    constructor(name,lName){
        this.name = name;
        this.lName = lName;
        this.pets = [];
        this.books = [];
    };
    
    getFullName = function(){
        console.log(`el nombre completo es ${this.name} ${this.lName}`);
    };
    addMascotas = function(pets){
        this.pets.push(pets);
        console.log(this.pets);
    };
    countMascotas = function(){
        console.log(this.pets.length);
    };
    addBook = function(nBook,aut){
        
        this.books.push({bookN:nBook, author:aut});
        console.log(this.books);
    };
    getBookName = function(){
       let nameBook = this.books.map(function(name){
        return name.bookN
       })
       console.log({nameBook});
    };

}



const u1 = new User("tomas","butassi");
const u2 = new User("julian","rodriguez","Fundacion");
const u3 = new User("pedro","perez");


// Obtener el nombre completo:
// u1.getFullName();
// -----------------------------------
// agregar mascotas:
// u1.addMascotas("perro");
// u2.addMascotas("tortuga");
// u3.addMascotas("gato","perro");
// -----------------------------------
// contador de mascotas:
// u1.countMascotas();
// -----------------------------------
// agregar un libro:
u1.addBook("el señor de los anillos","william golding");
// -----------------------------------
// obtener nombre del libro:
u1.getBookName();
