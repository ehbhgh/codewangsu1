function countDown() {
    if (count > 0) {
        let hour = Math.floor(count / 60 / 60)
        let hours=hour < 10 ? "0" + hour : hour;
        h.innerHTML=hours
        let minute = Math.floor(count / 60  % 60)
       let minutes= minute < 10 ? "0" + minute : minute
        m.innerHTML=minutes
        let second = Math.floor(count % 60)
      let seconds= second < 10 ? "0" + second : second
        s.innerHTML=seconds
     --count
    }
    else{
        clearInterval(myInteval)
       h.innerHTML="00"
       m.innerHTML="00"
       s.innerHTML="00"
    }
}