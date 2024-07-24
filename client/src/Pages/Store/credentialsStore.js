import {create} from "zustand";


const useCredentialsStore =  create((set) => ({
    Credentials: {},
     setCredentials:(newCredentials)=> 
        set(() => ({
         Credentials: newCredentials
         // return {Credentials: newCredentials};
        })),
        
     

}));

export default useCredentialsStore;