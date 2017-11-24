$(function() {
    $('#send_review_button').click(function(){

        var userName = document.getElementById('send_user_name').value;
        var date = new Date();
        var dateString = "";
            dateString = date.getDate() + "." + (date.getMonth()+1) + "." + (date.getFullYear()) + ", " + date.getHours() + ":" + date.getMinutes();
        var reviewText = document.getElementById('send_review').value;

        var newDiv = '<div class="review divider_bottom"><div class="user_name"><h1>' 
        + userName 
        + '</h1></div>'
        + '<div class="review_time"><h4>'
        + dateString
        + '</h4></div>'
        + '<div class="review_text"><p>'
        + reviewText
        + '</p></div>';

        if(userName !== null && userName !== '' && reviewText !==null && reviewText !== '') {
            $("#reviews").append(newDiv);

            document.getElementById("send_user_name").value = "";
            document.getElementById("send_review").value = "";
        } 
        else {
            alert("Заповніть поля");
        }
    });
});



$(function() {
    $('#send_news_button').click(function(){

        var uploadedImage = document.getElementById('my-file-selector').value;
        var newsContent = document.getElementById('news_text_admin_page').value;
        var newsTitle = document.getElementById('news_title_admin_page').value;

        if(newsContent !== null && newsContent !== ''  && newsTitle !==null && newsTitle !== '' && uploadedImage !==null && uploadedImage !== '') {
            alert("Новина успішно додана!");

            document.getElementById("news_text_admin_page").value = "";
            document.getElementById("news_title_admin_page").value = "";
            $("#remove_image_button").click()
        } 
        else {
            alert("Вам необхідно заповнити усі поля");
        }
        
    });
});