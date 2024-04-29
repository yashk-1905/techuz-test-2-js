# Techuz Test Day 3-4:

Look into test_file.js This is your file where you are going to perform your code.

Function explaination: 

1. constructor

constructor should have 1 parameter which will accept the first initial list of persons in array of objects and it will store them for next operations.

2. addPerson

Here you need to add another person object in the extsting array of objects.

3. removePerson

Here you need to remove specific person object from array using ID.

4. editPerson 

This function will accept 2 parameters id and object with keys which needs to modify. you will first find the person with the id and then edit the details of that person based on object you have.

5. filterPerson

This function accepts 2 parameters (key, value), you need to filter the records based on these 2 parameters.
Example: 
-> if key='name', value='sheldon' then you will need to filter the record and it should return only the sheldon from persons.
-> if key='id', value='1' then you will need to filter person which has ID=1.

6. sortList

This function will also accept 2 parameters: key and sortOrder. You will need to sort the record of persons based on provided key and sort order.(sortOrder can either be `asc` or `desc`);
Example: if key='name' and sortOrder='asc' you will need to sort the persons record in ascending order based on `name` key.

## Notes
1. Try to make a class reusable so that we can chain the requests
ie: persons.addPerson(PERSON).sortList('name', 'asc').editPerson(1, OBJECT);
2. Try to use destructuring as much as possible.


## Cloning

```bash
git clone git@github.com:techuz-2023/techuz-test-2.git
```

Then go to the cloned repo, create your branch and install dependancies:
```bash
cd ./techuz-test-2

git checkout -b YOUR_NAME

npm install
```

To execute your file. you have to run the command below: 

```bash
npm run execute
```

## Submission

Once you are done with the code, Push your branch and generate a pull request to main branch.

Once your pull request is up, some additional test will be executed to test your functions and it will give you a result if your function is correct or wrong.

DO NOT MERGE your pull request by yourself.