const lonely = [4,7,9,2,9,4,7]

const lonely_item = lonely.filter((item)=>{
    return lonely.indexOf(item) === lonely.lastIndexOf(item)
})
console.log({lonely_item});