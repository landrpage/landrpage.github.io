window.addEventListener('load', function() {
    create_website();
});

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

function create_website() {
    var url = LANDR_BACKEND_HOST + "/website/details/";
    var website_uuid = getUrlParameter("website_uuid");
    var stripe_session_id = getUrlParameter("session_id");

    if (!website_uuid || !stripe_session_id) {
        $("#invalid-page").css("display", "block");
        $("#payment-success-cover-image").attr("src", "images/404.jpg");
        return;
    }

    $("#payment-success-page").css("display", "block");
    $("#payment-success-cover-image").attr("src", "images/success.jpg");
    
    var website_details = {
        "website_uuid": website_uuid,
        "stripe_session_id": stripe_session_id
    }
    var body = JSON.stringify(website_details);

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
            console.log(response);
            $("#spinnerLoaderOverlay").css("display", "none");
            if (response) {
                $("#website-details-container").css("display", "block");
                $("#success-alert").css("display", "block");
                $("#website-creating-info").css("display", "none");
                $("#website-name").html(response["website_details"]["website_name"]);
                $("#website-url").html(response["website_details"]["website_url"]);
                $("#website-url").attr("href", response["website_details"]["website_url"]);
                $("#website-id").html(response["website_details"]["website_uuid"]);
                $("#payment-amount").html(response["website_details"]["payment_amount"] + " $");
            } else {
                $("#website-creating-info").html(response["error"]);
                $("#website-creating-info").css("color", "#dc3545");
                $("#website-creation-failed-info").css("display", "block");
            }
        },
        error: function(err) {
            $("#website-creating-info").css("display", "none");
            $("#failure-alert").html("Something went wrong while creating your website.");
            $("#failure-alert").css("display", "block");
            $("#spinnerLoaderOverlay").css("display", "none");
            $("#website-creation-failed-info").css("display", "block");
        }
    });
}