import mongoose from "mongoose"
import Dog from "./models/dog.js"

/** 
Get a dog from the db based on a specific attribute

    @async
    @function readDog
    @param {Object} identifier - the field and value to search by
    @return {[Dog]} - an array of Dog objects that satisfy the query

*/
const readDog = async (identifier) => {
    try {
        return await Dog.find(identifier)
    } catch(e) {
        console.log(e)
    }
}

/** 
Get all dogs from the db

    @async
    @function readDogs
    @return {[Dog]} - an array of Dog objects

*/
const readDogs = async () => {
    try {
        return await Dog.find({})
    } catch(e) {
        console.log(e)
    }
}

/** 
Create a new dog and save it to the db

    @async
    @function createDog
    @param {Object} newDogData - the Dog object to be added to the db
    @return {boolean} - true if the query was successful, false otherwise

*/
const createDog = async (newDogData) => {
    const newDog = new Dog(newDogData);
    try {
        await newDog.save()
        return true
    } catch (e) {
        return false
    }
}

/** 
Edit a dog from the db based on a specific attribute.
This should work like a PATCH request, meaning the original
Dog object should remain but the specificed attributes should be changed. 

    @async
    @function updateDog
    @param {Object} identifier - the field and value to search by (used to identify the dog we want to edit)
    @param {Object} newDogData - the fields that should change and their new values 
    @return {boolean} - true if the update was sucessful, false otherwise

*/
const updateDog = async (identifier, newDogData) => {
    try {
        return (await Dog.updateOne(identifier, newDogData)).modifiedCount == 1
    } catch (e) {
        console.log(e)
    }
}
/** 
Remove a dog from the db based on a specific attribute

    @async
    @function deleteDog
    @param {Object} identifier - the field and value to search by
    @return {boolean} - true if the update was sucessful, false otherwise

*/
const deleteDog = async (identifier) => {
    try {
        return (await Dog.deleteOne(identifier)).deletedCount == 1
    } catch (e) {
        console.log(e)
    }
}

export { readDog, readDogs, createDog, updateDog, deleteDog }