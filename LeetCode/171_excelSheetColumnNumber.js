let excelSheetColumnNumber = function(columnTitle){
    let columnNo = 0

    for(let i = 0; i < columnTitle.length; i++){
        columnNo += Math.pow(26, columnTitle.length-1-i) * (columnTitle[i].charCodeAt(0) - 64) 
    }
    return columnNo
}