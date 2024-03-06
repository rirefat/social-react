import { useContext } from "react"
import { ProfileContext } from "../components/Contexts/ProfileContext"

export const useProfile = ()=>{
    return useContext(ProfileContext)
}