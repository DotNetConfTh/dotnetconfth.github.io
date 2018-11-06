using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BoxApi.Models
{
  public class BoxDbContext : DbContext
  {
    public BoxDbContext(DbContextOptions<BoxDbContext> options)
        : base(options)
    {
    }

    public DbSet<BoxApi.Models.Box> Box { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Box>().OwnsOne(x => x.Primary);
      modelBuilder.Entity<Box>().OwnsOne(x => x.Secondary);
      modelBuilder.Entity<Box>().OwnsMany(x => x.ExtraLabels);
    }
  }
}
