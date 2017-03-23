function validateForm()
		{
    		var x = document.forms["login"]["text1"].value;
    		var y = document.forms["login"]["text2"].value;
    		if (x == "")
    		{
        		alert("Email or Phone-No must be filled out");
        		return false;
    		}
    		else if(y == "")
    		{
    			alert("Password must be filled out");
    			return false;
    		}
		}