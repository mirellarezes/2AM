let item0 = document.getElementById('item0')
let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let item4 = document.getElementById('item4')
let item5 = document.getElementById('item5')
let item6 = document.getElementById('item6')
let item7 = document.getElementById('item7')

function addLocal(nomeDiv) {
    document.getElementById(nomeDiv).classList.remove('hidden');
}

item0.addEventListener("click", function(){addLocal(itemCarrinho0)})
item1.addEventListener("click", function(){addLocal(itemCarrinho1)})
item2.addEventListener("click", function(){addLocal(itemCarrinho2)})
item3.addEventListener("click", function(){addLocal(itemCarrinho3)})
item4.addEventListener("click", function(){addLocal(itemCarrinho4)})
item5.addEventListener("click", function(){addLocal(itemCarrinho5)})
item6.addEventListener("click", function(){addLocal(itemCarrinho6)})
item7.addEventListener("click", function(){addLocal(itemCarrinho7)})