import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {addDoc, collection, getDocs, query} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD-1rhkVdfdSGLc1gfdOTXmagvDor9amdA",
    authDomain: "reto-sofka-2021.firebaseapp.com",
    projectId: "reto-sofka-2021",
    storageBucket: "reto-sofka-2021.appspot.com",
    messagingSenderId: "738935401222",
    appId: "1:738935401222:web:6d12d098370d9be7a08c87",
    measurementId: "G-L9XRN27BPT"
  };

  initializeApp(firebaseConfig);

  const database = getFirestore();

  //Guardar Base de datos
  export const guardarDatabase = async (nombreColeccion, data) =>{
    try{
        const respuesta = await addDoc(collection(database,nombreColeccion), data)
        return respuesta
    }
    catch(e){
        throw new Error(e)
    }
  }

  //Leer Base de Datos
  export const consultarDatabase = async(nombreColeccion) =>{
    try{
        const respuesta = await getDocs(query(collection(database, nombreColeccion)))
        const coleccionDatos = respuesta.docs.map((documento)=>{
            const documentoTemporal = {
                idDocumento: documento.id,
                ...documento.data()
            }
            return documentoTemporal
        })
        return coleccionDatos
    }
    catch(e){
        throw new Error(e)
    }
  }




  


  




