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


document.getElementById('rejected-list')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('interview-btn')) {
            const siblingNode = event.target.parentNode.parentNode;
            const companyName = siblingNode.querySelector('.company-name').innerText;

            jobRejectedList = jobRejectedList.filter(item => item.companyName != companyName)
        }

    })