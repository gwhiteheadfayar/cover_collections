const covers = [
    { image: 'https://www.dropbox.com/scl/fi/wilcr8ka6zt57z9zpb58z/barnesandnobleclassics.jpg?rlkey=ulphof33de56ljdnbgfjodf5t&st=x3v9kn1u&dl=1', collection: 'Barnes & Noble Classics Series' },
    { image: 'https://www.dropbox.com/scl/fi/guwxl5cpp10p1fc88d00s/barnesandnoblecollectible.jpg?rlkey=hluv9k2927mjh1mhxcf546zhm&st=osak631q&dl=1', collection: 'Barnes & Noble Collectible Editions' },
    { image: 'https://www.dropbox.com/scl/fi/cwfnf0wqw4rblak9grfo3/barnesandnobleleatherboundclassics.jpg?rlkey=3csdt42vntrak9njwb6yiykfi&st=d6q9rsu6&dl=1', collection: 'Barnes & Noble Leatherbound Classics' },
    { image: 'https://www.dropbox.com/scl/fi/2jl0yjjpra3ysb1n5bshg/doverthrift.jpg?rlkey=unryx8jpjflk6m8o219v8l1mo&st=ekvu3m0y&dl=1', collection: 'Dover Thrift' },
    { image: 'https://www.dropbox.com/scl/fi/zhghxbnaw4mftzsmst5i3/everymanslibrary.jpg?rlkey=jb2oob910kh8wmg08j5nnvhzc&st=0a3y5i16&dl=1', collection: 'Everyman\'s Library Classics' },
    { image: 'https://www.dropbox.com/scl/fi/svaqdq6dq12pdr8y44hfd/faberfaberpoetryseries.jpg?rlkey=huntcatms0gteaeysgdld2i03&st=bbr6q27d&dl=1', collection: 'Faber & Faber Poetry Series' },
    { image: 'https://www.dropbox.com/scl/fi/wbs012s0enequta4gd1h8/libraryofamerica.jpg?rlkey=rzhfbcgnut83fg37j06zettac&st=7p6blb70&dl=1', collection: 'Library of America' },
    { image: 'https://www.dropbox.com/scl/fi/8o5fhqgt74m080lp51gwm/macmilliancollectorslibrary.jpg?rlkey=o1pnc2buwxyokhz68i8rly29h&st=baaxikal&dl=1', collection: 'Macmillian Collector\'s Library' },
    { image: 'https://www.dropbox.com/scl/fi/3qn5is5nolev57amau0sb/nyrbclassics.jpg?rlkey=tzi0nx6gygfa4am878vnz18ae&st=1il3pov1&dl=1', collection: 'Nyrb Classics' },
    { image: 'https://www.dropbox.com/scl/fi/9x3ny6840zw6bqbaocqtf/oxfordworldsclassics.jpg?rlkey=mwt3360my6afwt9d2ukfilyvi&st=rdyfr16m&dl=1', collection: 'Oxford World\'s Classics' },
    { image: 'https://www.dropbox.com/scl/fi/pcxzy98idfhyjlzyva86f/pelicanbooks.jpg?rlkey=vhrirmwyj85b40afe4xuicmnj&st=dg5pmwo2&dl=1', collection: 'Pelican Books' },
    { image: 'https://www.dropbox.com/scl/fi/rwh33b3troszv30p0v71a/penguinclassics.jpg?rlkey=8mvgcpro97iizv2xloygjrhr9&st=9l4sifz9&dl=1', collection: 'Penguin Classics' },
    { image: 'https://www.dropbox.com/scl/fi/67pdb8uu0d4hx3etgqfxq/penguinclothbound.jpg?rlkey=4lfuhc42ocqlkb3cuygdjbzxz&st=mkc2dxe2&dl=1', collection: 'Penguin Clothbound Classics' },
    { image: 'https://www.dropbox.com/scl/fi/6480bfta8ih5oiqoh76ix/puffinclassics.jpg?rlkey=pr11sjfbvpulztf4sdfy1n6ql&st=u0bu4i0w&dl=1', collection: 'Puffin Classics' },
    { image: 'https://www.dropbox.com/scl/fi/k57zj3tkceg1e4sld5dj4/picadormodernclassics.jpg?rlkey=wfrfbksf3aiy9ahz77psf8950&st=ez65ho54&dl=1', collection: 'Picador Modern Classics' },
    { image: 'https://www.dropbox.com/scl/fi/wlezucfy183quqwq8yc9m/randomhousemodernlibraryclassics.jpg?rlkey=jwoayce8pecs4hq6edm35mkk8&st=tt73l2mv&dl=1', collection: 'Random House Modern Library Classics' },
    { image: 'https://www.dropbox.com/scl/fi/m99unp13nw2y515qgjcm1/randomhouseshakespeare.jpg?rlkey=8r2pf8vcvmgag8jtzj3h7qz89&st=4i1skxlq&dl=1', collection: 'Random House RSC Shakespeare Complete Works' },
    { image: 'https://www.dropbox.com/scl/fi/1ie4pcn06mt6fnwiwjtp8/sfmasterworks.jpg?rlkey=j5sdj4g5nl5scpvyj3bokzbbj&st=3qzl4h13&dl=1', collection: 'SF Masterworks' },
    { image: 'https://www.dropbox.com/scl/fi/opykrfz8ipgkemgx6q9ko/viragomodernclassicsnew.jpg?rlkey=pnax1d8uey9qwd0l8a5reghjs&st=gm7ddo3s&dl=1', collection: 'Virago Modern Classics (New)' },
    { image: 'https://www.dropbox.com/scl/fi/0wu6zmkz8bhn8ngj21030/viragomodernclassicsold.jpg?rlkey=t48kv3atwx9iv3b1nygvyb9a4&st=2xacsjgv&dl=1', collection: 'Virago Modern Classics (Old)' },
    { image: 'https://www.dropbox.com/scl/fi/pe8mz00i00omh0boqn64x/wodsworthclassics.jpg?rlkey=yd15onvx8ve5kdhb1wbj1h5cj&st=5w7gbegw&dl=1', collection: 'Wodsworth Classics' }
];

