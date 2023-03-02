import { connectDB, closeDB } from "./utils/db.js"
import { readDog, readDogs, createDog, updateDog, deleteDog } from "./operations.js"

await connectDB() // function that creates a connection to your db

// tests - feel free to change these or add more
const t1 = await createDog({ name: "Casey", age: 10, breed: "Pomeranian", dateEnter: Date.now(), dateAdopt: Date.now() })
const t2 = await createDog({ name: "Sarah", age: 10, breed: "Pomeranian", dateEnter: Date.now(), dateAdopt: Date.now() })
const t3 = await readDog({ name: "Casey" })
const t4 = await readDogs()
const t5 = await updateDog({ name: "Casey"}, {age: 11, breed: "Dalmatian"})
const t6 = await readDogs()
const t7 = await deleteDog({ name: "Sarah" })
const t8 = await readDogs()

console.log(t1)
console.log(t2)
console.log(t3)
console.log(t4)
console.log(t5)
console.log(t6)
console.log(t7)
console.log(t8)

await closeDB() // function that closes the connection to your db

