

class Product {
    constructor(
        public name: string,
    ){}
}

(()=>{
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants)
})();

