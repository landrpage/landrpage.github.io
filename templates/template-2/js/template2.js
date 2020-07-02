var PAYMENT_OPTION = 1;
var WEBSITE_NAME = "";
var MAIN_SECTIONS_LIMIT = 5;
var FEATURE_SECTIONS_LIMIT = 12;
var stripe_checkout_session_id = "";
var website_session_uuid = "";

$("#add-feature-section").click(function() {
    var featureSections = $(".feature-section");
    if (featureSections.length < FEATURE_SECTIONS_LIMIT) {
        var featureSection = "<div class=\"feature-section pl-5 pt-3 pb-3 pr-3\" style=\"border-bottom: 5px solid #e0e5ee; padding-bottom: 0px\">";
        featureSection += "<div class=\"form-group row mb-2\"><label for=\"feature-name\" class=\"col-sm-3 col-form-label\">Feature Name</label><div class=\"col-md-8 col-sm-8 mb-1 pt-2\" data-children-count=\"1\"><input type=\"text\" class=\"form-control form-control-sm feature-name\" placeholder=\"Feature name\" maxlength=\"100\" required=\"\"><div class=\"invalid-feedback\">Please provide a feature name.</div></div></div><div class=\"form-group row mb-0\"><label class=\"col-sm-3 col-form-label\">Feature Description</label><div class=\"col-md-8 col-sm-8 mb-3 pt-2\" data-children-count=\"1\"><textarea class=\"form-control form-control-sm feature-description\" maxlength=\"1000\" rows=\"5\" required=\"\"></textarea><div class=\"invalid-feedback\">Please provide feature description.</div></div></div><div class=\"d-flex justify-content-end\"><button type=\"button\" class=\"btn btn-sm btn-outline-danger delete-feature-section\">Remove Feature</button></div></div>";
        $("#feature-sections-container").append(featureSection);
    }
    registerFeatureSectionDeletion();
});

function registerFeatureSectionDeletion() {
    $(".delete-feature-section").click(function(event) {
        var elem = event.target;
        $(elem).parent().parent().remove();
    });
}

registerFeatureSectionDeletion();

function registerMainSectionEvents() {
    $(".delete-main-section").click(function(event) {
        var elem = event.target;
        $(elem).parent().parent().remove();
    });

    $(".section-image-url").keyup(function() {
        cleanURLValue(this);
    });
}

$("#add-main-section").click(function() {
    var mainSections = $(".main-section");
    if (mainSections.length < MAIN_SECTIONS_LIMIT) {
        var mainSection = "<div class=\"main-section pl-5 pt-3 pb-3 pr-3\" style=\"border-bottom: 5px solid #e0e5ee; padding-bottom: 0px\">";
        mainSection += "<div class=\"form-group row mb-0\"><label class=\"col-sm-3 col-form-label\">Section Header</label><div class=\"col-md-8 col-sm-8 mb-2 pt-1 pb-1\" data-children-count=\"1\"><input type=\"text\" class=\"form-control form-control-sm section-header\" placeholder=\"Section header\" maxlength=\"500\" required=\"\"><div class=\"invalid-feedback\">Please provide a section name.</div></div></div><div class=\"form-group row mb-0\"><label class=\"col-sm-3 col-form-label\">Section Image Link</label><div class=\"col-md-8 col-sm-8 pt-2 pb-1\"><div class=\"input-group mb-3 input-group-sm\" data-children-count=\"1\"><div class=\"input-group-prepend\"><span class=\"input-group-text\" id=\"basic-addon3\" data-children-count=\"0\">https://</span></div><input maxlength=\"1000\" type=\"text\" class=\"form-control form-control-sm section-image-url\"><div class=\"invalid-feedback\">Please provide a link.</div></div></div></div><div class=\"form-group row mb-0\"><label class=\"col-sm-3 col-form-label pt-1\">Section Description</label><div class=\"col-md-8 col-sm-8 mb-3 pt-1\" data-children-count=\"1\"><textarea class=\"form-control form-control-sm section-description\" rows=\"6\" maxlength=\"10000\" required=\"\"></textarea><div class=\"invalid-feedback\">Please provide section description.</div></div></div><div class=\"d-flex justify-content-end\"><button type=\"button\" class=\"btn btn-sm btn-outline-danger delete-main-section\">Remove Section</button></div></div>";
        $("#main-sections-container").append(mainSection);
    }
    registerMainSectionEvents();
});

