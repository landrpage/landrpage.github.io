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

function getMainSection(details, index) {
    if (index % 2 == 1) {
        if (details["image_url"]) {
            return "<section class=\"newsletter section\" style=\"height: 20em;\"><div style=\"margin-left: 10em; margin-right: 10em; margin-top: 5em;\"><div><div style=\"float: right;\"><img width=\"480\" height=\"360\" src=\"" + details['image_url'] + "\"/></div><div style=\"width: 50%\"><p style=\"font-weight: bold; font-size: 1.5em;\">" + details["header"] + "</p><p class=\"section-paragraph\" style=\"margin-top: 2em; padding-left: 0;\">"+ details["description"] +"</p></div></div></div></section><hr/>";
        } else {
            return "<section class=\"newsletter section\" style=\"height: 20em;\"><div style=\"margin-left: 10em; margin-right: 10em; margin-top: 5em;\"><div><div style=\"float: right;\"><svg width=\"480\" height=\"360\" viewBox=\"0 0 480 360\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-500%\" y=\"-500%\" width=\"1000%\" height=\"1000%\" filterUnits=\"objectBoundingBox\" id=\"dropshadow-1\"><feOffset dy=\"16\" in=\"SourceAlpha\" result=\"shadowOffsetOuter\"></feOffset><feGaussianBlur stdDeviation=\"24\" in=\"shadowOffsetOuter\" result=\"shadowBlurOuter\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0\" in=\"shadowBlurOuter\"></feColorMatrix></filter></defs><path fill=\"#F6F8FA\" d=\"M0 220V0h200zM480 140v220H280z\"></path><path fill=\"#FFF\" d=\"M40 50h400v260H40z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#FFF\" d=\"M40 50h400v260H40z\"></path><path fill=\"#FFF\" d=\"M103 176h80v160h-80zM320 24h88v88h-88z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#FFF\" d=\"M103 176h80v160h-80zM320 24h88v88h-88z\"></path><path fill=\"#FFF\" d=\"M230.97 198l16.971 16.971-16.97 16.97L214 214.972z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#4992F0\" d=\"M230.97 198l16.971 16.971-16.97 16.97L214 214.972z\"></path><path fill=\"#FFF\" d=\"M203 121H103v100z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#4992F0\" d=\"M203 121H103v100z\"></path><circle fill=\"#FFF\" cx=\"288\" cy=\"166\" r=\"32\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></circle><circle fill=\"#0EB3CE\" cx=\"288\" cy=\"166\" r=\"32\" style=\"mix-blend-mode:multiply\"></circle></svg></div><div style=\"width: 50%\"><p style=\"font-weight: bold; font-size: 1.5em;\">"+ details["header"] +"</p><p class=\"section-paragraph\" style=\"margin-top: 2em; padding-left: 0;\">" + details["description"] + "</p></div></div></div></section><hr/>";
        }
    } else {
        if (details["image_url"]) {
            return "<section class=\"newsletter section\" style=\"height: 20em;\"><div style=\"margin-left: 10em; margin-right: 10em; margin-top: 5em;\"><div><div style=\"width: 50%; float: right; padding-left: 2em;\"><p style=\"font-weight: bold; font-size: 1.5em;\">"+ details["header"] +"</p><p class=\"section-paragraph\" style=\"margin-top: 2em; padding-left: 0;\">"+ details["description"] +"</p></div><div><img width=\"480\" height=\"360\" src=\"" + details['image_url'] + "\"></div></div></div></section><hr/>";
        } else {
            return "<section class=\"newsletter section\" style=\"height: 20em;\"><div style=\"margin-left: 10em; margin-right: 10em; margin-top: 5em;\"><div><div style=\"width: 50%; float: right; padding-left: 2em;\"><p style=\"font-weight: bold; font-size: 1.5em;\">" + details["header"] + "</p><p class=\"section-paragraph\" style=\"margin-top: 2em; padding-left: 0;\">" + details["description"] + "</p></div><div><svg width=\"480\" height=\"360\" viewBox=\"0 0 480 360\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter x=\"-500%\" y=\"-500%\" width=\"1000%\" height=\"1000%\" filterUnits=\"objectBoundingBox\" id=\"dropshadow-1\"><feOffset dy=\"16\" in=\"SourceAlpha\" result=\"shadowOffsetOuter\"></feOffset><feGaussianBlur stdDeviation=\"24\" in=\"shadowOffsetOuter\" result=\"shadowBlurOuter\"></feGaussianBlur><feColorMatrix values=\"0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0\" in=\"shadowBlurOuter\"></feColorMatrix></filter></defs><path fill=\"#F6F8FA\" d=\"M0 220V0h200zM480 140v220H280z\"></path><path fill=\"#FFF\" d=\"M40 50h400v260H40z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#FFF\" d=\"M40 50h400v260H40z\"></path><path fill=\"#FFF\" d=\"M103 176h80v160h-80zM320 24h88v88h-88z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#FFF\" d=\"M103 176h80v160h-80zM320 24h88v88h-88z\"></path><path fill=\"#FFF\" d=\"M230.97 198l16.971 16.971-16.97 16.97L214 214.972z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#4992F0\" d=\"M230.97 198l16.971 16.971-16.97 16.97L214 214.972z\"></path><path fill=\"#FFF\" d=\"M203 121H103v100z\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></path><path fill=\"#4992F0\" d=\"M203 121H103v100z\"></path><circle fill=\"#FFF\" cx=\"288\" cy=\"166\" r=\"32\" style=\"mix-blend-mode:multiply;filter:url(#dropshadow-1)\"></circle><circle fill=\"#0EB3CE\" cx=\"288\" cy=\"166\" r=\"32\" style=\"mix-blend-mode:multiply\"></circle></svg></div></div></div></section><hr/>";
        }
    }
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
        main_sections_html += getMainSection(main_sections[i], i);
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

    var addPricingSection = website_details["add_pricing_component"];
    if (addPricingSection) {
        $(".pricing-section").css("display", "block");
    }
}

function loadData() {
    var website_uuid = getUrlParameter("uuid");

    var url = LANDR_BACKEND_HOST + "/website/session/details?uuid=" + website_uuid;
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