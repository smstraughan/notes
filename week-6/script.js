function solveQuadratic(a, b, c) {    
    let discriminant = b * b - 4 * a * c;    
    if (discriminant < 0) {      return [];      } ;   
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);    
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);    return [root1, root2];    }  
    let result = solveQuadratic(1, -3, 2);    
    console.log(result)

    let arr = [1,2,5];

    console.log(arr)

    console.log(Math.max(...arr));