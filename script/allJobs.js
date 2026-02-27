let jobInterviewList = [];
let jobRejectedList = [];






// Interview list card add 
document.getElementById('all-job')
    .addEventListener('click', function (event) {

        if (event.target.classList.contains('interview-btn')) {
            const parentNode = event.target.parentNode.parentNode;

            const companyName = parentNode.querySelector('.company-name').innerText;
            const jobPosition = parentNode.querySelector('.job-position').innerText;
            const jobStatus = parentNode.querySelector('.job-status').innerText;
            const jobLocation = parentNode.querySelector('.job-location').innerText;
            const jobType = parentNode.querySelector('.job-type').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const jobDescription = parentNode.querySelector('.job-description').innerText;

            parentNode.querySelector('.job-status').classList.remove('bg-[#EEF4FF]', 'bg-error', 'text-black', 'w-[120]', 'text-[14px]');
            parentNode.querySelector('.job-status').classList.add('text-center', 'bg-success', 'text-white', 'w-[90]', 'text-[12px]');
            parentNode.querySelector('.job-status').innerText = "INTERVIEW";
            


            const cardInfo = {
                companyName,
                jobPosition,
                jobLocation,
                jobType,
                salary,
                jobDescription

            }

            const reCardExit = jobRejectedList.find(item => item.companyName == cardInfo.companyName)


            if (reCardExit) {
                jobRejectedList.pop(cardInfo);
                rejectedListAdded();
            }


            const cardExit = jobInterviewList.find(item => item.companyName == cardInfo.companyName)


            if (!cardExit) {
                jobInterviewList.push(cardInfo);

            }
            interviewListAdded();
            count();
        }

    })

function interviewListAdded() {

    interviewCardList.innerHTML = "";

    for (let interview of jobInterviewList) {
        let div = document.createElement('div');
        div.className = 'card bg-base-200 card-xs shadow-sm w-full  flex-row justify-between items-start p-6'

        div.innerHTML = `
             <!-- Card Contain -->
                <div class="w-[90%] ">

                    <h1 class="company-name text-[18px] font-semibold text-black">${interview.companyName}</h1>
                    <p class="job-position mb-[20px] text-[16px] font-normal text-gray-400">${interview.jobPosition}</p>

                    <ul class="flex gap-3 mb-[20px] text-[14px] font-normal text-gray-400 ">
                        <li class="job-location">${interview.jobLocation}</li>
                        <li>•</li>
                        <li class="job-type">${interview.jobType}</li>
                        <li>•</li>
                        <li class="salary"> ${interview.salary} </li>
                    </ul>

                    <p
                        class="job-status w-[90px] text-center mb-2 rounded-sm text-[12px] text-white font-medium  px-3 py-2 bg-success">
                        INTERVIEW</p>

                    <p class="job-description mb-[20px] text-[14px] font-normal text-[#323B49]">${interview.jobDescription}</p>

                    <div class="flex justify-start gap-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <!-- Deleted Button -->
                <button class="del-btn btn btn-link hover:text-error no-underline">
                    <i class="del-icon fa-regular fa-trash-can"></i>
                </button>
            `
        interviewCardList.appendChild(div);
    }
}


// Interview list card deleted

interviewCardDel();
function interviewCardDel() {
    document.getElementById('interview-list')
        .addEventListener('click', function (event) {
            if (event.target.classList.contains('del-icon')) {
                const siblingNode = event.target.parentNode.parentNode;
                const companyName = siblingNode.querySelector('.company-name').innerText;

                jobInterviewList = jobInterviewList.filter(item => item.companyName != companyName)
            }

        })

}



// Rejected list card add 
document.getElementById('all-job')
    .addEventListener('click', function (event) {

        if (event.target.classList.contains('rejected-btn')) {
            const parentNode = event.target.parentNode.parentNode;

            const companyName = parentNode.querySelector('.company-name').innerText;
            const jobPosition = parentNode.querySelector('.job-position').innerText;
            const jobLocation = parentNode.querySelector('.job-location').innerText;
            const jobType = parentNode.querySelector('.job-type').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const jobDescription = parentNode.querySelector('.job-description').innerText;


            parentNode.querySelector('.job-status').classList.remove('bg-[#EEF4FF]', 'bg-success', 'text-black', 'w-[120]', 'text-[14px]');
            parentNode.querySelector('.job-status').classList.add('text-center', 'bg-error', 'text-white', 'w-[90]', 'text-[12px]');
            parentNode.querySelector('.job-status').innerText = "REJECTED";

            const cardInfo = {
                companyName,
                jobPosition,
                jobLocation,
                jobType,
                salary,
                jobDescription

            }

            const inCardExit = jobInterviewList.find(item => item.companyName == cardInfo.companyName)


            if (inCardExit) {
                jobInterviewList.pop(cardInfo);
                interviewListAdded();
            }


            const cardExit = jobRejectedList.find(item => item.companyName == cardInfo.companyName)


            if (!cardExit) {
                jobRejectedList.push(cardInfo);
            }

            rejectedListAdded();
            count();
        }

    })

function rejectedListAdded() {

    rejectedCardList.innerHTML = "";

    for (let rejected of jobRejectedList) {
        let div = document.createElement('div');
        div.className = 'card bg-base-200 card-xs shadow-sm w-full  flex-row justify-between items-start p-6'

        div.innerHTML = `
             <!-- Card Contain -->
                <div class="w-[90%] ">

                    <h1 class="company-name text-[18px] font-semibold text-black">${rejected.companyName}</h1>
                    <p class="job-position mb-[20px] text-[16px] font-normal text-gray-400">${rejected.jobPosition}</p>

                    <ul class="flex gap-3 mb-[20px] text-[14px] font-normal text-gray-400 ">
                        <li class="job-location">${rejected.jobLocation}</li>
                        <li>•</li>
                        <li class="job-type">${rejected.jobType}</li>
                        <li>•</li>
                        <li class="salary"> ${rejected.salary}</li>
                    </ul>

                    <p class="job-status w-[90px] text-center mb-2 rounded-sm text-[12px] font-medium text-white px-3 py-2 bg-red-500">REJECTED</p>

                    <p class="job-description mb-[20px] text-[14px] font-normal text-[#323B49]">${rejected.jobDescription}</p>

                    <div class="flex justify-start gap-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>

                <!-- Deleted Button -->
                <button class="del-btn btn btn-link hover:text-error no-underline">
                    <i class="del-icon fa-regular fa-trash-can"></i>
                </button>
            `
        rejectedCardList.appendChild(div);
    }
}

// Rejected list card deleted 
rejectedCardDel();
function rejectedCardDel() {
    document.getElementById('rejected-list')
        .addEventListener('click', function (event) {
            if (event.target.classList.contains('del-icon')) {
                const siblingNode = event.target.parentNode.parentNode;
                const companyName = siblingNode.querySelector('.company-name').innerText;

                jobRejectedList = jobRejectedList.filter(item => item.companyName != companyName)
            }

        })
}


// card status toggling

