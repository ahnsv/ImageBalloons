# ImageBalloons
A simple af extension that recommends images based on input text
## Things to deliver to users
- Get images based on input text
- Load images infinitely as user scrolls
```text
textInput --> Google Custom Search API --> images --> dataStorage --> vue-infinite-loading --> popup view
```
### Whys
- Why Google CSE?
    - The easiest way to search images based on text input
    - Can choose the layout of result images
    - Can also get results in diverse data formats like XMLs, jsons too
- Why vue-infinite-loading?
    - Implementing infinite loading is a pain in the ass, tbh
    - Using vue and the plugin will save time and also display the loaded data in elegant view
### Issues
- What's the best way to store the photo datas? 
    - If I choose to get the data in json, I can just use localstorage or chrome.storage
    - But if I can just show the data in popup and combine it with vue-infinite-loading, I might not need additional storage 

## Data flow
## References
- https://github.com/PeachScript/vue-infinite-loading
- https://developers.google.com/custom-search/v1/using_rest