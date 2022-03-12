const dropSell = document.querySelector('.dropdown__sell')
const sell = document.querySelector('.sell')
const dropFinance = document.querySelector('.dropdown__finance')
const finance = document.querySelector('.finance')
const dropConfiguration = document.querySelector('.dropdown__configuration')
const configuration = document.querySelector('.configuration')
const dropTool = document.querySelector('.dropdown__tools')
const tool = document.querySelector('.tools')

const lastSevenDays = document.querySelector('#last-seven-days')
const lastFifteenDays = document.querySelector('#last-fifteen-days')
const lastMonth = document.querySelector('#last-month')
const lastYear = document.querySelector('#last-year')

const generalReportContainer = document.querySelector('.general-report-container')
const generalReportDataCard = document.querySelector('.general-report-datacard')
const showReseller = document.querySelector('.show-reseller')
const rankingContainer = document.querySelector('.ranking-container')

let showChart = null

const logOut = document.querySelector('.logout')

const menuUserHelp = document.querySelector('.menu-user-help')
const menuUserNotification = document.querySelector('.menu-user-notification')
const menuUserProfile = document.querySelector('.menu-user-profile')

const sellBtn = document.querySelector('#sell')
const orderBtn = document.querySelector('#order')
const resellerBtn = document.querySelector('#resellers')

const API_URL = 'https://test-final.b8one.academy'
const USER = '/user'
const MENU = '/menu'
const PRODUCTS = '/products/more-sold'
const RANKING = '/resellers/ranking'
const SALES = '/sales'

// SHOW SUB MENUS DROPDOWN

sell.addEventListener('click', () => {
    dropSell.classList.toggle('hide__dropdown')
})
finance.addEventListener('click', () => {
    dropFinance.classList.toggle('hide__dropdown')
})
configuration.addEventListener('click', () => {
    dropConfiguration.classList.toggle('hide__dropdown')
})
tool.addEventListener('click', () => {
    dropTool.classList.toggle('hide__dropdown')
})

// SHOW MENU SIDEBAR

const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', () => {
    const showHideSidebar = document.querySelector('.sidebar')

    showHideSidebar.classList.toggle('sidebar-show')
})

// BUILD CHARTS

const sellChart = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    showChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
            datasets: [{
                label: ['Estornado'],
                data: [0, 30, 20, 20, 40, 20, 20],
                backgroundColor: '#425DC7',
                borderColor: '#425DC7',
            },
            {
                label: ['Cancelado'],
                data: [0, 20, 0, 0, 30, 0, 45],
                backgroundColor: '#F03460',
                borderColor: '#F03460',

            },
            {
                label: ['Não Pago'],
                data: [0, 0, 20, 25, 60, 18, 40, 100],
                backgroundColor: '#FFBE00',
                borderColor: '#FFBE00',

            },
            {
                label: ['Pago'],
                data: [0, 80, 80, 130, 40, 200, 200],
                backgroundColor: '#2EB042',
                borderColor: '#2EB042',
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }

                },
                y: {
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 6,
                        pointStyle: 'circle',
                        padding: 20,
                        font: {
                            size: 10,
                        },

                    },
                },

            }
        },

    });

    generalReportContainer.classList.remove('general-report-max-width')
}

const orderChart = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    showChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
            datasets: [{
                label: ['Total de Pedidos'],
                data: [0, 30, 20, 20, 40, 20, 20],
                backgroundColor: '#425DC7',
                borderColor: '#425DC7',
            },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }

                },
                y: {
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 6,
                        pointStyle: 'circle',
            
                        font: {
                            size: 10,
                        },

                    },
                },

            }
        },

    });
}

const resellersChart = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    showChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21', '12/10/21'],
            datasets: [{
                label: ['Valor total de vendas'],
                data: [0, 30, 20, 20, 40, 20, 20],
                backgroundColor: '#425DC7',
                borderColor: '#425DC7',
            },

            {
                label: ['Quantidade de pedidos'],
                data: [0, 80, 80, 130, 40, 200, 200],
                backgroundColor: '#2EB042',
                borderColor: '#2EB042',
            },
            {
                label: ['Comissão a pagar'],
                data: [0, 20, 0, 0, 30, 0, 45],
                backgroundColor: '#F03460',
                borderColor: '#F03460',

            },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }

                },
                y: {
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 6,
                        pointStyle: 'circle',
                        padding: 20,
                        font: {
                            size: 10,
                        },

                    },
                },

            }
        },

    });
}

