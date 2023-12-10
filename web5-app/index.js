/*
Needs globalThis.crypto polyfill. This is *not* the crypto you're thinking of.
It's the original crypto...CRYPTOGRAPHY.*/

import { Web5 } from '@web5/api';
import { webcrypto } from 'node:crypto';

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

//In index.js below the import statement, create a new instance of Web5:
const { web5, did: aliceDid } = await Web5.connect();

//console.log(aliceDid);

/*Now you’re able to write records in the user's Decentralized Web Node(DWN).
A DWN is a personal data store - a platform for messages, pictures, videos,
 medical records, and just about any content a user may want to store.*/

const { record } = await web5.dwn.records.create({
  data: 'Hello, Web5!',
  message: {
    dataFormat: 'text/plain',
  },
});
console.log('writeResult', record);

//To return the text data stored in the record, add the following to index.js:
const readResult = await record.data.text();

//To see the record that was read from the DWN, add the following to index.js:
console.log('readResult', readResult)

//To update the record, call update on the record object itself.Add the following to index.js:
const updateResult = await record.update({
  data: 'Hello, Web5! I am updated.',
});

//To see the record that was updated in the DWN, add the following to index.js:

console.log('updateResult', await record.data.text())

/*Given permission from the user, your app can delete records from their DWN. Similar to reading, 
we’ll use the record object to remove the record.Add the following to index.js:*/

const deleteResult = await record.delete();

