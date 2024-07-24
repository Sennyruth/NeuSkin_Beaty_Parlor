import {create} from 'zustand'
import {devtools,persist} from "zustand/middleware";

const updateId = (set) => ({
    catchId: "",

     setCatch:(newCatch)=> 
        set(() => {
         return {catchId: newCatch};
        }),
});

const useUpdateId = create(devtools(persist(updateId, {name: "UpdateId"})))

export default useUpdateId