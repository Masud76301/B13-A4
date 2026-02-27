
document.getElementById('interview-list')
    .addEventListener('click', function (event) {

        if (event.target.classList.contains('rejected-btn')) {
            const parentNode = event.target.parentNode.parentNode;
            const rejectedParentNode = event.target.parentNode.parentNode.parentNode;

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

            const cardExit = jobRejectedList.find(item => item.companyName == cardInfo.companyName)


            if (!cardExit) {
                jobRejectedList.push(cardInfo);
            }
            rejectedListAdded();
            rejectedParentNode.remove();
            count();
            
        }

    })

// 

document.getElementById('interview-list')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('rejected-btn')) {
            const siblingNode = event.target.parentNode.parentNode;
            const companyName = siblingNode.querySelector('.company-name').innerText;

            jobInterviewList = jobInterviewList.filter(item => item.companyName != companyName)
        }

    })