let box = document.querySelector('.box');
for (let i = 0; i <= covers.length - 1; i++) {
    let div = document.createElement('div');
    div.className = 'item';

    let img = document.createElement('img');
    img.src = covers[i].image;
    img.alt = covers[i].collection;

    let p = document.createElement('p');
    p.textContent = covers[i].collection;

    //div.textContent = i;
    div.appendChild(img);
    div.appendChild(p);
    box.appendChild(div);
}


async function showRelatedBooks() {
    const currentBook = document.querySelector('.box .item:nth-child(4)');
    const currentCollection = currentBook.querySelector('p').textContent;

    const relatedBooksContainer = document.querySelector('.related-books');
    relatedBooksContainer.innerHTML = '';

    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(currentCollection)}&limit=10`);
        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
            const booksWithCovers = data.docs.filter(book => book.cover_i);
            booksWithCovers.slice(0, 10).forEach((book, index) => {
                setTimeout(() => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'related-book';

                    const img = document.createElement('img');
                    img.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                    img.alt = book.title;

                    const title = document.createElement('p');
                    title.textContent = book.title;

                    bookElement.appendChild(img);
                    bookElement.appendChild(title);
                    relatedBooksContainer.appendChild(bookElement);
                }, index * 200);
            });

            if (booksWithCovers.length === 0) {
                relatedBooksContainer.innerHTML = '<p>No related books with covers found.</p>';
            }
        } else {
            relatedBooksContainer.innerHTML = '<p>No related books found.</p>';
        }
    } catch (error) {
        console.error('Error fetching related books:', error);
        relatedBooksContainer.innerHTML = '<p>Error loading related books.</p>';
    }
}

function moveNext() {
    let items = document.querySelectorAll('.item');
    box.appendChild(items[0]);

    showRelatedBooks();
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    box.prepend(items[items.length - 1]);

    showRelatedBooks();
}

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        moveNext();
    } else {
        movePrev();
    }
})

showRelatedBooks();