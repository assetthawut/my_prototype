function convertNormalHtml(){

        
    try{

        var file = document.getElementById("loadNormalHTML").files[0];
        console.log("===> ",file);
        

        reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {



           htmlNormalFileData = evt.target.result
           var htmlObject = $(htmlNormalFileData);

           focusElement = $('[content-area=html]',htmlObject);
        
           DisableSecureChrome = $('#iframe_sampleHtml').contents().length > 0 ? true:false; 

           validNormalHtml = validateNormalHtml(htmlNormalFileData);
           
           
           if(validNormalHtml && DisableSecureChrome){
                        console.log("xxxxxxxxxxx",$('#iframe_sampleHtml').contents().length);
                        debugger
                        $('.loader-wrapper', $('#iframe_sampleHtml').contents()).remove();                
                        $('[content-area=html]', $('#iframe_sampleHtml').contents()).append( htmlNormalFileData );
                        // $('#iframe_sampleHtml')
                        inIframe = $('#iframe_sampleHtml').contents().find("html").html();
                        // remove element that recently add  
                        // $('[content-area=html]', $('#iframe_sampleHtml').contents()).empty();
    
                        
                        var saveData = (function () {
                            var a = document.createElement("a");
                            document.body.appendChild(a);
                            a.style = "display: none";
                            return function (data, fileName) {
                                    blob = new Blob([data], { type: "text/plain" }),
                                    url = window.URL.createObjectURL(blob);
                                a.href = url;
                                a.download = fileName;
                                a.click();
                                window.URL.revokeObjectURL(url);
                            };
                        }());
        
                    //    orginal_name= $('#setFileNameNormalHtml').text().replace('.html','') ;
                        fileName = "converted.html";
                        saveData(inIframe, fileName);
           }else{

                if(!DisableSecureChrome){
                    messageWarn = "Please disable web security.";
                }else{
                    messageWarn = "The HTML file has been converted.";
                }
                


            $(".warnmsgNormalHtml").replaceWith(
                '<div class="alert alert-warning alert-dismissable openwarning warnmsgNormalHtml"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> '+messageWarn+'</div></div>'
                )
            notificationTimeOut['warnmsgNormalHtml'] = setTimeout(function () {
                $(".openwarning").replaceWith('<div class="warnmsgNormalHtml"></div>');
                }, 3000)

                return;
           } 

       }
    }
    catch(err){
        alert(err);
        $(".warnmsgNormalHtml").replaceWith(
            '<div class="alert alert-warning alert-dismissable openwarning warnmsgNormalHtml"><a href="#" class="close" data-dismiss="alert" aria-label="close" style="position: initial;">&#215;</a><strong>Warning !</strong> The HTML file has an incorect format.</div></div>'
            )
        notificationTimeOut['warnmsgNormalHtml'] = setTimeout(function () {
            $(".openwarning").replaceWith('<div class="warnmsgNormalHtml"></div>');
            }, 3000)
    }


    function validateNormalHtml(htmlString){

        var htmlObject                   = $(htmlString);
        var posPdf2htmlExString          = htmlString.indexOf('content="pdf2htmlEX"');
        var focusElement                 = $('[content-area=html]',htmlObject);
       
        // var elementhasChild         = focusElement[0].children.length;

        var elementHasPdf2htmlExString   = posPdf2htmlExString > 0 ? true:false;
        

        if(focusElement[0] != undefined){
            var focusElementChildLength      = focusElement[0].children.length;
            var elementHasChild = focusElementChildLength > 0 ? true:false;
        }


    

        if(elementHasChild || elementHasPdf2htmlExString){

            return false;

        }else{

            return true;

        }

        


    }

}

