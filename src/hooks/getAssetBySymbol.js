import axios from 'axios'

export default async function getAssetBySymbol(symbol, setAsset, setAssetName) {
    const API = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol="
    const API_Key = "19dc842d1amsh56456f37b218af0p17af85jsnc2af40556506"

    const res = await axios.get(`${API}${symbol}&apikey=${API_Key}`)
        .then(res => {
          setAssetName(res.data["Meta Data"]["2. Symbol"])
          setAsset(res.data["Monthly Adjusted Time Series"])  
        })
        .catch(() => {
            alert("Ha habido un error al cargar la información del activo solicitado. Por favor vuelva a intentarlo.")
            return []
        })
}