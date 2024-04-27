// Define identifier, checker, progressBtn, and tellerText variables outside the startTimer function
var identifier = null;
var checker = null;
var progressBtn = document.querySelector('.progress');
let tellerText = document.querySelector('.teller');

let likeButtonA = document.querySelector('.like_button');
let shareButtonA = document.querySelector('.share_button');
let subsButtonA = document.querySelector('.subscribe_button');
let watchButtonA = document.querySelector('.watch_button');

let timerInterval;
let isDocumentHidden = false;

//-----------------
let totalSeconds = 0;
        let minutes = 0;
        let seconds = 0;

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      isDocumentHidden = false;
      startTimer(); // Resume the timer
    } else {
        isDocumentHidden = true;
        clearInterval(timerInterval); // Pause the timer
    }
});

function startTimer() {
    let totalSeconds = 0;
    const timerInterval = setInterval(() => {
      if (!isDocumentHidden) {
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        totalSeconds++;
        // Add your code to handle tasks completion based on totalSeconds and identifier here
    } else {
      clearInterval(timerInterval);
    }
        
        // Check identifier inside the setInterval callback
        // If executed then Like is done
        if (totalSeconds >= 5 && (identifier === 'like')) {
            clearInterval(timerInterval);

            likeButtonA.style.backgroundColor = 'green';
            likeButtonA.style.color = 'black';
        
            // Means NewTodo
            shareButtonA.style.backgroundColor = 'red';
            document.querySelector('.share_logo').style.filter = 'none';

            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 25%, black 25%)';
            progressBtn.style.transition = 'background-image 0.3s ease'; // Adjust the duration and timing function as needed

            progressBtn.textContent = 'Unlock Progress 1/4'; 
            tellerText.textContent = 'Do: Share the Video';
            
            //must disabled
            likeButtonA.disabled = true;
            subsButtonA.disabled = true;
            watchButtonA.disabled = true;
            //enabling the next Task
            shareButtonA.disabled = false;
        }   
      
        // If executed then Share is done
        if (totalSeconds >= 7 && (identifier === 'share')) {
            clearInterval(timerInterval);
          
            shareButtonA.style.backgroundColor = 'green';
            shareButtonA.style.color = 'black';
        
            document.querySelector('.share_logo').style.filter = 'none';
        
            // Means NewTodo
            subsButtonA.style.backgroundColor = 'red';
            document.querySelector('.bell_logo').style.filter = 'none';
           
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 50%, black 50%)';        
            progressBtn.textContent = 'Unlock Progress 2/4';       
            tellerText.textContent = 'Do: Subscribe my Channel';

            //must disabled
            likeButtonA.disabled = true;
            shareButtonA.disabled = true;
            watchButtonA.disabled = true;
            //enabling the next Task
            subsButtonA.disabled = false;
        }

        // If executed then Subscribe is done
        if (totalSeconds >= 5 && (identifier === 'subscribe')) {
            clearInterval(timerInterval);
          
            subsButtonA.style.backgroundColor = 'green';
            subsButtonA.style.color = 'black';
        
            // Means NewTodo
            watchButtonA.style.backgroundColor = 'red';
            document.querySelector('.yt_logo').style.filter = 'none';
            
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 75%, black 25%)';
            progressBtn.style.transition = 'background-image 0.3s ease'; // Adjust the duration and timing function as needed

            progressBtn.textContent = 'Unlock Progress 3/4';      

            tellerText.innerHTML = 'Do: Watch Video <br> Watch Time Needed: 10 : 00  Minutes<br>(Do Watch the Video Straight or it will restart)';

            //enabling the next Task
            //must disabled
            likeButtonA.disabled = true;
            shareButtonA.disabled = true;
            subsButtonA.disabled = true;
            //enabling the next Task
            watchButtonA.disabled = false;
        }

        // If executed then Youtube Watch is done LASTLY
        // Depends on how much time the video is
        if (minutes >= 10 && (identifier === 'watch')) {
            clearInterval(timerInterval);
          
            watchButtonA.style.backgroundColor = 'green';
            watchButtonA.style.color = 'black';
            
            // Progress update
            progressBtn.style.backgroundImage = 'linear-gradient(to right, gray 100%, black 0%)';
            progressBtn.textContent = 'Completed Task 4/4';
            
            document.querySelector('.download_button').style.backgroundColor = 'green';
            document.querySelector('.download_button').disabled = false; // Corrected disabled property
            document.querySelector('.download_button').cursor = 'pointer';
        }
        console.clear();
        console.log(minutes + ' : ' + seconds);
    }, 1000);
}

function linkForLikeShareWatch(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open("https://youtu.be/nAisYHt8k68?si=6BR3syaiQHHAfud8");//Paquito To KOF
} else {
    window.open("https://youtu.be/nAisYHt8k68?si=6BR3syaiQHHAfud8", "_blank");//Paquito To KOF   
}
}

// Like function
function redirectToYtToLike() {

    linkForLikeShareWatch();
    identifier = 'like';
    startTimer();
    
    checker = 'doneLike';
}

// Share function
function redirectToYtToShare() {
  if(checker === 'doneLike'){
    linkForLikeShareWatch();

    identifier = 'share';
    startTimer();

    checker = 'doneShare';
  }
}

// Subscribe function
function redirectToYtToSubscribe() {
  if(checker === 'doneShare'){
   window.open('https://www.youtube.com/@dream_mlbb');
    identifier = 'subscribe';
    startTimer();

    checker = 'doneSubscribe';
  }
}

// Watch function
function redirectToYtToWatch() {
  if(checker === 'doneSubscribe'){
    linkForLikeShareWatch();

    identifier = 'watch';
    startTimer();
  }
}


//subscribe
function subscribe() {
  window.open('https://www.youtube.com/@dream_mlbb');
}

//-------------------------------------------------------------------
let selectionPanel = document.querySelector('.selection');

let backBtn = document.querySelector('.back');

function backToMainPanel(){
  window.location.href = "https://linksys02.github.io/Unlock_Link/";
}

// Download Zip function
function downloadZip() {
  var link = document.createElement("a");
  link.href = "projects/assets/download_zip/Paquito To KOF.zip";

  // Set the download attribute if supported
  if (typeof link.download === 'string') {
    link.download = "Paquito To KOF.zip";
  } else {
    // Fallback for browsers that do not support the download attribute
    link.target = "_blank"; // Open in a new tab
  }

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
