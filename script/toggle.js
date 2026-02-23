const btnAllTab = document.getElementById('btn-all-tab');
const btnInterviewTab = document.getElementById('btn-interview-tab');
const btnRejectTab = document.getElementById('btn-reject-tab');

const allJob = document.getElementById('all-job');
const interviewList = document.getElementById('interview-list');
const rejectedList = document.getElementById('rejected-list');

const interReject = document.getElementById('inter-reject');
const interviewTotal = document.getElementById('interview-total');
const rejectedTotal = document.getElementById('rejected-total');




function toggle(id1, id2, id3) {



    // Navigation Btn Toggling
    btnAllTab.classList.remove('btn-primary');
    btnInterviewTab.classList.remove('btn-primary');
    btnRejectTab.classList.remove('btn-primary');
    document.getElementById(id1).classList.add('btn-primary');


    // Job Status list Toggling
    allJob.classList.add('hidden');
    interviewList.classList.add('hidden');
    rejectedList.classList.add('hidden');
    document.getElementById(id2).classList.remove('hidden');


    // Count Toggling

    interReject.classList.add('hidden');
    interviewTotal.classList.add('hidden');
    rejectedTotal.classList.add('hidden');

    if (id3 == 'interview-total' || id3 =='rejected-total') {
        document.getElementById(id3).classList.remove('hidden');
        document.getElementById('inter-reject').classList.remove('hidden');
    }






}