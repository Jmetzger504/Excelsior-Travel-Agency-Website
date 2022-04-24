namespace newExcelsiorAPI.Models
{
  public class Voyage
  {
    public int Id { get; set; }
    public int? ShipId { get; set; }
    public DateTime? Departure { get; set; }
    public DateTime? Arrival { get; set; }
    public int? RoomsAvailable {get;set;}
    public int? TotalRooms {get; set; }
  }
}
