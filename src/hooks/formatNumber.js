export default function formatNumber(num) {
    return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
}