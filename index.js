// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
    function destructivelyPrependCat(name) {
        cats.unshift(name);
}

        function destructivelyRemoveLastCat(name){
            cats.pop(name);
     }
     function destructivelyRemoveFirstCat(name){
        cats.shift(name);
     }

     function appendCat(name){
        
            return [...cats, name];
        }
        let newCatsArray = appendCat("Broom");
    
        function prependCat(name){
            return [name, ...cats];
           
        }
        let newCatsArrays = prependCat(Arnold);
        
        function removeLastCat(){
            returncats.slice(0. -1);
        }
            let NewCatsArray = removeLastCat();

            function removeFirstCat(){
                returncats.slice(2);
            }
            let newCatsArraY = removeFirstCat();
           
           
            console.log(cats);
            console.log(newCatsArraY)
   
