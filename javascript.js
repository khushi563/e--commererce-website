function validateForm() 
{
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") 
  {
    alert("Name must be filled out");
    return false;
  }
}
function validateForm1() 
{
  let x = document.forms["myForm1"]["fname1"].value;
  if (x == "") 
  {
    alert("Name must be filled out");
    return false;
  }
}
