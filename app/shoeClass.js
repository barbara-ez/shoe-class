module.exports = function(b,s,a) {
  if (b===null||b==undefined)
    {
      this.brands = "General";
      this.sizes = "7";
    }
    else
    {
    this.brands = b;
    this.sizes = s;
    this.isOn=false;
    this.price=a;
    this.isExclusive=function ()
    {
      if(this.price>40000)
      {
      return true;
      }
      else
      {
        return false;
      }
    };

    this.wearShoe=function ()
    {
      this.isOn=true;
    };
    this.removeShoe=function()
    {
      this.isOn=false;
    }


    }
    
    };

