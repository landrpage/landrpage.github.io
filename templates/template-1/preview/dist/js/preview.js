window.onpaint = loadData();

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function loadPreviewDetails(website_details) {
    $("#product-name").html(website_details["product_name"]);
    $("#product-description").html(website_details["product_description"]);
    var product_image_url = website_details["product_image_url"];

    if (product_image_url != "" && validURL(product_image_url)) {
        $("#cover-image").attr('src', product_image_url);
        $("#cover-image-svg").css('display', 'none');
    } else {
        $("#cover-image").css("display", "none");
    }

    var facebook_profile = website_details["facebook_profile"];
    var twitter_profile = website_details["twitter_profile"];
    var instagram_profile = website_details["instagram_profile"];
    var google_profile = website_details["google_profile"];
    var linkedin_profile = website_details["linkedin_profile"];
    var github_profile = website_details["github_profile"];

    $("#facebook-profile").attr('href', facebook_profile);
    $("#twitter-profile").attr('href', twitter_profile);
    $("#instagram-profile").attr('href', instagram_profile);
    $("#google-profile").attr('href', google_profile);
    $("#linkedin-profile").attr('href', linkedin_profile);
    $("#github-profile").attr('href', github_profile);

    if (!facebook_profile) {
        $("#facebook-social-link").css("display", "none");
    }
    if (!twitter_profile) {
        $("#twitter-social-link").css("display", "none");
    }
    if (!instagram_profile) {
        $("#instagram-social-link").css("display", "none");
    }
    if (!google_profile) {
        $("#google-social-link").css("display", "none");
    }
    if (!linkedin_profile) {
        $("#linkedin-social-link").css("display", "none");
    }
    if (!github_profile) {
        $("#github-social-link").css("display", "none");
    }

    $("#company-name").html(website_details["company_name"]);

    var main_sections = website_details["description_sections"];
    var main_sections_html = "";
    for (var i = 0; i < main_sections.length; ++i) {
        main_sections_html += "<section class=\"features newsletter section\"><div class=\"container-sm\"><div class=\"newsletter-inner section-inner\" style=\"padding-bottom: 40px;\"><div class=\"newsletter-header is-revealing\" style=\"visibility: visible;\"><h2 class=\"section-title text-center mt-0\">"+main_sections[i]["header"]+"</h2><p class=\"section-paragraph\">"+main_sections[i]["description"]+"</p></div></div></div></section><hr/>";
    }
    $("#main-sections").html(main_sections_html);

    var feature_sections = website_details["feature_sections"];
    var feature_sections_html = "";

    var i,j,temparray,chunk = 3;
    for (i = 0,j = feature_sections.length; i<j; i += chunk) {
        temparray = feature_sections.slice(i,i+chunk);
        feature_sections_html += "<div class=\"features-wrap\">";
        for (var k = 0; k < temparray.length; ++k) {
            feature_sections_html += "<div class=\"feature is-revealing\" style=\"visibility: visible;\"><div class=\"feature-inner\"><div class=\"feature-icon\"><svg width=\"80\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z\" fill-opacity=\".24\" fill=\"#A0A6EE\"/><path d=\"M26 54l28-28\" stroke=\"#838DEA\" stroke-width=\"2\" stroke-linecap=\"square\"/><path d=\"M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12\" stroke=\"#767DE1\" stroke-width=\"2\" stroke-linecap=\"square\"/><path d=\"M50 54l4-4\" stroke=\"#838DEA\" stroke-width=\"2\" stroke-linecap=\"square\"/></g></svg></div><h3 class=\"feature-title\">" + temparray[k]["header"] + "</h3><p class=\"text-sm\">" + temparray[k]["description"] + "</p></div></div>"
        }
        feature_sections_html += "</div>";
    }

    $("#feature-sections").html(feature_sections_html);
}

function loadData() {
    var website_uuid = getUrlParameter("uuid");

    var url = "https://landerbackend.sunilkumarc682.now.sh/website/session/details?uuid=" + website_uuid;
    // var url = "http://localhost:8000/website/session/details?uuid=" + website_uuid;
    $.ajax({
        type: 'GET',
        url: url,
        crossDomain: true,
        Accept: 'application/json',
        headers: {
            "Authorization": "Basic dXNlcjpwYXNz"
        },
        success: function(response) {
            loadPreviewDetails(response["website_details"]);
        },
        error: function(err) {
            console.log("Error: ", err);
        }
    });
}