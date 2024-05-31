let processedUrls = new Set();
chrome.webRequest.onCompleted.addListener(async function(details){
    if(details.url.includes("/check/"))
    {
          if(!processedUrls.has(details.url))
          {
           const response=await fetch(details.url);
           const data=await response.json();
            if(data.state==="SUCCESS"&&data.status_msg==="Accepted")
            {
                  processedUrls.add(details.url);
                    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
                      chrome.tabs.sendMessage(tabs[0].id,{message:"got accepted mate"},function(response){console.log(response)}
                      )
                  })
            }
            setTimeout(() => {
              processedUrls.delete(details.url);
          }, 5 * 60 * 1000); 
          }
                
    }
},{ urls: ["*://leetcode.com/*"] }
)