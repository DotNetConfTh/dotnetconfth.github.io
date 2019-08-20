using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoxApi.Models
{
  //[Owned]
  public class Label
  {
    public int Id { get; set; }

    public string Name { get; set; }
    public string Color { get; set; }
  }
}
