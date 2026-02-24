const allJobCount = document.getElementById('all-job');
const allInterviewCount = document.getElementById('interview-card-list');
const allRejectedCount = document.getElementById('rejected-list');
const interviewCardList = document.getElementById('interview-card-list');

count();

function count() {
    totalJob = allJobCount.children.length - 1;
    totalInterview = allInterviewCount.children.length;
    totalRejected = allRejectedCount.children.length - 1;

    console.log("why not working");

    document.getElementById('total-job').innerText = totalJob;
    document.getElementById('job-total').innerText = totalJob;
    document.getElementById('total-interview').innerText = totalInterview;
    document.getElementById('interview-total').innerText = totalInterview;
    document.getElementById('total-reject').innerText = totalRejected;
    document.getElementById('rejected-total').innerText = totalRejected;

    if (totalInterview != 0) {
     document.getElementById('no-interview-list').classList.remove('flex');
    document.getElementById('no-interview-list').classList.add('hidden');
   
}
}



if (totalRejected != 0) {
    document.getElementById('no-rejected-list').classList.add('hidden');
}

document.getElementById('all-job')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('del-icon')) {
            const allJob = document.getElementById('all-job');
            const totalJob = allJob.children.length - 2;
            document.getElementById('total-job').innerText = totalJob;
            document.getElementById('job-total').innerText = totalJob;


            if (totalJob == 0) {
                document.getElementById('no-all-job').classList.remove('hidden');
                document.getElementById('no-all-job').classList.add('flex');
            }
        }



    })

document.getElementById('interview-list')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('del-icon')) {

            const allJob = document.getElementById('interview-card-list');
            const totalJob = allJob.children.length - 1;
            document.getElementById('total-interview').innerText = totalJob;
            document.getElementById('interview-total').innerText = totalJob;


            if (totalJob == 0) {
                document.getElementById('no-interview-list').classList.remove('hidden');
                document.getElementById('no-interview-list').classList.add('flex');
            }
        }

    })

document.getElementById('rejected-list')
    .addEventListener('click', function (event) {
        if (event.target.classList.contains('del-icon')) {
            const allJob = document.getElementById('rejected-list');
            const totalJob = allJob.children.length - 2;
            document.getElementById('total-reject').innerText = totalJob;
            document.getElementById('rejected-total').innerText = totalJob;

            if (totalJob == 0) {
                document.getElementById('no-rejected-list').classList.remove('hidden');
                document.getElementById('no-rejected-list').classList.add('flex');
            }
        }
    })


