using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BoxApi.Models;


[assembly: ApiConventionType(typeof(DefaultApiConventions))]

namespace BoxApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BoxesController : ControllerBase
  {
    private readonly BoxDbContext _context;

    public BoxesController(BoxDbContext context)
    {
      _context = context;
    }

    // GET: api/Boxes
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Box>>> GetBox()
    {
      return await _context.Box.ToListAsync();
    }

    // GET: api/Boxes/5
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    public async Task<ActionResult<Box>> GetBox(string id)
    {
      var box = await _context.Box.FindAsync(id);

      if (box == null)
      {
        return NotFound();
      }

      return box;
    }

    // PUT: api/Boxes/5
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesDefaultResponseType]
    public async Task<IActionResult> PutBox(string id, Box box)
    {
      if (id != box.Id)
      {
        return BadRequest();
      }

      _context.Entry(box).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!BoxExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Boxes
    [HttpPost]
    public async Task<ActionResult<Box>> PostBox(Box box)
    {
      _context.Box.Add(box);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetBox", new { id = box.Id }, box);
    }

    // DELETE: api/Boxes/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Box>> DeleteBox(string id)
    {
      var box = await _context.Box.FindAsync(id);
      if (box == null)
      {
        return NotFound();
      }

      _context.Box.Remove(box);
      await _context.SaveChangesAsync();

      return box;
    }

    private bool BoxExists(string id)
    {
      return _context.Box.Any(e => e.Id == id);
    }
  }
}
