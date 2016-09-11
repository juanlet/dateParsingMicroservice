function naturalToUnix(dateString){
  
  
  return Date.parse(dateString)/1000;
  
}


function unixtoToNatural(unixTimestamp){

    var naturalDate, month,day, year;
    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    
      naturalDate=new Date(unixTimestamp*1000);
      year= naturalDate.getFullYear();
      month=monthNames[naturalDate.getMonth()];
      day=naturalDate.getDate();
      
      
      return month+" "+day+", "+year;
  
}



module.exports = {
  buildJSONDate: function(date) {
  
  var unixTimestamp;
  var naturalDate;
  var naturalDateRegExp=/^(January|February|March|April|May|June|July|August|September|October|November|December)(\s|%20|%)*([1-9]{1}|[1-9]{1}[0-9]{1}),(\s|%20|%)*[0-9]{4}$/;
  var timestampRegex=/^(\s)*[0-9]+$/;  
    if(date.match(naturalDateRegExp)){
    //it's a natural date
      naturalDate=date;
      unixTimestamp=naturalToUnix(date);

    }else if(date.match(timestampRegex)){
          //it's a timestamp
        unixTimestamp=Number(date);
        naturalDate=unixtoToNatural(date);
    }else{
      //it's not a valid input, return null on both properties
      naturalDate=null;
      unixTimestamp=null;
    }
    
    
    var response= JSON.stringify({unix: unixTimestamp, natural: naturalDate});
 
    
    return response;
  }
};