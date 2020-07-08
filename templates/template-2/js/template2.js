var e=1;var i="";var t=5;var a=12;var r="";var n="";$("#add-feature-section").click(function(){var e=$(".feature-section");if(e.length<a){var i='<div class="feature-section pl-5 pt-3 pb-3 pr-3" style="border-bottom: 5px solid #e0e5ee; padding-bottom: 0px">';i+='<div class="form-group row mb-2"><label for="feature-name" class="col-sm-3 col-form-label">Feature Name</label><div class="col-md-8 col-sm-8 mb-1 pt-2" data-children-count="1"><input type="text" class="form-control form-control-sm feature-name" placeholder="Feature name" maxlength="100" required=""><div class="invalid-feedback">Please provide a feature name.</div></div></div><div class="form-group row mb-0"><label class="col-sm-3 col-form-label">Feature Description</label><div class="col-md-8 col-sm-8 mb-3 pt-2" data-children-count="1"><textarea class="form-control form-control-sm feature-description" maxlength="1000" rows="5" required=""></textarea><div class="invalid-feedback">Please provide feature description.</div></div></div><div class="d-flex justify-content-end"><button type="button" class="btn btn-sm btn-outline-danger delete-feature-section">Remove Feature</button></div></div>';$("#feature-sections-container").append(i)}o()});function o(){$(".delete-feature-section").click(function(e){var i=e.target;$(i).parent().parent().remove()})}o();function s(){$(".delete-main-section").click(function(e){var i=e.target;$(i).parent().parent().remove()});$(".section-image-url").keyup(function(){f(this)})}$("#add-main-section").click(function(){var e=$(".main-section");if(e.length<t){var i='<div class="main-section pl-5 pt-3 pb-3 pr-3" style="border-bottom: 5px solid #e0e5ee; padding-bottom: 0px">';i+='<div class="form-group row mb-0"><label class="col-sm-3 col-form-label">Section Header</label><div class="col-md-8 col-sm-8 mb-2 pt-1 pb-1" data-children-count="1"><input type="text" class="form-control form-control-sm section-header" placeholder="Section header" maxlength="500" required=""><div class="invalid-feedback">Please provide a section name.</div></div></div><div class="form-group row mb-0"><label class="col-sm-3 col-form-label">Section Image Link</label><div class="col-md-8 col-sm-8 pt-2 pb-1"><div class="input-group mb-3 input-group-sm" data-children-count="1"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon3" data-children-count="0">https://</span></div><input maxlength="1000" type="text" class="form-control form-control-sm section-image-url"><div class="invalid-feedback">Please provide a link.</div></div></div></div><div class="form-group row mb-0"><label class="col-sm-3 col-form-label pt-1">Section Description</label><div class="col-md-8 col-sm-8 mb-3 pt-1" data-children-count="1"><textarea class="form-control form-control-sm section-description" rows="6" maxlength="10000" required=""></textarea><div class="invalid-feedback">Please provide section description.</div></div></div><div class="d-flex justify-content-end"><button type="button" class="btn btn-sm btn-outline-danger delete-main-section">Remove Section</button></div></div>';$("#main-sections-container").append(i)}s()});s();function l(e){var i=e;$(i).parent().parent().parent().remove()}function d(){var e=$("#company-name").val();var i=$("#product-name").val();var t=$("#product-tagline").val();var a=$("#website-name").val();a=a.replace("https://landr.page/","");var r=$("#cover-image-link").val().trim();if(r){r="https://"+r.replace("https://","")}var n=$("#facebook-profile").val();if(n){n="https://"+n.replace("https://","")}var o=$("#twitter-profile").val();if(o){o="https://"+o.replace("https://","")}var s=$("#instagram-profile").val();if(s){s="https://"+s.replace("https://","")}var l=$("#google-profile").val();if(l){l="https://"+l.replace("https://","")}var c=$("#linkedin-profile").val();if(c){c="https://"+c.replace("https://","")}var d=$("#github-profile").val();if(d){d="https://"+d.replace("https://","")}var p=$(".feature-section");var f=[];for(var v=0;v<p.length;++v){var u={};var m=$(p[v]).find(".feature-name").val();var h=$(p[v]).find(".feature-description").val();u["header"]=m;u["description"]=h;f.push(u)}var b=$(".main-section");var g=[];for(var v=0;v<b.length;++v){var y={};var _=$(b[v]).find(".section-header").val();var k=$(b[v]).find(".section-description").val();var w=$(b[v]).find(".section-image-url").val().trim();y["header"]=_;y["description"]=k;if(w){var x="https://"+w;y["image_url"]=x}g.push(y)}var N=$("#add-pricing-component").prop("checked");websiteDetails={company_name:e,product_name:i,website_name:a,product_description:t,product_image_url:r,facebook_profile:n,twitter_profile:o,instagram_profile:s,google_profile:l,linkedin_profile:c,github_profile:d,feature_sections:f,description_sections:g,add_pricing_component:N,template_id:2};return websiteDetails}function c(){var e=d();var i=$("#verify-details-carousel");$(i).find("#company-name-verify").html(e["company_name"]);$(i).find("#product-name-verify").html(e["product_name"]);$(i).find("#website-name-verify").html("https://landr.page/"+e["website_name"]);$(i).find("#product-description-verify").html(e["product_description"]);$(i).find("#cover-image-link-verify").html(e["product_image_url"]);$(i).find("#facebook-profile-verify").html(e["facebook_profile"]);$(i).find("#twitter-profile-verify").html(e["twitter_profile"]);$(i).find("#instagram-profile-verify").html(e["instagram_profile"]);$(i).find("#google-profile-verify").html(e["google_profile"]);$(i).find("#linkedin-profile-verify").html(e["linkedin_profile"]);$(i).find("#github-profile-verify").html(e["github_profile"]);var t=$("#add-pricing-component").prop("checked");var a="No";if(t){a="Yes"}$(i).find("#pricing-component-verify").html(a);var r=$("#feature-sections-verify");var n="";for(var o=0;o<e["feature_sections"].length;++o){n+="<tr>";n+='<th style="width: 30%" scope="row">'+e["feature_sections"][o]["header"]+"</th>";n+='<td style="width: 70%" id="facebook-profile-verify">'+e["feature_sections"][o]["description"]+"</td>";n+="</tr>"}$(r).html(n);var s=$("#main-sections-verify");var l="";for(var o=0;o<e["description_sections"].length;++o){l+="<tr>";l+='<th style="width: 30%" scope="row">'+e["description_sections"][o]["header"]+"</th>";l+='<td style="width: 35%" id="facebook-profile-verify">'+e["description_sections"][o]["description"]+"</td>";var c=e["description_sections"][o]["image_url"];if(!c)c="";l+='<td style="width: 35%" id="facebook-profile-verify">'+c+"</td>";l+="</tr>"}$(s).html(l);$(".carousel").carousel("next",{interval:false})}$("#go-back-to-main-page").click(function(){$(".carousel").carousel("prev",{interval:false});n=""});$("#go-back-to-verify-details-page").click(function(){$(".carousel").carousel("prev",{interval:false})});$("#go-next-verify-details-page").click(function(){$(".carousel").carousel("next",{interval:false})});$("#live-preview").click(function(){$("#spinnerLoaderOverlay").css("display","block");if(n!=""){$("#spinnerLoaderOverlay").css("display","none");var e=LANDR_FRONTEND_HOST+"/templates/template-2/preview?uuid="+n;window.open(e,"_blank");return}var i=LANDR_BACKEND_HOST+"/website/session/details/";var t=d();var a=JSON.stringify(t);$.ajax({type:"POST",url:i,data:a,crossDomain:true,dataType:"json",contentType:"application/json",headers:{Authorization:"Basic dXNlcjpwYXNz"},success:function(e){$("#spinnerLoaderOverlay").css("display","none");n=e["website_details"]["uuid"];r=e["website_details"]["stripe_session_id"];var i=LANDR_FRONTEND_HOST+"/templates/template-2/preview?uuid="+n;window.open(i,"_blank")},error:function(e){$("#spinnerLoaderOverlay").css("display","none");console.log("Error: ",e)}})});(function(){"use strict";window.addEventListener("load",function(){var e=document.getElementsByClassName("needs-validation");var i=Array.prototype.filter.call(e,function(a){a.addEventListener("submit",function(e){if(a.checkValidity()===false){e.preventDefault();e.stopPropagation();a.classList.add("was-validated");alert("Please fill all the required fields to continue");}else{e.preventDefault();e.stopPropagation();$("#spinnerLoaderOverlay").css("display","block");var i=$("#website-name").val();var t=LANDR_BACKEND_HOST+"/website/details?website_name="+i;$.ajax({type:"GET",url:t,crossDomain:true,dataType:"json",Accept:"application/json",headers:{Authorization:"Basic dXNlcjpwYXNz"},success:function(e){$("#spinnerLoaderOverlay").css("display","none");console.log(e);if(e){$("#website-name").next().html("A website with this name already exists");$("#website-name").addClass("is-invalid")}else{$("#website-name").next().html("Please provide a website name.");$("#website-name").removeClass("is-invalid");c()}},error:function(e){$("#website-name").next().html("A website with this name already exists");$("#website-name").addClass("is-invalid")}})}},false)})},false)})();function p(){var e=Stripe("pk_live_GtwQyjyteOyMJPNmcAF40IRe00c8MRY5KC");e.redirectToCheckout({sessionId:r}).then(function(e){})}$("#payment-button").click(function(){$("#spinnerLoaderOverlay").css("display","block");if(!r){var e=LANDR_BACKEND_HOST+"/website/session/details/";var i=d();var t=JSON.stringify(i);$.ajax({type:"POST",url:e,data:t,crossDomain:true,dataType:"json",contentType:"application/json",headers:{Authorization:"Basic dXNlcjpwYXNz"},success:function(e){$("#spinnerLoaderOverlay").css("display","none");n=e["website_details"]["uuid"];r=e["website_details"]["stripe_session_id"];p()},error:function(e){$("#spinnerLoaderOverlay").css("display","none");console.log("Error: ",e)}})}else{$("#spinnerLoaderOverlay").css("display","none");p()}});function f(e){var i=e.value;i=i.replace("https://","");e.value=i}$("#cover-image-link").keyup(function(){f(this)});$("#facebook-profile").keyup(function(){f(this)});$("#twitter-profile").keyup(function(){f(this)});$("#instagram-profile").keyup(function(){f(this)});$("#google-profile").keyup(function(){f(this)});$("#linkedin-profile").keyup(function(){f(this)});$("#github-profile").keyup(function(){f(this)});$(".section-image-url").keyup(function(){f(this)});$.fn.regexMask=function(a){$(this).keypress(function(e){if(!e.charCode)return true;var i=this.value.substring(0,this.selectionStart);var t=this.value.substring(this.selectionEnd,this.value.length);if(!a.test(i+String.fromCharCode(e.charCode)+t))return false})};var v=new RegExp("^[A-Za-z0-9-]*$");$("#website-name").regexMask(v);$("#add-pricing-component").change(function(){var e=$(this).prop("checked");if(e){$("#pricing-component-info").css("display","block")}else{$("#pricing-component-info").css("display","none")}});
