
import { useEffect, useState } from 'react';
import {db} from '../components/firebase/config'

const useFirestore = (collection,condition) => {
    const [documents,setDocuments] =useState([])

    useEffect(() => {
        let collectionRef = db.collection(collection)
        //condition 
        /*
            {
                fieldName:'abc',
                operator: '==',(in),
                compareValue: 'abc'
            }
        */
        if(condition) {
            if(!condition.compareValue || !condition.compareValue.length) {
                return
            }
            collectionRef = collectionRef.where(condition.fieldName, condition.operator, condition.compareValue)
            
        }
        const unsubscibed = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map( doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
            setDocuments(documents)
        })
        
       return unsubscibed

    },[collection,condition])
   

    return documents;
} 

export default useFirestore