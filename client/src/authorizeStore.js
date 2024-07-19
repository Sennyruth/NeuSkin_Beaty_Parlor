import {create} from "zustand";
import {devtools,persist} from "zustand/middleware";

const authorizeStore = (set) => ({
    auth: false,
     setAuth:(newAuth)=> {
        set(() => {
         return {auth: newAuth};
        });
        
     },

});
const useAuthorizeStore = create(devtools(persist(authorizeStore, {name: "Auth"}))) 
export default useAuthorizeStore;