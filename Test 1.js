function calculateTax (income, age, dependents){
    //Validasi input (Cek apakah tipe datanya merupakan number dan nilainya kurang dari 0)
    if(typeof income !== 'number' || income < 0) return "Invalid income";
    if(typeof age !== 'number' || age < 0) return "Invalid age";
    if(typeof dependents !== 'number' || dependents < 0) return "Invalid dependents";
    
    //Aturan: Tidak eligible apabila umurnya kurang dari 18 tahun
    if(age < 18) return "Not eligible for tax"
    
    //Function Recursive untuk menghitung pajak
    function countTax(income){
        let taxRate;
        //Cek incomenya untuk mendapatkan rate pajaknya
        if(income <= 10000) taxRate = 0.10;
        else if(income <= 50000) taxRate = 0.20;
        else taxRate = 0.30;
        
        //Hitung Pajak
        let tax = income * taxRate;
        
        //Cek apakah umurnya 65 tahun atau lebih untuk diskon 20% pajak
        if (age >= 65) tax *= 0.80;
        
        //Setiap 1 Dependents, dapat diskon tambahan sebanyak $500
        tax -= dependents * 500;
        
        //Memastikan bahwa minimum pajaknya ialah $0
        return Math.max(tax, 0);
    }
    //Call Function Recursivenya
    return countTax(income);
}

//Test Case
console.log(calculateTax(-5000, 35, 1)); //"Invalid income" karena incomenya dibawah 0
console.log(calculateTax(15000, "Halo", 0)); //"Invalid age" karena tipe data age adalah string
console.log(calculateTax(15000, 20, true)); //"Invalid dependents" karena tipe data dependents adalah boolean
console.log(calculateTax(30000, 15, 0)); //"Not eligible for tax" karena umurnya dibawah 18
console.log(calculateTax(50000, 65, 2)); //Rate Pajak = 20%. Dapat diskon 20% dan $1000
console.log(calculateTax(90000, 25, 4)); //Rate Pajak = 30%. Dapat diskon $2000