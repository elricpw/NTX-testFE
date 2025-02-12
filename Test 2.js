function calculateShippingCost (destination, weight, priority){
    //Validasi input
    if(typeof destination !== 'string' || (destination !== "domestic" && destination !== "international")) return "Invalid destination";
    if(typeof weight !== 'number' || weight <= 0) return "Invalid weight";
    if(!["standard", "express", "priority"].includes(priority)) return "Invalid priority";
    
    let baseCost = 0;
    let additionalCost = 0;
    //Hitung harga pengiriman berdasarkan tujuan dan prioritasnya
    if(destination === "domestic"){
        switch(priority){
            case "standard":
                baseCost = 5;
                break;
            case "express":
                baseCost = 10;
                break;
            case "priority":
                baseCost = 20;
                break;
        }
        additionalCost = weight > 10 ? 10 : 0; // Cek apakah berat barang lebih dari 10kg
    } else if(destination === "international"){
        switch(priority){
            case "standard":
                baseCost = 15;
                break;
            case "express":
                baseCost = 25;
                break;
            case "priority":
                baseCost = 50;
                break;
        }
        additionalCost = weight > 5 ? 50 : 0; // Cek apakah berat barang lebih dari 5kg
    }
    //Hitung total harganya
    return weight * baseCost + additionalCost;
}

//Invalid parameter
console.log(calculateShippingCost(0, 50, "standard"));
console.log(calculateShippingCost("international", "express", "priority"));
console.log(calculateShippingCost("domestic", 20, "domestic"));
//Menghitung harga untuk pengiriman domestic
console.log(calculateShippingCost("domestic", 20, "standard"));
console.log(calculateShippingCost("domestic", 10, "express"));
console.log(calculateShippingCost("domestic", 3, "priority"));
//Menghitung harga untuk pengiriman international
console.log(calculateShippingCost("international", 10, "standard"));
console.log(calculateShippingCost("international", 4, "express"));
console.log(calculateShippingCost("international", 1, "priority"));