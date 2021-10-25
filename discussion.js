// CRUD Operations

// Inserting Documents (Create)


// Syntax: db.collectionName.insertOne({object});
// Javascript: object.object.method({object});
db.users.insertOne({
        "firstName": "Jane",
        "lastName": "Doe",
        "age": 21,
        "contact": {
                "phone": "09437648932",
                "email": "janedoe@mail.com"
            },
        "courses": ["CSS", "Javascript", "Python"],
        "department": "none"
    });

// Insert Many
// Syntax: db.collectonName.insertMany([{objectA}, {objectB}]);
db.users.insertMany([{
        "firstName": "Stephen",
        "lastName": "Hawking",
        "age": 76,
        "contact": {
                "phone": "09437837932",
                "email": "stephenhawking@mail.com"
            },
        "courses": ["React", "PHP", "Python"],
        "department": "none"
    },
    {
        "firstName": "Neil",
        "lastName": "Armstrong",
        "age": 82,
        "contact": {
                "phone": "09437567932",
                "email": "neilarmstrong@mail.com"
            },
        "courses": ["React", "Laravel", "SASS"],
        "department": "none"
    }]);

// Finding documents Read Operation
/* Find Syntax:
	db.collectionName.find();
	db.collectionName.find({field: value});
*/

db.getCollection('users').find({})