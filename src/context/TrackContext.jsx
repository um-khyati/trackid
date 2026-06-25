import { createContext,useContext,useState} from "react";

const TrackContext = createContext();
export const TrackProvider = ({children})=>{
    const[activeTrack,setActiveTrack]=useState(null);
    return(
        <TrackContext.Provider value={{activeTrack,setActiveTrack}}>
            {children}
        </TrackContext.Provider>
    );
};

export const useTrack =()=>useContext(TrackContext);

export default TrackContext;