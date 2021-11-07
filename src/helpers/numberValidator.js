
  export function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if (!inputtxt) return "Number can't be empty."
  if((inputtxt.match(phoneno)))
        {
      return '';
        }
      else
        {
        
        return "Number is not valid";
        }
}
