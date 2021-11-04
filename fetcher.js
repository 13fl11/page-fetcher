const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const fileSaveLocation = args[1];

request (url, (error, response, content) => {
    console.log("requested url does not exist!", error);
    console.log('statusCode:', response && response.statusCode);
    console.log("body:", content);

    fs.writeFile('/Users/fei/lighthouse/ testwritefile.txt', content, err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
      console.log(`Downloaded ${content.length} bytes and saved to ${fileSaveLocation}`);
    })
}
)

