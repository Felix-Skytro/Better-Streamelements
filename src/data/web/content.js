const root = {
    disableRedesign: false
};

const HOST = window.location.href

setTimeout(loadingscreen, 1500)


function INJECT(){

    const inject = document.createElement('style');
    const injectOVLeditor = document.createElement('style');
    const editLinks = document.querySelectorAll('a[target="_blank"]');


    setTimeout(() => {
    console.log(editLinks)

editLinks.forEach(function(link) {
    link.setAttribute("target", "_self");

    console.log("Removed attribute from adress Element with the ID: " + link.id)

    link.style.transition = "500ms"
    link.style.border = "solid 2px #5684FD"

    setTimeout(() => {
        link.style.border = "none"
    }, 600)
});
}, 300)



    inject.classList.add("SE-OVERWRITE")
    injectOVLeditor.classList.add("SE-OVERWRITE")

    setTtile("Streamelements.com", 200);







    injectOVLeditor.textContent = `
    

    *{

        color: #fff !important;

    }

    md-option{

        background: transparent;

    }

    .md-select-menu-container.md-active md-select-menu > *{

background: rgba(132, 160, 190, 0.45);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
border: 1px solid rgba(132, 160, 190, 0.3);

    }

    .md-subheader .md-subheader-inner{

            background: #1e1e1e;

    }

    .editor{

        background-color: #00000a;

    }

    .floating-actions__draggy-boi{

        display: none;

    }

    .floating-actions__root{

        background: transparent;

background: rgba(255, 255, 255, 0.29);
backdrop-filter: blur(7.2px);
-webkit-backdrop-filter: blur(7.2px);
border: 1px solid rgba(0, 0, 0, 0.3);

    }

    .floating-actions__items{

        background: transparent;

background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(4.2px);
-webkit-backdrop-filter: blur(4.2px);
border: 1px solid rgba(0, 0, 0, 0.3);

    }


        .overlay-settings {
            background: #1C233D;
            color: #fff;
        }

        .se-widget-details-v3__header__expanded{

            background: #5684FD;
            color: #fff;

        }

        .se-widget-details-v3__header{

            background: #000;
            color: #fff;

        }

        .widget-layers-actions-list-item__title{

            color: #fff;

        }

        .widget-layers-list.ui-flow-2 .widget-layers-list-item--hidden{

            color: rgba(255,255,255,.3);

        }


        /*==========/ Widget Inputs /==========*/

.md-chips, md-input-container .md-input, md-input-container md-select{


    color: #fff;


}




    `




    inject.textContent = `



    /*==========/ Moderation Fullscreen Border /==========*/

    .se-ds-c-kshpRG{


        box-shadow: none;


    }


    .se-ds-c-jXzmVb{

        align-items: center;
        justify-content: center;

    }



    /*==========/ Title Bar /==========*/

.se-ds-c-ixfmhN-fPmhWw-layout-default{

    background: ${root.navColor};
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    z-index: 99;

}

/*==========/ Moderating User Wrapper /==========*/

.se-ds-c-dKGoRf{

    background-color: transparent !important;
    padding-bottom: 0 !important;

    position: absolute;
    left: 10px;

}

/*==========/ Create Overlay Button /==========*/

.se-ds-c-bQUspK-iefzCPn-css{

    background: linear-gradient(0deg, rgba(136,0,219,1) 0%, rgba(52,0,107,1) 100%);
    transition: 700ms !important;

}

/*==========/ Import Button /==========*/

.se-ds-c-bQUspK-ietqrbY-css{

    margin-right: 1.5rem;
    display: none;

}

/*==========/ News Bell /==========*/

.se-ds-c-krNFgS{

    background: #000;
    padding: 13px;

    position: absolute;
    right: 5px;
    top: 20px;

    transition: 400ms;

}

/*==========/ News Bell --- HOVER /==========*/

.se-ds-c-cZKLJf-hkIxrS-variant-ghost:hover{


    padding: 15px;


}

/*==========/ News Bell - Counter /==========*/

.se-ds-c-hoVlSu.se-ds-c-hoVlSu{

    top: -6px !important;
    left: 65% !important;

}

.se-ds-c-brlTBd{

    bottom: 5px !important;
    right: 10px !important;

}

/*==========/ User Wrapper /==========*/

.se-ds-c-dKGoRf{

    flex-direction: row-reverse !important;

    gap: 5px;

}


/*==========/ Moderating Title /==========*/

.se-ds-c-hCCSFu-isPZnW-css{

    font-size: 20px;
    font-weight: 800;
    margin-top: 3px;

}

/*==========/ IDK /==========*/

.se-ds-c-iswfzf{

    justify-contetn: center;

}

/*==========/ User Logo /==========*/

.se-ds-c-icYOmZ{

    width: 50px !important;
    height: none;

    border-radius: 50%;

}

/*==========/ Menue /==========*/

.se-ds-c-dsbkWp-caOUxT-density-default{

padding: none;

position: relative;
left: 55px;
top: 10px;

}

.se-ds-c-dsbkWp-bKgzsL-bg-secondary{

    background: rgba(35, 35, 35, 0.3);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    border: 1px solid rgba(35, 35, 35, 0.3);

}

.se-ds-c-jhTEBg{

    min-width: 0%;

}

.se-ds-c-hRuwCq-idBZIN-shadow-sm{

    box-shadow: 0px 0px 10px #6e6e6e;

}

.se-ds-c-hRuwCq-idBZIN-shadow-sm:hover{

    box-shadow: 3px 5px 10px #6e6e6e;

}

/*==========/ Overlay Boxes /==========*/

.se-ds-c-hRuwCq{

    background: linear-gradient(-30deg, rgba(51,51,51,1) 0%, rgba(15,15,15,1) 100%);

}

`;

if(!root.disableRedesign){
    document.head.appendChild(inject);

    if(HOST.includes("/overlay/")){
        document.head.appendChild(injectOVLeditor)
    }

}


}

