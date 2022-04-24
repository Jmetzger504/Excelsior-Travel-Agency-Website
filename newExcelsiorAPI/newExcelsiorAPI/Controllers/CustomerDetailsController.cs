using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using newExcelsiorAPI.Models;
using System.Data.SqlClient;

namespace newExcelsiorAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CustomerDetailsController : ControllerBase
  {
    

    [HttpGet]
    [Route("{email}/{password}")]
    public IActionResult Login(string email,string password)
    {
      bool authenticated;
      Customer customer = new Customer();

      try
      {
        authenticated = customer.attemptLogin(email);
      }
      catch (Exception ex) { throw new Exception(ex.Message); }
      
      if(authenticated)
      {
        customer = customer.login(email,password);
        return Ok(customer);
      }
      return NoContent();
    }

    [HttpPost]
    [Route("Register/")]
    public IActionResult Register(Customer customer)
    {
      bool authenticated;
      try
      {
        authenticated = customer.attemptLogin(customer.Email);
      }
      catch (Exception ex) { throw new Exception(ex.Message); }

      if(!authenticated)
      {
        try {
          customer.register();
          return Created("",customer);
        }
        catch(Exception ex) { throw new Exception(); }

        
      }

      return NoContent();
    }

  }
}
