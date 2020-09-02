function transform(){
  let content = document.getElementById('before').innerHTML;
  document.getElementById('after').innerHTML = transformContent(content);
}

function transformContent(content){
  return `Tak co ty ${wrapKeywordWithLink('kundo')} jedna vymrdana????`;
}


function wrapKeywordWithLink(keyword){
  return `<span style="font-weight: bold"> <a href="http://google.com/" target="_blank"> ${keyword} </a> </span>`
}

function getKeywords(){
  return [
    'invest',
    'fund'
  ]
}