// ACTIVE BUTTON PERIOD

lastSevenDays.addEventListener('click', () => {
    lastSevenDays.classList.add('data-summary-active')
    lastFifteenDays.classList.remove('data-summary-active')
    lastMonth.classList.remove('data-summary-active')
    lastYear.classList.remove('data-summary-active')
})

lastFifteenDays.addEventListener('click', () => {
    lastSevenDays.classList.remove('data-summary-active')
    lastFifteenDays.classList.add('data-summary-active')
    lastMonth.classList.remove('data-summary-active')
    lastYear.classList.remove('data-summary-active')
})
lastMonth.addEventListener('click', () => {
    lastSevenDays.classList.remove('data-summary-active')
    lastFifteenDays.classList.remove('data-summary-active')
    lastMonth.classList.add('data-summary-active')
    lastYear.classList.remove('data-summary-active')
})
lastYear.addEventListener('click', () => {
    lastSevenDays.classList.remove('data-summary-active')
    lastFifteenDays.classList.remove('data-summary-active')
    lastMonth.classList.remove('data-summary-active')
    lastYear.classList.add('data-summary-active')
})

//  LOGOUT

logOut.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'index.html'
})

// SHOW CHARTS

sellBtn.addEventListener('click', () => {
    if (showChart != null) {
        showChart.destroy();
    }
    if(screen.width <= 460){
        generalReportDataCard.style.display = 'flex'
    }
    generalReportDataCard.classList.remove('display-none')
    showReseller.classList.add('display-none')
    rankingContainer.classList.add('display-none')
    generalReportContainer.classList.remove('general-report-max-width')
    sellChart()
})
orderBtn.addEventListener('click', () => {
    if (showChart != null) {
        showChart.destroy();
    }
    if(screen.width <= 460){
        generalReportDataCard.style.display = 'none'
    }
    generalReportDataCard.classList.remove('display-none')
    showReseller.classList.add('display-none')
    rankingContainer.classList.add('display-none')
    generalReportContainer.classList.remove('general-report-max-width')
    orderChart()
})
resellerBtn.addEventListener('click', () => {
    if (showChart != null) {
        showChart.destroy();
    }
    
    generalReportDataCard.classList.add('display-none')
    showReseller.classList.remove('display-none')
    rankingContainer.classList.remove('display-none')
    generalReportContainer.classList.add('general-report-max-width')
    resellersChart()
})

menuUserHelp.addEventListener('click', () =>{
    const menuUserHelpPopover = document.querySelector('.menu-user-help-popover')

    if(screen.width >= 768){
        menuUserHelpPopover.classList.toggle('display-none')
    } 
})

// POPOVERS INTERACTIONS 
menuUserNotification.addEventListener('click', () =>{
    const menuUserNotificationPopover = document.querySelector('.menu-user-notification-popover')

    if(screen.width >= 768){
        menuUserNotificationPopover.classList.toggle('display-none')
    } 
})
menuUserProfile.addEventListener('click', () =>{
    const menuUserProfilePopover = document.querySelector('.menu-user-profile-popover')

    if(screen.width >= 768){
        menuUserProfilePopover.classList.toggle('display-none')
    }
})
// GET HEADER MENU
function getHeader() {
    fetch(`${API_URL}${USER}`)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            const company = document.querySelector('.container-avatar-text')
            const imageProfile = document.querySelector('.menu-user-profile__avatar')
            const nameAvatar = document.querySelector('.name-avatar')

            company.innerHTML = data.organization
            imageProfile.src = data.photo
            nameAvatar.innerHTML = data.username
        })
        .catch((error) => {
            console.log(`Erro na requisição: ${error}`);
        })
}

//GET MENU NAME SIDEBAR
function getMenuName() {
    fetch(`${API_URL}${MENU}`)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            const menuDataResume = document.querySelector('.menu-data-resume')
            const menuToSell = document.querySelector('.menu-to-sell')
            const menuOrder = document.querySelector('.menu-order')
            const menuFinance = document.querySelector('.menu-finance')
            const menuConfiguration = document.querySelector('.menu-configuration')
            const menuTools = document.querySelector('.menu-tools')

            menuDataResume.innerHTML = data.menuTree[0].name
            menuToSell.innerHTML = data.menuTree[1].name
            menuOrder.innerHTML = data.menuTree[2].name
            menuFinance.innerHTML = data.menuTree[3].name
            menuConfiguration.innerHTML = data.menuTree[4].name
            menuTools.innerHTML = data.menuTree[5].name

        })
        .catch((error) => {
            console.log(`Erro na requisição: ${error}`);
        })
}

