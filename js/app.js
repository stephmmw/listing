// Display selected image
function showImage(element){
    let $element = document.getElementById(element.id);
    let $view = document.getElementById('view');
    let $shown = document.getElementsByClassName('shown');

    $view.style = "background-image: url('"+$element.src+"');";
    removeShown($shown[0]);
    setShown($element);
}

// Set shown on a displayed image
function setShown(element){
    let $element = document.getElementById(element.id);
    $element.setAttribute('class', 'image shown');
}

// Remove shown from a previously displayed image
function removeShown(element){
    let $element = document.getElementById(element.id);
    $element.setAttribute('class', 'image');
}

// Show and Hide Passsword
function showHide(id){
    let $password = document.getElementById(id);
    let $passwordToggle = document.getElementById(id + '_toggle');
    let $passwordToggleIcon = document.getElementById(id + '_toggle_icon');

    if($password.getAttribute("type") == 'password'){
       $password.setAttribute("type", 'text'); 
       $passwordToggle.setAttribute("title", 'Hide');
       $passwordToggleIcon.setAttribute("class", 'bi bi-eye');
    }
    else{
        $password.setAttribute("type", 'password'); 
        $passwordToggle.setAttribute("title", 'Show');
        $passwordToggleIcon.setAttribute("class", 'bi bi-eye-slash');
    }
    
}

jQuery(function($){
    $("#footer-toggler").click(function(){
        let $btn = document.getElementById('footer-toggler');
        let $attr = $btn.getAttribute('title');
        let $icon = document.createElement('i');

        $("#footer-toggler").empty();

        if($attr == 'Show'){            
            $btn.setAttribute('title', 'Hide');
            $icon.setAttribute('class', "bi bi-arrow-down")
            $btn.appendChild($icon);
        }
        else{
            $btn.setAttribute('title', 'Show');
            $icon.setAttribute('class', "bi bi-arrow-up")
            $btn.appendChild($icon);
        }
    });

    $("#id_password_toggle").click(function(){
        showHide('id_password');
    });

    $("#id_confirm_password_toggle").click(function(){
        showHide('id_confirm_password');
    });

    $("#visit-date").change(function(){

    });
});

$(document).ready(function(){
    if(document.getElementById('listings')){
        let $listing = document.getElementById('listings');
        let $item = '<div class="col-12 col-sm-6 col-md-4 col-lg-3"><div class="card"><div class="card-body"><a href="listing.html" class="listing-link" title="View"><div class="splash-image"> </div>  </a></div><div class="card-footer"><p class="rating"></p><p class="type"></p><p class="location"></p><p class="pricing"></p></div></div></div>'

        for($i=0; $i<20; $i++){
            $listing.innerHTML += $item;
        }
    }
    if(document.getElementById('gallery')){
        if(document.getElementsByClassName('shown')){
            $shown  = document.getElementsByClassName('shown');
            showImage($shown[0]);
        } 
    }    

    if(document.getElementById('year')){
        let $currentYear = new Date().getFullYear();
        let $year = document.getElementById('year');
        $year.innerText = $currentYear;
    }

    
});