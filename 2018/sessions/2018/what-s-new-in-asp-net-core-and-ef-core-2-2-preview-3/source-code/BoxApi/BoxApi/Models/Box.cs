using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoxApi.Models
{
  public class Box
  {
    public string Id { get; set; }
    public string Color { get; set; }
    public int Width { get; set; }
    public int Height { get; set; }

    public Label Primary { get; set; }
    public Label Secondary { get; set; }

    public ICollection<Label> ExtraLabels { get; set; }
      = new HashSet<Label>();
  }
}