//GET SALES 
function getSales(){
    fetch(`${API_URL}${SALES}`)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            const revenues = document.querySelector('.general-report-datacard__value--revenues')
            const totalSales = document.querySelector('.general-report-datacard__value--total-sales')
            const averageTicket = document.querySelector('.general-report-datacard__value--average-ticket')

            let formatRevenues = data.revenues.toString().replace('.','')
            
            let newRevenues = formatRevenues / 100
            let revenuesFormated = Number(newRevenues)

            let formatAverageTicket = data.averageTicket.toString().replace('.','')
            let newAverageTicket = formatAverageTicket / 100
            let averageTicketFormated = Number(newAverageTicket)

            revenues.innerHTML = `${revenuesFormated.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'} )}`
            totalSales.innerHTML = data.totalSales
            averageTicket.innerHTML = `${averageTicketFormated.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'} )}`
        })
}

// FETCH DATA TO MAP PRODUCTS AND RANKING RESELLER 
async function fetchDataProducts() {
    const response = await fetch(`${API_URL}${PRODUCTS}`);
    const responseJson = await response.json();
    return responseJson;
}
async function fetchDataResellers() {
    const response = await fetch(`${API_URL}${RANKING}`);
    const responseJson = await response.json();
    return responseJson;
}
function productsMoreSold(sold){

    const containerProducts = document.querySelector('.container-products-cards')
    const arrayProducts = sold.map((productsSold, index) => {
        let formatPrice = productsSold.price.toString().replace('.','')
        let newPrice = formatPrice / 100
        let price = Number(newPrice)
        
        return `
                    <div class="product-cards">
                        <div class="product-cards-description">

                            <p class="product-cards-place__id">${index + 1}</p>
                            <img src="${productsSold.image}" alt="product" class="product-cards-description__img" referrerpolicy="no-referrer">
                            
                        </div>
                        <div class="products-container">

                            <div class="product-card__text">
                                <p class="product-cards-description__text">${productsSold.name}</p>
                            </div>
                            <div class="product-cards-info">
                                <p class="product-cards-info__order-number box">${productsSold.orderId}</p>
                                <p class="product-cards-info__departaments box">${productsSold.department}</p>
                                <p class="product-cards-info__value box">${price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            </div>
                        </div>
                    </div>
                `
    })
    const productsHtml = arrayProducts.join(" ");
    containerProducts.insertAdjacentHTML("beforeend", productsHtml);

}

function rankingResellers(rankings){
    const arrowUp = './assets/images/icons/icon_up.png'
    const arrowDown = './assets/images/icons/icon_down.png'

    const rankingList = document.querySelector('.ranking-list')
    const arrayRankingResellers = rankings.map((responseReseller, index) => {
        
        return `
                <div class="ranking-reseller-container">
                    <div class="ranking-reseller-position">

                        <p class="ranking-reseller-position__number">${index +1}º</p>
                    </div>
                    <div class="ranking-reseller-container-img">
                        <img src="./assets/images/icons/avatar${index + 1}.png" alt="first" class="ranking-reseller__img">
                    </div>
                    <div class="reseller">
                        <p class="reseller_name">${responseReseller.name}</p>
                        <p class="reseller-orders">${responseReseller.ordersCount} pedidos</p>
                    </div>
                    <div class="reseller-increase">
                        <p class="reseller-increase-value  ${(responseReseller.percentage === '+18%') ?'green': 'red'}">${responseReseller.percentage}</p>
                        <img src="${(responseReseller.percentage === '+18%') ? arrowUp : arrowDown}" class="reseller-increase-arrow" referrerpolicy="no-referrer">
                    </div>
                </div>           
        `
    })

    const resellersHtml = arrayRankingResellers.join(" ");
    rankingList.insertAdjacentHTML("beforeend", resellersHtml);
}



// INICIAL FUNCTION 
async function init() {
    const dataProduct = await fetchDataProducts()
    const dataResellers = await fetchDataResellers()
    getHeader()
    getMenuName()
    getSales()
    productsMoreSold(dataProduct.products)
    rankingResellers(dataResellers.resellers)
    sellChart()
}

init()


