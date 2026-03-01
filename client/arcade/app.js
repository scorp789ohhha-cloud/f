const games = [
  {
    title: "DELTARUNE",
    thumb: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/deltarune.jpeg",
    url: "https://themarzlibrary.org/filesgx/deltarune/deltaruneindex.html"
  },
  {
    title: "UNDERTALE",
    thumb: "https://cdn.kanobu.ru/games/5bd2ab2a-7bd0-4c43-ad37-407bbc70d2f8.png",
    url: "https://themarzlibrary.org/filesgx/undertale.html"
  },
  {
    title: "Windows XP Tour",
    thumb: "https://i.ebayimg.com/images/g/jIwAAOSw6SVkd7KH/s-l400.jpg",
    url: "https://logonoff.co/projects/windowsxptour/mmTour/index.html"
  },
  {
    title: "Papas Freezeria",
    thumb: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/fe7c19da32800855dfb8f039adfe353b/papas-freezeria.png",
    url: "https://en.gameslol.net/data/awayjs/papa/freezeria.html"
  },
  {
    title: "Papas Pizzeria",
    thumb: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/377fd7d97c2b2f4fe25618ccffcc601b/papas-pizzeria.jfif",
    url: "https://bitent.com/swf/papas_pizzeria/"
  },
  {
    title: "Minecraft",
    thumb: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQYBBwj/xAA5EAACAQMCAwYDBwMDBQAAAAABAgMABBESIQUxQQYTIlFxgRRhkQckMkJSocEjctEVsfE0Q2Lh8P/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACQRAAICAgEEAwADAAAAAAAAAAABAhEDITESE0FRBCIyQmGR/9oADAMBAAIRAxEAPwD7jUqVKAJUqVKAJUrzNZ3FON2HC1Bu51VjyQbsfalKSirYm0uTRJpDiHF7Gw8NxOolxkRA5c+1cpxHtXcXWVtR8PEdgwOXP+PauQmiEt2WRZjIxySzElj6864cvzUtQISzpfk67i3ae+uAy2aG3h6soyx9+ntWPw7jF7ZzF7e4fJJLK+WDfM5oMF7c2uI7hAynlnn9etS6uokGYYWy3M4wK4pZpylbZFybd2dnwvtdazgJfr8PJ+o/gPv0rpI5EkQMjhlIyCDkGvj5ZJxgkg0fh/FLzhM/3O60r1jJyp9RXVj+Y1qZWOZpbPrYr2uV4X2zs5SsXEcW0p5MN0Pv09/rXTxyLIivGwZWGQynINd0MkZr6svGSlwXqVKlUNEqVKlAEqVKlAEqV5St5xC2swe/kAPRRuT7UnJLbAapHiXFrLhy5uZwrHlGN2PtXL9oO0F/JHiwkS3jPX/uH0PIVz+iQxmW5mVnO7MTz9T51xZPmJagQnm8I1OL9ruI3Mnc2Mfw8Tfm5uR69K5yeKSR9boZHJyzcyT8zRRFBLIHy5XO4U86fku4rUKkMTcvLH/JrgnklN3JkG3LchaFFCgMojx5UuImW71LduB54/bypx+5uxlWKsOnI/SkpytsSuQ5+XSsGW/Ra8kVp1U3LYzvgZA+lNi1WWMNBJkdSeRrNQyz+JIthyJ5UdZtGMuUbrg4pCsrcokGQ5ww6CgRrG+4O/lTccUAOqYllPQ8qvPwqF4zcW9wsY54LeH69KBtCDoVOdOQK0uCcWubCT7pOydTFjKN7Vnwz48JwwBwSK0rUx841UA89sGnGTi7Qo2no7Phna21mIjvvu7/AKz+A+/SuijkSRA6MGU7gg5Br5XcxKULMjeq9KFw/i17wqUfCXOlM7xtuh9v5Fd2P5jWp7OiOatSPrea9rlOE9tLS40x8QX4aU/mG6H36e/1rqEkWRA8bBlYZDA5BrvhkjP8svGSlwXqVKlbNHzm77dXPEGK8OTuYuR3zJ/6pL41sszSbnclzXDBijagSG6HO9NpxOVFPff1AORavGydcnbdnG5Sb5N+9viw/px6j1cnlSCzd4/jbFU4erX7bSLpHME7/Stn/T7Ex6BqEmPxZ3qDRKmylsVRMiPBP5s86FdyNIwDS6V8gKpLbzWjYDhlPkf4rxFnuc91CX0jfSuaLDfA6YLWKFXW4Ej/AP3lyqipZxjvXIJ8j5+lZ7XYG0g7vG24xT1n3EmlrnLRn9GDQNML8Qtzhbbwt086DJw2UEtKS3pviqcReyjnC2iS899tvbO9MLcToo1gnbI1ZzQGhaSxnjXUq6h1xzHtRUspZLXeDIO4Gefzqkxu5d5QRH0xyqkVxcwNpWQFP0nlQLQqIVSXGTGQd8jlWrFArIHikDEfmzQ5SbsAGMD5j/NBFlLaEvFKwyOhx/zQOg0804Hdliv81mvqRwTHkf70YxMW1amJPPJqzllQltIwMktypGQXhkB0gg48qa4RxC/4K5lt70pDnLRtuh9QeXqKxW7WxcPV4raGO4fzxpUH16+1ctxLil7xK413MmFO/doNKD2q+PHK7WikYvlH2FftY4VENFzbzvIuxa3wyH0JIqV8XGMc6ldynP2dHVI1uJXsccEM1uVlV30thvlTcRE1nFKBhXQN6Zrnkte5dw+GRht605DxhY4Pg5Y9KRgKjr0A86zLF9bRSeGlo0CO5PeK2kLuWzjFaNtx2WNVMoE0bbhlIzj+ax3mEllKyNqVkYA+1IcF8Uc3PGVx+9ReNOLbIdCcW/R9Ks3sryEyJdLqAyVOxHqDvUj4jc2Z7qDxJnYEZHt1rjIZRG+TlSORzW/w7tDJZIVkgjlQjZ+TfXqK53j9EXHejYFtbcWbPEG0ScgTs31qkvDo7PK2pEidSOY9azYuJm6dpB3e/wCRRjFN2800rhUYY6qx2qdGf6YFp+7fIPjU9OlVa9nk2Y6Rz22rRngjXxzAMR1xQ1aC4yHQnHLw9PagKB/FSmIKZQw8+posdrbPF3pmGry8vlisyVlEpWEPjP5hvRF2GZCFA65pBwGluJIsqgAHRjUsmV2ZproLgZwx/k1hcT4/bQ5Frmdx1B8A9+tc5c8QuLsgzyErnOhdl+lWhhlLk2ot8nV8U7QW1q5SzYXTj8w2Qf59q5fiHELviBzcSkoOSDZR7UGFg+SVGxopUNsRtXVHHGPBZQQmSARnaqu2FJXpSd07JeyvnwKTgZ+VBa4d8DOFzyHWrKBZYnZ4Xmc5YtmpRsGpVC/SjSnmZFUP5/Sjx2kN0qZBBZfxLzq/HFBijYDB1UO0nURRgnGwwRU/Fl/IaMxWltLZPKDJpYjbnn+aT4VeR2pdJQQr48Xlj5Va6TvbxHJBI05+YFS9iRmU4AY+VJRX+kXhVMLwuaSe4kidtSbkZ9a34kXuFRsEgYrmuHfd7kszhQVwDnmdq07Xin334eVN84DD061Kcfto5MkPvpDksZjcFc5AztzFM23FHi0i4XvV8+RH+arIqPEzg/hB5VlWVzFcoSmQRzU8xUnC0QcbVnYWvEo7ra2fU3VT+IVoQPJApaSQBBuQf981wkKNFP3iPgjkQcEUHit9d3EndzXDvGoGFJ29cVhYbZlR2dRxntNw5VKW8fxM/wCtThR79a467v7u/P8AXlynRBsv0oaDVVO8GTirxxxiWUUhNZ3e7MWAFXI9cV7NOFuFhCncjJ9aV70RXkjsM7naqmbvbkSkYAIz8gK6Om9nR27ZpS3Udsu+5PJRVOISSNEBGSuTuB5Vn3MwldSoO1RXZcs+WyMDJpxhw2KOPSYWNBgI2w61WSINMoUgDYbVZD3mD51bBDgDnW3ydCGxBEowf3qUOvawaNO9lMkag9Gz60RLOOW3QxHS+kZxyociBxucUC3l0XJUOQVJB8jtWPGjdjQg7uEpJgyLkg1nXjNLoZRuuQQKfln1S4ccwOVAuECFdIx1NauzPSZzuzDS4GR9atDK8EySgZK+fWtrRbXqgOAWA58iPekntykhgXL45ZFFrgHApPdTTTLc24ePw6H0nnXkDx2j+LIDYxjpVRKIGMWg6Tz8xREgSYEMSCOWKHFUT7acXEdmvRFAJkxIuQDg0pdziSKS4jGBp2BpOJcSvGdxv70GeaUSiBTiJeYHX1rMcaRHsKKC2l+sFu5nLNIT4R8v4qltdh2dpSEQDYfOqd0spDE7DkKveIjIipgAE8qo4o121QGSJXZps7E5HpQ3dQpVfLFHkH3cKCM4FWtLWMoHk3IPLpTTK1QtANs/Q08tqmAZcN1xnagXsirpCAcjiiu5Cgn6UMYOQgSnTjFed6i/i3YnkK80mRvCN6rJCVkGo4JxQATvG8q8q/hHlXlIDbLBSN9vOkxbd7eExkZYk/tVZp2VVDDIzRrUssqSAbEbZ9KxwbKSrJC2ZFORvVXuUnwRlT1DVqSSJLC6Ou5U4GM71lpw8zhzEwDKRsaE/Y2Vtbgd4RjpzFEiuGXiY21KT6dKp3Wht1weRxTETRsq5xqHnRoVDs8dvdITIviA2PIisxAxBK8xTMkiqdJyMjpQIpNBzj1pIbKwWxlmOkgNgnelL0mB5FI8Y51pW+uOfWBz5Gk+KIHeeU5yV5e1aT2ZfAlbP4G1HrRoyJHOobAUK0g1qSx2zypiUJCoC863ezFWgEi7senTah94BpUknflRZWAiyTS4AZg/7UwGBoc6nAOnlVZGDDAFewR96DhtgcGiXESxxgLzzSGFhcJEmAM9arIykM78yMUqkx7wJjAHM0cQ99uWwvLbnQtMT2J98Og/epWgsFug06Afmd68osOkdFuu6ygEY2NQsEQxAYxsDV7nOAOueVLW6yS3ghcsA+SCR8qmU8jlux0qzbkHei3dwyMskPIg6sjmemf3rNuFmtbnYncDkdq0rKdWVhINsgUmhpil+HeEGMb5ztRIbRprVJFYhyNwaGZWViCNs9KYgn0qArAj9Jpv8i/kKujrIqSDB8qJPaSw7lcp5ivbuTXOrYwQBn96djucY1jOeopbGZsF4Gbu3GMciKFeup1gHO1Ga3BuWJQqWyQaVuExIyH3rSWzLehRZGRdOcLnJq0j55VSeMs6gcqeWOOMeZrZkzlgeaXQWIGdqYeBY1ZVJJxzNEePSplVjknYChFigw34jvvQhM8ttUKMMjxHJqSOGGM5NCkkwMk0S7i7mFGG5Lb/AEptbDweRpqfCgam60zgxLoB+dKwtpCt1opkwpLnLdKQ0E3qUn38z5MaMQNvCualFMVo/TvaXsRwbtCGe6t+5uiNriA6X9+je9fN+0HYHjHBrcPbr8fBGNpIE8YHzTn9M19trwjeqSgpE4zcT8t3iPKGfI1BccqVtJHj1hvlzr9F9o+xfBuPq7zwdxcsP+pgwr5+fRvevmHGfs64twYTMiLxCzzkPCpLgf8AknP6ZqfbaKdxM4hriOZfCcPn8NCjYvP3SLl+mKKbPQ7NGev4TXkYEFwspQ6lOcedYKHkgc5EmdQ8694eGXWhPIDAP8VXiE/eXSsmQCoyD70SKF5QxTmtHgPIW4ulMOn8Lq1Z87lpCx59a1J+HrPCNDaHIGc8s1jXStbFo3GXXyNNOzLVA3bLbUUOGYqDyoEL+Biw3zVJGYDwnnWhDySYYAn2oc2k6n5bYpWOXxAY8XWrNFJJICTt86KFZV01n5VabVIFy3I1rcF4HxDjVz8NwqzluZPzaV8Kf3NyHvX0/sv9jtvFoue010Z5Bv8ACWzER+jNzb2x701bE2kfLuA8D4hxqYW/CbOW6lB8RQbJ/cx2Hua+qdm/sdt0ZbntLcC4bb7pbkrGP7m5t7Y96+n2NhacOtktbC3itoEGFjiQKB7CmAMVRRMOdi1hYWvDbVLXh9tDbW6DwxRIFUewqU1UrRglSpUoAlSpUoA5ftX2R4Nxe3mup7burpVJ7+A6WOPPofcGvgk3J/kalSoZEWxszZx/UWtGzkMcxAAwcZzUqVh8Fg5dkdipxvWRxE6r589cV5UpQ5FLgXnOGXHnii3aqiIFAHiqVK2YBWyL8QDjcmu/+y7sxw3tLxK8/wBVWV47bSViR9Ktn9RG/wBCK9qVWPBJn3Ph9jacPtltbC2it4E2WOJAqj2FNVKlbMEqVKlAEqVKlAH/2Q==",
    url: "https://classic.minecraft.net/"
  },
  {
    title: "2048",
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6kNVORhb4ElaI3GTOtOdTlwkpN3Ut6KmcBVYZasVOLlo4dKvwpEmi-X27fPpYm7CfFIvpl0zhduV_0SyUimA2OF0pMzHg8D7qD52qEH7&s=10",
    url: "https://2048game.com/"
  },
];

const grid = document.getElementById('grid');

function makeCard(game){
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.className = 'thumb';
  img.src = game.thumb;
  img.alt = game.title + ' thumbnail';

  // Detect square or oversized images
  img.addEventListener('load', () => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const ratio = w / h;

    if(ratio > 0.95 && ratio < 1.05){
      img.classList.add('square');
    } else if(ratio >= 2 || ratio <= 0.5){
      img.classList.add('oversized');
    }
  });

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = game.title;

  card.appendChild(img);
  card.appendChild(meta);

  // Make the whole card clickable in the current tab
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.href = game.url; // <-- CURRENT TAB NAVIGATION
  });

  return card;
}

function init(){
  games.forEach(g => grid.appendChild(makeCard(g)));
}

// Initialize grid
init();