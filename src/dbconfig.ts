import { database } from "src/credentials"
import { Site } from "./entities/site.entity"
import { Items } from "./entities/items.entity"
import { Requirement } from "./entities/requirements.entity"
import { Supplier } from "./entities/supplier.entity"

export const dbConfig = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: database.username,
        password: database.password,
        database: database.name,
        entities: [Items, Site, Requirement, Supplier],
        synchronize: true,
}