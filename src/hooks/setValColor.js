export default function setValColor(val, contributions = 0) {
    if(contributions === 0){
       if(val === 0){
        return "redColor"
    } else if(val > 0){
        return "greenColor"
    } else {
        return "redColor"
    } 
    } else {
        if(val === contributions || isNaN(contributions)){
            return ""
        } else if(val > contributions){
            return "greenColor"
        } else {
            return "redColor"
        } 
    }
}
