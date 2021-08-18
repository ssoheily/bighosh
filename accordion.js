



//ACCORDION VIEW IN WEBPAGE
let accordion = document.querySelectorAll(".accordion")

    accordion.forEach(accordion =>{

        // convsert htmlCollection to Array,weil cann t work mit forEach
                Array.from(accordion.children).forEach(wrapper => {
                    if(wrapper.classList.contains("show")){
                        wrapper.querySelector("div").style.maxHeight 
                        = wrapper.querySelector("div").scrollHeight + 30 +"px"

                    }
                    wrapper.querySelector("span").addEventListener("click", e => {
                        // console.log(e.target)
                        let span=e.target;
                        let wrapper = span.parentElement
                        let div = span.nextElementSibling

                        wrapper.classList.toggle("show")
                        if(wrapper.classList.contains("show")){
                            div.style.maxHeight = div.scrollHeight + 30 + "px"
                        }
                        else{
                            div.style.maxHeight= null
                        }
                        

                        // wenn a accordin open, next close
                        Array.from(accordion.children).forEach(w => {
                            if(w != wrapper){
                                w.classList.remove("show")
                                w.querySelector("div").style.maxHeight = null

                            }
                        })
                    })
                })


                // check internet concect

                let el = document.createElement("div")
                // el.textContent="hello"
                // document.querySelector(".content").append(el)
                document.querySelector(".content").prepend(el)


                // addEventListener version
                window.addEventListener('online', (event) => {
                    el.textContent="online"
                    el.className="alert"
                    el.classList.add("alert-success")
                });

                // addEventListener version
                window.addEventListener('offline', (event) => {
                    el.textContent="offline"
                    el.className="alert"
                    el.classList.add("alert-danger")
                });  
    })
                