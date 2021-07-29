$(document).ready(function(){
    console.log("javascript")
    $.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",function(res){
       
       
       for(var i=0;i<res.length;i++){
           
   
        var A=$("<td>").html(res[i].id).addClass("column1")

        var B=$("<td>").html(res[i].firstName).addClass("column2")
        var C=$("<td>").html(res[i].lastName).addClass("column3")
        var D=$("<td>").html(res[i].email).addClass("column4")
        var E=$("<td>").html(res[i].phone).addClass("column5")
        var main= $("<tr>").append(A,B,C,D,E).addClass("data-row").attr("id" ,res[i].id)
        $("#some").append(main)
       }
       
        $(".data-row").click(function(){
        var cut=($(this).attr("id"))
        $("#info-content").html(" ");
        $(".data-row").removeClass("active")
        $("#"+cut).addClass("active")
        
       for(var j=0;j<res.length;j++){
        
        
            if(cut==res[j].id){
                console.log(res[j])
                // <div><b>User selected:</b> Marcellin Shrestha</div>
                // <div>
                //     <b>Description: </b>
                //     <textarea cols="50" rows="5" readonly>
                //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                //     </textarea>
                // </div>
                // <div><b>Address:</b> 6480 Nec Ct</div>
                // <div><b>City:</b> Dinwiddie</div>
                // <div><b>State:</b> NV</div>
                // <div><b>Zip:</b> 91295</div>
                var user=$("<div>").html("<b>User selected:</b>"+res[j].firstName+" "+res[j].lastName);
                var description=$("<div>").html("<b>Description: </b>")
                var textarea=$("<textarea cols=50 rows=5 readonly>").html(res[j].description)
                description.append(textarea)
                var address=$("<div>").html("<b>Address:</b>"+res[j].address.streetAddress)
                var city=$("<div>").html("<b>City:</b>"+res[j].address.city)
                var state=$("<div>").html("<b>State:</b>"+res[j].address.state)
                var zip=$("<div>").html("<b>Zip:</b>"+res[j].address.zip)

                $("#info-content").append(user,description,address,city,state,zip);

            }
            else{
                // console.log("hi")
            }
        }
        
       });
       $("#search-box").keyup(function() {
        var value = $(this).val().toLowerCase();
        $("#some tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      
    })
});