registerMainSectionEvents();

function deleteMainSection(event) {
    var elem = event;
    $(elem).parent().parent().parent().remove();
}

function getWebsiteDetails() {
    var companyName = $("#company-name").val();
    var productName = $("#product-name").val();
    var productTagline = $("#product-tagline").val();

    var websiteName = $("#website-name").val();
    websiteName = websiteName.replace("https://landr.page/", "");

    var coverImageLink = $("#cover-image-link").val().trim();
    if (coverImageLink) {
        coverImageLink = "https://" + coverImageLink.replace("https://", "");
    }
    
    var facebookProfile = $("#facebook-profile").val();
    if (facebookProfile) {
        facebookProfile = "https://" + facebookProfile.replace("https://", "");
    }
    
    var twitterProfile = $("#twitter-profile").val();
    if (twitterProfile) {
        twitterProfile = "https://" + twitterProfile.replace("https://", "");
    }
    
    var instagramProfile = $("#instagram-profile").val();
    if (instagramProfile) {
        instagramProfile = "https://" + instagramProfile.replace("https://", "");
    }
    
    var googleProfile = $("#google-profile").val();
    if (googleProfile) {
        googleProfile = "https://" + googleProfile.replace("https://", "");
    }
    
    var linkedinProfile = $("#linkedin-profile").val();
    if (linkedinProfile) {
        linkedinProfile = "https://" + linkedinProfile.replace("https://", "");
    }
    
    var githubProfile = $("#github-profile").val();
    if (githubProfile) {
        githubProfile = "https://" + githubProfile.replace("https://", "");
    }
    
    var featureSections = $(".feature-section");
    var featureSectionDetails = [];
    for(var i = 0; i < featureSections.length; ++i) {
        var feature = {};
        var featureName = $(featureSections[i]).find(".feature-name").val();
        var featureDescription = $(featureSections[i]).find(".feature-description").val();
        feature["header"] = featureName;
        feature["description"] = featureDescription;
        featureSectionDetails.push(feature);
    }

    var mainSections = $(".main-section");
    var mainSectionDetails = [];
    for (var i = 0; i < mainSections.length; ++i) {
        var mainSection = {};
        var sectionName = $(mainSections[i]).find(".section-header").val();
        var sectionDescription = $(mainSections[i]).find(".section-description").val();
        var imageURL = $(mainSections[i]).find(".section-image-url").val().trim();
        mainSection["header"] = sectionName;
        mainSection["description"] = sectionDescription;
        if (imageURL) {
            var sectionImageURL = "https://" + imageURL;
            mainSection["image_url"] = sectionImageURL;
        }
        mainSectionDetails.push(mainSection);
    }
    var addPricingComponent = $("#add-pricing-component").prop("checked");

    websiteDetails = {
        "company_name": companyName,
        "product_name": productName,
        "website_name": websiteName,
        "product_description": productTagline,
        "product_image_url": coverImageLink,
        "facebook_profile": facebookProfile,
        "twitter_profile": twitterProfile,
        "instagram_profile": instagramProfile,
        "google_profile": googleProfile,
        "linkedin_profile": linkedinProfile,
        "github_profile": githubProfile,
        "feature_sections": featureSectionDetails,
        "description_sections": mainSectionDetails,
        "add_pricing_component": addPricingComponent,
        "template_id": 2
    }
    return websiteDetails
}

