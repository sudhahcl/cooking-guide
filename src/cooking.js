var backendDataResult=null;

/*this function is to get the data from json*/
 backendData=()=>{
    return fetch('http://localhost:3000/category')
    .then(response => response.json())
    .then((resp) => {
        backendDataResult = resp;
        appendData(backendDataResult)
    })
    }
    backendData();
     
/*this function is to display json data on UI*/
    appendData = (data)=>{
        let chineeseData = document.getElementById("Chineese").id;
        let filterOfchineeseData =  data.filter(val=>val.name === chineeseData).reduce(val=>val.name).name
        document.getElementById("Chineese").innerHTML = filterOfchineeseData;
        let filterOfNoodlesData = data.map(val=>val.itemList).reduce(val=>val).filter(val=>val.item).reduce(val=>val.item);
        document.getElementById("Noodle").innerHTML = filterOfNoodlesData;
        let SchezwanRiceData = document.getElementById("Schezwan Rice").id;
        let filterOfSchezwanRiceData = data.map(val=>val.itemList).reduce(val=>val).filter(val=>val.item===SchezwanRiceData).reduce(val=>val.item).item;
        document.getElementById("Schezwan Rice").innerHTML = filterOfSchezwanRiceData;
        let indianData = document.getElementById("Indian").id;
        let filterOfIndianData =  data.filter(val=>val.name === indianData).reduce(val=>val.name).name
        document.getElementById("Indian").innerHTML = filterOfIndianData;
        let filterOfSambharRiceData = data.filter(val=>val.name === indianData).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item).reduce(val=>val.item);
        document.getElementById("Sambhar Rice").innerHTML = filterOfSambharRiceData;
        let CholeBhatureData = document.getElementById("Chole Bhature").id;
        let filterOfCholeBhatureDataData = data.filter(val=>val.name === indianData).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item===CholeBhatureData).reduce(val=>val.item).item;
        document.getElementById("Chole Bhature").innerHTML = filterOfCholeBhatureDataData;
        let thaiData = document.getElementById("Thai").id;
        let filterOfThaiData =  data.filter(val=>val.name === thaiData).reduce(val=>val.name).name
        document.getElementById("Thai").innerHTML = filterOfThaiData;
        let filterOfThaiRiceData = data.filter(val=>val.name === thaiData).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item).reduce(val=>val.item);
        document.getElementById("Thai Rice").innerHTML = filterOfThaiRiceData;
        let ThaiCurryData = document.getElementById("Thai Curry").id;
        let filterOfThaiCurryData = data.filter(val=>val.name === thaiData).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item===ThaiCurryData).reduce(val=>val.item).item;
        document.getElementById("Thai Curry").innerHTML = filterOfThaiCurryData;
        
    }
    imageDescription = (backendDataResult)=>{
        console.log("backend data"+backendDataResult)
        let dataDec = backendDataResult.map(val=>val.itemList).reduce(val=>val).filter(val=>val.item).reduce(val=>val.description); 
        localStorage.setItem("data",dataDec)
        window.location.href = "http://localhost:5500/noodles.html" 
        
    }
    imageDescriptionSchezwan =(backendDataResult)=>{
        let SchezwanRiceDes = document.getElementById("Schezwan Rice").id;
        let schezwan = backendDataResult.map(val=>val.itemList).reduce(val=>val).filter(val=>val.item == SchezwanRiceDes).reduce(val=>val.description).description;
        localStorage.setItem("data",schezwan)
        window.location.href = "http://localhost:5500/noodles.html"
    }
    imageDescriptionIndian1 =(backendDataResult)=>{
        let indianDataDes = document.getElementById("Indian").id;
        let rice1 = backendDataResult.filter(val=>val.name === indianDataDes).map(val=>val.itemList).reduce(val=>val).reduce(val=>val.description);
        localStorage.setItem("data",rice1)
        window.location.href = "http://localhost:5500/noodles.html"
    }
    imageDescriptionIndian2 =(backendDataResult)=>{
        let itemID=backendDataResult.filter(val=>val.name === indianDataDes).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item==CholeBhatureId).reduce(val=>val).itemID
        let indianDataDes = document.getElementById("Indian").id;
        let CholeBhatureId = document.getElementById("Chole Bhature").id;
let chole=backendDataResult.filter(val=>val.name === indianDataDes).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item==CholeBhatureId).reduce(val=>val.description).description;
localStorage.setItem("data",chole)
        window.location.href = "http://localhost:5500/noodles.html"
        
    }
    imageDescriptionThai1 =(backendDataResult)=>{
        let thaiDataDes = document.getElementById("Thai").id;
        let thai1 = backendDataResult.filter(val=>val.name === thaiDataDes).map(val=>val.itemList).reduce(val=>val).reduce(val=>val.description);
        localStorage.setItem("data",thai1)
        window.location.href = "http://localhost:5500/noodles.html"
    }
    imageDescriptionThai2 =(backendDataResult)=>{
        let thaiDataDes = document.getElementById("Thai").id;
        let curry=document.getElementById("Thai Curry").id;
        let thaiCurry1 = backendDataResult.filter(val=>val.name === thaiDataDes).map(val=>val.itemList).reduce(val=>val).filter(val=>val.item==curry).reduce(val=>val.description).description;
        localStorage.setItem("data",thaiCurry1)
        window.location.href = "http://localhost:5500/noodles.html"
    }


   

  
    