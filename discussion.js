// CRUD Operations
/*
	Create - Insert
	Read - Find
	Update - 
	Delete - 
*/
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

db.getCollection('users').find({"lastName": "Doe"})

db.users.find({"lastName": "Doe"});

db.getCollection('users').find({"lastName": "Doe", "age": 25}).pretty();

// Updating Documents (Update) Operation
// db.collectionName.updateOne({criteria}, {$set: {field: value}});

//Insert test document

db.users.updateOne(
        {"firstName": "Test"},
        {
            $set: {
            "firstName": "Bill",
            "lastName": "Gates",
            "age": 65,
            "contact": {
                    "phone": "091712384758",
                    "email": "bill@mail.com"
                },
            "courses": ["PHP", "Laravel", "HTML"],
            "department": "none"
            }
        }
 );

db.users.updateMany(
        {"department": "none"},
        {
            $set: {"department": "HR"}
        }
 );
//Deleting Documents (Delete) Operation
// Syntax: db.collectionName.deleteOne({criteria}); - deleting a single document

db.getCollection('users').deleteOne(
        {
        "firstName": "Test"
});

//or


db.users.deleteOne(
        {
        "firstName": "Test"
});
// Update multiple documents where lastName is "Doe"
db.users.updateMany(
		{"lastName: "Doe}
		{
			$set: {
				"department": "Operations"
			}
		}
);
db.users.deleteMany(
        {
        "department": "Operations"
});

//Advance Query

//Query and embedded document
db.users.find({
	"contact": {
		"phone" : "091712384758",
        "email" : "bill@mail.com"
	}
});

// Querying an Array without a specific order of elements
db.users.find({ "courses":{$all:["React", "Python"]} });