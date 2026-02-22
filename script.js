let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

const total = document.getElementById('total');
const interviewCount = document.getElementById('interviewcount');
const rejectedCount = document.getElementById('rejectedcount');
const totalagain = document.getElementById('total-again')


const allFilterBtn = document.getElementById('all-filter-btn')
const allInterviewBtn = document.getElementById('interview-filter-btn')
const allRejectedBtn = document.getElementById('rejected-filter-btn')
const filterSecction = document.getElementById('filter-section')


const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');





function calculateCount(){ 

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if(card.dataset.status === "interview") interview++;
        if(card.dataset.status === "rejected") rejected++;
    });

    total.innerText = allCardSection.children.length
    totalagain.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}

calculateCount()


function toggleStyle(id){
    // add white bg for all
    allFilterBtn.classList.add('bg-white','text-black')
    allInterviewBtn.classList.add('bg-white','text-black')
    allRejectedBtn.classList.add('bg-white','text-black')

    // if any button has sky then remove
    allFilterBtn.classList.remove('bg-sky-500','text-white')
    allInterviewBtn.classList.remove('bg-sky-500','text-white')
    allRejectedBtn.classList.remove('bg-sky-500','text-white')

    // console.log(id);

    const selected = document.getElementById(id)
    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);


    // adding colour for current button 
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-sky-500', 'text-white')

    // filtering
    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSecction.classList.remove('hidden')
        renderInterview()
    } else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSecction.classList.add('hidden')
    } else if(id == 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSecction.classList.remove('hidden')
        renderRejected()
    } 
}


mainContainer.addEventListener('click', function(event){

    const card = event.target.closest('.card');
    if(!card) return;

    const mobile = card.querySelector('.mobile').innerText;
    const developer = card.querySelector('.developer').innerText;
    const days = card.querySelector('.days').innerText;
    const notes = card.querySelector('.notes').innerText;

    // ---------------- DELETE ----------------
    if(event.target.closest('.btn-delete')){
        card.remove();

        interviewList = interviewList.filter(item => item.mobile !== mobile);
        rejectedList = rejectedList.filter(item => item.mobile !== mobile);

        calculateCount();

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }

        return;
    }

    // ---------------- INTERVIEW ----------------
    if(event.target.classList.contains('interview-btn')){

        // card.querySelector('.status').innerText = 'INTERVIEW';
        const status1 = card.querySelector('.status');
        status1.innerText = "INTERVIEW";
        status1.className = "status text-green-500 px-4 py-2 border-2";

        const cardInfo = { mobile, developer, days, status:'INTERVIEW', notes };

        if(!interviewList.find(item => item.mobile === mobile)){
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.mobile !== mobile);

        calculateCount();

        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }
    }

    // ---------------- REJECTED ----------------
    if(event.target.classList.contains('rejected-btn')){

        // card.querySelector('.status').innerText = 'REJECTED';
        const status1 = card.querySelector('.status');
        status1.innerText = "REJECTED";
        status1.className = "status text-red-500 px-4 py-2 border-2";

        const cardInfo = { mobile, developer, days, status:'REJECTED', notes };

        if(!rejectedList.find(item => item.mobile === mobile)){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.mobile !== mobile);

        calculateCount();

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
    }

});



function renderInterview(){
    
    if(interviewList.length === 0){
    filterSecction.innerHTML = `
        <section class="text-center">
            <div class="bg-white p-24">
                <img class="mx-auto mb-4" src="image/jobs.png" alt="">
                <p class="font-semibold text-lg">No Interview Jobs</p>
                <p class="text-gray-400">Check back soon for new job opportunities</p>
            </div>
        </section>
    `;
    return;
}


    filterSecction.innerHTML = ' '

    for(let interview of interviewList){
        console.log(interview);

        let div = document.createElement('div');
        div.className = `card flex justify-between bg-white p-6`
        div.innerHTML = `<div class="space-y-6">
                    <div>
                        <p class="mobile text-2xl font-bold">${interview.mobile}</p>
                        <p class="developer text-gray-400">React Native Developer</p>
                    </div>
                    <div>
                        <p class="days text-gray-400">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="card flex justify-between bg-white " data-status="not-applied">
                        <p class="status text-green-500 px-4 py-2 border-2">${interview.status}</p>
                    </div>
                    <div>
                        <p class="notes text-gray-800">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="font-semibold gap-8">
                        <button class="interview-btn text-green-500 px-4 py-2 border-2">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 px-4 py-2 border-2">REJECTED</button>
                    </div>
                </div>

                <div>
                    <button class="btn-delete rounded-full border-[#e6e7e9] "><img src="image/Trash.png" alt=""></button>
                </div>`

        filterSecction.appendChild(div)
    }
}

function renderRejected(){

    if(rejectedList.length === 0){
    filterSecction.innerHTML = `
        <section class="text-center">
            <div class="bg-white p-24">
                <img class="mx-auto mb-4" src="image/jobs.png" alt="">
                <p class="font-semibold text-lg">No Interview Jobs</p>
                <p class="text-gray-400">Check back soon for new job opportunities</p>
            </div>
        </section>
    `;
    return;
    }

    filterSecction.innerHTML = ''

    for(let rejected of rejectedList){
        console.log(rejected);

        let div = document.createElement('div');
        div.className = `card flex justify-between bg-white p-6`
        div.innerHTML = `<div class="space-y-6">
                    <div>
                        <p class="mobile text-2xl font-bold">${rejected.mobile}</p>
                        <p class="developer text-gray-400">React Native Developer</p>
                    </div>
                    <div>
                        <p class="days text-gray-400">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="card flex justify-between bg-white" data-status="not-applied">
                        <p class="status text-red-500 px-4 py-2 border-2">${rejected.status}</p>
                    </div>
                    <div>
                        <p class="notes text-gray-800">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="font-semibold gap-8">
                        <button class="interview-btn text-green-500 px-4 py-2 border-2">INTERVIEW</button>
                        <button class="rejected-btn text-red-500 px-4 py-2 border-2">REJECTED</button>
                    </div>
                </div>

                <div>
                    <button class="btn-delete rounded-full border-[#e6e7e9] "><img src="image/Trash.png" alt=""></button>
                </div>`

        filterSecction.appendChild(div)
    }
}