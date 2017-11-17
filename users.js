$(document).ready(function () {

    $('#form1').on('submit', function(){
        // alert('Submitted!');
        // $('#submit').click(function(){
        //    var cool = $('input[type="text"][name="first_name"]').val();
           
            $('table').append(`
            <tr>
            <td>${$('input[type="text"][name="first_name"]').val()}</td>
            <td>${$('input[type="text"][name="last_name"]').val()}</td>
            <td>${$('input[type="text"][name="email"]').val()}</td>
            <td>${$('input[type="text"][name="contact"]').val()}</td>
            </tr>`);{
            }
            return false;//somthing to output what you typed in to the table.
        })

    });


    // "<td>" + cool + "</td>"
    // `<td>${cool}</td>`