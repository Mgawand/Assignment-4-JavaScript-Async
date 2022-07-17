function fetchRandomNumbers(){
    return new Promise((resolve, reject) => {
    // console.log('Fetching number...');
    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        // console.log('Received random number:', randomNum);
        resolve(randomNum);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}

function fetchRandomString(){
    return new Promise((resolve, reject) => {
    // console.log('Fetching string...');
    setTimeout(() => {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        // console.log('Received random string:', result);
        resolve(result);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
    })
}

fetchRandomNumbers((randomNum) => console.log(randomNum))
fetchRandomString((randomStr) => console.log(randomStr))


// function to fetch random numbers

function getRandomNumber() {
    fetchRandomNumbers().then((randomNum) => {
        console.log(`Random number: ${randomNum}`)
        });
}
getRandomNumber()

// function to fetch random string

function getRandomString() {
    fetchRandomString().then((randomStr) => {
        console.log(`Random string: ${randomStr}`)
        });
}
getRandomString()

// Function to fetch two random numbers and sum them

function getRandomNumSum(){
    var sum =0;
    fetchRandomNumbers().then((randomNum) => {
        sum=randomNum; // one random number
        console.log(sum);
        fetchRandomNumbers().then((randomNum) =>{
            // otherSum = randomNum;
            // console.log(otherSum); // another random number
            // addSum =sum + otherSum;
            // console.log(addSum) ;

            sum += randomNum;
            console.log(`Sum of two numbers: ${sum}`) ;
        })
    })

}
getRandomNumSum()


// Function to fetch random number and string and contacting them

function fetchRandomNumString(){
    let concat ='';
    fetchRandomNumbers().then((randomNum) => {
        concat = randomNum;
        console.log(concat); // random number
        fetchRandomString().then((randomStr) => {
            concat +=  randomStr;
            console.log(`Concatenate number and string: ${concat}`)
        })
    })
}
fetchRandomNumString();

// function to fetch  random nums and sun them

function fetchRandNumbers(){
    let sumAll = 0;
    for(let i=0; i<10; i++){
        fetchRandomNumbers().then((randomNum) => {
            sumAll += randomNum;
        })
    }
        setTimeout(() => {
            console.log(`Sum of all 10 number: ${sumAll}`);

        },5000)
}
fetchRandNumbers()