function loadVerifyDetailsPage() {
    var websiteDetails = getWebsiteDetails();
    var verifyDetailsPage = $("#verify-details-carousel");
    $(verifyDetailsPage).find("#company-name-verify").html(websiteDetails["company_name"]);
    $(verifyDetailsPage).find("#product-name-verify").html(websiteDetails["product_name"]);
    $(verifyDetailsPage).find("#website-name-verify").html("https://landr.page/" + websiteDetails["website_name"]);
    $(verifyDetailsPage).find("#product-description-verify").html(websiteDetails["product_description"]);
    $(verifyDetailsPage).find("#cover-image-link-verify").html(websiteDetails["product_image_url"]);
    $(verifyDetailsPage).find("#facebook-profile-verify").html(websiteDetails["facebook_profile"]);
    $(verifyDetailsPage).find("#twitter-profile-verify").html(websiteDetails["twitter_profile"]);
    $(verifyDetailsPage).find("#instagram-profile-verify").html(websiteDetails["instagram_profile"]);
    $(verifyDetailsPage).find("#google-profile-verify").html(websiteDetails["google_profile"]);
    $(verifyDetailsPage).find("#linkedin-profile-verify").html(websiteDetails["linkedin_profile"]);
    $(verifyDetailsPage).find("#github-profile-verify").html(websiteDetails["github_profile"]);
    var checked = $("#add-pricing-component").prop("checked");
    var pricingComponentVerify = "No";
    if (checked) {
        pricingComponentVerify = "Yes";
    }
    $(verifyDetailsPage).find("#pricing-component-verify").html(pricingComponentVerify);

    var featureSectionsVerify = $("#feature-sections-verify");
    var featureSectionHTML = "";
    for (var i = 0; i < websiteDetails["feature_sections"].length; ++i) {
        featureSectionHTML += "<tr>";
        featureSectionHTML += "<th style=\"width: 30%\" scope=\"row\">"+ websiteDetails["feature_sections"][i]["header"] +"</th>";
        featureSectionHTML += "<td style=\"width: 70%\" id=\"facebook-profile-verify\">"+ websiteDetails["feature_sections"][i]["description"] +"</td>";
        featureSectionHTML += "</tr>";
    }
    $(featureSectionsVerify).html(featureSectionHTML);

    var mainSectionsVerify = $("#main-sections-verify");
    var mainSectionHTML = "";
    for (var i = 0; i < websiteDetails["description_sections"].length; ++i) {
        mainSectionHTML += "<tr>";
        mainSectionHTML += "<th style=\"width: 30%\" scope=\"row\">"+ websiteDetails["description_sections"][i]["header"] +"</th>";
        mainSectionHTML += "<td style=\"width: 35%\" id=\"facebook-profile-verify\">"+ websiteDetails["description_sections"][i]["description"] +"</td>";
        var imageURL = websiteDetails["description_sections"][i]["image_url"];
        if (!imageURL) imageURL = "";
        mainSectionHTML += "<td style=\"width: 35%\" id=\"facebook-profile-verify\">"+ imageURL +"</td>";
        mainSectionHTML += "</tr>";
    }
    $(mainSectionsVerify).html(mainSectionHTML);

    $('.carousel').carousel('next', {interval: false});
}

$("#go-back-to-main-page").click(function() {
    $('.carousel').carousel('prev', {interval: false});
    website_session_uuid = "";
});

$("#go-back-to-verify-details-page").click(function() {
    $('.carousel').carousel('prev', {interval: false});
});

$("#go-next-verify-details-page").click(function() {
    $('.carousel').carousel('next', {interval: false});
});

