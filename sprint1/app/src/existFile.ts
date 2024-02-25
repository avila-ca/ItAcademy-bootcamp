import fs from 'node:fs'
import { dbFile } from '.'

export const existFile = () => {
    if(fs.existsSync(dbFile)){
        console.log('Exist file!!');
        
        return true
    } 
    return false
}