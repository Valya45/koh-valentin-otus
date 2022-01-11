let total;

function sum(number) {
    this.total = this.total || 0;
  
    if (number === undefined || number === null){
        return this.total;
    };
  
    this.total += Number(number);
    return sum;
  }

  console.log(sum(1)(3)(4)(9)(0)());

