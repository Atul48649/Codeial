{
    let createComment =  function(){
        let newCommentForm = $('#new-comment-form');
        newCommentForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'comment',
                url: '/comments/create',
                data: newCommentForm.serialize(),
                success: function(data){
                    console.log(data);
                },
                error: function(error){
                    console.log(error.responseText);
                }
            })
        })
    }



    createComment();
}