using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ExcelsiorAPI.Models.EF;
namespace ExcelsiorAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CruiseShipController : ControllerBase
  {
    excelsiorDbContext dbContext = new excelsiorDbContext();

    [HttpGet]
    [Route("getLocations")]
    public IActionResult getLocations()
    {
      try
      {
        var locations = (from e in dbContext.CruiseShips
                       select e.Destination).Distinct();
        return Ok(locations);
      }
      catch (Exception ex) { throw new Exception(); }
    }

    [HttpGet]
    [Route("SearchByLocation/{location}")]
    public IActionResult SearchByLocation(string location)
    {
      try
      {
        var cruises = (from e in dbContext.CruiseShips
                       where e.Destination == location
                       select e);
        return Ok(cruises);
      }
      catch (Exception ex) { throw new Exception(); }
    }

  }
}
