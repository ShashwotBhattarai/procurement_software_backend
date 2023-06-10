import { database } from "src/credentials"
import { Site } from "./entity/site.entity"
import { Items } from "./entity/items.entity"
import { Requirement } from "./entity/requirements.entity"
import { Supplier } from "./entity/supplier.entity"


export const dbConfig={
    
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: database.username,
        password: database.password,
        database: database.name,
        entities: [Items, Site, Requirement,Supplier],
        synchronize: true,
      
}