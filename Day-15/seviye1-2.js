// 1
class Animal
{
    constructor(sinif,isim,yas,renk,ayakSayisi)
    {
        this.sinif=sinif;
        this.isim=isim;
        this.yas=yas;
        this.renk=renk;
        this.ayakSayisi=ayakSayisi;
    }
}

// 2
const dog = new Animal("Köpek","Ceku",10,"Golden",4);
const cat = new Animal("Kedi","Azman",4,"Gri",4);
console.log(dog,cat)

// 2.1
class Dog extends Animal 
{
    constructor(sınıf,isim,yas,renk,ayakSayisi=4,woof)
    {
        super(sınıf,isim,yas,renk,ayakSayisi=4)
        this.woof=woof;
    }
    eat()
    {
        return (`${this.isim} namnam yapıyor.`)
    }
    get getAnimalInfo()
    {
        return  (`${this.isim} dünyanin en iyi köpeğidir. ${this.age} yaşındadır. Rengi ${this.color}'dır.`);
    }
}
const ceku = new Dog("Köpek","Ceku",5,"Golden",4,"havhav");
console.log(ceku);