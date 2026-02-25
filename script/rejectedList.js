document.getElementById('rejected-list')
    .addEventListener('click', function (event) {

        if (event.target.classList.contains('interview-btn')) {
            const parentNode = event.target.parentNode.parentNode;
            const interviewParentNode = event.target.parentNode.parentNode.parentNode;

            const companyName = parentNode.querySelector('.company-name').innerText;
            const jobPosition = parentNode.querySelector('.job-position').innerText;
            const jobLocation = parentNode.querySelector('.job-location').innerText;
            const jobType = parentNode.querySelector('.job-type').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const jobDescription = parentNode.querySelector('.job-description').innerText;

            const cardInfo = {
                companyName,
                jobPosition,
                jobLocation,
                jobType,
                salary,
                jobDescription

            }

            const cardExit = jobInterviewList.find(item => item.companyName == cardInfo.companyName)


            if (!cardExit) {
               jobInterviewList.push(cardInfo);
            }
            interviewListAdded();
            interviewParentNode.remove();
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
                    <p class="job-position mb-[20px] text-[16px] font-normal text-gray-400">React Native Developer</p>

                    <ul class="flex gap-3 mb-[20px] text-[14px] font-normal text-gray-400 ">
                        <li class="job-location">Remote</li>
                        <li>•</li>
                        <li class="job-type">Full-time </li>
                        <li>•</li>
                        <li class="salary"> $130,000 - $175,000 </li>
                    </ul>

                    <p
                        class="job-status w-[120px] mb-2 rounded-sm text-[14px] font-medium text-black px-3 py-2 bg-[#EEF4FF]">
                        NOT
                        APPLIED</p>

                    <p class="job-description mb-[20px] text-[14px] font-normal text-[#323B49]">Build cross-platform
                        mobile applications
                        using React Native. Work on products used by millions of users worldwide.</p>

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

document.getElementById('rejected-list')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('interview-btn')) {
            const siblingNode = event.target.parentNode.parentNode;
            const companyName = siblingNode.querySelector('.company-name').innerText;

            jobRejectedList = jobRejectedList.filter(item => item.companyName != companyName)
        }

    })