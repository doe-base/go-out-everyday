import React from "react"
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme)=>{
    return{
        root : {
            backgroundColor: "#fff",
            margin: "0 auto !important"
        },
        main: {
            width: "90vw",
            backgroundColor: theme.palette.primary.main,
            margin: "5.9375rem auto !important",
            borderRadius: "1.2498rem",
            boxShadow: "0 8px 20px 0 rgb(0 0 0 / 15%)"
        },
        section1: {
            width: "50%",
            backgroundColor: "#fff",
        },
        section2: {
            backgroundColor: theme.palette.primary,
            width: "100%",
            height: "100%"
        }
    }
})

export default useStyles