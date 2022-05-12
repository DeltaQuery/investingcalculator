import roundNumber from "./roundNumber";

export default function calculateReturns({ startingDate, endingDate, contributionFreq, setTotalContributions, startingAmount, addContribution, asset, setMinDate, setMaxDate, setDateInputDisabled, setTotalGrowth }) {

     //asigno valor de amazon.monthly_Time_series a variable
     const assetTicket = { ...asset }

     //console.log(assetTicket)
     //formateo asset para que arroje keys con formato YYYY-MM ya que el dia no me interesa
     const formatAsset = (asset) => {
         let newAsset = {}
         for (let [key, value] of Object.entries(asset)) {
             let newValue = { "assetPrice": value["5. adjusted close"] }
             const newKey = key.slice(0, 7) 
             newAsset[newKey] = newValue
         }
         return newAsset
     }
 
     let depuredAssetTicket = formatAsset(assetTicket)

     //ASIGNA DATE MINIMO Y MAXIMO A DATE INPUT PARA EVITAR CRASHEO
     const minAndMaxDates = {
         minDate : Object.keys(depuredAssetTicket)[Object.keys(depuredAssetTicket).length -1],
         maxDate : Object.keys(depuredAssetTicket)[0]
     }; 

     if(Object.entries(assetTicket).length){
         setMinDate(minAndMaxDates.minDate)
        setMaxDate(minAndMaxDates.maxDate)
        setDateInputDisabled(false)
     }
     //creo Arr con fechas que se buscaran en Asset para trazar evolucion del valor del activo
     const createDateArr = (startingDate, contributionFreq) => {
         //parametros iniciales antes de bucle for
         let multiplier = 1
         //1 = mensual
         // 12 = anual
        // console.log(JSON.stringify(contributionFreq))
         if (contributionFreq === "1") {
             multiplier = 12
         }
         if (contributionFreq === "12") {
             multiplier = 1
         }
         //longitud de Arr con base a si frecuencia es mensual o anual
         //creacion de variable datesArr
         let datesArr = new Array(+endingDate * multiplier)
         //console.log(datesArr)
 
         if (startingDate !== undefined && startingDate !== "") {
             let sDate = startingDate.split("-")
             for (let i = 0; i < datesArr.length; i++) {
                 datesArr[i] = formatDateArr(sDate, multiplier, i)
             }
         }
         return datesArr
     }
 
     //Da formato a date establecido segun createDateArr, se usa loop para darle formato a cada elemento
     const formatDateArr = (startingDate, multiplier, sum) => {
         let fDate = ""
         if (multiplier === 1) {
             //console.log("multiplier validado 1")
             fDate = new Date(+startingDate[0] + sum, +startingDate[1], 0);
         }
         if (multiplier === 12) {
            //console.log("multiplier validado 2")
             fDate = new Date(+startingDate[0], +startingDate[1] + sum, 0);
         }
         let year = fDate.getFullYear()
         let month = fDate.getMonth() + 1
         if (month.toString().length === 1) {
             if (month === 0) {
                 month = 12
             }
             month = "0" + month
         }
         return year + "-" + month
     }
 
     //valor final de datesArr, Arr con YYYY-MM desde startingDate hasta final de endingDate
     const datesArr = createDateArr(startingDate, contributionFreq)

     //crear arr haciendo coincidir lapsos del asset con lapso indicado mas frecuencia
     const createInvestmentArr = (asset, datesArr) => {
         let newAsset = {}
         for (let [key, value] of Object.entries(asset)) {
             for (let i = 0; i < datesArr.length; i++) {
                 if (key === datesArr[i]) {
                     try{
                        asset[key]["assetPrice"] = roundNumber(asset[key]["assetPrice"])
                     asset[key].initialSumGrowth = roundNumber(((startingAmount / asset[startingDate]["assetPrice"]) * asset[key]["assetPrice"]))
                     newAsset[key] = value 
                     }catch(error){
                     }
                     
                 }
             }
         }
         return newAsset
     }
 
     let investmentArr = createInvestmentArr(depuredAssetTicket, datesArr)
 
     //crea ARREGLO de donde se va a extraer la data
     const createArrWithAssetVal = (asset) => {
         let newAsset = []
         let i = 0
         for (let [key, value] of Object.entries(asset)) {
             newAsset[i] = asset[key]["assetPrice"]
             i++
         }
         newAsset.reverse()
         return newAsset
     }
 
     const arrWithVal = createArrWithAssetVal(investmentArr)
 
     //crea un arr solo con fechas 
     const getArrWithDates = (asset) => {
         let datesArr = []
         let i = 0
 
         for (let [key, value] of Object.entries(asset)) {
             datesArr[i] = value
             i++
             if (i == Object.keys(arrWithVal).length) return datesArr
         }
         return datesArr
     }
     const newDatesArr = getArrWithDates(datesArr)
 
     const getArrWithContributions = (arr, freq) => {
         let contArr = []
         //loop igual a longitud de arr, vaciando datos en cada []
         for (let i = 0; i < arr.length; i++) {
             contArr[i] = []
             for (let z = 0; z <= i; z++) {
                 //funciona !! debo iterar para multiplicar 1ra 
                 contArr[i].push(addContribution * +contributionFreq)
             }
         }
         //suma cada subarr para obtener el resultado del interes devengado por periodo
         let reducedArr = []
         for (let i = 0; i < contArr.length; i++) {
             const initialValue = 0
             reducedArr[i] = contArr[i].reduce(
                 (previousValue, currentValue) => previousValue + currentValue,
                 initialValue
             )
         }
         return reducedArr
     }
 
     //crea un arr con contribuciones por mes
     const getArrWithInterest = (arr, freq) => {
         let contArr = []
         //loop igual a longitud de arr, vaciando datos en cada []
         for (let i = 0; i < arr.length; i++) {
             contArr[i] = [(startingAmount / arrWithVal[0]) * arrWithVal[i]]
             //loop para agregar cantidad de contribuciones a cada subarr[]
             for (let z = 0; z <= i; z++) {
                 //funciona !! debo iterar para multiplicar 1ra 
                 contArr[i].push((addContribution * +contributionFreq) / arrWithVal[z] * arrWithVal[i])
             }
         }
         //suma cada subarr para obtener el resultado del interes devengado por periodo
         let reducedArr = []
         for (let i = 0; i < contArr.length; i++) {
             const initialValue = 0
             reducedArr[i] = contArr[i].reduce(
                 (previousValue, currentValue) => previousValue + currentValue,
                 initialValue
             )
         }
         return reducedArr
     }
 
     //este Arr contiene la evolucion de lo invertido mes a mes y el monto actual
     const arrWithContributions = getArrWithContributions(newDatesArr)
     const arrWithInterest = getArrWithInterest(newDatesArr)

     /*console.log("dates arr")
     console.log(datesArr)
     console.log("investment arr")
     console.log(investmentArr)
     console.log("arr with val")
     console.log(arrWithVal)
     console.log("new dates arr")
     console.log(newDatesArr)*/

     setTotalContributions(arrWithContributions[arrWithContributions.length -1])
     setTotalGrowth(roundNumber(arrWithInterest[arrWithInterest.length - 1]))   

    return { newDatesArr, arrWithVal, arrWithContributions, arrWithInterest, investmentArr }
}
