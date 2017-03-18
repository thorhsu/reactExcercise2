$(function () {
    $(".accu_details").click(function () {
                var buttonId = $(this).prop("id");
                var title = accupointList[buttonId].title;
                var message = accupointList[buttonId].message;
                var picture = accupointList[buttonId].picture;
                var image = "<img src='../imgs/" + picture + "' />";
                BootstrapDialog.show({
                    size: BootstrapDialog.SIZE_WIDE,
                    title: title,
                    message: message,
                    buttons: [{
                       label: '開啟圖片',
                       // no title as it is optional
                       cssClass: 'btn-primary',
                       action: function(){
                          BootstrapDialog.show({
                             title: title + "圖片詳解",
                             message: image,
                             draggable: true
                          });
                       }
                    }]
        });
    });
    
    $(".balance").click(function () {
        var buttonId = $(this).prop("id");            
    });
});