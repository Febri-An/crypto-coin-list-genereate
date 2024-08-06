import fs from 'fs';
import axios from "axios";
import sortArray from 'sort-array';
import dotenv from 'dotenv';

dotenv.config()
const apiKey = process.env.coinlib_apikey

//get num of coin
async function getCoinNum() {
    var coinNum = 0
    try{
        const response = await axios.get(`https://coinlib.io/api/v1/global?key=${apiKey}&pref=USD`)
        coinNum = response.data.coins
    }
    catch(error) {
        console.log(error.message)
    }

    console.log(coinNum)
    const num = Math.floor(coinNum / 100)
    return num
}

// get symbol/ticker each of coin
async function fetchData(num) {
    var coinList = []
    for (let i=1; i<=num; i++) {
        try {
            const response = await axios.get(`https://coinlib.io/api/v1/coinlist?key=${apiKey}&pref=USD&page=${i}&order=rank_asc`)
            const data = response.data.coins
            
            data.forEach(coin => 
                coinList.push(coin.symbol)
            )
        }
        catch(error) {
            console.log(error.message)
        }
    }
    return coinList
}

const result = await fetchData(1)
console.log(result)

// async function writeToFile() {
//     try {
//         const coinNum = await getCoinNum();
//         const symbols = await fetchData(getCoinNum) //array

//         const result = sortArray(symbols)
//         await fs.promises.writeFile('coinlist.txt', result.join('\n'))

//         console.log('New file has been created')
//     } catch (err) {
//         console.error(err)
//     }
// }

// writeToFile();




