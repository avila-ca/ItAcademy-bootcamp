import fs from 'node:fs'
import { dbFile } from '.'

export const existFile = () => {
    if(fs.existsSync(dbFile)){        
        return true
    } 
    return false
}