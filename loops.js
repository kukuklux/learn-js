//if...

let month = prompt('In which month was easter ?', '');

if (month == april) alert( 'You are right!' );

//if...else...
//let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//elseif...
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


//loop until a number greater than 100 is input

let number= 0
while (true) {
let order= prompt('enter >100', '')
if (order<=100) {
console.log("try again! there's no escape");
continue;
} else {number += +order;
break ;
}
}
console.log(`you enter ${number}, good job!`);

//prime numbers

nextPrime : for(let i = 2 ; i <= 20 ; ++i) {// "i" represent a prime number
    tryThis : for(let n = 2 ; ; ++n){
    for (let m = 1 ; ; m++){
    let compositeNumber = n*m;// A composite Number is the opposite of a prime number ,"n" and "m" are smaller natural numbers.
    if ((n == i ) && (m == 1)) {// this is the only possibility to get a prime number.
    alert(i);
    continue nextPrime;
    }
    else if((compositeNumber > i)){// In this case we have to try another naturale number "++n" to determine the prime.
    continue tryThis;
    }
    else if((((m != n) || (m ==n)) && (compositeNumber == i))){// in this case we determine a composite number.
    continue nextPrime;
    }
    }
    }
    }

//put limit

let n = prompt("Tell me the number");

for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) ++count;
        if (count > 1) break;
    }
    if (count == 1) alert(i);
}