$("#live-preview").click(function() {
    $("#spinnerLoaderOverlay").css("display", "block");
    
    if (website_session_uuid != "") {
        $("#spinnerLoaderOverlay").css("display", "none");
        var preview_url = LANDR_FRONTEND_HOST + "/templates/template-2/preview?uuid=" + website_session_uuid;
        window.open(preview_url, '_blank');
        return
    }
    var url = LANDR_BACKEND_HOST + "/website/session/details/";
    var websiteDetails = getWebsiteDetails();
    var body = JSON.stringify(websiteDetails);
    
    $.ajax({
        type: 'POST',
        url: url,
        data: body,
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "Authorization": "Basic dXNlcjpwYXNz"
        },
        success: function(response) {
            $("#spinnerLoaderOverlay").css("display", "none");
            website_session_uuid = response["website_details"]["uuid"];
            stripe_checkout_session_id = response["website_details"]["stripe_session_id"];
            var preview_url = LANDR_FRONTEND_HOST + "/templates/template-2/preview?uuid=" + website_session_uuid;
            window.open(preview_url, '_blank');
        },
        error: function(err) {
            $("#spinnerLoaderOverlay").css("display", "none");
            console.log("Error: ", err);
        }
    });
});

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                loadVerifyDetailsPage();
            } else {
                event.preventDefault();
                event.stopPropagation();

                $("#spinnerLoaderOverlay").css("display", "block");
                var websiteName = $("#website-name").val();
                var url = LANDR_BACKEND_HOST + "/website/details?website_name=" + websiteName;

                $.ajax({
                    type: 'GET',
                    url: url,
                    crossDomain: true,
                    dataType: 'json',
                    Accept: 'application/json',
                    headers: {
                        "Authorization": "Basic dXNlcjpwYXNz"
                    },
                    success: function(response) {
                        $("#spinnerLoaderOverlay").css("display", "none");
                        console.log(response);
                        if (response) {
                            $("#website-name").next().html("A website with this name already exists");
                            $("#website-name").addClass("is-invalid");
                        } else {
                            $("#website-name").next().html("Please provide a website name.");
                            $("#website-name").removeClass("is-invalid");
                            loadVerifyDetailsPage();
                        }
                    },
                    error: function(err) {
                        $("#website-name").next().html("A website with this name already exists");
                        $("#website-name").addClass("is-invalid");
                    }
                });
            }
        }, false);
        });
    }, false);
})();

function acceptPayment() {
    var stripe = Stripe('pk_test_U2YBaLvYoPekG8YH4O4rkD7v00G027OFlm');
    stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: stripe_checkout_session_id
    }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
    });
}

$("#payment-button").click(function() {
    $("#spinnerLoaderOverlay").css("display", "block");

    if (!stripe_checkout_session_id) {
        var url = LANDR_BACKEND_HOST + "/website/session/details/"
        var websiteDetails = getWebsiteDetails();
        var body = JSON.stringify(websiteDetails);
        
        $.ajax({
            type: 'POST',
            url: url,
            data: body,
            crossDomain: true,
            dataType: 'json',
            contentType: 'application/json',
            headers: {
                "Authorization": "Basic dXNlcjpwYXNz"
            },
            success: function(response) {
                $("#spinnerLoaderOverlay").css("display", "none");
                website_session_uuid = response["website_details"]["uuid"];
                stripe_checkout_session_id = response["website_details"]["stripe_session_id"];
                acceptPayment();
            },
            error: function(err) {
                $("#spinnerLoaderOverlay").css("display", "none");
                console.log("Error: ", err);
            }
        });
    } else {
        $("#spinnerLoaderOverlay").css("display", "none");
        acceptPayment();
    }
});

function cleanURLValue(element) {
    var value = element.value;
    value = value.replace("https://", "");
    element.value = value;
}

$("#cover-image-link").keyup(function() {
    cleanURLValue(this);
});

$("#facebook-profile").keyup(function() {
    cleanURLValue(this);
});

$("#twitter-profile").keyup(function() {
    cleanURLValue(this);
});

$("#instagram-profile").keyup(function() {
    cleanURLValue(this);
});

$("#google-profile").keyup(function() {
    cleanURLValue(this);
});

$("#linkedin-profile").keyup(function() {
    cleanURLValue(this);
});

$("#github-profile").keyup(function() {
    cleanURLValue(this);
});

$(".section-image-url").keyup(function() {
    cleanURLValue(this);
});

$.fn.regexMask = function(mask) {
    $(this).keypress(function (event) {
        if (!event.charCode) return true;
        var part1 = this.value.substring(0, this.selectionStart);
        var part2 = this.value.substring(this.selectionEnd, this.value.length);
        if (!mask.test(part1 + String.fromCharCode(event.charCode) + part2))
            return false;
    });
};
var mask = new RegExp('^[A-Za-z0-9-]*$')
$('#website-name').regexMask(mask);


$('#add-pricing-component').change(function() {
    var checked = $(this).prop('checked');
    if (checked) {
        $("#pricing-component-info").css("display", "block");
    } else {
        $("#pricing-component-info").css("display", "none");
    }
})