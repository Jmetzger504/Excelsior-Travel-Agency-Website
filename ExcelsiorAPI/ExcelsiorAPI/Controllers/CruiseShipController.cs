using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using ExcelsiorAPI.Models.EF;
using System.Data.Entity;
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
        var cruises = dbContext.CruiseShips
                               .Where(b => b.Destination == location)
                               .Include(b => b.Voyages).FirstOrDefault();

        return Ok(cruises);
        
      }
      catch (Exception ex) { throw new Exception(); }
    }

    [HttpGet]
    [Route("SearchByDate/{start}/{end}")]
    public IActionResult SearchByDate(DateTime start, DateTime end)
    {
      try
      {
        var voyages = (from e in dbContext.Voyages.Include("CruiseShip")
                       where e.Departure > start && e.Departure < end
                       select e);
        
        return Ok(voyages);
      }
      catch (Exception ex) { throw new Exception(); }
    }

  }
}
