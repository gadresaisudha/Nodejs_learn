URL - module - inbuilt
Uniform resource locator

import {URL} from "url";
Here URL is the constructor 
so need to send an actual url as parameter
const myURL = new URL(url)

other methods:
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);

console.log(myURL.toString());
console.log(myURL.toJSON());
