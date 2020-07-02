window.onpaint = loadData();

function loadPreviewDetails(website_details) {
    $("#product-name").html(website_details["product_name"]);
    $("#product-description").html(website_details["product_description"]);
    $("#product-image-url").attr("src", website_details["product_image_url"]);
    
    if (website_details["logo_image_url"]) {
        $("#logo-image-url").attr("src", website_details["logo_image_url"]);
        $("#logo-image-url-container").removeClass("no-display");
    }

    if (website_details["add_pricing_component"]) {
        $("#nav-pricing").removeClass("no-display");
        $("#pricing").removeClass("no-display");
    }

    if (website_details["video_details"] && website_details["video_details"]["video_url"]) {
        $("#video").removeClass("no-display");
        $("#video-details-url").attr("href", website_details["video_details"]["video_url"]);
        $("#video-details-description").html(website_details["video_details"]["video_description"]);
    }

    var feature_sections_html = "";
    for (var i = 0; i < website_details["feature_sections"].length; ++i) {
        if (website_details["feature_sections"][i]["image_url"]) {
            feature_sections_html += "<div class=\"card\"><div class=\"card-image\"><img class=\"img-fluid\" src=\"" + website_details["feature_sections"][i]["image_url"] + "\" alt=\"alternative\"></div><div class=\"card-body\"><h4 class=\"card-title\">" + website_details["feature_sections"][i]["header"] + "</h4><p> " + website_details["feature_sections"][i]["description"] + "</p></div></div>";
        } else {
            feature_sections_html += "<div class=\"card\"><div class=\"card-image\"><img class=\"img-fluid\" src=\"https://demos.onepagelove.com/html/tivo/images/description-3.png\" alt=\"alternative\"></div><div class=\"card-body\"><h4 class=\"card-title\">" + website_details["feature_sections"][i]["header"] + "</h4><p> " + website_details["feature_sections"][i]["description"] + "</p></div></div>";
        }
    }
    $("#feature-sections").html(feature_sections_html);

    var main_sections_html = "";
    for (var i = 0; i < website_details["description_sections"].length; ++i) {
        if (i % 2) {
            if (website_details["description_sections"][i]["image_url"]) {
                main_sections_html += "<div id=\"details\" class=\"basic-1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"image-container\"><img class=\"img-fluid\" src=\"" + website_details["description_sections"][i]["image_url"] + "\" alt=\"alternative\"></div></div><div class=\"col-lg-6\"><div class=\"text-container\"><h2>" + website_details["description_sections"][i]["header"] + "</h2><p>" + website_details["description_sections"][i]["description"] + "</p></div></div></div></div></div>";
            } else {
                main_sections_html += "<div id=\"details\" class=\"basic-1\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"image-container\"><img class=\"img-fluid\" src=\"https://demos.onepagelove.com/html/tivo/images/details.png\" alt=\"alternative\"></div></div><div class=\"col-lg-6\"><div class=\"text-container\"><h2>" + website_details["description_sections"][i]["header"] + "</h2><p>" + website_details["description_sections"][i]["description"] + "</p></div></div></div></div></div>";
            }
        } else {
            if (website_details["description_sections"][i]["image_url"]) {
                main_sections_html += "<div id=\"details\" class=\"basic-1\" style=\"background-color: #f3f7fd;\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"text-container\"><h2>" + website_details["description_sections"][i]["header"] + "</h2><p>" + website_details["description_sections"][i]["description"] + "</p></div></div><div class=\"col-lg-6\"><div class=\"image-container\"><img class=\"img-fluid\" src=\"" + website_details["description_sections"][i]["image_url"] + "\" alt=\"alternative\"></div></div></div></div></div>";
            } else {
                main_sections_html += "<div id=\"details\" class=\"basic-1\" style=\"background-color: #f3f7fd;\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"text-container\"><h2>" + website_details["description_sections"][i]["header"] + "</h2><p>" + website_details["description_sections"][i]["description"] + "</p></div></div><div class=\"col-lg-6\"><div class=\"image-container\"><img class=\"img-fluid\" src=\"https://demos.onepagelove.com/html/tivo/images/details.png\" alt=\"alternative\"></div></div></div></div></div>";
            }
        }
    }
    $("#main-sections").html(main_sections_html);

    var testimonials_section_html = "";
    for (var i = 0; i < website_details["testimonial_sections"].length; ++i) {
        if (website_details["testimonial_sections"][i]["image_url"]) {
            testimonials_section_html += "<div class=\"swiper-slide\"><div class=\"image-wrapper\"><img class=\"img-fluid\" src=\"" + website_details["testimonial_sections"][i]["image_url"] + "\" alt=\"alternative\"></div><div class=\"text-wrapper\"><div class=\"testimonial-text\">" + website_details["testimonial_sections"][i]["testimonial"] + "</div><div class=\"testimonial-author\">" + website_details["testimonial_sections"][i]["given_by"] + "</div></div></div>";
        } else {
            testimonials_section_html += "<div class=\"swiper-slide\"><div class=\"image-wrapper\"><img class=\"img-fluid\" src=\"https://demos.onepagelove.com/html/tivo/images/person_testimonial.jpg\" alt=\"alternative\"></div><div class=\"text-wrapper\"><div class=\"testimonial-text\">" + website_details["testimonial_sections"][i]["testimonial"] + "</div><div class=\"testimonial-author\">" + website_details["testimonial_sections"][i]["given_by"] + "</div></div></div>";
        }
    }
    $("#testimonials-section").html(testimonials_section_html);

    if (website_details["newsletter_section"]) {
        $("#newsletter-header").html(website_details["newsletter_section"]["header"]);
        $("#newsletter-description").html(website_details["newsletter_section"]["description"]);
        $("#newsletter-section").removeClass("no-display");
    }

    if (website_details["facebook_profile"]) {
        $("#facebook-profile").removeClass("no-display");
        $("#facebook-profile a").attr("href", website_details["facebook_profile"]);
    }

    if (website_details["twitter_profile"]) {
        $("#twitter-profile").removeClass("no-display");
        $("#twitter-profile a").attr("href", website_details["twitter_profile"]);
    }

    if (website_details["instagram_profile"]) {
        $("#instagram-profile").removeClass("no-display");
        $("#instagram-profile a").attr("href", website_details["instagram_profile"]);
    }

    if (website_details["linkedin_profile"]) {
        $("#linkedin-profile").removeClass("no-display");
        $("#linkedin-profile a").attr("href", website_details["linkedin_profile"]);
    }

    $(".company-name").html(website_details["company_name"]);
    $("#about-company-details").html(website_details["about_company_details"]);
    $("#company-address").html(website_details["company_address"]);
    $("#contact-email").html(website_details["contact_email"]);
}

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