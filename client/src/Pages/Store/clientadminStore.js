import {create} from "zustand";
import {devtools,persist} from "zustand/middleware";

const clientadminStore = (set) => ({
    role: false,
     setRole:(newRole)=> {
        set(() => {
         return {role: newRole};
        });
        
     },

});
const useclientadminStore = create(devtools(persist(clientadminStore, {name: "authorize"}))) 
export default useclientadminStore;