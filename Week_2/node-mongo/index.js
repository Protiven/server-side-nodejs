const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    
    dboper.insertDocument(db, { name: "Vadonut", decription: 'Test'}, 'dishes', (result) => {
        console.log("insert document:\n", result.ops);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found Docs:\n', docs);

            dboper.updateDocument(db, {name: "Vadonut"}, { decription: 'Updated test'}, 'dishes', (result) => {
                console.log('Updated doc:\n', result.result);

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Docs:\n', docs);

                    db.dropCollection('dishes', (result) => {
                        console.log('Dropped collection! ', result);

                        client.close();
                    });
                });
            });
        });  
    });
});