var needDesign;
var addOverlayButton;
var moderatingUsername;
var myOverlaysParagraph;

var favioriteStar;

var menue;

var sideTitles;
var sideEntrys;

var isModerating;

    setTimeout(() => {        
        
        

        
        
        needDesign = document.querySelector(".se-ds-c-brlTBd")
        addOverlayButton = document.querySelector(".se-ds-c-bQUspK-iefzCPn-css")
        moderatingUsername = document.querySelector(".se-ds-c-iswfzf")
        myOverlaysParagraph = document.querySelector(".se-ds-c-hCCSFu-iiiqrrf-css")
        menue = document.querySelector(".se-ds-c-dsbkWp-caOUxT-density-default")
        isModerating = document.querySelector(".se-ds-c-hCCSFu-isPZnW-css")
        favioriteStar = document.querySelector(".se-ds-c-fXjNNq")
        sideTitles = document.querySelectorAll(".se-ds-c-cCGRcV")
        sideEntrys = document.querySelectorAll(".se-ds-c-dMYLZc-fGanEZ-hasIcon-false")

        const bteSettings = document.createElement("div")

        bteSettings.classList.add("se-ds-c-fjkChu")
        bteSettings.classList.add("se-ds-c-enMZYc.se-ds-c-enMZYc")
        bteSettings.innerHTML = "BTE - Settings"

        //menue.appendChild(bteSettings)
     

        if(moderatingUsername){
            moderatingUsername.style.display = "none"
        }
            

            if(addOverlayButton){

                addOverlayButton.innerHTML = "CREATE OVERLAY"

            }

            if(myOverlaysParagraph){

                myOverlaysParagraph.innerHTML = "Create and Edit your overlays & themes"

            }

            if(isModerating){

                root.navColor = "#00d6a5"

            } else {

                root.navColor = "#25242b"

            }


            setTimeout(() => {

                INJECT()



                sideTitles[0].innerHTML = "Analysis"
                sideTitles[1].innerHTML = "Overlays // Widgets"
                sideTitles[2].innerHTML = "Revenue"
                sideTitles[3].innerHTML = "SE Chatbot"
                sideTitles[4].innerHTML = "Loyalty"
                sideTitles[5].innerHTML = "More"

                //sideEntrys[5].innerHTML = "Catalog"


        
            }, 500)


        }, 5000)



        function loadingscreen(time){

            if(root.disableRedesign) return;


            const loaderBG = document.createElement("div")
            const loaderProgress = document.createElement("div")

            loaderBG.style.width = "100%"
            loaderBG.style.height = "100%"
            loaderBG.style.position = "absolute"
            loaderBG.style.left = "220px"
            loaderBG.style.background = "#1e1e1e"
            loaderBG.style.transition = "700ms cubic-bezier(0.83, 0, 0.17, 1)"
            loaderBG.style.zIndex = "99"


            document.body.appendChild(loaderBG)

            setTimeout(() => {


                loaderBG.style.height = "0%"


                setTimeout(() => {
                    loaderBG.remove()
                }, 500)


            }, 5000)


        }




        function setTtile(text, speed) {
            var element = document.title            
            var index = 0;            

            document.title = ""

            // Function to add the next character to the element
            function addNextCharacter() {
                if (index < text.length) {
                    document.title += text.charAt(index);

                    console.log(element)

                    index++;
                    setTimeout(addNextCharacter, speed); // Call the function recursively after a delay
                }
            }
            
            addNextCharacter(); // Start the typing effect
        }






        function addNavText(text){


            
        }


        function spin(elem){

            const el = document.querySelector(`.${elem}`)

            el.style.transition = "500ms"
            el.style.transform = "rotate(180deg)"

            setTimeout(() => {

                el.style.transition = "none"
                el.style.transform = "rotate(180deg)"

            }, 600)

        }