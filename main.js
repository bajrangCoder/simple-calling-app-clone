const recentContacts = [
  {
    dotLetter:'R',
    dotColor:'red',
    contactNme:'Ram Kumar',
    timing:'Custom • 4 min ago',
    provider:'Jio 4G',
    providerColor:'purble'
  },
  {
    dotLetter: 'S',
    dotColor: 'orange',
    contactNme: 'Shyam Kumar',
    timing: 'Custom • 30 min ago',
    provider: 'Idea',
    providerColor: 'blue'
  },
  {
    dotLetter: 'R',
    dotColor: 'pink',
    contactNme: 'Rahul Kumar',
    timing: 'Custom • 32 min ago',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
  {
    dotLetter: 'R',
    dotColor: 'yellow',
    contactNme: 'Ritik Raj',
    timing: 'Custom • 45 min ago',
    provider: 'Idea',
    providerColor: 'blue'
  },
  {
    dotLetter: 'G',
    dotColor: 'green',
    contactNme: 'Geeta Kumari',
    timing: 'Custom • 1:45 PM',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
  {
    dotLetter: 'S',
    dotColor: 'red',
    contactNme: 'Sita',
    timing: 'Custom • Sat',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
  {
    dotLetter: '⛔',
    dotColor: 'red',
    contactNme: '06372807782',
    timing: 'Junk • Oct 12',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
  {
    dotLetter: 'T',
    dotColor: 'violet',
    contactNme: 'Tom Curis',
    timing: 'Custom • Sep 11',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
  {
    dotLetter: 'J',
    dotColor: 'pink',
    contactNme: 'James Watt',
    timing: 'Custom • Sep 1',
    provider: 'Idea',
    providerColor: 'blue'
  },
  {
    dotLetter: '⛔',
    dotColor: 'red',
    contactNme: '684832905362728187',
    timing: 'Junk • Aug 11',
    provider: 'Jio 4G',
    providerColor: 'purble'
  },
]
const favouriteContacts = [
  {
    dotLetter: 'R',
    dotColor: 'yellow',
    contactNme: 'Ram Kumar',
    timing: 'Custom 8795475789',
  },
  {
    dotLetter: 'R',
    dotColor: 'red',
    contactNme: 'Rosy',
    timing: 'Custom 3664687697',
  },
  {
    dotLetter: 'A',
    dotColor: 'gray',
    contactNme: 'Angel Priya',
    timing: 'Custom 9256347890',
  },
  {
    dotLetter: 'S',
    dotColor: 'blue',
    contactNme: 'Sohan Kumar',
    timing: 'Custom 2437990868',
  },
  {
    dotLetter: 'H',
    dotColor: 'gold',
    contactNme: 'Hari',
    timing: 'Custom 3576890689',
  },
]
const allContacts = [
  {
    circleLetter:'R',
    circleColor:'red',
    contactNme:'Ram Kumar'
  },
  {
    circleLetter: 'R',
    circleColor: 'yellow',
    contactNme: 'Rahul Kumar'
  },
  {
    circleLetter: 'A',
    circleColor: 'gray',
    contactNme: 'Angle Priya'
  },
  {
    circleLetter: 'P',
    circleColor: 'pink',
    contactNme: 'Priya'
  },
  {
    circleLetter: 'T',
    circleColor: 'blue',
    contactNme: 'Tom Holland'
  },
  {
    circleLetter: 'J',
    circleColor: 'skyblue',
    contactNme: 'James Watt'
  },
  {
    circleLetter: 'D',
    circleColor: 'purple',
    contactNme: 'Disk Daniya'
  },
  {
    circleLetter: 'T',
    circleColor: 'violet',
    contactNme: 'Teddy'
  },
  {
    circleLetter: '⛔',
    circleColor: 'blue',
    contactNme: 'Ambulance'
  },
  {
    circleLetter: 'R',
    circleColor: 'lightred',
    contactNme: 'Rehan Kumar'
  },
  {
    circleLetter: 'S',
    circleColor: 'orange',
    contactNme: 'Shyam Kumar'
  },
  {
    circleLetter: 'S',
    circleColor: 'gold',
    contactNme: 'Sohan Kumar'
  },
  {
    circleLetter: 'R',
    circleColor: 'silver',
    contactNme: 'Rat'
  },
  {
    circleLetter: 'E',
    circleColor: 'pink',
    contactNme: 'Elephant'
  },
  {
    circleLetter: 'L',
    circleColor: 'lime',
    contactNme: 'Lion'
  },
  {
    circleLetter: 'T',
    circleColor: 'sandybrown',
    contactNme: 'Tik Tok'
  },
  {
    circleLetter: 'T',
    circleColor: 'royalblue',
    contactNme: 'Tornado'
  },
  {
    circleLetter: 'B',
    circleColor: 'mistyrose',
    contactNme: 'Beetle'
  },
  {
    circleLetter: 'M',
    circleColor: 'thistle',
    contactNme: 'Monkey'
  },
  {
    circleLetter: 'M',
    circleColor: 'lavender',
    contactNme: 'Metoriod'
  },
  {
    circleLetter: 'F',
    circleColor: 'stealblue',
    contactNme: 'Fb'
  },
  {
    circleLetter: 'N',
    circleColor: 'hotpink',
    contactNme: 'Neon'
  },
  {
    circleLetter: 'P',
    circleColor: 'salmon',
    contactNme: 'Polygon'
  },
  {
    circleLetter: 'C',
    circleColor: 'teal',
    contactNme: 'Chetah'
  },
  
]

recentContacts.map((item) => {
  let contactName = item["contactNme"].length > 15 ? item["contactNme"].substring(0,15) + "..." : item["contactNme"]
  document.getElementById('recentCallUl').innerHTML += `<li>
                  <div class="dot" style="background-color:${item["dotColor"]};"><p>${item["dotLetter"]}</p></div>
                  <div class="detail">
                    <h2>${contactName}</h2>
                    <p class="timing">${item["timing"]}</p>
                    <p class="provider" style="color:${item["providerColor"]};">${item["provider"]}</p>
                  </div>
                  <img class="callBtn" src="icons/phone.svg"/>
                </li>`
})

favouriteContacts.map((item) => {
  let contactName = item["contactNme"].length > 15 ? item["contactNme"].substring(0,15) + "..." : item["contactNme"]
  document.getElementById('favCallUl').innerHTML += `<li>
                  <div class="dot" style="background-color:${item["dotColor"]};"><p>${item["dotLetter"]}</p></div>
                  <div class="detail">
                    <h2>${contactName}</h2>
                    <p class="timing">${item["timing"]}</p>
                  </div>
                  <img class="callBtn" src="icons/phone.svg"/>
                </li>`
})

allContacts.map((item) => {
  let contactName = item["contactNme"].length > 15 ? item["contactNme"].substring(0, 15) + "..." : item["contactNme"]
  document.getElementById('allcontactUl').innerHTML += `<li>
                  <div class="circle" style="background-color:${item["circleColor"]};"><p>${item["circleLetter"]}</p></div>
                  <h2>${contactName}</h2>
                </li>`
})


const searchContact = (query) => {
  
  let searchingFunc = recentContacts.filter((item) => {
    return item.contactNme.includes(query)
  })
  
  searchingFunc.map((item) => {
    document.getElementById('recentCallUl').innerHTML = ''
    let contactName = item["contactNme"].length > 15 ? item["contactNme"].substring(0,15) + "..." : item["contactNme"]
    document.getElementById('recentCallUl').innerHTML += `<li>
                          <div class="dot" style="background-color:${item["dotColor"]};"><p>${item["dotLetter"]}</p></div>
                          <div class="detail">
                            <h2>${contactName}</h2>
                            <p class="timing">${item["timing"]}</p>
                            <p class="provider" style="color:${item["providerColor"]};">${item["provider"]}</p>
                          </div>
                          <img class="callBtn" src="icons/phone.svg"/>
                        </li>`
                        
  })
}

const changeTab = (currentTab) => {
  let resContTab = document.querySelector('.recentTabCont')
  let favContTab = document.querySelector('.favouriteTabCont')
  let contactTab = document.querySelector('.contactTabCont')
  let favImg = document.querySelector('.favImg')
  let resImg = document.querySelector('.resImg')
  let contImg = document.querySelector('.contImg')
  
  if (currentTab == "favTab") {
    resImg.classList.remove('active')
    contImg.classList.remove('active')
    favImg.classList.add('active')
    resContTab.style.display = 'none'
    contactTab.style.display = 'none'
    favContTab.style.display = 'block'
  } else if(currentTab == "resTab") {
    favImg.classList.remove('active')
    contImg.classList.remove('active')
    resImg.classList.add('active')
    favContTab.style.display = 'none'
    contactTab.style.display = 'none'
    resContTab.style.display = 'block'
  } else if (currentTab == "contTab") {
    favImg.classList.remove('active')
    resImg.classList.remove('active')
    contImg.classList.add('active')
    favContTab.style.display = 'none'
    resContTab.style.display = 'none'
    contactTab.style.display = 'block'
  }
}
