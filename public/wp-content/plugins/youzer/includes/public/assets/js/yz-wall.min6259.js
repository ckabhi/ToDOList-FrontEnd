!function(s){"use strict";s(document).ready(function(){if(jQuery().viewportChecker){if(s.yz_init_wall_posts_effect=function(){s(".yz_effect")[0]&&s(".yz_effect").viewportChecker({classToAdd:"animated",classToRemove:"invisible",removeClassAfterAnimation:!0,offset:"10%",callbackFunction:function(t,a){t.addClass(t.data("effect"))}},500)},s.yz_init_wall_posts_effect(),s("body").on("append","#activity-stream",function(t){s.yz_init_wall_posts_effect()}),s(".yz-column-content div.activity")[0])new MutationObserver(function(t){s.yz_init_wall_posts_effect()}).observe(s(".yz-column-content div.activity")[0],{attributes:!1,childList:!0,subtree:!1,characterData:!1});if(s("div.activity #activity-stream")[0])new MutationObserver(function(t){s.yz_init_wall_posts_effect()}).observe(s("div.activity #activity-stream")[0],{attributes:!1,childList:!0,subtree:!1,characterData:!1})}if(s(document).on("click",".yz-trigger-who-modal",function(t){s(".yz-wall-modal-overlay").fadeIn(500,function(){s(this).find(".yz-modal-loader").fadeIn(400)}),t.preventDefault();var a={action:"yz_get_who_liked_post",post_id:s(this).data("who-liked")};jQuery.post(Youzer.ajax_url,a,function(t){s("#yz-wall-modal").append(t).find(".yz-wall-modal").addClass("yz-wall-modal-show"),s(".yz-wall-modal-overlay").find(".yz-modal-loader").hide()})}),s(document).on("click",".yz-delete-post",function(t){var a=s(this),e=a.parents("div.activity ul li"),i=e.prop("class").match(/date-recorded-([0-9]+)/);a.addClass("loading"),jq.post(ajaxurl,{action:"delete_activity",cookie:bp_get_cookies(),id:s(this).parent().attr("data-activity-id"),_wpnonce:a.attr("data-nonce")},function(t){t[0]+t[1]==="-1"?(e.prepend(t.substr(2,t.length)),e.children("#message").hide().fadeIn(300)):(e.slideUp(300),i&&activity_last_recorded===i[1]&&(newest_activities="",activity_last_recorded=0))})}),s(document).on("click",".yz-show-tagged-users",function(t){t.preventDefault(),s(".yz-wall-modal-overlay").fadeIn(500,function(){s(this).find(".yz-modal-loader").fadeIn(400)});var a=s(this).closest("li.activity-item"),e={action:"yz_activity_tagged_users_modal",post_id:a.attr("id").substr(9,a.attr("id").length)};jQuery.post(Youzer.ajax_url,e,function(t){s("#yz-wall-modal").append(t).find(".yz-wall-modal").addClass("yz-wall-modal-show"),s(".yz-wall-modal-overlay").find(".yz-modal-loader").hide()})}),s(document).keyup(function(t){s(".yz-wall-modal-show")[0]&&27===t.keyCode&&s(".yz-wall-modal-close").trigger("click")}),s(document).mouseup(function(t){s(".yz-wall-modal-overlay").is(t.target)&&s(".yz-wall-modal-show")[0]&&s(".yz-wall-modal-close").trigger("click")}),"on"==Youzer.activity_autoloader){var e=s(window);e.scroll(function(){var t=s("#activity-stream .load-more:visible");if(t.get(0)&&!t.data("yz-autoloaded")){var a=t.offset().top-3e3;e.scrollTop()+e.height()>a&&(t.data("yz-autoloaded",1),t.find("a").trigger("click"))}})}s("#activity-stream").on("click",".friendship-button a",function(){s(this).parent().addClass("loading");var t=s(this).attr("id"),a=s(this).attr("href"),i=s(this);return t=(t=t.split("-"))[1],a=(a=(a=a.split("?_wpnonce="))[1].split("&"))[0],jq.post(ajaxurl,{action:"addremove_friend",cookie:bp_get_cookies(),fid:t,_wpnonce:a},function(t){var a=i.attr("rel"),e=i.parent();"add"===a?s(e).fadeOut(200,function(){e.removeClass("add_friend"),e.removeClass("loading"),e.addClass("pending_friend"),e.fadeIn(200).html(t)}):"remove"===a&&s(e).fadeOut(200,function(){e.removeClass("remove_friend"),e.removeClass("loading"),e.addClass("add"),e.fadeIn(200).html(t)})}),!1}),s("#activity-stream").on("click",".group-button a",function(t){s(this).hasClass("membership-requested")||s(this).addClass("yz-btn-loading");var a=s(this).parent().attr("id"),e=s(this).attr("href"),o=s(this);return a=(a=a.split("-"))[1],e=(e=(e=e.split("?_wpnonce="))[1].split("&"))[0],o.hasClass("leave-group")&&!1===confirm(BP_DTheme.leave_group_confirm)||jq.post(ajaxurl,{action:"joinleave_group",cookie:bp_get_cookies(),gid:a,_wpnonce:e},function(e){var i=o.parent();s(i).fadeOut(200,function(){i.fadeIn(200).html(e);var t=s("#groups-personal span"),a=1;o.hasClass("leave-group")?(i.hasClass("hidden")&&i.closest("li").slideUp(200),a=0):o.hasClass("request-membership")&&(a=!1),t.length&&!1!==a&&(a?t.text(1+(t.text()>>0)):t.text((t.text()>>0)-1))})}),!1}),s("audio").on("play",function(){s("audio").not(this).each(function(t,a){a.pause()})}),s(document).on("click",".nice-select .option",function(t){s(this).parent().prev(".current").attr("data-value",s(this).attr("data-value"))}),s("#activity-stream").on("click","li.load-more",function(t){if(s(this).closest(".yz-activity-shortcode")[0]){t.stopImmediatePropagation();var a=s(this);a.addClass("loading");var e=s(this).parents(".yz-activity-shortcode");e.attr("data-page",parseInt(e.attr("data-page"))+1);var i=e.data();return i.page=e.attr("data-page"),s.post(ajaxurl,{data:i,action:"yz_activity_load_activities"},function(t){t.success&&(a.hide(),a.parents("ul.activity-list").append(t.data))},"json"),!1}}),s("body").append('<div id="yz-wall-modal"></div><div class="yz-wall-modal-overlay"><div class="yz-modal-loader"><i class="fas fa-spinner fa-spin"></i></div></div>'),s(document).on("click",".activity-item .yz-show-item-tools",function(t){var a=s(this),e=a.closest("li.activity-item"),i=a.find("i").attr("class");a.hasClass("loaded")?e.find(".yz-activity-tools").fadeToggle():a.hasClass("loading")||(a.addClass("loading"),a.find("i").attr("class","fas fa-spin fa-spinner"),s.ajax({type:"POST",url:ajaxurl,dataType:"json",data:{activity_id:e.attr("id").substr(9,e.attr("id").length),action:"yz_get_activity_tools"},success:function(t){a.find("i").attr("class",i),a.addClass("loaded"),a.removeClass("loading"),t.success&&e.prepend(s(t.data).fadeIn())}}))}),s(".yz-activity-show-search-form").on("click",function(t){t.preventDefault();var a=s(this);a.closest("ul").find("#activity-filter-select .yz-dropdown-area").fadeOut(1,function(){a.closest("li").find(".yz-dropdown-area").fadeToggle(),a.closest("li").find("input").focus()})}),s(".yz-activity-show-filter").on("click",function(t){t.preventDefault();var a=s(this);a.closest("ul").find(".yz-activity-show-search .yz-dropdown-area").fadeOut(1,function(){a.closest("li").find(".yz-dropdown-area").fadeToggle()})}),s(".yz-show-activity-search").on("click",function(t){t.preventDefault();var a=s(this).parents("#youzer"),e=a.find(".yz-activity-show-search .yz-dropdown-area");a.find("#activity-filter-select .yz-dropdown-area, .activity-type-tabs").fadeOut(),e.fadeToggle(),e.find("input").focus()}),s(".yz-show-activity-filter").on("click",function(t){t.preventDefault();var a=s(this).parents("#youzer");a.find(".yz-activity-show-search .yz-dropdown-area, .activity-type-tabs").fadeOut(),a.find("#activity-filter-select .yz-dropdown-area").fadeToggle()}),s(".yz-show-activity-menu").on("click",function(t){t.preventDefault();var a=s(this).parents("#youzer");a.find("#subnav .yz-dropdown-area").fadeOut(),a.find(".activity-type-tabs").fadeToggle()})})}(jQuery);