$(document).ready(function () {

    //call-popup
    $('.call-me').on('click', function () {
        $('.popup-form').fadeIn('');
    });

    $('.attach-file').on('click', function () {
        $('.popup-file').fadeIn('');
    });

    $('.mask').on('click', function () {
        $('.popup-form').fadeOut('');
        $('.popup-file').fadeOut('');
        $('.popup-pdf').fadeOut('');
    });

    //politika
    $('.privacy-btn').on('click', function () {
        $('.popup-pdf').fadeIn('');
    });

    $('.pdf-file').on('click', function () {
        $('.popup-pdf').fadeOut('');
    });

    
    //skroll
    $('.slow-scroll').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //to-top
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });
        $('.back-top').click(function() {
            $('body,html').animate({scrollTop:0},1500);
        });
    });

    //slider
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    $('.examples-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        dots: true,
        arrows: true,
        infinite: true
    });

    $('.kitchen-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: false,
        // autoplay: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.kitchen-slider',
        dots: false,
        centerMode: false,
        vertical: false,
        focusOnSelect: false,
        responsive: [
        {
            breakpoint: 850,
            settings: {
                vertical: false
            }
        },
        ]
    });

    //header-menu

    var nav = $('.header-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            nav.fadeIn('');
        } else {
            nav.fadeOut('');
        }
    });

    // popus slider
    $('.small-slide img').each(function () {
        let link = $(this).attr('src');
        $(this).wrap("<a href=" + link + "></a>");
    })

    $('.small-slide a').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 300
    });

    $('.small-slide ').on('click', 'a', function(){
        return false;
    })

    $('.slider-nav').on('afterChange', function(){
        $('.small-slide a').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 300
        });
    })
    
    $(window).resize(function () {
        $('.small-slide a').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 300
        });
    })
});


var inputs = document.querySelectorAll('.form__file');
Array.prototype.forEach.call(inputs, function(input){
    var label  = input.nextElementSibling,
    labelVal = label.innerHTML;
    input.addEventListener('change', function(e){
        var fileName = '';
        if( this.files && this.files.length > 1 )
            fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
            fileName = e.target.value.split( '\\' ).pop();
        if( fileName )
            label.querySelector( 'span' ).innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

//file-drop

// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area")

// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)   
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
}
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
    }
}

function uploadFile(file, i) {
  var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
})

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      updateProgress(i, 100)
  }
  else if (xhr.readyState == 4 && xhr.status != 200) {
    
  }
})

  formData.append('upload_preset', 'ujpu6gyk')
  formData.append('file', file)
  xhr.send(formData)
}