# crypto-coin-list-genereate
  This code allows you to generate a Crypto Coin list using JavaScript then will be saved into new file 'coinlist.txt'

## important npm:
- install axios
- install sort-array
- install dotenv (opsional)

## how to use:
1. sign-up to [Coinlib](https://coinlib.io/) to get your own apikey
2. integrates your apikey into the code
3. run the code with node.js
(facing error alert?! read note)

## note :
  Due to the API provider (Coinlib) being limited to 180 requests per hour, you should use the code wisely. 
  You can comment out the entire writeToFile() function and its caller, then uncomment the code at the bottom for testing purposes.
