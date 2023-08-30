// Get fetch requests
function getRequest($url, $type, $option){
    fetch($url)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((result)=>{
        if($type === 'counties'){
            loadCounties(result);
        }
        if ($type ==='sub-counties'){
            addSubCounties(result, $option);
        }
    })
    .catch((error)=>{

    })
}

jQuery(function(){    
    // Load Subcounty
    $("#county").change(function(){
        let $county = document.getElementById("county");
        
        if($county.value != 'all' || $county.value != 'Counties'){
            loadSubCounties($county.value);
        }
    });
});

$(document).ready(function(){
    if(document.getElementById('county')){
        let $url = "./data/counties.json";
        getRequest($url, "counties");
    }
    
    if(document.getElementById('profile-icon')){
        let $icon = document.createElement('img');
        $icon.setAttribute('class', 'icon');
        $icon.setAttribute('src', 'img/bg8.png')      

        $('#profile-icon').empty(); 
        let $profileIcon = document.getElementById('profile-icon');
        $profileIcon.appendChild($icon);
    }
});

function loadCounties($data){
    let $counties = $data.counties;
    let $countyList = document.getElementById('county');
    if($countyList.childElementCount < 3){
        for(i=0; i < Object.keys($counties).length; i++){
            let $option = document.createElement('option');
            $option.setAttribute('value', Object.keys($counties)[i]);
            $option.innerText = Object.keys($counties)[i];
            $countyList.appendChild($option);
        }       
    }
}

function loadSubCounties($county){
    let $url = "./data/counties.json";
    getRequest($url, "sub-counties", $county);
}

function addSubCounties($data, $county){ 
    let $subCounties;   
    for($i=0; $i < Object.keys($data.counties).length; $i++){
        if(Object.keys($data.counties)[$i] == $county){
            $subCounties = $data.counties[$county];
        }
    }

    let $subCountyList = document.getElementById('sub-county');
    $("#"+$subCountyList.id).empty();

    let $allOption = document.createElement('option');
    $allOption.setAttribute('value', 'All');
    $allOption.innerText = 'All';

    $subCountyList.appendChild($allOption);

    for($i=0; $i < $subCounties.length; $i++){
        let $option = document.createElement('option');
        $option.setAttribute('value' ,$subCounties[$i]);
        $option.innerText = $subCounties[$i];
        $subCountyList.appendChild($option);
    }
}